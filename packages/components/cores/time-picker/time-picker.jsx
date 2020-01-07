import React, { useMemo, useCallback } from 'react';
import { useContextConf, useClassName, useController } from 'hooks';
import { TimePickerProps, TimePickerDefaultProps } from './interface';
import {Icon} from "../index";
import Picker from '../date-picker/base/picker';
import Header from '../date-picker/parts/header';
import TimePanel from './time-panel';
import { formatDate } from 'utils/common/date'
import {mergeStr} from "utils/common/base";

const { createConfig } = useController;

function TimePicker(props) {
    const { componentCls, prefix } = useContextConf('time-picker');
    const {
        className,
        pickerClassName,
        pickerStyle,
        defaultVisible,
        visible,
        onVisibleChange,
        defaultOpenValue,
        defaultValue,
        value,
        onChange,
        placeholder,
        disabled,
        allowClear,
        size,
        format,
        hourStep,
        minuteStep,
        secondStep,
        disabledHours,
        disabledMinutes,
        disabledSeconds,
        hideDisabledOptions,
        addon,
        ...others
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [isVisible, setIsVisible] = useController(defaultVisible, visible, onVisibleChange, false, disabled);
    const [dateValue, setDateValue] = useController(defaultValue, value, onChange, null, disabled);
    /*const selectedHour = dateValue ? dateValue.getHours() : (defaultOpenValue ? defaultOpenValue.getHours() : 0),
        selectedMinute = dateValue ? dateValue.getMinutes() : (defaultOpenValue ? defaultOpenValue.getMinutes() : 0);
    const disabledHours = useMemo(() => _disabledHours(), [_disabledHours]),
        disabledMinutes = useMemo(() => _disabledMinutes(selectedHour), [_disabledMinutes, selectedHour]),
        disabledSeconds = useMemo(() => _disabledSeconds(selectedHour, selectedMinute), [_disabledSeconds, selectedHour, selectedMinute]);*/
    const disabledTime = useCallback(() => {
        return {
            disabledHours,
            disabledMinutes,
            disabledSeconds,
        }
    }, [disabledHours, disabledMinutes, disabledSeconds]);

    // ---------------------------------- event ----------------------------------
    const onClear = useCallback(() => {
        setDateValue(createConfig({
            value: null,
            event: [null, ''],
        }));
    }, []);

    const onDateChange = useCallback(v => {
        if(!v) {
            onClear();
            return;
        }
        setDateValue(createConfig({
            value: v,
            event: [v, formatDate(v, format)],
        }));
    }, [format]);

    // ---------------------------------- render mini chunk ----------------------------------
    const renderSuffix = useMemo(() => <Icon type={'time-circle'} />, []);

    // ---------------------------------- render chunk ----------------------------------
    const panelDependencies = [
        componentCls,
        dateValue,
        onDateChange,
        defaultOpenValue,
        placeholder,
        disabled,
        isVisible,
        format,
        hourStep,
        minuteStep,
        secondStep,
        disabledTime,
        disabledHours,
        disabledMinutes,
        disabledSeconds,
        hideDisabledOptions,
    ];

    const renderAddon = useMemo(() => {
        if(!addon) return null;

        return (
            <div className={`${componentCls}-panel__addon`}>
                {addon(dateValue, onDateChange)}
            </div>
        );
    }, [addon, dateValue]);

    const renderPanel = useMemo(() => {
        const commonProps = {
            // prefixCls: `${componentCls}-panel`,
            defaultOpenValue,
            value: dateValue,
            onChange: onDateChange,
            disabled,
            format,
            visible: isVisible,
            hourStep,
            minuteStep,
            secondStep,
            /*disabledHours,
            disabledMinutes,
            disabledSeconds,*/
        };
        return (
            <div className={`${componentCls}-panel`}>
                <Header
                    prefixCls={`${componentCls}-panel`}
                    placeholder={placeholder}
                    disabledTime={disabledTime}
                    {...commonProps}
                />
                <TimePanel
                    hideDisabledOptions={hideDisabledOptions}
                    disabledHours={disabledHours}
                    disabledMinutes={disabledMinutes}
                    disabledSeconds={disabledSeconds}
                    {...commonProps}
                />
                {renderAddon}
            </div>
        )
    }, [...panelDependencies, renderAddon]);

    // ---------------------------------- render ----------------------------------
    return (
        <Picker
            className={className}
            pickerClassName={mergeStr({
                [componentCls]: true,
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
            suffixIcon={renderSuffix}
            {...others}
        >
            {renderPanel}
        </Picker>
    )
}

TimePicker.propTypes = TimePickerProps;
TimePicker.defaultProps = TimePickerDefaultProps;

export default TimePicker;