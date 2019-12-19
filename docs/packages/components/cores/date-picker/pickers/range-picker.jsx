import React, { useCallback } from 'react';
import { useContextConf, useController } from 'hooks';
import { RangePickerProps, RangePickerDefaultProps } from './interface';
import { formatDate, sortDates } from 'utils/common/date';
import Picker from '../base/picker';
import RangeCalendar from '../range';
import { mergeStr } from 'utils/common/base';
import { isSameRange } from '../range/range-calendar';

const { createConfig } = useController;

/*function formatRangeDate(rangeDate = []) {
    if(!rangeDate || !rangeDate.length) return '';

    const dateStr = '';

}*/

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
        format,
        allowClear,
        startPlaceholder,
        endPlaceholder,
        size,
        ...others
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [isVisible, setIsVisible] = useController(defaultVisible, visible, onVisibleChange, false, disabled);
    const [rangeValue, setRangeValue] = useController(defaultValue, value, onChange, [], disabled);

    const pickerValue = sortDates(rangeValue.filter(v => !!v)).map(item => formatDate(item, format));

    // ---------------------------------- event ----------------------------------
    const onClear = useCallback(() => {
        setRangeValue(createConfig({
            value: [],
            event: [[], ['', '']],
        }));
    }, []);

    const onRangeChange = useCallback(rangeV => {
        setRangeValue(createConfig({
            value: rangeV,
            event: [rangeV, [formatDate(rangeV[0], format), formatDate(rangeV[1], format)]],
        }));
    }, [format]);

    const onRangeCalendarSelect = useCallback(selectedRange => {
        setIsVisible(false);
        if(isSameRange(rangeValue, selectedRange)) return;

        onRangeChange(selectedRange);
    }, [rangeValue, onRangeChange]);

    // ---------------------------------- render ----------------------------------
    return (
        <Picker
            className={className}
            pickerClassName={mergeStr({
                [componentCls]: true,
                [`${componentCls}--${size}`]: size,
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
            {...others}
        >
            <RangeCalendar
                value={rangeValue}
                disabled={disabled}
                visible={isVisible}
                onSelect={onRangeCalendarSelect}
                // onChange={(a) => console.log('change', a)}
            />
        </Picker>
    );
}

RangePicker.propTypes = RangePickerProps;
RangePicker.defaultProps = RangePickerDefaultProps;

export default RangePicker;