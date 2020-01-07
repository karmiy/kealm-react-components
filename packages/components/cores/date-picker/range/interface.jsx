import PropTypes from 'prop-types';
import { noop, emptyArr } from 'utils/common/base';

/* range-calendar-props */
export const RangeCalendarProps = {
    defaultValue: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    defaultPickerValue: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    value: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    onPanelChange: PropTypes.func,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
    disabledDate: PropTypes.func,
    dateRender: PropTypes.func,
}

export const RangeCalendarDefaultProps = {
    defaultPickerValue: emptyArr,
    onChange: noop,
    onSelect: noop,
    onPanelChange: noop,
    disabled: false,
    disabledDate: noop,
}