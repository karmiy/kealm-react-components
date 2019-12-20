import PropTypes from 'prop-types';
import { dropdownCommonProps, dropdownCommonDefaultProps } from '../../select/interface';
import { noop } from 'utils/common/base';
import { omit } from 'utils/common/object';

export const CommonProps = {
    ...dropdownCommonProps, // defaultVisible ...
    defaultValue: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    format: PropTypes.string,
    allowClear: PropTypes.bool,
    size: PropTypes.oneOf(['large', 'small']),
}

export const CommonDefaultProps = {
    ...dropdownCommonDefaultProps,
    onChange: noop,
    disabled: false,
    placeholder: '请选择日期',
    // format: 'yyyy-MM-dd',
    allowClear: false,
}

/* date-picker-props */
export const DatePickerProps = {
    ...CommonProps,
    showTime: PropTypes.bool,
}

export const DatePickerDefaultProps = {
    ...CommonDefaultProps,
    showTime: false,
}

/* month-picker-props */
export const MonthPickerProps = {
    ...CommonProps,
}

export const MonthPickerDefaultProps = {
    ...CommonDefaultProps,
    placeholder: '请选择月份',
    format: 'yyyy-MM',
}

/* week-picker-props */
export const WeekPickerProps = {
    ...CommonProps,
}

export const WeekPickerDefaultProps = {
    ...CommonDefaultProps,
    placeholder: '请选择周数',
    format: 'YYYY 第ww周',
}

/* range-picker-props */
export const RangePickerProps = {
    ...omit(CommonProps, ['placeholder']),
    defaultValue: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    value: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    startPlaceholder: PropTypes.string,
    endPlaceholder: PropTypes.string,
}

export const RangePickerDefaultProps = {
    ...omit(CommonDefaultProps, ['placeholder']),
    startPlaceholder: '开始日期',
    endPlaceholder: '结束日期',
    // format: 'yyyy-MM-dd',
}