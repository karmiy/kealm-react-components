import React, { useMemo, useCallback } from 'react';
import { DecadeBodyProps, DecadeBodyDefaultProps } from './interface';
import { createCenturyTable, MAX_SAFE_YEAR, MIN_SAFE_YEAR } from 'utils/common/date';
import { mergeStr } from 'utils/common/base';

function DecadeBody(props) {
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

        onSelect(item.from, item.to);
    }, [disabled]);

    // ---------------------------------- function ----------------------------------
    const createRow = useCallback((centuries, key) => {
        return (
            <tr key={key}>
                {
                    centuries.map(item => {
                        const isDisabled = disabled || item.from > MAX_SAFE_YEAR || item.to < MIN_SAFE_YEAR;
                        const cellClassName = mergeStr({
                            [`${prefixCls}-panel__cell`]: true,
                            [`${prefixCls}__cell`]: true,
                            'is-prev-century': item.isPrevCentury,
                            'is-next-century': item.isNextCentury,
                            'is-selected': item.from <= selectedYear && item.to >= selectedYear,
                            'is-disabled': isDisabled,
                        });

                        const onClick = isDisabled ? null : () => onItemSelect(item);

                        return (
                            <td key={`${item.from}-${item.to}`} className={cellClassName}>
                                <span className={`${prefixCls}-panel__date ${prefixCls}__date`} onClick={onClick}>
                                    {item.from}-{item.to}
                                </span>
                            </td>
                        )
                    })
                }
            </tr>
        )
    }, [prefixCls, onItemSelect, selectedYear]);

    // ---------------------------------- render chunk ----------------------------------
    const renderTbody = useMemo(() => {
        const centuryTable = createCenturyTable(year);

        return (
            <tbody>
                {
                    centuryTable.map((rowCenturies, index) => createRow(rowCenturies, index))
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

DecadeBody.propTypes = DecadeBodyProps;
DecadeBody.defaultProps = DecadeBodyDefaultProps;

export default DecadeBody;