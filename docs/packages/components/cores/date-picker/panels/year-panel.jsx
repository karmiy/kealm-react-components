import React, { useCallback, useState, useMemo } from 'react';
import { YearPanelProps, YearPanelDefaultProps } from './interface';
import { useDidUpdate, usePuppet, useController } from 'hooks';
import CreatePanel from '../utils/create-panel';
import { createDecadeTable, getDecades, MAX_SAFE_YEAR, MIN_SAFE_YEAR } from 'utils/common/date';
import DecadePanel from './decade-panel';
import { RenderWrapper } from '../../../common';
import { mergeStr } from 'utils/common/base';
import { set, startOfDay } from 'date-fns';

const { createConfig } = useController;

function YearPanel(props) {
    const {
        className,
        defaultValue,
        defaultPickerValue,
        value,
        disabled,
        onChange,
        onSelect,
        onPanelChange,
        visible,
        disabledDate,
        disabledDecade,
        disabledArrow,
        hiddenDisabledArrow,
        dateRender,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [
        outerValue,
        innerValue,
        setOuterValue,
        setInnerValue
    ] = usePuppet(defaultValue, value, { onChange, onSelect }, null, disabled, false);

    const year = innerValue ? innerValue.getFullYear() : (defaultPickerValue ? defaultPickerValue.getFullYear() : new Date().getFullYear());
    const isMinDecade = getDecades(MIN_SAFE_YEAR).includes(year),
        isMaxDecade = getDecades(MAX_SAFE_YEAR).includes(year);
    const [decadePanelVisible, setDecadePanelVisible] = useState(false);
    const decades = getDecades(year), startYear = decades[0], endYear = decades[decades.length - 1];
    const data = useMemo(() => createDecadeTable(year), [year]);

    const isDisabledPrevArrow = disabledArrow(innerValue || defaultPickerValue || startOfDay(new Date()), 'prev-decade'),
        isDisabledNextArrow = disabledArrow(innerValue || defaultPickerValue || startOfDay(new Date()), 'next-decade');

    // ---------------------------------- effect ----------------------------------
    useDidUpdate(() => {
        visible && (setInnerValue(value), setDecadePanelVisible(false));
    }, [visible], true);

    useDidUpdate(() => onPanelChange(innerValue), [innerValue]);

    // ---------------------------------- event ----------------------------------
    const onYearSelect = useCallback(v => {
        setOuterValue(createConfig({
            value: v,
            event: ['onChange', 'onSelect'],
            shouldTrigger: {
                onChange: (prev, next) => !prev || prev && prev.getTime() !== next.getTime(),
                onSelect: true,
            },
        }))
    }, []);

    const onPrevDecade = useCallback(() => {
        setInnerValue(v => set(v || defaultPickerValue || startOfDay(new Date()), { year: year - 10 }));
    }, [year, defaultPickerValue]);

    const onNextDecade = useCallback(() => {
        setInnerValue(v => set(v || defaultPickerValue || startOfDay(new Date()), { year: year + 10 }));
    }, [year, defaultPickerValue]);

    const onDecadeSelect = useCallback(selectedDate => {
        setDecadePanelVisible(false);
        year !== selectedDate.getFullYear() && setInnerValue(selectedDate);
    }, [year]);

    const onItemSelect = useCallback(item => {
        if(disabled) return;

        onYearSelect(v => set(v || defaultPickerValue || startOfDay(new Date()), { year: item.year }));
    }, [disabled, defaultPickerValue]);

    // ---------------------------------- function ----------------------------------
    const cellOption = useCallback(item => {
        const className = mergeStr({
            'is-prev-decade': item.isPrevDecade,
            'is-next-decade': item.isNextDecade,
        });
        const currentDate = outerValue || defaultPickerValue
            ? set(outerValue || defaultPickerValue, {year: item.year})
            : startOfDay(set(new Date(), {year: item.year}));

        const isDisabledYear = disabledDate(currentDate);
        const isSelected = outerValue && outerValue.getFullYear() === item.year,
            isDisabled = disabled || item.year > MAX_SAFE_YEAR || item.year < MIN_SAFE_YEAR || isDisabledYear;

        const contentRender = dateRender ? dateRender(currentDate) : null;

        return {
            key: item.year,
            className,
            isDisabled,
            isSelected,
            onClick: () => onItemSelect(item),
            content: item.year,
            contentRender,
        }
    }, [outerValue, disabled, disabledDate, dateRender]);

    // ---------------------------------- render mini chunk ----------------------------------
    const renderSelectContent = useMemo(() => {
        return <a onClick={() => setDecadePanelVisible(true)}>{startYear} - {endYear}</a>;
    }, [startYear, endYear]);

    // ---------------------------------- render ----------------------------------
    return (
        <CreatePanel
            className={prefixCls => mergeStr({
                [`${prefixCls}-year`]: true,
                [className]: className,
            })}
            data={data}
            headerPrev={{
                className: prefixCls => `${prefixCls}__header-prev-decade`,
                isDisabled: disabled || isMinDecade || isDisabledPrevArrow,
                onClick: onPrevDecade,
                hiddenDisabledArrow,
            }}
            headerNext={{
                className: prefixCls => `${prefixCls}__header-next-decade`,
                isDisabled: disabled || isMaxDecade || isDisabledNextArrow,
                onClick: onNextDecade,
                hiddenDisabledArrow,
            }}
            headerSelect={{
                isDisabled: disabled,
                content: renderSelectContent,
            }}
            headerAddon={(
                <RenderWrapper visible={decadePanelVisible}>
                    <DecadePanel
                        defaultPickerValue={defaultPickerValue}
                        value={innerValue}
                        onSelect={onDecadeSelect}
                        disabled={disabled}
                        disabledDate={disabledDecade}
                        visible={visible}
                    />
                </RenderWrapper>
            )}
            cellOption={cellOption}
        />
    );
}

YearPanel.propTypes = YearPanelProps;
YearPanel.defaultProps = YearPanelDefaultProps;

export default YearPanel;