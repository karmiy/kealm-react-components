import React, { useCallback, useMemo } from 'react';
import { useContextConf, useController } from 'hooks';
import { MonthPickerProps, MonthPickerDefaultProps } from './interface';
import { MonthPanel } from '../panels'
import Picker from '../base/picker';
import Footer from '../parts/footer';
import { RenderWrapper } from '../../../common';
import { mergeStr } from 'utils/common/base';
import { formatDate } from 'utils/common/date';

const { createConfig } = useController;

function MonthPicker(props) {
    const { componentCls } = useContextConf('month-picker'),
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
        disabled,
        placeholder,
        format,
        allowClear,
        size,
        disabledDate,
        renderExtraFooter,
        dateRender,
        suffixIcon,
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
        setIsVisible(false);
        if(dateValue && dateValue.getTime() === selectedDate.getTime())
            return;
        onDateChange(selectedDate);
    }, [dateValue, onDateChange]);

    // ---------------------------------- render mini chunk ----------------------------------
    const renderFooter = useMemo(() => renderExtraFooter(dateValue, v => onDateChange(v, true)), [renderExtraFooter, dateValue, onDateChange]);

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
            pickerValue={dateValue ? formatDate(dateValue, format) : ''}
            visible={isVisible}
            onVisibleChange={setIsVisible}
            disabled={disabled}
            placeholder={placeholder}
            allowClear={!!(allowClear && dateValue)}
            onClear={onClear}
            size={size}
            suffixIcon={suffixIcon}
            {...others}
        >
            <MonthPanel
                defaultPickerValue={defaultPickerValue}
                value={dateValue}
                disabled={disabled}
                visible={isVisible}
                onSelect={onCalendarSelect}
                onPanelChange={onPanelChange}
                disabledDate={disabledDate}
                dateRender={dateRender}
            />
            <RenderWrapper visible={!!renderExtraFooter} unmountOnExit>
                <Footer
                    prefixCls={`${commonCls}-panel`}
                    disabled={disabled}
                    renderFooter={renderFooter}
                />
            </RenderWrapper>
        </Picker>
    );
}

MonthPicker.propTypes = MonthPickerProps;
MonthPicker.defaultProps = MonthPickerDefaultProps;

export default MonthPicker;