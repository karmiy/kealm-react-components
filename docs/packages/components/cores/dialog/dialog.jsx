import React, { useState, useRef, useMemo, useCallback } from 'react';
import { DialogProps, DialogDefaultProps } from './interface';
import Button from '../button';
import Icon from '../icon';
import { Portal } from '../../common';
import { ZoomTransition, FadeTransition } from '../transition';
import { RenderWrapper } from '../../common';
import Mask from './mask';
import { useContextConf, useClassName, useDidUpdate } from 'hooks';
import addDomEventListener from 'add-dom-event-listener';
import KeyCode from 'utils/common/keyCode';

let mousePosition = null;
const getClickPosition = (e) => {
    mousePosition = {
        x: e.pageX,
        y: e.pageY,
    };
    // 100ms 内发生过点击事件，则从点击位置动画展示
    // 否则直接 zoom 展示
    // 这样可以兼容非点击方式展开
    setTimeout(() => (mousePosition = null), 100);
};

addDomEventListener(document.documentElement, 'click', getClickPosition);

function Dialog(props) {
    const {
        className,
        children,
        title,
        visible,
        destroyOnClose,
        keyboard,
        confirmLoading,
        maskClosable,
        footer,
        okText,
        cancelText,
        okButtonProps,
        cancelButtonProps,
        onOk,
        onCancel,
        ...others
    } = props;
    const { componentCls } = useContextConf(`dialog`);

    // ---------------------------------- class ----------------------------------
    const dialogClassNames = useClassName({
        [componentCls]: true,
        [className]: className,
    }, [className, componentCls]);

    // ---------------------------------- logic code ----------------------------------

    const [portalVisible, setPortalVisible] = useState(visible);
    const [wrapperVisible, setWrapperVisible] = useState(visible);

    const wrapperRef = useRef(null);
    const dialogRef = useRef(null);

    useMemo(() => {
        // 初始是隐藏，先不创建portal，打开后创建
        // 初始是显示，按初始直接创建
        if(visible && portalVisible !== visible) setPortalVisible(visible);
    }, [visible, setPortalVisible]);

    useMemo(() => {
        // 状态变为可见时，立即显示wrapper
        if(visible) setWrapperVisible(visible);
    }, [visible, setWrapperVisible]);

    // 改变dialog入场位置
    useDidUpdate(() => {
        if(visible) {
            const wrapperNode = wrapperRef.current;
            const dialogNode = dialogRef.current;
            // wrapper聚焦，使之可以触发keydown事件
            keyboard && wrapperNode.focus();

            // Did update可以拿到还未缩小的dialog
            if(mousePosition) {
                // 如果是通过点击弹框，改变入场位置
                const transformOrigin = {
                    x: mousePosition.x - dialogNode.offsetLeft,
                    y: mousePosition.y - dialogNode.offsetTop,
                }
                dialogNode.style.transformOrigin = `${transformOrigin.x}px ${transformOrigin.y}px`;
            }else {
                // 如果是手动弹框，直接zoom入场
                dialogNode.style.transformOrigin = '';
            }
        }
    }, [visible, keyboard]);

    // ---------------------------------- event ----------------------------------
    const onZoomEnd = useCallback(v => {
        !v && setWrapperVisible(v);
    }, [setWrapperVisible]);

    const wrapperKeyDown = keyboard ? useCallback(e => {
        e.keyCode === KeyCode.ESC && onCancel(e);
    }, [onCancel]) : null;

    const maskClick = maskClosable ? useCallback(e => {
        const dialogNode = dialogRef.current;
        !dialogNode.contains(e.target) && onCancel(e);
    }, [onCancel]) : null;

    // ---------------------------------- render mini chunk ----------------------------------
    // dialog-header
    const renderDialogHeader = useMemo(() => {
        return (
            <div className={`${componentCls}__header`}>
                <span className={`${componentCls}__title`}>{title}</span>
                <button className={`${componentCls}__header-btn`} onClick={onCancel}>
                    <Icon type={'close'} />
                </button>
            </div>
        )
    }, [componentCls, title, onCancel]);

    // dialog-body
    const renderDialogBody = useMemo(() => {
        return (
            <div className={`${componentCls}__body`}>
                {children}
            </div>
        )
    }, [componentCls, children]);

    // dialog-footer-buttons-default
    const renderDefaultFooterButtons = useMemo(() => {
        return (
            <>
                <Button onClick={onCancel} {...cancelButtonProps}>{cancelText}</Button>
                <Button type='primary' loading={confirmLoading} onClick={onOk} {...okButtonProps}>{okText}</Button>
            </>
        )
    }, [onOk, onCancel, confirmLoading, okButtonProps, cancelButtonProps, okText, cancelText]);

    // dialog-footer
    const renderDialogFooter = useMemo(() => {
        if(footer === null) return null;

        return (
            <div className={`${componentCls}__footer`}>
                {footer || renderDefaultFooterButtons}
            </div>
        )
    }, [componentCls, footer, renderDefaultFooterButtons]);

    // ---------------------------------- render chunk ----------------------------------
    // render-mask
    const renderMask = useMemo(() => {
        return (
            <FadeTransition visible={visible} appear unmountOnExit={destroyOnClose}>
                <Mask />
            </FadeTransition>
        )
    }, [visible, destroyOnClose]);

    // render-dialog
    const renderDialog = useMemo(() => {
        return (
            <div role="dialog" className={dialogClassNames} ref={dialogRef}>
                {renderDialogHeader}
                {renderDialogBody}
                {renderDialogFooter}
            </div>
        )
    }, [dialogClassNames, renderDialogHeader, renderDialogBody, renderDialogFooter]);

    // render-dialog-wrapper
    const renderWrapper = useMemo(() => {
        return (
            <RenderWrapper visible={wrapperVisible} unmountOnExit={destroyOnClose}>
                <div tabIndex={-1} ref={wrapperRef} className={`${componentCls}__wrapper`} onKeyDown={wrapperKeyDown} onClick={maskClick}>
                    <ZoomTransition visible={visible} appear visibleChange={onZoomEnd}>
                        {renderDialog}
                    </ZoomTransition>
                </div>
            </RenderWrapper>
        )
    }, [componentCls, wrapperVisible, destroyOnClose, wrapperKeyDown, maskClick, visible, onZoomEnd, renderDialog]);

    // ---------------------------------- render ----------------------------------
    return (
        <Portal visible={portalVisible}>
            <div>
                {renderMask}
                {renderWrapper}
            </div>
        </Portal>
    )
}

Dialog.propTypes = DialogProps;
Dialog.defaultProps = DialogDefaultProps;

export default Dialog;