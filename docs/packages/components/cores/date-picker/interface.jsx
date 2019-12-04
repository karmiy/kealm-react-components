import PropTypes from 'prop-types';
import { dropdownCommonProps, dropdownCommonDefaultProps } from '../select/interface';
import { noop, emptyArr } from 'utils/common/base';

/* date-picker-props */
export const DatePickerProps = {
    ...dropdownCommonProps, // defaultVisible ...
    defaultPickerValue: PropTypes.instanceOf(Date),
    defaultValue: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,

}

export const DatePickerDefaultProps = {
    ...dropdownCommonDefaultProps,
    onChange: noop,
}