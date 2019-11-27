import PropTypes from 'prop-types';
import { dropdownCommonProps, dropdownCommonDefaultProps } from '../select/interface';

/* time-picker-props */
export const TimePickerProps = {
    ...dropdownCommonProps,
    children: PropTypes.node,
    selectorClassName: PropTypes.string,
    selectorStyle: PropTypes.object,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
}

export const TimePickerDefaultProps = {
    ...dropdownCommonDefaultProps,
    placement: 'bottom-start',
    showArrow: false,
    transitionName: 'km-zoom-top',
    placeholder: '请选择时间',
    disabled: false,
}