import React, { useMemo, useCallback } from 'react';
import { ComboboxProps, ComboboxDefaultProps } from './interface';
import { leftPad } from 'utils/common/base';
import { handleDate } from 'utils/common/date';
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
            label: 'am',
            disabled,
        },
        {
            key: 1,
            value: 'pm',
            label: 'pm',
            disabled,
        }
    ]
}

/**
 * Create a date, hour minute second is 0
 * @param date
 */
function createEmptyTime(date) {
    date = date || new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    return date;
}

function Combobox(props) {
    const {
        prefix,
        defaultOpenValue,
        value,
        onChange,
        disabled,
        visible,
        format,
        isAM,
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

    // ---------------------------------- event ----------------------------------
    const onSelect = useCallback((option, index, type) => {
        const selectOptions =  { [type]: option.value };
        const emptyDate = defaultOpenValue
            ?
            new Date(defaultOpenValue)
            :
            handleDate(createEmptyTime(null), selectOptions);
        onChange(v => new Date(handleDate(v || emptyDate, selectOptions)));
    }, [defaultOpenValue, is12Hours, isAM]);

    const onMeridianSelect = useCallback(option => {
        const emptyDate = defaultOpenValue
            ?
            new Date(defaultOpenValue)
            :
            createEmptyTime(null);
        onChange(v => {
            v = v || emptyDate;
            const selectOptions = {'hour': option.value === 'am' ? v.getHours() % 12 : (v.getHours() % 12 + 12)};
            return new Date(handleDate(v, selectOptions));
        })
    }, [onChange, defaultOpenValue]);

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
                prefix={prefix}
                visible={visible}
                selectedIndex={selectedIndex}
                options={options}
                type={'hour'}
                onSelect={onSelect}
                hideDisabledOptions={hideDisabledOptions}
            />
        );
    }, [showHours, is12Hours, prefix, visible, hour, onSelect, disabled, isAM, hourStep, disabledHours, hideDisabledOptions]);

    const renderMinutesSelect = useMemo(() => {
        if(!showMinutes) return null;

        const options = generateOptions(60, minuteStep, disabledMinutes, disabled);
        const selectedIndex = options.findIndex(item => item.value === minute);
        return (
            <Select
                prefix={prefix}
                visible={visible}
                selectedIndex={selectedIndex}
                options={options}
                type={'minute'}
                onSelect={onSelect}
                hideDisabledOptions={hideDisabledOptions}
            />
        );
    }, [showMinutes, prefix, visible, minute, onSelect, disabled, minuteStep, disabledMinutes, hideDisabledOptions]);

    const renderSecondsSelect = useMemo(() => {
        if(!showSeconds) return null;

        const options = generateOptions(60, secondStep, disabledSeconds, disabled);
        const selectedIndex = options.findIndex(item => item.value === second);
        return (
            <Select
                prefix={prefix}
                visible={visible}
                selectedIndex={selectedIndex}
                options={options}
                type={'second'}
                onSelect={onSelect}
                hideDisabledOptions={hideDisabledOptions}
            />
        );
    }, [showSeconds, prefix, visible, second, onSelect, disabled, secondStep, disabledSeconds, hideDisabledOptions]);

    const renderMeridianSelect = useMemo(() => {
        if(!is12Hours) return null;

        const options = meridianOptions(disabled);
        const selectedIndex = isAM ? 0 : 1;
        return (
            <Select
                prefix={prefix}
                visible={visible}
                selectedIndex={selectedIndex}
                options={options}
                type={'meridian'}
                onSelect={onMeridianSelect}
            />
        );
    }, [is12Hours, disabled, isAM, prefix, visible, onMeridianSelect]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={`${prefix}__combobox`}>
            {renderHoursSelect}
            {renderMinutesSelect}
            {renderSecondsSelect}
            {renderMeridianSelect}
            {/*<div className={`${prefix}__mask`} />*/}
        </div>
    );
}

Combobox.propTypes = ComboboxProps;
Combobox.defaultProps = ComboboxDefaultProps;

export default Combobox;