import React, { useMemo, useCallback } from 'react';
import { ComboboxProps, ComboboxDefaultProps } from './interface';
import { leftPad } from 'utils/common/base';
import { set, startOfDay } from 'date-fns';
import Select from './select';

function generateOptions(length, step = 1, disabledOptions = [], disabled = false) {
    const arr = [];
    for(let i = 0; i < length; i++) {
        if(i % step !== 0) continue;

        arr.push({
            key: i,
            value: i,
            label: leftPad(i, 2, '0'),
            disabled: disabled || disabledOptions.includes(i),
        });
    }
    return arr;
}

/**
 * 12 hours system
 * @param isAM
 * @param step
 * @param disabledOptions
 * @param disabled
 * @returns {[]}
 */
function twelveHoursOptions(isAM = true, step = 1, disabledOptions = [], disabled = false) {
    const arr = [];
    for(let i = 0; i < 12; i++) {
        if(i % step !== 0) continue;

        const value = isAM ? i : i + 12;
        arr.push({
            key: i,
            value,
            label: leftPad(i === 0 ? 12 : i, 2, '0'),
            disabled: disabled || disabledOptions.includes(value),
        });
    }
    return arr;
}

/**
 * AM / PM
 * @param disabled
 * @returns {*[]}
 */
function meridianOptions(disabled = false) {
    return [
        {
            key: 0,
            value: 'am',
            label: 'AM',
            disabled,
        },
        {
            key: 1,
            value: 'pm',
            label: 'PM',
            disabled,
        }
    ]
}

function Combobox(props) {
    const {
        prefixCls,
        defaultOpenValue,
        value,
        onChange,
        disabled,
        visible,
        format,
        hourStep,
        minuteStep,
        secondStep,
        disabledHours,
        disabledMinutes,
        disabledSeconds,
        hideDisabledOptions,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const hour = value ? value.getHours() : (defaultOpenValue ? defaultOpenValue.getHours() : 0),
        minute = value ? value.getMinutes() : (defaultOpenValue ? defaultOpenValue.getMinutes() : 0),
        second = value ? value.getSeconds() : (defaultOpenValue ? defaultOpenValue.getSeconds() : 0);
    const showHours = format.includes('HH') || format.includes('hh'),
        showMinutes = format.includes('mm'),
        showSeconds = format.includes('ss');
    const is12Hours = format.includes('hh');
    const isAM = value ? value.getHours() < 12 : (defaultOpenValue ? defaultOpenValue.getHours() < 12 : true); // am or pm for hh

    // ---------------------------------- event ----------------------------------
    const onSelect = useCallback((option, index, type) => {
        const selectOptions =  { [type]: option.value };
        const emptyDate = defaultOpenValue
            ?
            new Date(defaultOpenValue)
            :
            set(startOfDay(new Date()), selectOptions);
        onChange(set(value || emptyDate, selectOptions));
    }, [value, onChange, defaultOpenValue, is12Hours, isAM]);

    const onMeridianSelect = useCallback(option => {
        const emptyDate = defaultOpenValue
            ?
            new Date(defaultOpenValue)
            :
            startOfDay(new Date());
        const nextDate = value || emptyDate;
        const selectOptions = {'hours': option.value === 'am' ? nextDate.getHours() % 12 : (nextDate.getHours() % 12 + 12)};
        onChange(set(nextDate, selectOptions))
    }, [value, onChange, defaultOpenValue]);

    // ---------------------------------- render chunk ----------------------------------
    const renderHoursSelect = useMemo(() => {
        if(!showHours) return null;

        const options = is12Hours
            ?
            twelveHoursOptions(isAM, hourStep, disabledHours, disabled)
            :
            generateOptions(24, hourStep, disabledHours, disabled);
        const selectedIndex = options.findIndex(item => item.value === hour);
        return (
            <Select
                prefixCls={prefixCls}
                visible={visible}
                selectedIndex={selectedIndex}
                options={options}
                type={'hours'}
                onSelect={onSelect}
                hideDisabledOptions={hideDisabledOptions}
            />
        );
    }, [showHours, is12Hours, prefixCls, visible, hour, onSelect, disabled, isAM, hourStep, disabledHours, hideDisabledOptions]);

    const renderMinutesSelect = useMemo(() => {
        if(!showMinutes) return null;

        const options = generateOptions(60, minuteStep, disabledMinutes, disabled);
        const selectedIndex = options.findIndex(item => item.value === minute);
        return (
            <Select
                prefixCls={prefixCls}
                visible={visible}
                selectedIndex={selectedIndex}
                options={options}
                type={'minutes'}
                onSelect={onSelect}
                hideDisabledOptions={hideDisabledOptions}
            />
        );
    }, [showMinutes, prefixCls, visible, minute, onSelect, disabled, minuteStep, disabledMinutes, hideDisabledOptions]);

    const renderSecondsSelect = useMemo(() => {
        if(!showSeconds) return null;

        const options = generateOptions(60, secondStep, disabledSeconds, disabled);
        const selectedIndex = options.findIndex(item => item.value === second);
        return (
            <Select
                prefixCls={prefixCls}
                visible={visible}
                selectedIndex={selectedIndex}
                options={options}
                type={'seconds'}
                onSelect={onSelect}
                hideDisabledOptions={hideDisabledOptions}
            />
        );
    }, [showSeconds, prefixCls, visible, second, onSelect, disabled, secondStep, disabledSeconds, hideDisabledOptions]);

    const renderMeridianSelect = useMemo(() => {
        if(!is12Hours) return null;

        const options = meridianOptions(disabled);
        const selectedIndex = isAM ? 0 : 1;
        return (
            <Select
                prefixCls={prefixCls}
                visible={visible}
                selectedIndex={selectedIndex}
                options={options}
                type={'meridian'}
                onSelect={onMeridianSelect}
            />
        );
    }, [is12Hours, disabled, isAM, prefixCls, visible, onMeridianSelect]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={`${prefixCls}__combobox`}>
            {renderHoursSelect}
            {renderMinutesSelect}
            {renderSecondsSelect}
            {renderMeridianSelect}
            {/*<div className={`${prefixCls}__mask`} />*/}
        </div>
    );
}

Combobox.propTypes = ComboboxProps;
Combobox.defaultProps = ComboboxDefaultProps;

export default Combobox;