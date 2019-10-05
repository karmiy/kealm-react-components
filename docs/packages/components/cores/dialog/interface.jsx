import PropTypes from 'prop-types';

const noop = () => {};

/* dialog-props */
export const DialogProps = {
    className: PropTypes.string,
    visible: PropTypes.bool,
    destroyOnClose: PropTypes.bool,
    keyboard: PropTypes.bool,
    confirmLoading: PropTypes.bool,
    onOk: PropTypes.func,
    onCancel: PropTypes.func
}

export const DialogDefaultProps = {
    visible: false,
    destroyOnClose: false,
    keyboard: true,
    confirmLoading: false,
    onOk: noop,
    onCancel: noop,
}