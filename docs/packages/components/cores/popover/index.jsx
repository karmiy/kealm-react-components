import React, { cloneElement, useEffect, useRef, useCallback, useMemo } from 'react';
import { useContextConf, useClassName, useTrigger, useTimeout } from 'hooks';
import { PopoverProps, PopoverDefaultProps } from './interface';
import { Popper, Portal, DomWrapper, RenderWrapper } from '../../common';
import { FadeTransition } from '../transition';
import { filterEmptyProp } from 'utils/common/object';
import addDomEventListener from 'add-dom-event-listener';

const HorizontalPriority = ['left', 'right'];
const VerticalPriority = ['top', 'bottom'];

function withPriority(placement) {
    if(placement.includes('top') || placement.includes('bottom'))
        return HorizontalPriority;
    return VerticalPriority;
}

function Popover(props) {
    const {componentCls} = useContextConf('popover');
    const {
        children,
        className,
        defaultVisible,
        visible,
        onVisibleChange,
        trigger,
        title,
        content,
        disabled,
        width,
        placement,
        offset,
        showArrow,
        openDelay,
        closeDelay,
        style, // Default style content unchanged
        ...others // Default others content unchanged
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        ['km-popper']: true,
        [`${componentCls}--plain`]: true,
        [className]: className,
    }, [className, componentCls]);

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

    useEffect(() => {
        const instance = instanceRef.current;
        isVisible && instance && instance.scheduleUpdate();
    }, [isVisible]);

    // ---------------------------------- event ----------------------------------

    const onClick = trigger === 'click' ? useCallback((...rest) => {
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

    useEffect(() => {
        const handler = addDomEventListener(document, 'click', function (e) {
            if(!isVisible || trigger === 'manual') return;

            const popperEl = popperRef.current || {contains: () => true};
            const referenceEl = referenceRef.current ? referenceRef.current.el : {contains: () => true};
            !popperEl.contains(e.target) && !referenceEl.contains(e.target) && setIsVisible(false);
        }, false);
        return () => {
            handler.remove();
        }
    }, [isVisible, trigger]);

    // ---------------------------------- render ----------------------------------
    const popper = useMemo(() => {
        if(!isMount) return null;

        return (
            <FadeTransition visible={isVisible} appear transitionName={'km-popper'}>
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
                        <RenderWrapper visible={!!title} unmountOnExit={true}>
                            <div className={`${componentCls}__title`}>
                                {title}
                            </div>
                        </RenderWrapper>
                        {content}
                        <RenderWrapper visible={!!showArrow} unmountOnExit={true}>
                            <div x-arrow={'true'} className={'popper__arrow'} />
                        </RenderWrapper>
                    </div>
                </Portal>
            </FadeTransition>
        )
    }, [isMount, isVisible, componentCls, classNames, title, content, showArrow, popperStyles, onPopperMouseEnter, onPopperMouseLeave]);

    const reference = cloneElement(children, filterEmptyProp({
        onClick,
        onFocus,
        onBlur,
        onMouseEnter: onReferenceMouseEnter,
        onMouseLeave: onReferenceMouseLeave,
    }));

    return (
        <Popper
            popper={popper}
            reference={reference}
            placement={placement}
            modifiers={{
                preventOverflow: {
                    priority: withPriority(placement),
                },
                offset: {
                    offset,
                }
            }}
            onCreate={data => instanceRef.current = data.instance}
        >
            <DomWrapper ref={referenceRef}>
                {reference}
            </DomWrapper>
        </Popper>
    );
};

Popover.propTypes = PopoverProps;
Popover.defaultProps = PopoverDefaultProps;

export default Popover;