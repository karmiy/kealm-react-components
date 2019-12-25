import React, { useCallback, useMemo, useState } from 'react';
import { CalendarHeaderProps, CalendarHeaderDefaultProps } from './interface';
import { useDidUpdate } from 'hooks';
import Icon from '../../icon';
import { YearPanel, MonthPanel } from '../panels';
import { RenderWrapper } from '../../../common';
import { leftPad, mergeStr } from 'utils/common/base';
import { MAX_SAFE_YEAR, MIN_SAFE_YEAR } from 'utils/common/date';
import { set, startOfDay } from 'date-fns';

function CalendarHeader(props) {
    const {
        prefixCls,
        defaultPickerValue,
        value,
        onChange,
        disabled,
        visible,
        disabledMonth,
        disabledYear,
        disabledDecade,
        disabledArrow,
        hiddenDisabledArrow,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const year = value ? value.getFullYear() : (defaultPickerValue ? defaultPickerValue.getFullYear() : new Date().getFullYear()),
        month = value ? value.getMonth() + 1 : (defaultPickerValue ? defaultPickerValue.getMonth() + 1 : new Date().getMonth() + 1);
    const isMinMonth = year === MIN_SAFE_YEAR && month === 1,
        isMaxMonth = year === MAX_SAFE_YEAR && month === 12,
        isMinYear = year === MIN_SAFE_YEAR,
        isMaxYear = year === MAX_SAFE_YEAR;
    const [yearPanelVisible, setYearPanelVisible] = useState(false);
    const [monthPanelVisible, setMonthPanelVisible] = useState(false);

    // ---------------------------------- effect ----------------------------------
    useDidUpdate(() => {
        visible && (setYearPanelVisible(false), setMonthPanelVisible(false));
    }, [visible]);

    // ---------------------------------- event ----------------------------------
    const onPrevYear = useCallback(() => {
        onChange(v => set(v || defaultPickerValue || startOfDay(new Date()), { year: year - 1 }));
    }, [year, defaultPickerValue]);

    const onPrevMonth = useCallback(() => {
        let _month = month === 1 ? 12 : month - 1,
            _year = month === 1 ? year - 1 : year;

        onChange(v => set(v || defaultPickerValue || startOfDay(new Date()), { year: _year, month: _month -1 }));
    }, [year, month, defaultPickerValue]);

    const onNextYear = useCallback(() => {
        onChange(v => set(v || defaultPickerValue || startOfDay(new Date()), { year: year + 1 }));
    }, [year, defaultPickerValue]);

    const onNextMonth = useCallback(() => {
        let _month = month === 12 ? 1 : month + 1,
            _year = month === 12 ? year + 1 : year;

        onChange(v => set(v || defaultPickerValue || startOfDay(new Date()), { year: _year, month: _month - 1 }));
    }, [year, month, defaultPickerValue]);

    const onYearSelect = useCallback(selectedDate => {
        setYearPanelVisible(false);
        year !== selectedDate.getFullYear() && onChange(selectedDate);
    }, [year]);

    const onMonthSelect = useCallback(selectedDate => {
        setMonthPanelVisible(false);
        !(year === selectedDate.getFullYear() && month === selectedDate.getMonth() + 1)
            && onChange(selectedDate);
    }, [year, month]);

    // ---------------------------------- render mini chunk ----------------------------------
    const renderPrevYear = useMemo(() => {
        const isDisabledArrow = disabledArrow(value || defaultPickerValue || startOfDay(new Date()), 'prev-year');
        const isDisabled = disabled || isMinYear || isDisabledArrow;
        const className = mergeStr({
            [`${prefixCls}__header-btn`]: true,
            [`${prefixCls}__header-prev-year`]: true,
            'is-disabled': isDisabled,
            'is-hidden': hiddenDisabledArrow && isDisabled,
        });
        return (
            <button className={className} onClick={!isDisabled ? onPrevYear : null}>
                <Icon type={'double-left'} />
            </button>
        )
    }, [prefixCls, onPrevYear, disabled, isMinYear, disabledArrow, value, defaultPickerValue, hiddenDisabledArrow]);

    const renderPrevMonth = useMemo(() => {
        const isDisabledArrow = disabledArrow(value || defaultPickerValue || startOfDay(new Date()), 'prev-month');
        const isDisabled = disabled || isMinMonth || isDisabledArrow;
        const className = mergeStr({
            [`${prefixCls}__header-btn`]: true,
            [`${prefixCls}__header-prev-month`]: true,
            'is-disabled': isDisabled,
            'is-hidden': hiddenDisabledArrow && isDisabled,
        });
        return (
            <button className={className} onClick={!isDisabled ? onPrevMonth : null}>
                <Icon type={'left'} />
            </button>
        )
    }, [prefixCls, onPrevMonth, disabled, isMinMonth, disabledArrow, value, defaultPickerValue, hiddenDisabledArrow]);

    const renderNextYear = useMemo(() => {
        const isDisabledArrow = disabledArrow(value || defaultPickerValue || startOfDay(new Date()), 'next-year');
        const isDisabled = disabled || isMaxYear || isDisabledArrow;
        const className = mergeStr({
            [`${prefixCls}__header-btn`]: true,
            [`${prefixCls}__header-next-year`]: true,
            'is-disabled': isDisabled,
            'is-hidden': hiddenDisabledArrow && isDisabled,
        });

        return (
            <button className={className} onClick={!isDisabled ? onNextYear : null}>
                <Icon type={'double-right'} />
            </button>
        )
    }, [prefixCls, onNextYear, disabled, isMaxYear, disabledArrow, value, defaultPickerValue, hiddenDisabledArrow]);

    const renderNextMonth = useMemo(() => {
        const isDisabledArrow = disabledArrow(value || defaultPickerValue || startOfDay(new Date()), 'next-month');
        const isDisabled = disabled || isMaxMonth || isDisabledArrow;
        const className = mergeStr({
            [`${prefixCls}__header-btn`]: true,
            [`${prefixCls}__header-next-month`]: true,
            'is-disabled': isDisabled,
            'is-hidden': hiddenDisabledArrow && isDisabled,
        });
        return (
            <button className={className} onClick={!isDisabled ? onNextMonth : null}>
                <Icon type={'right'} />
            </button>
        )
    }, [prefixCls, onNextMonth, disabled, isMaxMonth, disabledArrow, value, defaultPickerValue, hiddenDisabledArrow]);

    const renderSelect = useMemo(() => {
        const className = mergeStr({
            [`${prefixCls}__header-select`]: true,
            'is-disabled': disabled,
        })
        return (
            <span className={className}>
                <a className={`${prefixCls}__header-year`} onClick={() => setYearPanelVisible(true)}>{leftPad(year, 4, '0')} 年</a>
                <a className={`${prefixCls}__header-month`} onClick={() => setMonthPanelVisible(true)}>{month} 月</a>
            </span>
        )
    }, [prefixCls, year, month, disabled]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={`${prefixCls}__header`}>
            <div className={`${prefixCls}__header-wrap`}>
                {renderPrevYear}
                {renderPrevMonth}
                {renderSelect}
                {renderNextYear}
                {renderNextMonth}
            </div>
            <RenderWrapper visible={yearPanelVisible}>
                <YearPanel
                    value={value}
                    onSelect={onYearSelect}
                    disabled={disabled}
                    disabledDate={disabledYear}
                    disabledDecade={disabledDecade}
                    visible={visible}
                />
            </RenderWrapper>
            <RenderWrapper visible={monthPanelVisible}>
                <MonthPanel
                    value={value}
                    onSelect={onMonthSelect}
                    disabled={disabled}
                    disabledDate={disabledMonth}
                    disabledYear={disabledYear}
                    disabledDecade={disabledDecade}
                    visible={visible}
                />
            </RenderWrapper>
        </div>
    );
}

CalendarHeader.propTypes = CalendarHeaderProps;
CalendarHeader.defaultProps = CalendarHeaderDefaultProps;

export default CalendarHeader;