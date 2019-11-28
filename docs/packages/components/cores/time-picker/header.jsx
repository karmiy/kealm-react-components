import React, { useState, useCallback } from 'react';
import { HeaderProps, HeaderDefaultProps } from './interface';
import { usePuppet } from 'hooks';
import Input from '../input';
import { formatDate, isValidTime } from 'utils/common/date';

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

    // ---------------------------------- event ----------------------------------
    const onInputChange = useCallback(e => {
        const v = e.target.value;
        setInputValue(v);
        if(isValidTime(v)) {
            // onChange()
        }
    }, []);


    // ---------------------------------- render ----------------------------------
    return (
        <div className={`${prefix}__input-wrap`}>
            <Input value={inputValue} onChange={onInputChange} placeholder={placeholder} size={'small'} />
        </div>
    );
}

Header.propTypes = HeaderProps;
Header.defaultProps = HeaderDefaultProps;

export default Header;