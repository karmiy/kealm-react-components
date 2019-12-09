import React, { useCallback, useState } from 'react';
import { CalendarProps, CalendarDefaultProps } from './interface';
import { useContextConf, useClassName, useDidUpdate } from 'hooks';
import CalendarHeader from './calendar-header';
import CalendarBody from './calendar-body';
import { handleDate } from 'utils/common/date';

function Calendar(props) {
    const { componentCls } = useContextConf('calendar');
    const {
        className,
        value,
        onChange,
        onSelect,
        disabled,
        visible,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [innerYear, setInnerYear] = useState(value ? value.getFullYear() : new Date().getFullYear());
    const [innerMonth, setInnerMonth] = useState(value ? value.getMonth() + 1 : new Date().getMonth() + 1);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [className]: className,
    }, [componentCls, className]);

    // ---------------------------------- effect ----------------------------------
    useDidUpdate(() => {
        setInnerYear(value ? value.getFullYear() : new Date().getFullYear());
        setInnerMonth(value ? value.getMonth() + 1 : new Date().getMonth() + 1);
    }, [value], true);

    // ---------------------------------- event ----------------------------------
    const onHeaderChange = useCallback((year, month) => {
        setInnerYear(year);
        setInnerMonth(month);
    }, []);

    const onDateSelect = useCallback((year, month, date) => {
        onSelect(new Date(handleDate(value, { year, month, date })));
    }, [onSelect, value]);

    const onDateChange = useCallback((year, month, date) => {
        onChange(new Date(handleDate(value, { year, month, date })));
    }, [onChange, value]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames}>
            <CalendarHeader
                prefixCls={componentCls}
                disabled={disabled}
                year={innerYear}
                month={innerMonth}
                onChange={onHeaderChange}
                visible={visible}
            />
            <CalendarBody
                prefixCls={componentCls}
                disabled={disabled}
                year={innerYear}
                month={innerMonth}
                selectedDate={value}
                onSelect={onDateSelect}
                onChange={onDateChange}
            />
        </div>
    );
}

Calendar.propTypes = CalendarProps;
Calendar.defaultProps = CalendarDefaultProps;

export default Calendar;