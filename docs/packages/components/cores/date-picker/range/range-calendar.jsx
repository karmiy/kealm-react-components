import React, { useCallback, useState, useMemo } from 'react';
// import { CalendarProps, CalendarDefaultProps } from './interface';
import { useContextConf, useClassName, useController, useDidUpdate, useStateCallable } from 'hooks';
import Calendar from '../calendar';
import {
    addMonths,
    addYears,
    isBefore,
    isAfter,
    isSameMonth,
    isSameYear,
    isSameDay,
    set,
    startOfDay,
    startOfMonth,
    differenceInMonths,
    subYears
} from 'date-fns';
import { mergeStr } from 'utils/common/base';
import { sortDates } from 'utils/common/date';

const { createConfig } = useController;

/**
 * Used to control the display status of calendars on both sides
 * @param rangeValue
 * @returns {[Date, Date]}
 */
function getRangeCalendarControls(rangeValue) {
    const leftValue = rangeValue.length === 0 ? startOfDay(new Date()) : rangeValue[0],
        rightValue = rangeValue.length === 2
                        ?
                        (
                            !isSameMonth(...rangeValue)
                                ? rangeValue[1]
                                :
                                set(addMonths(leftValue, 1), {
                                    hours: rangeValue[1].getHours(),
                                    minutes: rangeValue[1].getMinutes(),
                                    seconds: rangeValue[1].getSeconds(),
                                })
                        )
                        :
                        addMonths(leftValue, 1);
    return [leftValue, rightValue];
}

export function isSameRange(prevRange, nextRange, isSort = false) {
    if(!prevRange) return false;

    const _filterPrev = prevRange.filter(v => !!v);
    if(_filterPrev.length !== 2) return false;

    const _prevRange = isSort ? sortDates(_filterPrev) : _filterPrev;
    return _prevRange[0].getTime() === nextRange[0].getTime() && _prevRange[1].getTime() === nextRange[1].getTime();
}

