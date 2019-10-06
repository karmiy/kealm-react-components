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
    okButtonProps: PropTypes.object,
    cancelButtonProps: PropTypes.object,
    onOk: PropTypes.func,
    onCancel: PropTypes.func
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
    onOk: noop,
    onCancel: noop,
}