import React, { useState, cloneElement, useLayoutEffect, useRef, useCallback, useMemo } from 'react';
import { useContextConf, useClassName, useCorrectOnce } from 'hooks';
import { PopoverProps, PopoverDefaultProps } from './interface';
import { Popper, Portal, RenderOnce } from '../../common';
import { FadeTransition } from '../transition';
import { filterEmptyProp } from 'utils/common/object';

function Popover(props) {
    const {componentCls} = useContextConf('popover');
    const {
        children,
        className,
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
    const [isVisible, setIsVisible] = useState(false);
    const visibleOnce = useCorrectOnce(isVisible);
    const popperRef = useRef(null);

    useLayoutEffect(() => {
        if(isVisible) {
            const popperComp = popperRef.current;
            !popperComp.instance && popperComp.createPopper();
            popperComp.instance.scheduleUpdate();
        }
    }, [isVisible]);

    // ---------------------------------- event ----------------------------------
    const onCreate = useCallback(() => {
    }, [trigger]);

    const onClick = trigger === 'click' ? useCallback((...rest) => {
        const nativeClick = children.props.onClick;
        nativeClick && nativeClick(...rest);
        setIsVisible(v => !v);
    }, [children]) : null;

    const onFocus = trigger === 'focus' ? useCallback((...rest) => {
        const nativeFocus = children.props.onFocus;
        nativeFocus && nativeFocus(...rest);
        setIsVisible(true);
        // console.log(popperRef.current);
    }, [children]) : null;

    const onBlur = trigger === 'focus' ? useCallback((...rest) => {
        const nativeBlur = children.props.onBlur;
        nativeBlur && nativeBlur(...rest);
        setIsVisible(false);
    }, [children]) : null;

    // ---------------------------------- render ----------------------------------
    const popper = useMemo(() => {
        if(!visibleOnce) return null;

        return (
            <FadeTransition visible={isVisible} appear>
                <Portal>
                    <div role={'tooltip'} tabIndex={0} className={classNames} {...others}>
                        <div className={`${componentCls}__title`}>
                            标题
                        </div>
                        这是一段内容,这是一段内容,这是一段内容,这是一段内容。
                        <div x-arrow={'true'} className={'popper__arrow'} />
                    </div>
                </Portal>
            </FadeTransition>
        )
    }, [isVisible, componentCls, classNames, others]);

    const reference = cloneElement(children, filterEmptyProp({
        onClick,
        onFocus,
        onBlur,
    }));

    return (
        <Popper
            ref={popperRef}
            popper={popper}
            reference={reference}
            placement={'top'}
            onCreate={onCreate}
            modifiers={{
                preventOverflow: {
                    priority: ['left', 'right']
                }
            }}
        />
    );
};

Popover.propTypes = PopoverProps;
Popover.defaultProps = PopoverDefaultProps;

export default Popover;