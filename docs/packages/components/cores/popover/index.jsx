import React, { useState, cloneElement, useEffect, useRef, useCallback, useMemo } from 'react';
import { useContextConf, useClassName, useTrigger, useTimeout } from 'hooks';
import { PopoverProps, PopoverDefaultProps } from './interface';
import { Popper, Portal, DomWrapper } from '../../common';
import { FadeTransition } from '../transition';
import { filterEmptyProp } from 'utils/common/object';
import addDomEventListener from 'add-dom-event-listener';

function Popover(props) {
    const {componentCls} = useContextConf('popover');
    const {
        children,
        className,
        defaultVisible,
        visible,
        onVisibleChange,
        trigger,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        ['km-popper']: true,
        [`${componentCls}--plain`]: true,
        [className]: className,
    }, [className, componentCls]);

    // ---------------------------------- logic code ----------------------------------
    // const [isVisible, setIsVisible] = useState(false);
    const { isVisible, setIsVisible, isMount } = useTrigger(defaultVisible, visible, onVisibleChange, trigger);
    // const visibleOnce = useCorrectOnce(isVisible);
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

        setTimer(() => setIsVisible(true), 0, 'popper');
    }, [children]) : null;

    const onReferenceMouseLeave = trigger === 'hover' ? useCallback((...rest) => {
        const nativeMouseLeave = children.props.onMouseLeave;
        nativeMouseLeave && nativeMouseLeave(...rest);

        setTimer(() => setIsVisible(false), 200, 'popper');
    }, [children]) : null;

    const onPopperMouseEnter = trigger === 'hover' ? useCallback((...rest) => {
        const nativeMouseEnter = others.onMouseEnter;
        nativeMouseEnter && nativeMouseEnter(...rest);

        setTimer(() => setIsVisible(true), 0, 'popper');
    }, [others]) : null;

    const onPopperMouseLeave = trigger === 'hover' ? useCallback((...rest) => {
        const nativeMouseLeave = others.onMouseLeave;
        nativeMouseLeave && nativeMouseLeave(...rest);

        setTimer(() => setIsVisible(false), 200, 'popper');
    }, [others]) : null;

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
            <FadeTransition visible={isVisible} appear>
                <Portal>
                    <div
                        ref={popperRef}
                        role={'tooltip'}
                        tabIndex={0}
                        className={classNames}
                        onMouseEnter={onPopperMouseEnter}
                        onMouseLeave={onPopperMouseLeave}
                        {...others}
                    >
                        <div className={`${componentCls}__title`}>
                            标题
                        </div>
                        这是一段内容,这是一段内容,这是一段内容,这是一段内容。
                        <div x-arrow={'true'} className={'popper__arrow'} />
                    </div>
                </Portal>
            </FadeTransition>
        )
    }, [isMount, isVisible, componentCls, classNames, others, onPopperMouseEnter, onPopperMouseLeave]);

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
            placement={'top'}
            modifiers={{
                preventOverflow: {
                    priority: ['left', 'right']
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