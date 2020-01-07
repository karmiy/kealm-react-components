import React, { useState, useCallback, useMemo } from 'react';
import { RangeHeaderProps, RangeHeaderDefaultProps } from './interface';
import { useDidUpdate } from 'hooks';
import Input from '../../input';
import { parseDate, formatDate, sortDates } from 'utils/common/date';
import { isValid, isEqual, startOfDay } from 'date-fns';
import {isFunction, isObject, noop} from "utils/common/base";

const { RangeInput } = Input;

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

function verifyDisabledDate(date, disabledDate) {
    return !disabledDate(date);
}

function verifyDisabledTime(date, disabledTime, nextRange, type) {
    if(!isFunction(disabledTime)) return true;

    const disabledTimeOptions = disabledTime(nextRange, type);
    if(!isObject(disabledTimeOptions)) return true;

    const { disabledHours = noop, disabledMinutes = noop, disabledSeconds = noop } = disabledTimeOptions;
    const selectedHours = date.getHours(),
        selectedMinutes = date.getMinutes(),
        selectedSeconds = date.getSeconds();
    return !disabledHours().includes(selectedHours)
        && !disabledMinutes(selectedHours).includes(selectedMinutes)
        && !disabledSeconds(selectedHours, selectedMinutes).includes(selectedSeconds);
}

function  RangeHeader(props) {
    const {
        prefixCls,
        defaultOpenValue,
        value,
        onChange,
        startPlaceholder,
        endPlaceholder,
        disabled,
        format,
        visible,
        hourStep,
        minuteStep,
        secondStep,
        disabledDate,
        disabledTime,
        // disabledHours,
        // disabledMinutes,
        // disabledSeconds,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const rangeValue = useMemo(() => sortDates(value.filter(v => !!v)), [value]);
    const [inputValue, setInputValue] = useState(rangeValue.map(item => formatDate(item, format)));
    const defaultPickerValue = useMemo(() => sortDates(defaultOpenValue.filter(v => !!v)), [defaultOpenValue])

    // ---------------------------------- effect ----------------------------------
    useDidUpdate(() => {
        setInputValue(rangeValue.map(item => formatDate(item, format)));
    }, [value], true);

    useDidUpdate(() => {
        visible && setInputValue(rangeValue.map(item => formatDate(item, format)));
    }, [visible], true);

    // ---------------------------------- function ----------------------------------
    const isValidValue = useCallback((prevDate, nextDate, nextRange, type) => {
        // is format error ?
        if(!isValid(nextDate)) return false;

        // is step error ?
        if(!verifySteps(nextDate, hourStep, minuteStep, secondStep)) return false;

        // in disabledOptions ?
        if(!verifyDisabledDate(nextDate, disabledDate)) return false;
        if(!verifyDisabledTime(nextDate, disabledTime, nextRange, type)) return false;
        // if(!verifyDisabledOptions(nextDate, disabledHours, disabledMinutes, disabledSeconds)) return false;

        // is value changed ?
        // if(isEqual(prevDate, nextDate)) return false;

        return true;
    }, [hourStep, minuteStep, secondStep, disabledDate]);

    // ---------------------------------- event ----------------------------------
    const onInputChange = useCallback((e1, e2) => {
        const v1 = e1.target.value, v2 = e2.target.value;
        setInputValue([v1, v2]);

        if(v1 === '' && v2 === '') {
            onChange([]);
            return;
        }

        if(v1 === '' || v2 === '') return;

        const prevDate1 = rangeValue[0] || defaultPickerValue[0] || null,
            prevDate2 = rangeValue[1] || defaultPickerValue[1] || null;

        const nextDate1 = parseDate(v1, format, prevDate1 || startOfDay(new Date())),
            nextDate2 = parseDate(v2, format, prevDate2 || startOfDay(new Date()));

        if(!isValidValue(prevDate1, nextDate1, [nextDate1, nextDate2], 'start')
            || !isValidValue(prevDate2, nextDate2, [nextDate1, nextDate2], 'end')) return;

        // is value changed ?
        if(isEqual(prevDate1, nextDate1) && isEqual(prevDate2, nextDate2)) return false;

        onChange([nextDate1, nextDate2]);
    }, [rangeValue, defaultPickerValue, onChange, format, hourStep, minuteStep, secondStep]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={`${prefixCls}__input-wrap`}>
            <RangeInput
                value={inputValue}
                onChange={onInputChange}
                startPlaceholder={startPlaceholder}
                endPlaceholder={endPlaceholder}
                disabled={disabled}
                size={'small'}
            />
        </div>
    );
}

RangeHeader.propTypes = RangeHeaderProps;
RangeHeader.defaultProps = RangeHeaderDefaultProps;

export default RangeHeader;