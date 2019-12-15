import React, { useMemo, useCallback } from 'react';
import { useContextConf, useController } from 'hooks';
import { MonthPickerProps, MonthPickerDefaultProps } from './interface';
import { formatDate } from 'utils/common/date';
import { MonthPanel } from '../panels'
import Picker from '../base/picker';
import { mergeStr } from 'utils/common/base';

const { createConfig } = useController;

function MonthPicker(props) {
    const { componentCls } = useContextConf('month-picker');
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
            value: null,
            event: [null, ''],
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
            <MonthPanel
                value={dateValue}
                disabled={disabled}
                visible={isVisible}
                onSelect={onCalendarSelect}
            />
        </Picker>
    );
}

MonthPicker.propTypes = MonthPickerProps;
MonthPicker.defaultProps = MonthPickerDefaultProps;

export default MonthPicker;