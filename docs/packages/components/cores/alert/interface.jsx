import PropTypes from 'prop-types';
import { noop } from 'utils/common/base';

/* alert-props */
export const AlertProps = {
    className: PropTypes.string,
    type: PropTypes.oneOf(['success', 'warning', 'info', 'error']), // 类型
    effect: PropTypes.oneOf(['light', 'dark']),
    title: PropTypes.node,
    description: PropTypes.node,
    closable: PropTypes.bool,
    onClose: PropTypes.func,
    afterClose: PropTypes.func,
    closeText: PropTypes.node,
    showIcon: PropTypes.bool,
}

export const AlertDefaultProps = {
    type: 'info',
    effect: 'light',
    closable: false,
    onClose: noop,
    afterClose: noop,
    showIcon: false,
}