import PropTypes from 'prop-types';
import { noop } from 'utils/common/base';

/* calendar-props */
export const CalendarProps = {
    defaultValue: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
    showWeek: PropTypes.bool,
}

export const CalendarDefaultProps = {
    onChange: noop,
    onSelect: noop,
    disabled: false,
    showWeek: false,
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
    value: PropTypes.instanceOf(Date),
    disabled: PropTypes.bool,
    showWeek: PropTypes.bool,
    selectedDate: PropTypes.instanceOf(Date),
    onSelect: PropTypes.func,
}

export const CalendarBodyDefaultProps = {
    disabled: false,
    showWeek: false,
    onSelect: noop,
}