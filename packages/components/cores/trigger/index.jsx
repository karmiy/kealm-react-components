import React, { cloneElement, useEffect, useRef, useCallback, useMemo } from 'react';
import { useTrigger, useTimeout, useContextConf, useClassName } from 'hooks';
import { TriggerProps, TriggerDefaultProps } from './interface';
import { Popper, Portal, DomWrapper, RenderWrapper } from '../../common';
import { FadeTransition } from '../transition';
import { filterEmptyProp } from 'utils/common/object';
import KeyCode from 'utils/common/keyCode';
import addDomEventListener from 'add-dom-event-listener';

const HorizontalPriority = ['left', 'right'];
const VerticalPriority = ['top', 'bottom'];

function withPriority(placement) {
    if(placement.includes('top') || placement.includes('bottom'))
        return HorizontalPriority;
    return VerticalPriority;
}

// store listener ref of all trigger
const listenerSet = new Set();

// Click outside to close
addDomEventListener(document, 'click', function (e) {
    const toClose = [];
    for(let listenerRef of listenerSet.keys()) {
        const { isVisible, popperRef, referenceRef, setIsVisible } = listenerRef.current;
        // if(!isVisible || trigger === 'manual') continue;
        if(!isVisible) continue;

        const popperEl = popperRef.current || {contains: () => true};
        const referenceEl = referenceRef.current ? referenceRef.current.el : {contains: () => true};
        !popperEl.contains(e.target) && !referenceEl.contains(e.target) && toClose.push(setIsVisible);
    }
    // It needs to be saved first and then operated together.
    // Otherwise, the user's opening operation in the previous window will occur, which will affect the current display state of the next window
    // Example: DatePicker demo: Custom date range selection
    toClose.forEach(setIsVisible => setIsVisible(false));
}, false);

// ESC to close
addDomEventListener(document, 'keydown', function (e) {
    for(let listenerRef of listenerSet.keys()) {
        const { isVisible, setIsVisible } = listenerRef.current;
        // if (!isVisible || trigger === 'manual') continue;
        if (!isVisible) continue;

        e.keyCode === KeyCode.ESC && setIsVisible(false);
    }
}, false);

