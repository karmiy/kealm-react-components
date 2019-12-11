import React, { useState, useCallback } from 'react';
import { HeaderProps, HeaderDefaultProps } from './interface';
import { useDidUpdate } from 'hooks';
import Input from '../input';
import { catchFormatOptions, formatDate, isValidDate, handleDate } from 'utils/common/date';
import { isEmpty } from 'utils/common/base';

function verifyDateChanged(prevDate, formatOptions) {
    if(!prevDate) return true;

    let yearChanged = false, monthChanged = false, dateChanged = false;
    if(!isEmpty(formatOptions['YYYY']) && formatOptions['YYYY'] !== prevDate.getFullYear()) yearChanged = true;
    if(!isEmpty(formatOptions['MM']) && formatOptions['MM'] !== prevDate.getMonth() + 1) monthChanged = true;
    if(!isEmpty(formatOptions['DD']) && formatOptions['DD'] !== prevDate.getDate()) dateChanged = true;

    return yearChanged || monthChanged || dateChanged;
}

function  Header(props) {
    const {
        prefixCls,
        value,
        onChange,
        placeholder,
        disabled,
        format,
        visible,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [inputValue, setInputValue] = useState(value ? formatDate(value, format) : '');

    // ---------------------------------- effect ----------------------------------
    useDidUpdate(() => {
        setInputValue(value ? formatDate(value, format) : '');
    }, [value], true);

    useDidUpdate(() => {
        visible && setInputValue(value ? formatDate(value, format) : '');
    }, [visible], true);

    // ---------------------------------- event ----------------------------------
    const onInputChange = useCallback(e => {
        const v = e.target.value;
        setInputValue(v);

        if(v === '') {
            onChange(null);
            return;
        }

        if(!isValidDate(v, format)) return;

        const formatOptions = catchFormatOptions(v, format);

        // is value changed ?
        if(!verifyDateChanged(value, formatOptions)) return;

        onChange(new Date(handleDate(value, formatOptions, true)));
    }, [value, onChange, format]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={`${prefixCls}-panel__input-wrap`}>
            <Input value={inputValue} onChange={onInputChange} placeholder={placeholder} disabled={disabled} size={'small'} />
        </div>
    );
}

Header.propTypes = HeaderProps;
Header.defaultProps = HeaderDefaultProps;

export default Header;