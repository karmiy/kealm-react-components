import PropTypes from 'prop-types';
import { noop } from 'utils/common/base';

/* calendar-props */
export const CalendarProps = {
    // prefixCls: PropTypes.string,
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
}

export const CalendarDefaultProps = {
    onChange: noop,
    disabled: false,
}

/* calendar-header-props */
export const CalendarHeaderProps = {
    prefixCls: PropTypes.string,
    disabled: PropTypes.bool,
    year: PropTypes.number,
    month: PropTypes.number,
    onChange: PropTypes.func,
}

export const CalendarHeaderDefaultProps = {
    disabled: false,
    onChange: noop,
}

/* calendar-body-props */
export const CalendarBodyProps = {
    prefixCls: PropTypes.string,
    disabled: PropTypes.bool,
    year: PropTypes.number,
    month: PropTypes.number,
    selectedDate: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
}

export const CalendarBodyDefaultProps = {
    disabled: false,
    onChange: noop,
}