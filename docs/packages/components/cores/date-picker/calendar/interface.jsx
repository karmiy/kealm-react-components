import PropTypes from 'prop-types';
import { noop, emptyArr } from 'utils/common/base';

/* calendar-props */
export const CalendarProps = {
    defaultValue: PropTypes.instanceOf(Date),
    defaultPickerValue: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    onPanelChange: PropTypes.func,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
    showWeek: PropTypes.bool,
    cellRender: PropTypes.func,
    disabledDate: PropTypes.func,
    disabledMonth: PropTypes.func,
    disabledYear: PropTypes.func,
    disabledDecade: PropTypes.func,
    disabledArrow: PropTypes.func,
    hiddenDisabledArrow: PropTypes.bool,
}

export const CalendarDefaultProps = {
    onChange: noop,
    onSelect: noop,
    onPanelChange: noop,
    disabled: false,
    showWeek: false,
    disabledDate: noop,
    disabledMonth: noop,
    disabledYear: noop,
    disabledDecade: noop,
    disabledArrow: noop,
    hiddenDisabledArrow: false,
}

/* calendar-header-props */
export const CalendarHeaderProps = {
    prefixCls: PropTypes.string,
    defaultPickerValue: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
    disabledMonth: PropTypes.func,
    disabledYear: PropTypes.func,
    disabledDecade: PropTypes.func,
    disabledArrow: PropTypes.func,
    hiddenDisabledArrow: PropTypes.bool,
}

export const CalendarHeaderDefaultProps = {
    disabled: false,
    onChange: noop,
    disabledMonth: noop,
    disabledYear: noop,
    disabledDecade: noop,
    disabledArrow: noop,
    hiddenDisabledArrow: false,
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