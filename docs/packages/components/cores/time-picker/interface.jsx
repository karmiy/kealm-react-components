import PropTypes from 'prop-types';
import { dropdownCommonProps, dropdownCommonDefaultProps } from '../select/interface';
import { noop, emptyArr } from 'utils/common/base';

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
}

export const TimePickerDefaultProps = {
    ...dropdownCommonDefaultProps,
    onChange: noop,
    disabled: false,
    placeholder: '请选择时间',
    allowClear: false,
    onClear: noop,
    format: 'HH:mm:ss',
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
}

export const PanelDefaultProps = {
    onChange: noop,
    disabled: false,
    placeholder: '请选择时间',
    format: 'HH:mm:ss',
}

/* header-props */
export const HeaderProps = {
    prefix: PropTypes.string,
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    format: PropTypes.string,
}

export const HeaderDefaultProps = {
    onChange: noop,
    disabled: false,
    placeholder: '请选择时间',
    format: 'HH:mm:ss',
}

/* combobox-props */
export const ComboboxProps = {
    prefix: PropTypes.string,
    defaultOpenValue: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
}

export const ComboboxDefaultProps = {
    onChange: noop,
    disabled: false,
}

/* select-props */
export const SelectProps = {
    prefix: PropTypes.string,
    options: PropTypes.array,
    selectedIndex: PropTypes.number,
    onSelect: PropTypes.func,
    type: PropTypes.string,
    visible: PropTypes.bool, // Prevent invalid scrolling when hidden
}

export const SelectDefaultProps = {
    options: emptyArr,
    onSelect: noop,
}