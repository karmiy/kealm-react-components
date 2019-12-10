import React, { useMemo, useCallback } from 'react';
import { YearBodyProps, YearBodyDefaultProps } from './interface';
import { createDecadeTable, MAX_SAFE_YEAR, MIN_SAFE_YEAR } from 'utils/common/date';
import { mergeStr } from 'utils/common/base';

function YearBody(props) {
    const {
        prefixCls,
        year,
        selectedYear,
        disabled,
        onSelect,
    } = props;

    // ---------------------------------- event ----------------------------------
    const onItemSelect = useCallback(item => {
        if(disabled) return;

        // if(item.year !== selectedYear) onChange(item.year);

        onSelect(item.year);
    }, [selectedYear, disabled]);

    // ---------------------------------- function ----------------------------------
    const createRow = useCallback((decades, key) => {
        return (
            <tr key={key}>
                {
                    decades.map(item => {
                        const isDisabled = disabled || item.year > MAX_SAFE_YEAR || item.year < MIN_SAFE_YEAR;
                        const cellClassName = mergeStr({
                            [`${prefixCls}-panel__cell`]: true,
                            [`${prefixCls}__cell`]: true,
                            'is-prev-decade': item.isPrevDecade,
                            'is-next-decade': item.isNextDecade,
                            'is-selected': selectedYear === item.year,
                            'is-disabled': isDisabled,
                        });

                        const onClick = isDisabled ? null : () => onItemSelect(item);

                        return (
                            <td key={item.year} className={cellClassName}>
                                <span className={`${prefixCls}-panel__date ${prefixCls}__date`} onClick={onClick}>
                                    {item.year}
                                </span>
                            </td>
                        )
                    })
                }
            </tr>
        )
    }, [prefixCls, selectedYear, onItemSelect]);

    // ---------------------------------- render chunk ----------------------------------
    const renderTbody = useMemo(() => {
        const decadeTable = createDecadeTable(year);

        return (
            <tbody>
                {
                    decadeTable.map((rowDecades, index) => createRow(rowDecades, index))
                }
            </tbody>
        )
    }, [year, createRow]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={`${prefixCls}-panel__body ${prefixCls}__body`}>
            <table className={`${prefixCls}-panel__table ${prefixCls}__table`} cellSpacing={0}>
                {renderTbody}
            </table>
        </div>
    );
}

YearBody.propTypes = YearBodyProps;
YearBody.defaultProps = YearBodyDefaultProps;

export default YearBody;