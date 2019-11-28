import PropTypes from 'prop-types';
import { dropdownCommonProps, dropdownCommonDefaultProps } from '../select/interface';
import { noop, emptyArr } from 'utils/common/base';

/* time-picker-props */
export const TimePickerProps = {
    ...dropdownCommonProps,
    defaultValue: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
}

export const TimePickerDefaultProps = {
    ...dropdownCommonDefaultProps,
    onChange: noop,
    disabled: false,
    placeholder: '请选择时间',
}

/* panel-props */
export const PanelProps = {
    prefix: PropTypes.string,
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
}

export const PanelDefaultProps = {
    onChange: noop,
    disabled: false,
    placeholder: '请选择时间',
}

/* header-props */
export const HeaderProps = {
    prefix: PropTypes.string,
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
}

export const HeaderDefaultProps = {
    onChange: noop,
    disabled: false,
    placeholder: '请选择时间',
}

/* combobox-props */
export const ComboboxProps = {
    prefix: PropTypes.string,
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
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
}

export const SelectDefaultProps = {
    options: emptyArr,
}