import React, { useCallback } from 'react';
import { useContextConf, useController } from 'hooks';
import { RangePickerProps, RangePickerDefaultProps } from './interface';
import { formatDate } from 'utils/common/date';
import Picker from '../base/picker';
import RangeCalendar from '../range';
import { mergeStr } from 'utils/common/base';

const { createConfig } = useController;

function RangePicker(props) {
    const { componentCls } = useContextConf('range-picker');
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
        format,
        allowClear,
        ...others
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [isVisible, setIsVisible] = useController(defaultVisible, visible, onVisibleChange, false, disabled);
    const [dateValue, setDateValue] = useController(defaultValue, value, onChange, null, disabled);

    // ---------------------------------- event ----------------------------------
    const onClear = useCallback(() => {
        setDateValue(createConfig({
            value: [],
            event: [[], ['', '']],
        }));
    }, []);

    const onDateChange = useCallback(v => {
        setDateValue(createConfig({
            value: v,
            event: [v, formatDate(v, format)],
        }));
    }, [format]);

    const onCalendarSelect = useCallback(selectedDate => {
        setIsVisible(false);
        if(dateValue && dateValue.getTime() === selectedDate.getTime())
            return;
        onDateChange(selectedDate);
    }, [dateValue, onDateChange]);

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
            {...others}
        >
            <RangeCalendar />
        </Picker>
    );
}

RangePicker.propTypes = RangePickerProps;
RangePicker.defaultProps = RangePickerDefaultProps;

export default RangePicker;