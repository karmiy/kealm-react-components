import PropTypes from 'prop-types';
import { noop } from 'utils/common/base';

/* range-calendar-props */
export const RangeCalendarProps = {
    defaultValue: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    value: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
    disabledDate: PropTypes.func,
}

export const RangeCalendarDefaultProps = {
    onChange: noop,
    onSelect: noop,
    disabled: false,
    disabledDate: noop,
}