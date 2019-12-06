import React, { useCallback, useState } from 'react';
import { CalendarProps, CalendarDefaultProps } from './interface';
import { useContextConf, useDidUpdate } from 'hooks';
import CalendarHeader from './calendar-header';
import CalendarBody from './calendar-body';
import { handleDate } from 'utils/common/date';

function Calendar(props) {
    const { componentCls } = useContextConf('calendar');
    const {
        value,
        onChange,
        disabled,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [innerYear, setInnerYear] = useState(value ? value.getFullYear() : new Date().getFullYear());
    const [innerMonth, setInnerMonth] = useState(value ? value.getMonth() + 1 : new Date().getMonth() + 1);

    // ---------------------------------- effect ----------------------------------
    useDidUpdate(() => {
        setInnerYear(value ? value.getFullYear() : new Date().getFullYear());
        setInnerMonth(value ? value.getMonth() + 1 : new Date().getMonth() + 1);
    }, [value]);

    // ---------------------------------- event ----------------------------------
    const onHeaderChange = useCallback((year, month) => {
        setInnerYear(year);
        setInnerMonth(month);
    }, []);

    const onSelectedChange = useCallback((year, month, date) => {
        onChange(new Date(handleDate(value, { year, month, date })));
    }, [onChange, value]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={componentCls}>
            <CalendarHeader
                prefixCls={componentCls}
                disabled={disabled}
                year={innerYear}
                month={innerMonth}
                onChange={onHeaderChange}
            />
            <CalendarBody
                prefixCls={componentCls}
                disabled={disabled}
                year={innerYear}
                month={innerMonth}
                selectedDate={value}
                onChange={onSelectedChange}
            />
        </div>
    );
}

Calendar.propTypes = CalendarProps;
Calendar.defaultProps = CalendarDefaultProps;

export default Calendar;