function setRangeTime(prevRange, nextRange) {
    if(!prevRange) return [...nextRange];

    const _filterPrev = prevRange.filter(v => !!v);
    const [prevStartV, prevEndV] = _filterPrev;
    if(_filterPrev.length === 0) return [...nextRange];

    const nextEndV = _filterPrev.length === 2 ? prevEndV : prevStartV;
    return [
        set(nextRange[0], {
            hours: prevStartV.getHours(),
            minutes: prevStartV.getMinutes(),
            seconds: prevStartV.getSeconds(),
        }),
        set(nextRange[1], {
            hours: nextEndV.getHours(),
            minutes: nextEndV.getMinutes(),
            seconds: nextEndV.getSeconds(),
        })
    ];
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
        disabledDate: _disabledDate,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [rangeValue, setRangeValue] = useController(defaultValue, value, { onChange, onSelect }, [], disabled)
    const _rangeValue = useMemo(() => sortDates(rangeValue.filter(v => !!v)), [rangeValue]); // Remove empty and sort asc (isPlain range array)

    const [selectedValue, setSelectedValue] = useStateCallable(_rangeValue, true);
    const [hoverValue, setHoverValue] = useState(_rangeValue);
    const calendarControls = getRangeCalendarControls(_rangeValue); // Control the initial display on both sides
    const [leftValue, setLeftValue] = useState(calendarControls[0]);
    const [rightValue, setRightValue] = useState(calendarControls[1]);
    const [leftPanelValue, setLeftPanelValue] = useState(leftValue); // Calendar current year and month
    const [rightPanelValue, setRightPanelValue] = useState(rightValue);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [className]: className,
    }, [componentCls, className]);

    // ---------------------------------- effect ----------------------------------
    useDidUpdate(() => {
        setHoverValue([...selectedValue]);
    }, [selectedValue], true);

    useDidUpdate(() => {
        setLeftValue(calendarControls[0]);
        setRightValue(calendarControls[1])
    }, [rangeValue]);

    useDidUpdate(() => {
        setSelectedValue(_rangeValue);
    }, [rangeValue]);

    // Control right side is always greater than left side
    useDidUpdate(() => {
        differenceInMonths(startOfMonth(rightPanelValue), startOfMonth(leftPanelValue)) < 1 && setRightValue(addMonths(leftPanelValue, 1));
    }, [leftPanelValue]);

    // Clear status when component reload
    useDidUpdate(() => {
        !visible && setSelectedValue(_rangeValue);
    }, [visible], true);

    // ---------------------------------- event ----------------------------------
    const onCalendarSelect = useCallback((v, isLeft = true) => {
        isLeft ? setLeftValue(v) : setRightValue(v);
        setSelectedValue(curRange => {
            if(!curRange.length || curRange.length === 2) return [v];
            const [startV] = curRange;
            /*const _v = set(v, {
                hours: startV.getHours(),
                minutes: startV.getMinutes(),
                seconds: startV.getSeconds(),
            });*/
            return setRangeTime(_rangeValue, sortDates([startV, v]));
            // return sortDates([startV, _v]);
        }, (nextSelected) => {
            // Callback is triggered when 2 dates are selected
            if(nextSelected.length !== 2) return;
            setRangeValue(createConfig({
                value: nextSelected,
                event: ['onChange', 'onSelect'],
                shouldTrigger: {
                    onChange: (prev, next) => !isSameRange(prev, next),
                    onSelect: true,
                },
            }));
        })
    }, [_rangeValue]);

    const onCalendarLeftSelect = useCallback(v => onCalendarSelect(v, true), [onCalendarSelect]);
    const onCalendarRightSelect = useCallback(v => onCalendarSelect(v, false), [onCalendarSelect]);

    const onCellEnter = useCallback(v => {
        const [startV] = selectedValue;
        const _v = set(v, {
            hours: startV.getHours(),
            minutes: startV.getMinutes(),
            seconds: startV.getSeconds(),
        });
        setHoverValue(sortDates([...selectedValue, _v]));
    }, [selectedValue]);

    const onLeftPanelChange = useCallback(v => setLeftPanelValue(v), []);
    const onRightPanelChange = useCallback(v => setRightPanelValue(v), []);

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

    const disabledDate = useCallback(v => {
        return isBefore(startOfMonth(v), startOfMonth(leftPanelValue)) || _disabledDate(v);
    }, [leftPanelValue, _disabledDate]);

    const disabledMonth = useCallback(v => {
        return !isAfter(startOfMonth(v), startOfMonth(leftPanelValue));
    }, [leftPanelValue]);

    const disabledYear = useCallback(v => {
        return v.getFullYear() < leftPanelValue.getFullYear();
    }, [leftPanelValue]);

    const disabledDecade = useCallback((v, u) => {
        const leftYear = leftPanelValue.getFullYear(),
            startYear = v.getFullYear(),
            endYear = u.getFullYear();
        return !(startYear > leftYear
            || startYear <= leftYear && endYear >= leftYear);
    }, [leftPanelValue]);

    const disabledArrowLeft = useCallback((v, type) => {
        switch (type) {
            case 'next-month':
                return differenceInMonths(startOfMonth(rightPanelValue), startOfMonth(v)) <= 1;
            case 'next-year':
                return differenceInMonths(startOfMonth(rightPanelValue), startOfMonth(addYears(v, 1))) < 1;
            default:
                return false;
        }
    }, [rightPanelValue]);

    const disabledArrowRight = useCallback((v, type) => {
        switch (type) {
            case 'prev-month':
                return differenceInMonths(startOfMonth(v), startOfMonth(leftPanelValue)) <= 1;
            case 'prev-year':
                return differenceInMonths(startOfMonth(subYears(v, 1)), startOfMonth(leftPanelValue)) < 1;
            default:
                return false;
        }
    }, [leftPanelValue]);

    return (
        <div className={classNames}>
            <div className={`${componentCls}__body`}>
                <div className={`${componentCls}__part`}>
                    <Calendar
                        value={leftValue}
                        onSelect={onCalendarLeftSelect}
                        onPanelChange={onLeftPanelChange}
                        cellRender={cellRender}
                        disabled={disabled}
                        disabledDate={_disabledDate}
                        disabledArrow={disabledArrowLeft}
                        hiddenDisabledArrow
                        visible={visible}
                    />
                </div>
                <div className={`${componentCls}__part`}>
                    <Calendar
                        value={rightValue}
                        onSelect={onCalendarRightSelect}
                        onPanelChange={onRightPanelChange}
                        cellRender={cellRender}
                        disabled={disabled}
                        disabledDate={disabledDate}
                        disabledMonth={disabledMonth}
                        disabledYear={disabledYear}
                        disabledDecade={disabledDecade}
                        disabledArrow={disabledArrowRight}
                        hiddenDisabledArrow
                        visible={visible}
                    />
                </div>
            </div>
        </div>
    )
}

// RangeCalendar.propTypes = CalendarProps;
// RangeCalendar.defaultProps = CalendarDefaultProps;

export default RangeCalendar;