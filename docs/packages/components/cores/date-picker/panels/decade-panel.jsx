import React, { useCallback, useMemo } from 'react';
import { DecadePanelProps, DecadePanelDefaultProps } from './interface';
import { useDidUpdate, usePuppet, useController } from 'hooks';
import CreatePanel from '../utils/create-panel';
import { createCenturyTable, getCenturies, MAX_SAFE_YEAR, MIN_SAFE_YEAR } from 'utils/common/date';
import { mergeStr } from 'utils/common/base';
import { set, startOfDay } from 'date-fns';

const { createConfig } = useController;

function DecadePanel(props) {
    const {
        className,
        defaultValue,
        value,
        disabled,
        onChange,
        onSelect,
        visible,
        disabledDate,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [
        outerValue,
        innerValue,
        setOuterValue,
        setInnerValue
    ] = usePuppet(defaultValue, value, { onChange, onSelect }, null, disabled, false);
    const year = innerValue ? innerValue.getFullYear() : new Date().getFullYear();
    const isMinCentury = getCenturies(MIN_SAFE_YEAR).includes(year),
        isMaxCentury = getCenturies(MAX_SAFE_YEAR).includes(year);
    const centuries = getCenturies(year), startYear = centuries[0], endYear = centuries[centuries.length - 1];
    const data = useMemo(() => createCenturyTable(year), [year]);

    // ---------------------------------- effect ----------------------------------
    useDidUpdate(() => {
        visible && setInnerValue(value);
    }, [visible], true);

    // ---------------------------------- event ----------------------------------

    const onDecadeSelect = useCallback((from, to) => {
        setOuterValue(createConfig({
            value: from,
            event: {
                onChange: [from, to],
                onSelect: [from, to],
            },
            shouldTrigger: {
                onChange: (prev, next) => !prev || prev && prev.getTime() !== next.getTime(),
                onSelect: true,
            },
        }));
    }, []);

    const onPrevCentury = useCallback(() => {
        if(disabled || isMinCentury) return;

        setInnerValue(v => set(v || startOfDay(new Date()), { year: year - 100 }));
    }, [disabled, year, isMinCentury]);

    const onNextCentury = useCallback(() => {
        if(disabled || isMaxCentury) return;

        setInnerValue(v => set(v || startOfDay(new Date()), { year: year + 100 }));
    }, [disabled, year, isMaxCentury]);

    const onItemSelect = useCallback(item => {
        if(disabled) return;

        onDecadeSelect(
            v => set(v || startOfDay(new Date()), { year: item.from }),
            v => set(v || startOfDay(new Date()), { year: item.to })
        );
    }, [disabled]);

    // ---------------------------------- function ----------------------------------
    const cellOption = useCallback(item => {
        const className = mergeStr({
            'is-prev-century': item.isPrevCentury,
            'is-next-century': item.isNextCentury,
        });
        const selectedYear = outerValue && outerValue.getFullYear();

        const isDisabledDecade = disabledDate(
            outerValue ? set(outerValue, {year: item.from}) : startOfDay(set(new Date(), {year: item.from})),
            outerValue ? set(outerValue, {year: item.to}) : startOfDay(set(new Date(), {year: item.to})),
        );
        const isSelected = selectedYear && item.from <= selectedYear && item.to >= selectedYear,
            isDisabled = disabled || item.from > MAX_SAFE_YEAR || item.to < MIN_SAFE_YEAR || isDisabledDecade;

        return {
            key: `${item.from}-${item.to}`,
            className,
            isDisabled,
            isSelected,
            onClick: () => onItemSelect(item),
            content: `${item.from}-${item.to}`,
        }
    }, [outerValue, disabled, disabledDate]);

    return (
        <CreatePanel
            className={prefixCls => mergeStr({
                [`${prefixCls}-decade`]: true,
                [className]: className,
            })}
            data={data}
            headerPrev={{
                className: prefixCls => `${prefixCls}__header-prev-century`,
                isDisabled: disabled || isMinCentury,
                onClick: onPrevCentury,
            }}
            headerNext={{
                className: prefixCls => `${prefixCls}__header-next-century`,
                isDisabled: disabled || isMaxCentury,
                onClick: onNextCentury,
            }}
            headerSelect={{
                isDisabled: disabled,
                content: `${startYear} - ${endYear}`,
            }}
            cellOption={cellOption}
        />
    );
}

DecadePanel.propTypes = DecadePanelProps;
DecadePanel.defaultProps = DecadePanelDefaultProps;

export default DecadePanel;