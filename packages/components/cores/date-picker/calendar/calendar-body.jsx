import React, { useMemo, useCallback } from 'react';
import { CalendarBodyProps, CalendarBodyDefaultProps } from './interface';
import { createCalendar, MIN_SAFE_YEAR, MAX_SAFE_YEAR } from 'utils/common/date';
import { mergeStr, isFunction } from 'utils/common/base';
import { RenderWrapper } from '../../../common';
import { getWeek, set, startOfDay } from 'date-fns';

const WEEK_NAMES = ['一', '二', '三', '四', '五', '六', '七'];
/*const dates = [
    [29, 30, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31, 1, 2],
    [3, 4, 5, 6, 7, 8, 9]
]*/

function CalendarBody(props) {
    const {
        prefixCls,
        defaultPickerValue,
        value,
        selectedDate,
        onSelect,
        disabled,
        showWeek,
        cellRender,
        disabledDate,
        dateRender,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const year = value ? value.getFullYear() : (defaultPickerValue ? defaultPickerValue.getFullYear() : new Date().getFullYear()),
        month = value ? value.getMonth() + 1 : (defaultPickerValue ? defaultPickerValue.getMonth() + 1 : new Date().getMonth() + 1);
    const today = new Date();
    const selectedWeek = selectedDate ? getWeek(selectedDate, { weekStartsOn: 1 }) : 0;

    // ---------------------------------- class ----------------------------------
    const tableClassName = mergeStr({
       [`${prefixCls}__table`]: true,
       'is-week': showWeek,
    });

    // ---------------------------------- event ----------------------------------
    const onItemSelect = useCallback(item => {
        if(disabled) return;

        const { year, month, date } = item;
        onSelect(v => set(v || defaultPickerValue || startOfDay(new Date()), { year, month: month - 1, date }));
    }, [disabled, defaultPickerValue]);

    // ---------------------------------- function ----------------------------------
    const createRow = useCallback((dates, key) => {
        const lastDate = dates[dates.length - 1];
        const currentWeek = getWeek(new Date(lastDate.year, lastDate.month - 1, lastDate.date), { weekStartsOn: 1 }),
            isActiveWeek = showWeek && currentWeek === selectedWeek;

        return (
            <tr key={key} className={isActiveWeek ? 'is-active-week' : null}>
                <RenderWrapper visible={showWeek} unmountOnExit>
                    <td className={`${prefixCls}__cell`}>
                        <span className={`${prefixCls}__date ${prefixCls}__date-week`}>
                            {currentWeek}
                        </span>
                    </td>
                </RenderWrapper>
                {
                    dates.map(item => {
                        const { year: _year, month: _month, date: _date } = item;
                        const currentDate = selectedDate || defaultPickerValue
                            ? set(selectedDate || defaultPickerValue, {
                                year: _year,
                                month: _month - 1,
                                date: _date,
                            })
                            : new Date(_year, _month - 1, _date);

                        const isSelected = selectedDate
                                    && selectedDate.getFullYear() === _year
                                    && selectedDate.getMonth() + 1 === _month
                                    && selectedDate.getDate() === _date;

                        const isToday = today.getFullYear() === _year
                                    && today.getMonth() + 1 === _month
                                    && today.getDate() === _date;

                        const isDisabled = disabled || disabledDate(currentDate) || _year < MIN_SAFE_YEAR || _year > MAX_SAFE_YEAR;

                        const cellClassName = mergeStr({
                            [`${prefixCls}__cell`]: true,
                            'is-prev-month': item.isPrevMonth,
                            'is-next-month': item.isNextMonth,
                            'is-selected': isSelected,
                            'is-today': isToday,
                            'is-disabled': isDisabled,
                        });

                        const onClick = isDisabled ? null : () => onItemSelect(item);

                        const renderDate = dateRender
                            ?
                            dateRender(currentDate)
                            :
                            (
                                <span className={`${prefixCls}__date`}>
                                    {item.date}
                                </span>
                            );

                        if(cellRender && isFunction(cellRender)) {
                            return cellRender(prefixCls, {
                                ...item,
                                isSelected,
                                isToday,
                                isDisabled,
                            }, onClick, renderDate);
                        }
                        return (
                            <td key={`${item.year}-${item.month}-${item.date}`} className={cellClassName} onClick={onClick}>
                                {renderDate}
                            </td>
                        )
                    })
                }
            </tr>
        )
    }, [prefixCls, defaultPickerValue, selectedDate, today, disabled, onItemSelect, showWeek, selectedWeek, cellRender, disabledDate, dateRender]);

    // ---------------------------------- render chunk ----------------------------------
    const renderThead = useMemo(() => {
        return (
            <thead>
                <tr>
                    <RenderWrapper visible={showWeek} unmountOnExit>
                        <td className={`${prefixCls}__column-header`} />
                    </RenderWrapper>
                    {
                        WEEK_NAMES.map(week => {
                            return (
                                <td key={week} className={`${prefixCls}__column-header`}>
                                    <span className={`${prefixCls}__column-inner`}>{week}</span>
                                </td>
                            )
                        })
                    }
                </tr>
            </thead>
        )
    }, [showWeek]);

    const renderTbody = useMemo(() => {
        const dates = createCalendar(year, month);
        return (
            <tbody>
                {
                    dates.map((rowDates, index) => createRow(rowDates, index))
                }
            </tbody>
        )
    }, [year, month, createRow]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={`${prefixCls}__body`}>
            <table className={tableClassName} cellSpacing={0}>
                {renderThead}
                {renderTbody}
            </table>
        </div>
    );
}

CalendarBody.propTypes = CalendarBodyProps;
CalendarBody.defaultProps = CalendarBodyDefaultProps;

export default CalendarBody;