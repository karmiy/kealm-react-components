import React from 'react';
import Icon from '../icon';

const weeks = ['一', '二', '三', '四', '五', '六', '七'];
const dates = [
    [29, 30, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31, 1, 2],
    [3, 4, 5, 6, 7, 8, 9]
]

function Calendar(props) {
    const {
        prefixCls,
        placeholder,
        disabled,
    } = props;

    const className = `${prefixCls}-calendar`;

    // ---------------------------------- render ----------------------------------
    return (
        <div className={className}>
            <div className={`${className}__header`}>
                <a className={`${className}__header-prev-year`} />
                <a className={`${className}__header-prev-month`} />
                <a className={`${className}__header-year`}>2019 年</a>
                <a className={`${className}__header-month`}>12 月</a>
            </div>
            <div className={`${className}__body`}>
                <table className={`${className}__table`} cellSpacing={0}>
                    <thead>
                        <tr>
                            {
                                weeks.map(week => {
                                    return (
                                        <td key={week} className={`${className}__column-header`}>
                                            <span className={`${className}__column-inner`}>{week}</span>
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dates.map((row, index) => {
                                return (
                                    <tr key={index}>
                                        {
                                            row.map(date => {
                                                return (
                                                    <td key={date} className={`${className}__ceil`}>
                                                        <div className={`${className}__date`}>
                                                            {date}
                                                        </div>
                                                    </td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Calendar;