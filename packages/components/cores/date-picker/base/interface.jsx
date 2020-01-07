import PropTypes from 'prop-types';
import { dropdownCommonProps, dropdownCommonDefaultProps } from '../../select/interface';
import { noop } from 'utils/common/base';

/* picker-props */
export const PickerProps = {
    ...dropdownCommonProps, // defaultVisible ...
    pickerValue: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    allowClear: PropTypes.bool,
    onClear: PropTypes.func,
    size: PropTypes.oneOf(['large', 'small']),
    isRange: PropTypes.bool,
    startPlaceholder: PropTypes.string,
    endPlaceholder: PropTypes.string,
    suffixIcon: PropTypes.node,
    separator: PropTypes.node,
}

export const PickerDefaultProps = {
    ...dropdownCommonDefaultProps,
    pickerValue: '',
    disabled: false,
    placeholder: '请选择',
    allowClear: false,
    onClear: noop,
    isRange: false,
    separator: '~'
}