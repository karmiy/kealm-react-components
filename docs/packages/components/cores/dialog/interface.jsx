import PropTypes from 'prop-types';

const noop = () => {};

/* dialog-props */
export const DialogProps = {
    className: PropTypes.string,
    visible: PropTypes.bool,
    title: PropTypes.node,
    destroyOnClose: PropTypes.bool,
    keyboard: PropTypes.bool,
    confirmLoading: PropTypes.bool,
    maskClosable: PropTypes.bool,
    footer: PropTypes.node,
    okText: PropTypes.string,
    cancelText: PropTypes.string,
    showOk: PropTypes.bool,
    showCancel: PropTypes.bool,
    okButtonProps: PropTypes.object,
    cancelButtonProps: PropTypes.object,
    getContainer: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
    afterClose: PropTypes.func,
}

export const DialogDefaultProps = {
    visible: false,
    title: '提示',
    destroyOnClose: false,
    keyboard: true,
    confirmLoading: false,
    maskClosable: true,
    okText: '确定',
    cancelText: '取消',
    showOk: true,
    showCancel: true,
    onOk: noop,
    onCancel: noop,
    afterClose: noop,
}

/* confirm-props */
export const ConfirmProps = {
    ...DialogProps,
    content: PropTypes.node,
    icon: PropTypes.node,
    type: PropTypes.string,
    closeAfterOk: PropTypes.bool,
    close: PropTypes.func,
    afterOk: PropTypes.func,
}

export const ConfirmDefaultProps = {
    ...DialogDefaultProps,
    closeAfterOk: true,
    close: noop,
    afterOk: noop,
}