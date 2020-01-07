import React, { useState, useCallback } from 'react';
import { HeaderProps, HeaderDefaultProps } from './interface';
import { useDidUpdate } from 'hooks';
import Input from '../input';
import { formatDate, parseDate } from 'utils/common/date';
import { isValid, isEqual } from 'date-fns';

function verifySteps(date, hourStep = 1, minuteStep = 1, secondStep = 1) {
    return date.getHours() % hourStep === 0
        && date.getMinutes() % minuteStep === 0
        && date.getSeconds() % secondStep === 0;
}

function verifyDisabledOptions(date, disabledHours = [], disabledMinutes = [], disabledSeconds = []) {
    return !disabledHours.includes(date.getHours())
        && !disabledMinutes.includes(date.getMinutes())
        && !disabledSeconds.includes(date.getSeconds());
}

function Header(props) {
    const {
        prefixCls,
        defaultOpenValue,
        value,
        onChange,
        placeholder,
        disabled,
        format,
        visible,
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

        const prevDate = value || defaultOpenValue || new Date();
        const nextDate = parseDate(v, format, prevDate);
        // is format error ?
        if(!isValid(nextDate)) return;

        // is step error ?
        if(!verifySteps(nextDate, hourStep, minuteStep, secondStep)) return;

        // in disabledOptions ?
        if(!verifyDisabledOptions(nextDate, disabledHours, disabledMinutes, disabledSeconds)) return;

        // is value changed ?
        if(isEqual(prevDate, nextDate)) return;

        onChange(nextDate);

    }, [value, defaultOpenValue, onChange, format, hourStep, minuteStep, secondStep, disabledHours, disabledMinutes, disabledSeconds]);


    // ---------------------------------- render ----------------------------------
    return (
        <div className={`${prefixCls}__input-wrap`}>
            <Input value={inputValue} onChange={onInputChange} placeholder={placeholder} disabled={disabled} size={'small'} />
        </div>
    );
}

Header.propTypes = HeaderProps;
Header.defaultProps = HeaderDefaultProps;

export default Header;