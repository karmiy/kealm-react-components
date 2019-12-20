import React, { useState, useCallback } from 'react';
import { RangeHeaderProps, RangeHeaderDefaultProps } from './interface';
import { useDidUpdate } from 'hooks';
import Input from '../../input';
import { parseDate, formatDate, sortDates } from 'utils/common/date';
import { isValid, isEqual, startOfDay } from 'date-fns';

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
        disabledHours,
        disabledMinutes,
        disabledSeconds,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [inputValue, setInputValue] = useState(sortDates(value.filter(v => !!v)).map(item => formatDate(item, format)));

    // ---------------------------------- effect ----------------------------------
    useDidUpdate(() => {
        setInputValue(sortDates(value.filter(v => !!v)).map(item => formatDate(item, format)));
    }, [value], true);

    useDidUpdate(() => {
        visible && setInputValue(sortDates(value.filter(v => !!v)).map(item => formatDate(item, format)));
    }, [visible], true);

    // ---------------------------------- function ----------------------------------
    const isValidValue = useCallback((prevDate, nextDate) => {
        // is format error ?
        if(!isValid(nextDate)) return false;

        // is step error ?
        if(!verifySteps(nextDate, hourStep, minuteStep, secondStep)) return false;

        // in disabledOptions ?
        if(!verifyDisabledOptions(nextDate, disabledHours, disabledMinutes, disabledSeconds)) return false;

        // is value changed ?
        // if(isEqual(prevDate, nextDate)) return false;

        return true;
    }, [value, defaultOpenValue, format, hourStep, minuteStep, secondStep, disabledHours, disabledMinutes, disabledSeconds]);

    // ---------------------------------- event ----------------------------------
    const onInputChange = useCallback((e1, e2) => {
        const v1 = e1.target.value, v2 = e2.target.value;
        setInputValue([v1, v2]);

        if(v1 === '' && v2 === '') {
            onChange([]);
            return;
        }

        if(v1 === '' || v2 === '') return;

        const prevDate1 = value[0] || defaultOpenValue[0] || null,
            prevDate2 = value[1] || defaultOpenValue[1] || null;

        const nextDate1 = parseDate(v1, format, prevDate1 || startOfDay(new Date())),
            nextDate2 = parseDate(v2, format, prevDate2 || startOfDay(new Date()));

        if(!isValidValue(prevDate1, nextDate1) || !isValidValue(prevDate2, nextDate2)) return;

        // is value changed ?
        if(isEqual(prevDate1, nextDate1) && isEqual(prevDate2, nextDate2)) return false;

        onChange([nextDate1, nextDate2]);
    }, [value, defaultOpenValue, onChange, format, hourStep, minuteStep, secondStep, disabledHours, disabledMinutes, disabledSeconds]);

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