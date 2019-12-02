import React, { useState, useCallback } from 'react';
import { HeaderProps, HeaderDefaultProps } from './interface';
import { useDidUpdate } from 'hooks';
import Input from '../input';
import { formatDate, isValidDate, handleDate, catchFormatOptions } from 'utils/common/date';
import { isEmpty } from 'utils/common/base';

function verifySteps(formatOptions, hourStep = 1, minuteStep = 1, secondStep = 1) {
    const optionSteps = {
        'HH': hourStep,
        'hh': hourStep,
        'mm': minuteStep,
        'ss': secondStep,
    };
    let isPass = true;
    for(let option in formatOptions) {
        if(formatOptions.hasOwnProperty(option)) {
            const value = formatOptions[option];
            if(value % optionSteps[option] !== 0) {
                isPass = false;
                break;
            }
        }
    }
    return isPass;
}

function verifyTimeChanged(prevDate, formatOptions) {
    if(!prevDate) return true;

    let hourChanged = false, minuteChanged = false, secondChanged = false;
    if(!isEmpty(formatOptions['HH']) && formatOptions['HH'] !== prevDate.getHours()) hourChanged = true;
    if(!isEmpty(formatOptions['hh']) && formatOptions['hh'] !== prevDate.getHours()) hourChanged = true;
    if(!isEmpty(formatOptions['mm']) && formatOptions['mm'] !== prevDate.getMinutes()) minuteChanged = true;
    if(!isEmpty(formatOptions['ss']) && formatOptions['ss'] !== prevDate.getSeconds()) secondChanged = true;

    return hourChanged || minuteChanged || secondChanged;
}

function verifyDisabledOptions(formatOptions, disabledHours = [], disabledMinutes = [], disabledSeconds = []) {
    let isPass = true;
    for(let option in formatOptions) {
        if(formatOptions.hasOwnProperty(option)) {
            const value = formatOptions[option];
            switch (option) {
                case 'HH':
                case 'hh':
                    disabledHours.includes(value) && (isPass = false);
                    break;
                case 'mm':
                    disabledMinutes.includes(value) && (isPass = false);
                    break;
                case 'ss':
                    disabledSeconds.includes(value) && (isPass = false);
                    break;
            }
            if(!isPass) break;
        }
    }
    return isPass;
}

function Header(props) {
    const {
        prefix,
        defaultOpenValue,
        value,
        onChange,
        placeholder,
        disabled,
        format,
        isAM,
        hourStep,
        minuteStep,
        secondStep,
        disabledHours,
        disabledMinutes,
        disabledSeconds,
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
        if(!isValidDate(v, format)) return;

        const formatOptions = catchFormatOptions(v, format);

        // am: 12:YY:YY === 00:YY:YY
        if(formatOptions['hh'] === 12) formatOptions['hh'] = 0;

        if(!verifySteps(formatOptions, hourStep, minuteStep, secondStep)) return;

        // hh(pm): XX:YY:YY === HH: (XX+12):YY:YY
        if(!isAM && !isEmpty(formatOptions['hh'])) {
            formatOptions['HH'] = formatOptions['hh'] + 12;
            delete formatOptions['hh'];
        }

        // in disabledOptions ?
        if(!verifyDisabledOptions(formatOptions, disabledHours, disabledMinutes, disabledSeconds)) return;

        // is value changed ?
        const prevValue = value || defaultOpenValue;
        if(!verifyTimeChanged(prevValue, formatOptions)) return;

        onChange(new Date(handleDate(prevValue, formatOptions, true)));
    }, [value, defaultOpenValue, format, isAM, hourStep, minuteStep, secondStep, disabledHours, disabledMinutes, disabledSeconds]);


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