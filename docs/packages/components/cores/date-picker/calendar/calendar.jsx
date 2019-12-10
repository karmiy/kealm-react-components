import React, { useCallback } from 'react';
import { CalendarProps, CalendarDefaultProps } from './interface';
import { useContextConf, useClassName, usePuppet } from 'hooks';
import CalendarHeader from './calendar-header';
import CalendarBody from './calendar-body';
import { handleDate } from 'utils/common/date';

function Calendar(props) {
    const { componentCls } = useContextConf('calendar');
    const {
        className,
        defaultValue,
        value,
        onSelect,
        disabled,
        visible,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [
        outerValue,
        innerValue,
        setOuterValue,
        setInnerValue
    ] = usePuppet(defaultValue, value, onSelect, null, disabled, false, true);
    const innerYear = innerValue ? innerValue.getFullYear() : new Date().getFullYear(),
        innerMonth = innerValue ? innerValue.getMonth() + 1 : new Date().getMonth() + 1;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [className]: className,
    }, [componentCls, className]);

    // ---------------------------------- event ----------------------------------
    const onHeaderChange = useCallback((year, month) => {
        setInnerValue(v => handleDate(new Date(v), { year, month }));
    }, []);

    const onDateSelect = useCallback((year, month, date) => {
        setOuterValue(v => handleDate(new Date(v), { year, month, date }));
    }, []);

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
                selectedDate={outerValue}
                onSelect={onDateSelect}
            />
        </div>
    );
}

Calendar.propTypes = CalendarProps;
Calendar.defaultProps = CalendarDefaultProps;

export default Calendar;