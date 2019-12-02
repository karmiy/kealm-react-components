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
    onClear: PropTypes.func,
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
    onClear: noop,
    format: 'HH:mm:ss',
    hourStep: 1,
    minuteStep: 1,
    secondStep: 1,
    disabledHours: disabledOptions,
    disabledMinutes: disabledOptions,
    disabledSeconds: disabledOptions,
    hideDisabledOptions: false,
}

/* panel-props */
export const PanelProps = {
    prefix: PropTypes.string,
    defaultOpenValue: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    visible: PropTypes.bool,
    format: PropTypes.string,
    isAM: PropTypes.bool,
    hourStep: PropTypes.number,
    minuteStep: PropTypes.number,
    secondStep: PropTypes.number,
    disabledHours: PropTypes.array,
    disabledMinutes: PropTypes.array,
    disabledSeconds: PropTypes.array,
    hideDisabledOptions: PropTypes.bool,
    addon: PropTypes.func,
}

export const PanelDefaultProps = {
    onChange: noop,
    disabled: false,
    placeholder: '请选择时间',
    format: 'HH:mm:ss',
    hourStep: 1,
    minuteStep: 1,
    secondStep: 1,
    disabledHours: emptyArr,
    disabledMinutes: emptyArr,
    disabledSeconds: emptyArr,
    hideDisabledOptions: false,
}

/* header-props */
export const HeaderProps = {
    prefix: PropTypes.string,
    defaultOpenValue: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    format: PropTypes.string,
    isAM: PropTypes.bool,
    hourStep: PropTypes.number,
    minuteStep: PropTypes.number,
    secondStep: PropTypes.number,
    disabledHours: PropTypes.array,
    disabledMinutes: PropTypes.array,
    disabledSeconds: PropTypes.array,
}

export const HeaderDefaultProps = {
    onChange: noop,
    disabled: false,
    placeholder: '请选择时间',
    format: 'HH:mm:ss',
    hourStep: 1,
    minuteStep: 1,
    secondStep: 1,
    disabledHours: emptyArr,
    disabledMinutes: emptyArr,
    disabledSeconds: emptyArr,
}

/* combobox-props */
export const ComboboxProps = {
    prefix: PropTypes.string,
    defaultOpenValue: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
    format: PropTypes.string,
    isAM: PropTypes.bool,
    hourStep: PropTypes.number,
    minuteStep: PropTypes.number,
    secondStep: PropTypes.number,
    disabledHours: PropTypes.array,
    disabledMinutes: PropTypes.array,
    disabledSeconds: PropTypes.array,
    hideDisabledOptions: PropTypes.bool,
}

export const ComboboxDefaultProps = {
    onChange: noop,
    disabled: false,
    format: 'HH:mm:ss',
    hourStep: 1,
    minuteStep: 1,
    secondStep: 1,
    disabledHours: emptyArr,
    disabledMinutes: emptyArr,
    disabledSeconds: emptyArr,
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