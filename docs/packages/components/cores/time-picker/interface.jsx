import PropTypes from 'prop-types';
import { dropdownCommonProps, dropdownCommonDefaultProps } from '../select/interface';
import { noop, emptyArr } from 'utils/common/base';

/* common-props for all time-picker Components */
export const CommonProps = {
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
}

export const CommonDefaultProps = {
    onChange: noop,
    disabled: false,
}

/* common-props for children Components of time-picker */
export const CommonChildrenProps = {
    ...CommonProps,
    prefix: PropTypes.string,
}

export const CommonChildrenDefaultProps = {
    ...CommonDefaultProps,
}

/* time-picker-props */
export const TimePickerProps = {
    ...dropdownCommonProps,
    defaultValue: PropTypes.instanceOf(Date),
    placeholder: PropTypes.string,
}

export const TimePickerDefaultProps = {
    ...dropdownCommonDefaultProps,
    placeholder: '请选择时间',
}

/* panel-props */
export const PanelProps = {
    ...CommonChildrenProps,
    placeholder: PropTypes.string,
}

export const PanelDefaultProps = {
    ...CommonChildrenDefaultProps,
    placeholder: '请选择时间',
}

/* header-props */
export const HeaderProps = {
    ...CommonChildrenProps,
    placeholder: PropTypes.string,
}

export const HeaderDefaultProps = {
    ...CommonChildrenDefaultProps,
    placeholder: '请选择时间',
}

/* combobox-props */
export const ComboboxProps = {
    ...CommonChildrenProps,
}

export const ComboboxDefaultProps = {
    ...CommonChildrenDefaultProps,
}

/* select-props */
export const SelectProps = {
    ...CommonChildrenProps,
    options: PropTypes.array,
}

export const SelectDefaultProps = {
    ...CommonChildrenDefaultProps,
    options: emptyArr,
}