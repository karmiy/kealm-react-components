import React, { useCallback, useState, useMemo } from 'react';
import { useContextConf, useController, useDidUpdate } from 'hooks';
import { RangePickerProps, RangePickerDefaultProps } from './interface';
import { formatDate, sortDates } from 'utils/common/date';
import Picker from '../base/picker';
import RangeCalendar from '../range';
import RangeHeader from '../parts/range-header';
import Footer from '../parts/footer';
import TimePanel from '../../time-picker/time-panel';
import { RenderWrapper } from '../../../common';
import {mergeStr, isObject, emptyObj} from 'utils/common/base';
import { isSameRange } from '../range/range-calendar';
import Header from "./date-picker";

const { createConfig } = useController;

/*function formatRangeDate(rangeDate = []) {
    if(!rangeDate || !rangeDate.length) return '';

    const dateStr = '';

}*/

function RangePicker(props) {
    const { componentCls } = useContextConf('range-picker'),
        { componentCls: commonCls } = useContextConf('date-picker');
    const {
        className,
        pickerClassName,
        pickerStyle,
        defaultVisible,
        visible,
        onVisibleChange,
        defaultValue,
        defaultPickerValue,
        value,
        onChange,
        onPanelChange,
        onOk: _onOk,
        disabled,
        showTime,
        format = showTime ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd',
        allowClear,
        startPlaceholder,
        endPlaceholder,
        size,
        disabledDate,
        disabledTime,
        renderExtraFooter,
        dateRender,
        suffixIcon,
        ...others
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [isVisible, setIsVisible] = useController(defaultVisible, visible, onVisibleChange, false, disabled);
    const [rangeValue, setRangeValue] = useController(defaultValue, value, onChange, [], disabled);

    const _rangeValue = useMemo(() => sortDates(rangeValue.filter(v => !!v)), [rangeValue]);

    const pickerValue = _rangeValue.map(item => formatDate(item, format));

    const [timeVisible, setTimeVisible] = useState(false);
    const timePanelProps = isObject(showTime) ? showTime : emptyObj;

    const disabledLeftTimeOptions = disabledTime(rangeValue, 'start'),
        disabledRightTimeOptions = disabledTime(rangeValue, 'end');
    const timePanelDisabledLeftOptions = isObject(disabledLeftTimeOptions) ? disabledLeftTimeOptions : emptyObj,
        timePanelDisabledRightOptions = isObject(disabledRightTimeOptions) ? disabledRightTimeOptions : emptyObj;

    const { hourStep, minuteStep, secondStep } = timePanelProps;

    // Common defaultPickerValue
    const _defaultPickerValue = timePanelProps.defaultOpenValue
                                ?
                                [timePanelProps.defaultOpenValue, timePanelProps.defaultOpenValue]
                                : [];
    if(defaultPickerValue) {
        const plainPickerValue = sortDates(defaultPickerValue.filter(v => !!v));
        plainPickerValue[0] && (_defaultPickerValue[0] = plainPickerValue[0]);
        plainPickerValue[1] && (_defaultPickerValue[1] = plainPickerValue[1]);
    }

    // ---------------------------------- effect ----------------------------------
    useDidUpdate(() => {
        isVisible && setTimeVisible(false);
    }, [isVisible], true);

    // ---------------------------------- event ----------------------------------
    const onClear = useCallback(() => {
        setRangeValue(createConfig({
            value: [],
            event: [[], ['', '']],
        }));
    }, []);

    const onRangeChange = useCallback((rangeV, toClose = false) => {
        if(toClose) setIsVisible(false);

        if(!rangeV.length) {
            onClear();
            return;
        }
        setRangeValue(createConfig({
            value: rangeV,
            event: [rangeV, [formatDate(rangeV[0], format), formatDate(rangeV[1], format)]],
        }));
    }, [format]);

    const onRangeCalendarSelect = useCallback(selectedRange => {
        !showTime && setIsVisible(false);
        if(isSameRange(rangeValue, selectedRange)) return;

        onRangeChange(selectedRange);
    }, [rangeValue, onRangeChange, showTime]);

    const onLeftTimeValueChange = useCallback(v => {
        onRangeChange([v, _rangeValue[1]]);
    }, [_rangeValue, onRangeChange]);

    const onRightTimeValueChange = useCallback(v => {
        onRangeChange([_rangeValue[0], v]);
    }, [_rangeValue, onRangeChange]);

    const onOk = useCallback(() => {
        _onOk();
        setIsVisible(false);
    }, [_onOk]);

    // ---------------------------------- render mini chunk ----------------------------------
    const renderTimeHeader = useCallback(v => {
        return (
            <div className={`${componentCls}-panel__time-header`}>
                {formatDate(v ? v : new Date(), 'yyyy 年 MM 月 dd 日')}
            </div>
        )
    }, [componentCls]);

    const renderFooter = useMemo(() => renderExtraFooter(_rangeValue, v => onRangeChange(v, true)), [renderExtraFooter, _rangeValue, onRangeChange]);

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
            pickerValue={pickerValue}
            visible={isVisible}
            onVisibleChange={setIsVisible}
            disabled={disabled}
            startPlaceholder={startPlaceholder}
            endPlaceholder={endPlaceholder}
            allowClear={!!(allowClear && rangeValue && rangeValue.length)}
            onClear={onClear}
            isRange
            size={size}
            suffixIcon={suffixIcon}
            {...others}
        >
            <RangeHeader
                defaultOpenValue={_defaultPickerValue}
                value={rangeValue}
                disabled={disabled}
                visible={isVisible}
                prefixCls={`${componentCls}-panel`}
                startPlaceholder={startPlaceholder}
                endPlaceholder={endPlaceholder}
                format={format}
                onChange={onRangeChange}
                disabledDate={disabledDate}
                disabledTime={disabledTime}
                hourStep={hourStep}
                minuteStep={minuteStep}
                secondStep={secondStep}
            />
            <div className={`${componentCls}-panel__body`}>
                <RangeCalendar
                    defaultPickerValue={_defaultPickerValue}
                    value={rangeValue}
                    disabled={disabled}
                    visible={isVisible}
                    onSelect={onRangeCalendarSelect}
                    onPanelChange={onPanelChange}
                    disabledDate={disabledDate}
                    dateRender={dateRender}
                />
                {/* Open only after 2 dates have been selected */}
                <RenderWrapper visible={timeVisible} unmountOnExit>
                    <div className={`${componentCls}-panel__range-time`}>
                        <TimePanel
                            header={renderTimeHeader}
                            value={_rangeValue[0] || null}
                            onChange={onLeftTimeValueChange}
                            disabled={disabled}
                            visible={isVisible}
                            format={format}
                            initAsyncScroll={false}
                            {...timePanelDisabledLeftOptions}
                            {...timePanelProps}
                            defaultOpenValue={_defaultPickerValue[0]}
                        />
                        <TimePanel
                            header={renderTimeHeader}
                            value={_rangeValue[1] || null}
                            onChange={onRightTimeValueChange}
                            disabled={disabled}
                            visible={isVisible}
                            format={format}
                            initAsyncScroll={false}
                            {...timePanelDisabledRightOptions}
                            {...timePanelProps}
                            defaultOpenValue={_defaultPickerValue[1]}
                        />
                    </div>
                </RenderWrapper>
            </div>
            <RenderWrapper visible={!!showTime || !!renderFooter} unmountOnExit>
                <Footer
                    prefixCls={`${commonCls}-panel`}
                    disabled={disabled || rangeValue.length !== 2}
                    isRange
                    showTime={showTime}
                    showOk={!!showTime}
                    timePicker={!!showTime}
                    timeVisible={timeVisible}
                    onTimeVisibleChange={setTimeVisible}
                    onOk={onOk}
                    renderFooter={renderFooter}
                />
            </RenderWrapper>
        </Picker>
    );
}

RangePicker.propTypes = RangePickerProps;
RangePicker.defaultProps = RangePickerDefaultProps;

export default RangePicker;