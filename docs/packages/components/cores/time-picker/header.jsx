import React, { useState, useCallback } from 'react';
import { HeaderProps, HeaderDefaultProps } from './interface';
import { useDidUpdate } from 'hooks';
import Input from '../input';
import { formatDate, isValidTime, setTime } from 'utils/common/date';

function Header(props) {
    const {
        prefix,
        value,
        onChange,
        placeholder,
        disabled,
        format,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [inputValue, setInputValue] = useState(value ? formatDate(value, format) : '');

    // ---------------------------------- effect ----------------------------------
    useDidUpdate(() => {
        setInputValue(value ? formatDate(value, format) : '');
    }, [value], true);

    // ---------------------------------- event ----------------------------------
    const onInputChange = useCallback(e => {
        const v = e.target.value;
        setInputValue(v);
        isValidTime(v, format) && onChange(new Date(setTime(value, v)));
    }, [value, format]);


    // ---------------------------------- render ----------------------------------
    return (
        <div className={`${prefix}__input-wrap`}>
            <Input value={inputValue} onChange={onInputChange} placeholder={placeholder} disabled={disabled} size={'small'} />
        </div>
    );
}

Header.propTypes = HeaderProps;
Header.defaultProps = HeaderDefaultProps;

export default Header;