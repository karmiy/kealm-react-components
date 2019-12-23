import React, { useCallback, useState } from 'react';
import { useContextConf, useController, useDidUpdate } from 'hooks';
import { DatePickerProps, DatePickerDefaultProps } from './interface';
import { formatDate } from 'utils/common/date';
import Header from '../parts/header';
import Footer from '../parts/footer';
import Calendar from '../calendar';
import Picker from '../base/picker';
import TimePanel from '../../time-picker/time-panel';
import { RenderWrapper } from '../../../common';
import { mergeStr, isObject, emptyObj } from 'utils/common/base';

const { createConfig } = useController;

function DatePicker(props) {
    const { componentCls } = useContextConf('date-picker');
    const {
        className,
        pickerClassName,
        pickerStyle,
        defaultVisible,
        visible,
        onVisibleChange,
        defaultValue,
        value,
        onChange,
        disabled,
        placeholder,
        showTime,
        format = showTime ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd',
        allowClear,
        size,
        disabledDate,
        ...others
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [isVisible, setIsVisible] = useController(defaultVisible, visible, onVisibleChange, false, disabled);
    const [dateValue, setDateValue] = useController(defaultValue, value, onChange, null, disabled);
    const [timeVisible, setTimeVisible] = useState(false);
    const timePanelProps = isObject(showTime) ? showTime : emptyObj;

    // ---------------------------------- effect ----------------------------------
    useDidUpdate(() => {
        isVisible && setTimeVisible(false);
    }, [isVisible], true);

    // ---------------------------------- event ----------------------------------
    const onClear = useCallback(() => {
        setDateValue(createConfig({
            value: null,
            event: [null, ''],
        }));
    }, []);

    const onDateChange = useCallback((v, toClose = false) => {
        if(toClose) setIsVisible(false);

        if(!v) {
            onClear();
            return;
        }
        setDateValue(createConfig({
            value: v,
            event: [v, formatDate(v, format)],
        }));
    }, [format]);

    const onCalendarSelect = useCallback(selectedDate => {
        !showTime && setIsVisible(false);
        if(dateValue && dateValue.getTime() === selectedDate.getTime())
            return;
        onDateChange(selectedDate);
    }, [dateValue, onDateChange, showTime]);

    const onTimeValueChange = useCallback(v => {
        onDateChange(v)
    }, [onDateChange]);

    const onOk = useCallback(() => setIsVisible(false), []);

    // ---------------------------------- render mini chunk ----------------------------------
    const renderTimeHeader = useCallback(v => {
        return (
            <div className={`${componentCls}-panel__time-header`}>
                {formatDate(v ? v : new Date(), 'yyyy 年 MM 月 dd 日')}
            </div>
        )
    }, [componentCls]);

    // ---------------------------------- render ----------------------------------
    return (
        <Picker
            className={className}
            pickerClassName={mergeStr({
                [componentCls]: true,
                [`${componentCls}--${size}`]: size,
                'is-show-time': showTime,
                [pickerClassName]: pickerClassName,
            })}
            pickerStyle={pickerStyle}
            pickerValue={dateValue ? formatDate(dateValue, format) : ''}
            visible={isVisible}
            onVisibleChange={setIsVisible}
            disabled={disabled}
            placeholder={placeholder}
            allowClear={!!(allowClear && dateValue)}
            onClear={onClear}
            size={size}
            {...others}
        >
            <Header
                value={dateValue}
                disabled={disabled}
                visible={isVisible}
                prefixCls={`${componentCls}-panel`}
                placeholder={placeholder}
                format={format}
                onChange={onDateChange}
            />
            <div className={`${componentCls}-panel__body`}>
                <Calendar
                    value={dateValue}
                    disabled={disabled}
                    visible={isVisible}
                    onSelect={onCalendarSelect}
                    disabledDate={disabledDate}
                />
                <RenderWrapper visible={timeVisible} unmountOnExit>
                    <TimePanel
                        header={renderTimeHeader}
                        value={dateValue}
                        onChange={onTimeValueChange}
                        disabled={disabled}
                        visible={isVisible}
                        format={format}
                        initAsyncScroll={false}
                        {...timePanelProps}
                    />
                </RenderWrapper>
            </div>
            <Footer
                prefixCls={`${componentCls}-panel`}
                disabled={disabled}
                showTime={showTime}
                timeVisible={timeVisible}
                onChange={onDateChange}
                onTimeVisibleChange={setTimeVisible}
                onOk={onOk}
                disabledDate={disabledDate}
            />
        </Picker>
    );
}

DatePicker.propTypes = DatePickerProps;
DatePicker.defaultProps = DatePickerDefaultProps;

export default DatePicker;