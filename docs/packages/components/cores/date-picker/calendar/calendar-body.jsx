import React, { useMemo, useCallback } from 'react';
import { CalendarBodyProps, CalendarBodyDefaultProps } from './interface';
import { createCalendar, handleDate, weekOfYear, MIN_SAFE_YEAR, MAX_SAFE_YEAR } from 'utils/common/date';
import { mergeStr } from 'utils/common/base';
import { RenderWrapper } from '../../../common';

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
        disabled,
        value,
        selectedDate,
        onSelect,
        showWeek,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const year = value ? value.getFullYear() : new Date().getFullYear(),
        month = value ? value.getMonth() + 1 : new Date().getMonth() + 1;
    const today = new Date();
    const selectedWeek = value ? weekOfYear(value) : 0;

    // ---------------------------------- class ----------------------------------
    const tableClassName = mergeStr({
       [`${prefixCls}__table`]: true,
       'is-week': showWeek,
    });

    // ---------------------------------- event ----------------------------------
    const onItemSelect = useCallback(item => {
        if(disabled) return;

        const { year, month, date } = item;

        /*const isCurrentSelected = selectedDate
            && selectedDate.getFullYear() === year
            && selectedDate.getMonth() + 1 === month
            && selectedDate.getDate() === date;
        if(!isCurrentSelected) onChange(year, month, date);*/
        onSelect(v => handleDate(new Date(v || new Date()), { year, month, date }));
    }, [disabled]);

    // ---------------------------------- function ----------------------------------
    const createRow = useCallback((dates, key) => {
        const lastDate = dates[dates.length - 1];
        const currentWeek = weekOfYear(new Date(lastDate.year, lastDate.month - 1, lastDate.date)),
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
                        const isSelected = selectedDate
                                    && selectedDate.getFullYear() === item.year
                                    && selectedDate.getMonth() + 1 === item.month
                                    && selectedDate.getDate() === item.date;

                        const isToday = today.getFullYear() === item.year
                                    && today.getMonth() + 1 === item.month
                                    && today.getDate() === item.date;

                        const isDisabled = disabled || item.year < MIN_SAFE_YEAR || item.year > MAX_SAFE_YEAR;

                        const cellClassName = mergeStr({
                            [`${prefixCls}__cell`]: true,
                            'is-prev-month': item.isPrevMonth,
                            'is-next-month': item.isNextMonth,
                            'is-selected': isSelected,
                            'is-today': isToday,
                            'is-disabled': isDisabled,
                        });

                        const onClick = isDisabled ? null : () => onItemSelect(item);
                        return (
                            <td key={`${item.year}-${item.month}-${item.date}`} className={cellClassName}>
                                <span className={`${prefixCls}__date`} onClick={onClick}>
                                    {item.date}
                                </span>
                            </td>
                        )
                    })
                }
            </tr>
        )
    }, [prefixCls, selectedDate, today, disabled, onItemSelect, showWeek, selectedWeek]);

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