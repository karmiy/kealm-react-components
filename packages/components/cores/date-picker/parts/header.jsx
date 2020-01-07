import React, { useState, useCallback } from 'react';
import { HeaderProps, HeaderDefaultProps } from './interface';
import { useDidUpdate } from 'hooks';
import Input from '../../input';
import { parseDate, formatDate } from 'utils/common/date';
import { isValid, isEqual, startOfDay } from 'date-fns';
import { isObject, noop, isFunction } from 'utils/common/base';

function verifySteps(date, hourStep = 1, minuteStep = 1, secondStep = 1) {
    return date.getHours() % hourStep === 0
        && date.getMinutes() % minuteStep === 0
        && date.getSeconds() % secondStep === 0;
}

function verifyDisabledDate(date, disabledDate) {
    return !disabledDate(date);
}

function verifyDisabledTime(date, disabledTime) {
    if(!isFunction(disabledTime)) return true;

    const disabledTimeOptions = disabledTime(date);
    if(!isObject(disabledTimeOptions)) return true;

    const { disabledHours = noop, disabledMinutes = noop, disabledSeconds = noop } = disabledTimeOptions;
    const selectedHours = date.getHours(),
        selectedMinutes = date.getMinutes(),
        selectedSeconds = date.getSeconds();
    return !disabledHours().includes(selectedHours)
        && !disabledMinutes(selectedHours).includes(selectedMinutes)
        && !disabledSeconds(selectedHours, selectedMinutes).includes(selectedSeconds);
}

function  Header(props) {
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
        disabledDate,
        disabledTime,
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

        const prevDate = value || null;
        const nextDate = parseDate(v, format, prevDate || defaultOpenValue || startOfDay(new Date()));
        // is format error ?
        if(!isValid(nextDate)) return;

        // is step error ?
        if(!verifySteps(nextDate, hourStep, minuteStep, secondStep)) return;

        // in disabledOptions ?
        if(!verifyDisabledDate(nextDate, disabledDate)) return;
        if(!verifyDisabledTime(nextDate, disabledTime)) return;

        // is value changed ?
        if(isEqual(prevDate, nextDate)) return;

        onChange(nextDate);
    }, [value, defaultOpenValue, onChange, format, hourStep, minuteStep, secondStep, disabledDate, disabledTime]);

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