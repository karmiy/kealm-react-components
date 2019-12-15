import PropTypes from 'prop-types';
import { dropdownCommonProps, dropdownCommonDefaultProps } from '../../select/interface';
import { noop } from 'utils/common/base';

export const CommonProps = {
    ...dropdownCommonProps, // defaultVisible ...
    defaultValue: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    format: PropTypes.string,
    allowClear: PropTypes.bool,
}

export const CommonDefaultProps = {
    ...dropdownCommonDefaultProps,
    onChange: noop,
    disabled: false,
    placeholder: '请选择日期',
    format: 'YYYY-MM-DD',
    allowClear: false,
}

/* date-picker-props */
export const DatePickerProps = {
    ...CommonProps,
}

export const DatePickerDefaultProps = {
    ...CommonDefaultProps,
}

/* month-picker-props */
export const MonthPickerProps = {
    ...CommonProps,
}

export const MonthPickerDefaultProps = {
    ...CommonDefaultProps,
    placeholder: '请选择月份',
    format: 'YYYY-MM',
}

/* week-picker-props */
export const WeekPickerProps = {
    ...CommonProps,
}

export const WeekPickerDefaultProps = {
    ...CommonDefaultProps,
    placeholder: '请选择周数',
    format: 'YYYY-MM',
}