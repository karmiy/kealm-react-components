import PropTypes from 'prop-types';
import { dropdownCommonProps, dropdownCommonDefaultProps } from '../select/interface';
import { noop, emptyArr } from 'utils/common/base';
import { omit } from 'utils/common/object';

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
    prefixCls: PropTypes.string,
    defaultOpenValue: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    disabled: PropTypes.bool,
    format: PropTypes.string,
    visible: PropTypes.bool,
    hourStep: PropTypes.number,
    minuteStep: PropTypes.number,
    secondStep: PropTypes.number,
    disabledHours: PropTypes.array,
    disabledMinutes: PropTypes.array,
    disabledSeconds: PropTypes.array,
}

const HeaderComboboxCommonDefaultProps = {
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
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
}

export const HeaderDefaultProps = {
    ...HeaderComboboxCommonDefaultProps,
    onChange: noop,
    placeholder: '请选择时间',
}

/* combobox-props */
export const ComboboxProps = {
    ...HeaderComboboxCommonProps,
    onSelect: PropTypes.func,
    hideDisabledOptions: PropTypes.bool,
    initAsyncScroll: PropTypes.bool,
}

export const ComboboxDefaultProps = {
    ...HeaderComboboxCommonDefaultProps,
    onSelect: noop,
    hideDisabledOptions: false,
    initAsyncScroll: true,
}

/* time-panel-props */
export const TimePanelProps = {
    ...omit(HeaderComboboxCommonProps, ['prefixCls']),
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    hideDisabledOptions: PropTypes.bool,
    header: PropTypes.func,
    footer: PropTypes.func,
    initAsyncScroll: PropTypes.bool,
}

export const TimePanelDefaultProps = {
    ...HeaderComboboxCommonDefaultProps,
    onChange: noop,
    onSelect: noop,
    hideDisabledOptions: false,
    header: noop,
    footer: noop,
    initAsyncScroll: true,
}

/* select-props */
export const SelectProps = {
    prefixCls: PropTypes.string,
    options: PropTypes.array,
    selectedIndex: PropTypes.number,
    onSelect: PropTypes.func,
    type: PropTypes.string,
    visible: PropTypes.bool, // Prevent invalid scrolling when hidden
    hideDisabledOptions: PropTypes.bool,
    initAsyncScroll: PropTypes.bool,
}

export const SelectDefaultProps = {
    options: emptyArr,
    onSelect: noop,
    hideDisabledOptions: false,
    initAsyncScroll: true,
}