import React, { useMemo, useCallback } from 'react';
import { ComboboxProps, ComboboxDefaultProps } from './interface';
import { leftPad } from 'utils/common/base';
import { setTime, setTimeOption } from 'utils/common/date';
import Select from './select';

function generateOptions(length, disabled = false) {
    const arr = [];
    for(let i = 0; i < length; i++) {
        arr.push({
            key: i,
            value: leftPad(i, 2, '0'),
            disabled,
        });
    }
    return arr;
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
    } = props;

    // ---------------------------------- variable ----------------------------------
    const hour = value ? value.getHours() : (defaultOpenValue ? defaultOpenValue.getHours() : 0),
        minute = value ? value.getMinutes() : (defaultOpenValue ? defaultOpenValue.getMinutes() : 0),
        second = value ? value.getSeconds() : (defaultOpenValue ? defaultOpenValue.getSeconds() : 0);

    // ---------------------------------- function ----------------------------------
    const onSelect = useCallback((option, index, type) => {
        const emptyDate = defaultOpenValue
            ?
            new Date(defaultOpenValue)
            :
            setTimeOption(createEmptyTime(null), option.key, type);
        onChange(v => new Date(setTimeOption(v || emptyDate, option.key, type)));
    }, [defaultOpenValue]);

    // ---------------------------------- render chunk ----------------------------------
    const renderHoursSelect = useMemo(() => {
        const options = generateOptions(24, disabled);
        const selectedIndex = options.findIndex(item => item.key === hour);
        return (
            <Select
                prefix={prefix}
                visible={visible}
                selectedIndex={selectedIndex}
                options={options}
                type={'hour'}
                onSelect={onSelect}
            />
        );
    }, [prefix, visible, hour, onChange, disabled]);

    const renderMinutesSelect = useMemo(() => {
        const options = generateOptions(60, disabled);
        const selectedIndex = options.findIndex(item => item.key === minute);
        return (
            <Select
                prefix={prefix}
                visible={visible}
                selectedIndex={selectedIndex}
                options={options}
                type={'minute'}
                onSelect={onSelect}
            />
        );
    }, [prefix, visible, minute, onChange, disabled]);

    const renderSecondsSelect = useMemo(() => {
        const options = generateOptions(60, disabled);
        const selectedIndex = options.findIndex(item => item.key === second);
        return (
            <Select
                prefix={prefix}
                visible={visible}
                selectedIndex={selectedIndex}
                options={options}
                type={'second'}
                onSelect={onSelect}
            />
        );
    }, [prefix, visible, second, onChange, disabled]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={`${prefix}__combobox`}>
            {renderHoursSelect}
            {renderMinutesSelect}
            {renderSecondsSelect}
            {/*<div className={`${prefix}__mask`} />*/}
        </div>
    );
}

Combobox.propTypes = ComboboxProps;
Combobox.defaultProps = ComboboxDefaultProps;

export default Combobox;