function Trigger(props) {
    const { componentCls } = useContextConf('popper');

    const {
        children,
        className,
        defaultVisible,
        visible,
        onVisibleChange,
        trigger,
        popup,
        disabled,
        width,
        showArrow,
        openDelay,
        closeDelay,
        transitionName,
        placement,
        offset,
        positionFixed,
        eventsEnabled,
        removeOnDestroy,
        modifiers,
        onCreate,
        onUpdate,
        style, // Default style content unchanged
        ...others // Default others content unchanged
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [className]: className,
    }, [className]);

    // ---------------------------------- style ----------------------------------
    const popperStyles = useMemo(() => {
        return {
            width: width ? `${width}px` : null,
            ...style,
        }
    }, [width]);

    // ---------------------------------- logic code ----------------------------------
    const { isVisible, setIsVisible, isMount } = useTrigger(defaultVisible, visible, onVisibleChange, trigger, disabled);
    const instanceRef = useRef(null);
    const referenceRef = useRef(null);
    const popperRef = useRef(null);
    const [setTimer] = useTimeout(true);
    // Use to store useful data for document listener
    const listenerRef = useRef({
        popperRef,
        referenceRef,
        setIsVisible,
    });

    useEffect(() => {
        const instance = instanceRef.current;
        isVisible && instance && instance.scheduleUpdate();
    }, [isVisible, popup]);

    useEffect(() => {
        listenerRef.current.isVisible = isVisible;
        // listenerRef.current.trigger = trigger;
    }, [isVisible]);

    // Store listenerRef for document listener
    useEffect(() => {
        listenerSet.add(listenerRef);
        return () => {
            listenerSet.delete(listenerRef);
        }
    }, []);

    // Optimize: cancel events when it close
    /*useDidUpdate(() => {
        const instance = instanceRef.current;
        !isVisible ?
            instance && instance.disableEventListeners()
            :
            instance && instance.enableEventListeners ();
    }, [isVisible]);*/

    // Props of popperJS
    const popperProps = {
        placement,
        positionFixed,
        eventsEnabled,
        removeOnDestroy,
        modifiers: {
            preventOverflow: {
                priority: withPriority(placement),
            },
            offset: {
                offset,
            },
            ...modifiers,
        },
        onCreate: data => {
            onCreate(data);
            instanceRef.current = data.instance;
        },
        onUpdate,
    }

    // ---------------------------------- event ----------------------------------

    const onClick = trigger === 'click' || trigger === 'manual' ? useCallback((...rest) => {
        const nativeClick = children.props.onClick;
        nativeClick && nativeClick(...rest);
        setIsVisible(v => !v);
    }, [children]) : null;

    const onFocus = trigger === 'focus' ? useCallback((...rest) => {
        const nativeFocus = children.props.onFocus;
        nativeFocus && nativeFocus(...rest);
        setIsVisible(true);
    }, [children]) : null;

    const onBlur = trigger === 'focus' ? useCallback((...rest) => {
        const nativeBlur = children.props.onBlur;
        nativeBlur && nativeBlur(...rest);
        setIsVisible(false);
    }, [children]) : null;

    const onReferenceMouseEnter = trigger === 'hover' ? useCallback((...rest) => {
        const nativeMouseEnter = children.props.onMouseEnter;
        nativeMouseEnter && nativeMouseEnter(...rest);

        setTimer(() => setIsVisible(true), openDelay, 'popper');
    }, [children, openDelay]) : null;

    const onReferenceMouseLeave = trigger === 'hover' ? useCallback((...rest) => {
        const nativeMouseLeave = children.props.onMouseLeave;
        nativeMouseLeave && nativeMouseLeave(...rest);

        setTimer(() => setIsVisible(false), closeDelay, 'popper');
    }, [children, closeDelay]) : null;

    const onPopperMouseEnter = trigger === 'hover' ? useCallback((...rest) => {
        const nativeMouseEnter = others.onMouseEnter;
        nativeMouseEnter && nativeMouseEnter(...rest);

        setTimer(() => setIsVisible(true), openDelay, 'popper');
    }, [openDelay]) : null;

    const onPopperMouseLeave = trigger === 'hover' ? useCallback((...rest) => {
        const nativeMouseLeave = others.onMouseLeave;
        nativeMouseLeave && nativeMouseLeave(...rest);

        setTimer(() => setIsVisible(false), closeDelay, 'popper');
    }, [closeDelay]) : null;

    // Optimize: cancel events when it close
    const onFadeChange = useCallback(v => {
        const instance = instanceRef.current;
        !v ?
            instance && instance.disableEventListeners()
            :
            instance && instance.enableEventListeners ();
    }, []);

    /*useEffect(() => {
        // Click outside to close
        const handlerClick = addDomEventListener(document, 'click', function (e) {
            if(!isVisible || trigger === 'manual') return;

            const popperEl = popperRef.current || {contains: () => true};
            const referenceEl = referenceRef.current ? referenceRef.current.el : {contains: () => true};
            !popperEl.contains(e.target) && !referenceEl.contains(e.target) && setIsVisible(false);
        }, false);

        // ESC to close
        const handlerKeydown = addDomEventListener(document, 'keydown', function (e) {
            if(!isVisible || trigger === 'manual') return;

            setIsVisible(false);
        })
        return () => {
            handlerClick.remove();
            handlerKeydown.remove();
        }
    }, [isVisible, trigger]);*/

    // ---------------------------------- render chunk ----------------------------------
    const renderArrow = useMemo(() => {
        return (
            <RenderWrapper visible={!!showArrow} unmountOnExit={true}>
                <div x-arrow={'true'} className={'popper__arrow'} />
            </RenderWrapper>
        )
    }, [showArrow]);

    // ---------------------------------- render ----------------------------------

    const popper = useMemo(() => {
        if(!isMount) return null;

        return (
            <FadeTransition visible={isVisible} visibleChange={onFadeChange} appear transitionName={transitionName}>
                <Portal>
                    <div
                        ref={popperRef}
                        role={'tooltip'}
                        tabIndex={0}
                        className={classNames}
                        onMouseEnter={onPopperMouseEnter}
                        onMouseLeave={onPopperMouseLeave}
                        style={popperStyles}
                        {...others}
                    >
                        {popup}
                        {renderArrow}
                    </div>
                </Portal>
            </FadeTransition>
        )
    }, [isMount, isVisible, transitionName, classNames, popup, popperStyles, onPopperMouseEnter, onPopperMouseLeave]);

    const reference = cloneElement(children, filterEmptyProp({
        onClick,
        onFocus,
        onBlur,
        onMouseEnter: onReferenceMouseEnter,
        onMouseLeave: onReferenceMouseLeave,
    }));

    // ---------------------------------- render ----------------------------------
    return (
        <Popper
            popper={popper}
            reference={reference}
            {...popperProps}
        >
            <DomWrapper ref={referenceRef}>
                {reference}
            </DomWrapper>
        </Popper>
    );
};

Trigger.propTypes = TriggerProps;
Trigger.defaultProps = TriggerDefaultProps;

export default Trigger;