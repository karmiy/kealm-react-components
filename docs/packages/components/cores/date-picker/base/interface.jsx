import PropTypes from 'prop-types';
import { dropdownCommonProps, dropdownCommonDefaultProps } from '../../select/interface';
import { noop } from 'utils/common/base';

/* picker-props */
export const PickerProps = {
    ...dropdownCommonProps, // defaultVisible ...
    pickerValue: PropTypes.string,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    allowClear: PropTypes.bool,
    onClear: PropTypes.func,
}

export const PickerDefaultProps = {
    ...dropdownCommonDefaultProps,
    pickerValue: '',
    disabled: false,
    placeholder: '请选择',
    allowClear: false,
    onClear: noop,
}