import PropTypes from 'prop-types';
import { noop } from 'utils/common/base';

/* switch-props */
export const SwitchProps = {
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    activeColor: PropTypes.string,
    inActiveColor: PropTypes.string,
    activeContent: PropTypes.node,
    inActiveContent: PropTypes.node,
    loading: PropTypes.bool,
}

export const SwitchDefaultProps = {
    onChange: noop,
    disabled: false,
    loading: false,
}