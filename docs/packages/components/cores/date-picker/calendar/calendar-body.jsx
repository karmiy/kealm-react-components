import React, { useMemo, useCallback } from 'react';
import { CalendarBodyProps, CalendarBodyDefaultProps } from './interface';
import { createCalendar } from 'utils/common/date';
import { mergeStr } from 'utils/common/base';

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
        year,
        month,
        selectedDate,
        onChange,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const today = new Date();

    // ---------------------------------- event ----------------------------------
    const onSelect = useCallback(item => {
        if(disabled) return;

        const { year, month, date } = item;

        const isCurrentSelected = selectedDate
            && selectedDate.getFullYear() === year
            && selectedDate.getMonth() + 1 === month
            && selectedDate.getDate() === date;
        if(isCurrentSelected) return;

        onChange(year, month, date);
    }, [disabled, onChange]);

    // ---------------------------------- function ----------------------------------
    const createRow = useCallback((dates, key) => {
        return (
            <tr key={key}>
                {
                    dates.map(item => {
                        const isSelected = selectedDate
                                    && selectedDate.getFullYear() === item.year
                                    && selectedDate.getMonth() + 1 === item.month
                                    && selectedDate.getDate() === item.date;

                        const isToday = today.getFullYear() === item.year
                                    && today.getMonth() + 1 === item.month
                                    && today.getDate() === item.date;

                        const cellClassName = mergeStr({
                            [`${prefixCls}__cell`]: true,
                            'is-prev-month': item.isPrevMonth,
                            'is-next-month': item.isNextMonth,
                            'is-selected': isSelected,
                            'is-today': isToday,
                            // 'is-disabled': true,
                        })
                        return (
                            <td key={`${item.year}-${item.month}-${item.date}`} className={cellClassName}>
                                <span className={`${prefixCls}__date`} onClick={() => onSelect(item)}>
                                    {item.date}
                                </span>
                            </td>
                        )
                    })
                }
            </tr>
        )
    }, [selectedDate, today]);

    // ---------------------------------- render chunk ----------------------------------
    const renderThead = useMemo(() => {
        return (
            <thead>
                <tr>
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
    }, []);

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
            <table className={`${prefixCls}__table`} cellSpacing={0}>
                {renderThead}
                {renderTbody}
            </table>
        </div>
    );
}

CalendarBody.propTypes = CalendarBodyProps;
CalendarBody.defaultProps = CalendarBodyDefaultProps;

export default CalendarBody;