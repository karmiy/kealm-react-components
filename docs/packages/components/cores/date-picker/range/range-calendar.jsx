import React, { useCallback, useState } from 'react';
// import { CalendarProps, CalendarDefaultProps } from './interface';
import { useContextConf, useClassName, useController, useDidUpdate } from 'hooks';
import Calendar from '../calendar';
import { addMonths, isBefore, isAfter, isSameMonth, isSameYear, isSameDay, set, startOfDay } from 'date-fns';
import { mergeStr } from 'utils/common/base';
import { sortDates } from 'utils/common/date';

const { createConfig } = useController;

function isUnderSameCalendar(dateLeft, dateRight) {
    return isSameYear(dateLeft, dateRight) && isSameMonth(dateLeft, dateRight);
}

/**
 * Used to control the display status of calendars on both sides
 * @param rangeValue
 * @returns {[Date, Date]}
 */
function getRangeCalendarControls(rangeValue) {
    const leftValue = rangeValue.length === 0 ? startOfDay(new Date()) : rangeValue[0],
        rightValue = rangeValue.length === 2 && !isUnderSameCalendar(...rangeValue) ? rangeValue[1] : addMonths(leftValue, 1);
    return [leftValue, rightValue];
}

export function isSameRange(prevRange, nextRange, isSort = false) {
    if(!prevRange) return false;

    const _filterPrev = prevRange.filter(v => !!v);
    if(_filterPrev.length !== 2) return false;

    const _prevRange = isSort ? sortDates(_filterPrev) : _filterPrev;
    return _prevRange[0].getTime() === nextRange[0].getTime() && _prevRange[1].getTime() === nextRange[1].getTime();
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
    const [rangeValue, setRangeValue] = useController(defaultValue, value, { onChange, onSelect }, [], disabled)
    const _rangeValue = sortDates(rangeValue.filter(v => !!v)); // Remove empty and sort asc

    const [selectedValue, setSelectedValue] = useState(_rangeValue);
    const [hoverValue, setHoverValue] = useState(_rangeValue);
    const calendarControls = getRangeCalendarControls(_rangeValue);
    const [leftValue, setLeftValue] = useState(calendarControls[0]);
    const [rightValue, setRightValue] = useState(calendarControls[1]);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [className]: className,
    }, [componentCls, className, showWeek]);

    // ---------------------------------- effect ----------------------------------
    useDidUpdate(() => {
        setHoverValue([...selectedValue]);
    }, [selectedValue], true);

    useDidUpdate(() => {
        if(selectedValue.length === 2) {
            setRangeValue(createConfig({
                value: selectedValue,
                event: ['onChange', 'onSelect'],
                shouldTrigger: {
                    onChange: (prev, next) => !isSameRange(prev, next),
                    onSelect: true,
                },
            }))
        }
    }, [selectedValue], true);

    useDidUpdate(() => {
        setLeftValue(calendarControls[0]);
        setRightValue(calendarControls[1])
    }, [rangeValue]);

    // ---------------------------------- event ----------------------------------
    const onCalendarSelect = useCallback((v, isLeft = true) => {
        isLeft ? setLeftValue(v) : setRightValue(v);
        setSelectedValue(curRange => {
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

    const onCalendarLeftSelect = useCallback(v => onCalendarSelect(v, true), []);
    const onCalendarRightSelect = useCallback(v => onCalendarSelect(v, false), []);

    const onCellEnter = useCallback(v => {
        const [startV] = selectedValue;
        const _v = set(v, {
            hours: startV.getHours(),
            minutes: startV.getMinutes(),
            seconds: startV.getSeconds(),
        });
        setHoverValue(sortDates([...selectedValue, _v]));
    }, [selectedValue]);

    // ---------------------------------- function ----------------------------------
    const cellRender = useCallback((prefixCls, item, onClick, content) => {
        const [startDate, endDate] = hoverValue;
        const currentDate = new Date(item.year, item.month - 1, item.date); // create 00:00:00

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

        const onMouseEnter = selectedValue.length === 1 ? () => onCellEnter(currentDate) : null;
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
    }, [selectedValue, hoverValue]);

    return (
        <div className={classNames}>
            <div className={`${componentCls}__body`}>
                <div className={`${componentCls}__part`}>
                    <Calendar
                        value={leftValue}
                        onSelect={onCalendarLeftSelect}
                        cellRender={cellRender}
                    />
                </div>
                <div className={`${componentCls}__part`}>
                    <Calendar
                        value={rightValue}
                        onSelect={onCalendarRightSelect}
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