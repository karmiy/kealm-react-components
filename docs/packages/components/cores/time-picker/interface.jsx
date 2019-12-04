import PropTypes from 'prop-types';
import { dropdownCommonProps, dropdownCommonDefaultProps } from '../select/interface';
import { noop, emptyArr } from 'utils/common/base';

const disabledOptions = () => [];

/* time-picker-props */
export const TimePickerProps = {
    ...dropdownCommonProps, // defaultVisible ...
    defaultOpenValue: PropTypes.instanceOf(Date),
    defaultValue: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    allowClear: PropTypes.bool,
    size: PropTypes.oneOf(['large', 'small']),
    format: PropTypes.string,
    hourStep: PropTypes.number,
    minuteStep: PropTypes.number,
    secondStep: PropTypes.number,
    disabledHours: PropTypes.func,
    disabledMinutes: PropTypes.func,
    disabledSeconds: PropTypes.func,
    hideDisabledOptions: PropTypes.bool,
    addon: PropTypes.func,
}

export const TimePickerDefaultProps = {
    ...dropdownCommonDefaultProps,
    onChange: noop,
    disabled: false,
    placeholder: '请选择时间',
    allowClear: false,
    format: 'HH:mm:ss',
    hourStep: 1,
    minuteStep: 1,
    secondStep: 1,
    disabledHours: disabledOptions,
    disabledMinutes: disabledOptions,
    disabledSeconds: disabledOptions,
    hideDisabledOptions: false,
}

const HeaderComboboxCommonProps = {
    prefix: PropTypes.string,
    defaultOpenValue: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    format: PropTypes.string,
    isAM: PropTypes.bool,
    visible: PropTypes.bool,
    hourStep: PropTypes.number,
    minuteStep: PropTypes.number,
    secondStep: PropTypes.number,
    disabledHours: PropTypes.array,
    disabledMinutes: PropTypes.array,
    disabledSeconds: PropTypes.array,
}

const HeaderComboboxCommonDefaultProps = {
    onChange: noop,
    disabled: false,
    format: 'HH:mm:ss',
    hourStep: 1,
    minuteStep: 1,
    secondStep: 1,
    disabledHours: emptyArr,
    disabledMinutes: emptyArr,
    disabledSeconds: emptyArr,
}

/* header-props */
export const HeaderProps = {
    ...HeaderComboboxCommonProps,
    placeholder: PropTypes.string,
}

export const HeaderDefaultProps = {
    ...HeaderComboboxCommonDefaultProps,
    placeholder: '请选择时间',
}

/* combobox-props */
export const ComboboxProps = {
    ...HeaderComboboxCommonProps,
    hideDisabledOptions: PropTypes.bool,
}

export const ComboboxDefaultProps = {
    ...HeaderComboboxCommonDefaultProps,
    hideDisabledOptions: false,
}

/* select-props */
export const SelectProps = {
    prefix: PropTypes.string,
    options: PropTypes.array,
    selectedIndex: PropTypes.number,
    onSelect: PropTypes.func,
    type: PropTypes.string,
    visible: PropTypes.bool, // Prevent invalid scrolling when hidden
    hideDisabledOptions: PropTypes.bool,
}

export const SelectDefaultProps = {
    options: emptyArr,
    onSelect: noop,
    hideDisabledOptions: false,
}