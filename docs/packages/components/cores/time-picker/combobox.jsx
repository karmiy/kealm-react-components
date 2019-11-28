import React, { useMemo } from 'react';
import { ComboboxProps, ComboboxDefaultProps } from './interface';
import Select from './select';

function generateOptions(length) {
    const arr = [];
    for(let i = 0; i < length; i++) {
        arr.push({
            key: i,
            value: `${i}`.padStart(2, '0'),
        });
    }
    return arr;
}

function Combobox(props) {
    const {
        prefix,
        value,
        onChange,
        disabled,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const hour = value ? value.getHours() : 0,
        minute = value ? value.getMinutes() : 0,
        second = value ? value.getSeconds() : 0;

    // ---------------------------------- render chunk ----------------------------------
    const renderHoursSelect = useMemo(() => {
        const options = generateOptions(24);
        const selectedIndex = options.findIndex(item => item.key === hour);
        return (
            <Select
                prefix={prefix}
                selectedIndex={selectedIndex}
                options={options}
            />
        );
    }, [prefix, hour, onChange, disabled]);

    const renderMinutesSelect = useMemo(() => {
        const options = generateOptions(60);
        const selectedIndex = options.findIndex(item => item.key === minute);
        return (
            <Select
                prefix={prefix}
                selectedIndex={selectedIndex}
                options={options}
            />
        );
    }, [prefix, minute, onChange, disabled]);

    const renderSecondsSelect = useMemo(() => {
        const options = generateOptions(60);
        const selectedIndex = options.findIndex(item => item.key === second);
        return (
            <Select
                prefix={prefix}
                selectedIndex={selectedIndex}
                options={options}
            />
        );
    }, [prefix, second, onChange, disabled]);

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