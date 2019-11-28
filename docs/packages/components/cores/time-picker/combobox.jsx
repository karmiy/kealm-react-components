import React from 'react';
import { ComboboxProps, ComboboxDefaultProps } from './interface';
import Select from './select';

function generateOptions(length) {
    const arr = [];
    for(let i = 0; i < length; i++) {
        arr.push(i);
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

    // ---------------------------------- render ----------------------------------
    return (
        <div className={`${prefix}__combobox`}>
            <div className={`${prefix}__mask`} />
            <Select
                prefix={prefix}
                value={value}
                onChange={onChange}
                disabled={disabled}
                options={generateOptions(24)}
            />
            <Select
                prefix={prefix}
                value={value}
                onChange={onChange}
                disabled={disabled}
                options={generateOptions(60)}
            />
            <Select
                prefix={prefix}
                value={value}
                onChange={onChange}
                disabled={disabled}
                options={generateOptions(60)}
            />
        </div>
    );
}

Combobox.propTypes = ComboboxProps;
Combobox.defaultProps = ComboboxDefaultProps;

export default Combobox;