import React, { useState, useRef, useMemo, useCallback, useLayoutEffect } from 'react';
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

/* Destroy dialog function */
export const destroyFns = [];

let mousePosition = null;
const getClickPosition = (e) => {
    mousePosition = {
        x: e.pageX,
        y: e.pageY,
    };
    // Click event occurred within 100ms, then animation display from click position
    // Otherwise, zoom displays
    setTimeout(() => (mousePosition = null), 100);
};

addDomEventListener(document.documentElement, 'click', getClickPosition);

function Dialog(props) {
    const {
        className,
        children,
        title,
        visible,
        bodyStyle,
        destroyOnClose,
        keyboard,
        confirmLoading,
        mask,
        maskClosable,
        maskClassName,
        wrapClassName,
        closable,
        closeIcon,
        footer,
        okText,
        cancelText,
        showOk,
        showCancel,
        okButtonProps,
        cancelButtonProps,
        getContainer,
        center,
        onOk,
        onCancel,
        afterClose,
        ...others
    } = props;
    const { componentCls } = useContextConf(`dialog`);

    // ---------------------------------- class ----------------------------------
    const dialogClassNames = useClassName({
        [componentCls]: true,
        [`${componentCls}--center`]: center,
        [className]: className,
    }, [className, componentCls, center]);

    const wrapperClassNames = useClassName({
        [`${componentCls}__wrapper`]: true,
        [`${componentCls}__wrapper--center`]: center,
        [wrapClassName]: wrapClassName,
    }, [componentCls, wrapClassName, center]);

    // ---------------------------------- logic code ----------------------------------

    const [portalVisible, setPortalVisible] = useState(visible);
    const [wrapperVisible, setWrapperVisible] = useState(visible);

    const wrapperRef = useRef(null);
    const dialogRef = useRef(null);
    const lastFocusNode = useRef(null); // The element of the last focus

    useMemo(() => {
        // Initially hidden, don't create portal, and it's created when opened
        // Initially display, the display is created directly
        if(visible && portalVisible !== visible) setPortalVisible(visible);
    }, [visible, setPortalVisible]);

    useMemo(() => {
        // When the state becomes visible, the wrapper is displayed immediately
        if(visible) setWrapperVisible(visible);
    }, [visible, setWrapperVisible]);

    // Change the entry position of dialog
    // Core: Here you can get the initial stage of animation preparation.
    useLayoutEffect(() => {
        if(visible) {
            const dialogNode = dialogRef.current;

            if(mousePosition) {
                // If you click the button to pop up dialog, change the entry position
                const transformOrigin = {
                    x: mousePosition.x - dialogNode.offsetLeft,
                    y: mousePosition.y - dialogNode.offsetTop,
                }
                dialogNode.style.transformOrigin = `${transformOrigin.x}px ${transformOrigin.y}px`;
            }else {
                // If dialog is popped up manually, zoom enters directly
                dialogNode.style.transformOrigin = '';
            }
        }
    }, [visible]);

    // Dialog focus, storing the last focus element
    useLayoutEffect(() => {
        if(visible) {
            const wrapperNode = wrapperRef.current;
            lastFocusNode.current = document.activeElement;

            // Used to trigger Keydown events
            wrapperNode.focus();
        }
    }, [visible]);

    // Focus on the last dialog when closed
    useDidUpdate(() => {
        if(!visible) {
            const lastOutSideFocusNode = lastFocusNode.current;
            lastOutSideFocusNode && lastOutSideFocusNode.focus && lastOutSideFocusNode.focus();
        }
    }, [visible])

    // ---------------------------------- event ----------------------------------
    const onZoomEnd = useCallback(v => {
        !v && (setWrapperVisible(v), afterClose());
    }, [setWrapperVisible, afterClose]);

    const wrapperKeyDown = keyboard ? useCallback(e => {
        e.keyCode === KeyCode.ESC && onCancel(e);
    }, [onCancel]) : null;

    const maskClick = maskClosable ? useCallback(e => {
        const dialogNode = dialogRef.current;
        !dialogNode.contains(e.target) && onCancel(e);
    }, [onCancel]) : null;

    // ---------------------------------- render mini chunk ----------------------------------
    // dialog-header-closable
    const renderDialogHeaderClose = useMemo(() => {
        if(!closable) return null;

        const _closeIcon = closeIcon || <Icon type={'close'} />;

        return (
            <button className={`${componentCls}__header-btn`} onClick={onCancel}>
                {_closeIcon}
            </button>
        )
    }, [componentCls, closable, closeIcon, onCancel]);

    // dialog-header
    const renderDialogHeader = useMemo(() => {
        if(title === null) return null;

        return (
            <div className={`${componentCls}__header`}>
                <span className={`${componentCls}__title`}>{title}</span>
                {renderDialogHeaderClose}
            </div>
        )
    }, [componentCls, title]);

    // dialog-body
    const renderDialogBody = useMemo(() => {
        return (
            <div className={`${componentCls}__body`} style={bodyStyle}>
                {children}
            </div>
        )
    }, [componentCls, children, bodyStyle]);

    // dialog-footer-buttons-default
    const renderDefaultFooterButtons = useMemo(() => {
        return (
            <>
                <RenderWrapper visible={showCancel} unmountOnExit>
                    <Button onClick={onCancel} {...cancelButtonProps}>{cancelText}</Button>
                </RenderWrapper>
                <RenderWrapper visible={showOk} unmountOnExit>
                    <Button type='primary' loading={confirmLoading} onClick={onOk} {...okButtonProps}>{okText}</Button>
                </RenderWrapper>
            </>
        )
    }, [onOk, onCancel, confirmLoading, okButtonProps, cancelButtonProps, showOk, showCancel, okText, cancelText]);

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
        if(!mask) return null;

        return (
            <FadeTransition visible={visible} appear unmountOnExit={destroyOnClose}>
                <Mask className={maskClassName} />
            </FadeTransition>
        )
    }, [mask, maskClassName, visible, destroyOnClose]);

    // render-dialog
    const renderDialog = useMemo(() => {
        return (
            <div key={'dialog'} role="dialog" className={dialogClassNames} ref={dialogRef} {...others}>
                {renderDialogHeader}
                {renderDialogBody}
                {renderDialogFooter}
            </div>
        )
    }, [dialogClassNames, renderDialogHeader, renderDialogBody, renderDialogFooter, others]);

    // render-dialog-wrapper
    const renderWrapper = useMemo(() => {
        return (
            <RenderWrapper visible={wrapperVisible} unmountOnExit={destroyOnClose}>
                <div tabIndex={-1} ref={wrapperRef} className={wrapperClassNames} onKeyDown={wrapperKeyDown} onClick={maskClick}>
                    <ZoomTransition visible={visible} appear visibleChange={onZoomEnd}>
                        {renderDialog}
                    </ZoomTransition>
                </div>
            </RenderWrapper>
        )
    }, [wrapperClassNames, wrapperVisible, destroyOnClose, wrapperKeyDown, maskClick, visible, onZoomEnd, renderDialog]);

    // ---------------------------------- render ----------------------------------
    return (
        <Portal visible={portalVisible} getContainer={getContainer}>
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