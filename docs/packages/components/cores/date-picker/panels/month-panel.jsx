import React, { useCallback, useState, useMemo } from 'react';
import { MonthPanelProps, MonthPanelDefaultProps } from './interface';
import { useDidUpdate, usePuppet, useController } from 'hooks';
import CreatePanel from '../utils/create-panel';
import { createMonthTable, handleDate, MAX_SAFE_YEAR, MIN_SAFE_YEAR } from 'utils/common/date';
import YearPanel from './year-panel';
import { RenderWrapper } from '../../../common';
import { mergeStr } from 'utils/common/base';

const { createConfig } = useController;

function MonthPanel(props) {
    const {
        className,
        defaultValue,
        value,
        disabled,
        onChange,
        onSelect,
        visible,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [
        outerValue,
        innerValue,
        setOuterValue,
        setInnerValue
    ] = usePuppet(defaultValue, value, { onChange, onSelect }, null, disabled, false);

    const year = innerValue ? innerValue.getFullYear() : new Date().getFullYear();
    const isMinYear = MIN_SAFE_YEAR === year,
        isMaxYear = MAX_SAFE_YEAR === year;
    const [yearPanelVisible, setYearPanelVisible] = useState(false);
    const data = useMemo(() => createMonthTable(year), [year]);

    // ---------------------------------- effect ----------------------------------
    useDidUpdate(() => {
        visible && (setInnerValue(value), setYearPanelVisible(false));
    }, [visible], true);

    // ---------------------------------- event ----------------------------------
    const onMonthSelect = useCallback(v => {
        setOuterValue(createConfig({
            value: v,
            event: ['onChange', 'onSelect'],
            shouldTrigger: {
                onChange: (prev, next) => !prev || prev && prev.getTime() !== next.getTime(),
                onSelect: true,
            },
        }))
    }, []);

    const onPrevYear = useCallback(() => {
        if(disabled || isMinYear) return;
        setInnerValue(v => handleDate(new Date(v || new Date()), { year: year - 1 }));
    }, [disabled, year, isMinYear]);

    const onNextYear = useCallback(() => {
        if(disabled || isMaxYear) return;

        setInnerValue(v => handleDate(new Date(v || new Date()), { year: year + 1 }));
    }, [disabled, year, isMaxYear]);

    const onYearSelect = useCallback(selectedDate => {
        setYearPanelVisible(false);
        year !== selectedDate.getFullYear() && setInnerValue(selectedDate);
    }, [year]);

    const onItemSelect = useCallback(item => {
        if(disabled) return;

        onMonthSelect(v => handleDate(new Date(v || new Date()), { year: item.year, month: item.month }));
    }, [disabled]);

    // ---------------------------------- function ----------------------------------
    const cellOption = useCallback(item => {
        const isSelected =
            outerValue
            && outerValue.getFullYear() === item.year
            && outerValue.getMonth() + 1 === item.month;

        return {
            key: `${item.year} - ${item.month}`,
            isSelected,
            onClick: () => onItemSelect(item),
            content: `${item.character}月`,
        }
    }, [outerValue, disabled]);

    // ---------------------------------- render mini chunk ----------------------------------
    const renderSelectContent = useMemo(() => {
        return <a onClick={() => setYearPanelVisible(true)}>{year}</a>;
    }, [year]);

    // ---------------------------------- render ----------------------------------
    return (
        <CreatePanel
            className={prefixCls => mergeStr({
                [`${prefixCls}-month`]: true,
                [className]: className,
            })}
            data={data}
            headerPrev={{
                className: prefixCls => `${prefixCls}__header-prev-year`,
                isDisabled: disabled || isMinYear,
                onClick: onPrevYear,
            }}
            headerNext={{
                className: prefixCls => `${prefixCls}__header-next-year`,
                isDisabled: disabled || isMaxYear,
                onClick: onNextYear,
            }}
            headerSelect={{
                isDisabled: disabled,
                content: renderSelectContent,
            }}
            headerAddon={(
                <RenderWrapper visible={yearPanelVisible}>
                    <YearPanel value={innerValue} onSelect={onYearSelect} disabled={disabled} visible={visible} />
                </RenderWrapper>
            )}
            cellOption={cellOption}
        />
    );
}

MonthPanel.propTypes = MonthPanelProps;
MonthPanel.defaultProps = MonthPanelDefaultProps;

export default MonthPanel;