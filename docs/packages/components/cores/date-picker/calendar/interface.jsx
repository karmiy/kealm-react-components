import PropTypes from 'prop-types';
import { noop, emptyArr } from 'utils/common/base';

/* calendar-props */
export const CalendarProps = {
    defaultValue: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
    showWeek: PropTypes.bool,
    cellRender: PropTypes.func,
    disabledDate: PropTypes.func,
}

export const CalendarDefaultProps = {
    onChange: noop,
    onSelect: noop,
    disabled: false,
    showWeek: false,
    disabledDate: noop,
}

/* calendar-header-props */
export const CalendarHeaderProps = {
    prefixCls: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.instanceOf(Date),
    // year: PropTypes.number,
    // month: PropTypes.number,
    onChange: PropTypes.func,
    visible: PropTypes.bool,
}

export const CalendarHeaderDefaultProps = {
    disabled: false,
    onChange: noop,
}

/* calendar-body-props */
export const CalendarBodyProps = {
    prefixCls: PropTypes.string,
    defaultPickerValue: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    disabled: PropTypes.bool,
    showWeek: PropTypes.bool,
    selectedDate: PropTypes.instanceOf(Date),
    onSelect: PropTypes.func,
    cellRender: PropTypes.func,
    disabledDate: PropTypes.func,
}

export const CalendarBodyDefaultProps = {
    disabled: false,
    showWeek: false,
    onSelect: noop,
    disabledDate: noop,
}