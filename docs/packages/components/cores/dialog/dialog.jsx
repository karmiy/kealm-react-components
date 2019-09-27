import React from 'react';
import { DialogProps, DialogDefaultProps } from './interface';
import { Portal } from '../../common';
import { useContextConf, useClassName } from 'hooks';

function Dialog(props) {
    const {
        className,
        children,
        visible,
        ...others
    } = props;
    const { componentCls } = useContextConf(`dialog`);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [className]: className,
    }, [className, componentCls]);

    // ---------------------------------- render ----------------------------------
    return (
        <Portal visible={visible}>{children}</Portal>
    );
}

Dialog.propTypes = DialogProps;
Dialog.defaultProps = DialogDefaultProps;

export default Dialog;