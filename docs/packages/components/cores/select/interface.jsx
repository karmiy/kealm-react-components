import PropTypes from 'prop-types';
import { CommonProps, CommonDefaultProps } from '../trigger/interface';
import { omit } from 'utils/common/object';

const noop = () => {};
const VALUE_TYPE = PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]);

/* select-props */
export const SelectProps = {
    ...omit(CommonProps, ['trigger']),
    children: PropTypes.node,
    defaultValue: VALUE_TYPE,
    value: VALUE_TYPE,
    onChange: PropTypes.func,
}

export const SelectDefaultProps = {
    ...omit(CommonDefaultProps, ['trigger']),
    placement: 'bottom-start',
    showArrow: false,
    transitionName: 'km-zoom-top',
    onChange: noop,
}

/* option-props */
export const OptionProps = {
    className: PropTypes.string,
    value: VALUE_TYPE,
    selectedValue: VALUE_TYPE,
    children: PropTypes.string.isRequired,
}

export const OptionDefaultProps = {
}