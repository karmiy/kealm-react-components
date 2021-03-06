import React, { useCallback } from 'react';
import { CalendarProps, CalendarDefaultProps } from './interface';
import { useContextConf, useClassName, usePuppet, useController, useDidUpdate } from 'hooks';
import CalendarHeader from './calendar-header';
import CalendarBody from './calendar-body';

const { createConfig } = useController;

function Calendar(props) {
    const { componentCls } = useContextConf('calendar');
    const {
        className,
        defaultValue,
        defaultPickerValue,
        value,
        onChange,
        onSelect,
        onPanelChange,
        disabled,
        visible,
        showWeek,
        cellRender,
        disabledDate,
        disabledMonth,
        disabledYear,
        disabledDecade,
        disabledArrow,
        hiddenDisabledArrow,
        dateRender,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [
        outerValue,
        innerValue,
        setOuterValue,
        setInnerValue
    ] = usePuppet(defaultValue, value, { onChange, onSelect }, null, disabled, false, false);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        'is-week': showWeek,
        [className]: className,
    }, [componentCls, className, showWeek]);

    // ---------------------------------- effect ----------------------------------
    useDidUpdate(() => onPanelChange(innerValue), [innerValue]);

    // ---------------------------------- event ----------------------------------
    const onCalendarSelect = useCallback(v => {
        setOuterValue(createConfig({
            value: v,
            event: ['onChange', 'onSelect'],
            shouldTrigger: {
                onChange: (prev, next) => !prev || prev && prev.getTime() !== next.getTime(),
                onSelect: true,
            },
        }))
    }, []);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames}>
            <CalendarHeader
                prefixCls={componentCls}
                defaultPickerValue={defaultPickerValue}
                value={innerValue}
                onChange={setInnerValue}
                disabled={disabled}
                visible={visible}
                disabledMonth={disabledMonth}
                disabledYear={disabledYear}
                disabledDecade={disabledDecade}
                disabledArrow={disabledArrow}
                hiddenDisabledArrow={hiddenDisabledArrow}
            />
            <CalendarBody
                prefixCls={componentCls}
                defaultPickerValue={defaultPickerValue}
                value={innerValue}
                selectedDate={outerValue}
                onSelect={onCalendarSelect}
                disabled={disabled}
                showWeek={showWeek}
                cellRender={cellRender}
                disabledDate={disabledDate}
                dateRender={dateRender}
            />
        </div>
    );
}

Calendar.propTypes = CalendarProps;
Calendar.defaultProps = CalendarDefaultProps;

export default Calendar;