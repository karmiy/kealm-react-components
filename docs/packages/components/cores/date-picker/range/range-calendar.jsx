import React, { useCallback, useState } from 'react';
// import { CalendarProps, CalendarDefaultProps } from './interface';
import { useContextConf, useClassName, useController, useDidUpdate } from 'hooks';
import Calendar from '../calendar';
import { addMonths, isBefore, isAfter, isSameMonth, isSameYear, isSameDay, set } from 'date-fns';
import { mergeStr } from 'utils/common/base';
import { sortDates } from 'utils/common/date';

const { createConfig } = useController;

function isUnderSameCalendar(dateLeft, dateRight) {
    return isSameYear(dateLeft, dateRight) && isSameMonth(dateLeft, dateRight);
}

function RangeCalendar(props) {
    const { componentCls } = useContextConf('range-calendar');
    const {
        className,
        defaultValue,
        value,
        onChange,
        onSelect,
        disabled,
        visible,
        showWeek,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [dateValue, setDateValue] = useController(defaultValue, value, { onChange, onSelect }, [], disabled)
    const _dateValue = sortDates(dateValue.filter(v => !!v)); // Remove empty and sort asc

    const [rangeValue, setRangeValue] = useState(_dateValue);
    const [hoverValue, setHoverValue] = useState(_dateValue);
    const [leftValue, setLeftValue] = useState(dateValue.length === 0 ? new Date() : _dateValue[0]);
    const [rightValue, setRightValue] = useState(
        dateValue.length === 2 && !isUnderSameCalendar(..._dateValue) ? _dateValue[1] : addMonths(leftValue, 1)
    );

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [className]: className,
    }, [componentCls, className, showWeek]);

    // ---------------------------------- effect ----------------------------------
    useDidUpdate(() => {
        setHoverValue([...rangeValue]);
    }, [rangeValue], true);

    // ---------------------------------- event ----------------------------------
    const onCalendarSelect = useCallback(v => {
        setRangeValue(curRange => {
            if(!curRange.length || curRange.length === 2) return [v];
            const [startV] = curRange;
            const _v = set(v, {
                hours: startV.getHours(),
                minutes: startV.getMinutes(),
                seconds: startV.getSeconds(),
            });
            return sortDates([startV, _v]);
        })
    }, []);

    const onCellEnter = useCallback(v => {
        const [startV] = rangeValue;
        const _v = set(v, {
            hours: startV.getHours(),
            minutes: startV.getMinutes(),
            seconds: startV.getSeconds(),
        });
        setHoverValue(sortDates([...rangeValue, _v]));
    }, [rangeValue]);

    // ---------------------------------- function ----------------------------------
    const cellRender = useCallback((prefixCls, item, onClick, content) => {
        const [startDate, endDate] = hoverValue;
        const currentDate = new Date(item.year, item.month - 1, item.date);

        const isSelected = startDate && isSameDay(startDate, currentDate)
                    || endDate && isSameDay(endDate, currentDate);

        const isRange =
                    !disabled && !item.isPrevMonth && !item.isNextMonth && !isSelected
                    &&
                    (
                        startDate && !endDate && isBefore(startDate, currentDate)
                        || startDate && endDate && isBefore(startDate, currentDate) && isAfter(endDate, currentDate)
                    );

        const cellClassName = mergeStr({
            [`${prefixCls}__cell`]: true,
            'is-prev-month': item.isPrevMonth,
            'is-next-month': item.isNextMonth,
            'is-selected': isSelected,
            'is-today': item.isToday,
            'is-disabled': item.isDisabled,
            'is-range': isRange,
        });

        const onMouseEnter = rangeValue.length === 1 ? () => onCellEnter(currentDate) : null;
        return (
            <td
                key={`${item.year}-${item.month}-${item.date}`}
                className={cellClassName}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
            >
                {content}
            </td>
        );
    }, [rangeValue, hoverValue]);

    return (
        <div className={classNames}>
            <div className={`${componentCls}__body`}>
                <div className={`${componentCls}__part`}>
                    <Calendar
                        value={leftValue}
                        onSelect={onCalendarSelect}
                        cellRender={cellRender}
                    />
                </div>
                <div className={`${componentCls}__part`}>
                    <Calendar
                        value={rightValue}
                        onSelect={onCalendarSelect}
                        cellRender={cellRender}
                    />
                </div>
            </div>
        </div>
    )
}

// RangeCalendar.propTypes = CalendarProps;
// RangeCalendar.defaultProps = CalendarDefaultProps;

export default RangeCalendar;