import PropTypes from 'prop-types';
import { noop } from 'utils/common/base';

/* tag-props */
export const TagProps = {
    className: PropTypes.string,
    type: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
    color: PropTypes.string,
    font: PropTypes.string,
    closable: PropTypes.bool,
    effect: PropTypes.string,
    size: PropTypes.oneOf(['large', 'small']),
    onClose: PropTypes.func,
}

export const TagDefaultProps = {
    closable: false,
    effect: 'light',
    onClose: noop,
}