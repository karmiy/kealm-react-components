import PropTypes from 'prop-types';
import { CommonProps, CommonDefaultProps } from '../trigger/interface';
import { omit } from 'utils/common/object';

const noop = () => {};

/* select-props */
export const SelectProps = {
    ...omit(CommonProps, ['trigger']),
    children: PropTypes.node,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
}

export const SelectDefaultProps = {
    ...omit(CommonDefaultProps, ['trigger']),
    placement: 'bottom-start',
    showArrow: false,
    transitionName: 'km-zoom-top',
    onChange: noop,
}