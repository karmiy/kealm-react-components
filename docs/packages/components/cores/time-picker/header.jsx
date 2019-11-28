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
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [inputValue, setInputValue] = useState(value ? formatDate(value, 'HH:mm:ss') : '');

    // ---------------------------------- effect ----------------------------------
    useDidUpdate(() => {
        setInputValue(value ? formatDate(value, 'HH:mm:ss') : '');
    }, [value], true);

    // ---------------------------------- event ----------------------------------
    const onInputChange = useCallback(e => {
        const v = e.target.value;
        setInputValue(v);
        isValidTime(v) && onChange(new Date(setTime(value, v)));
    }, [value, onChange]);


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