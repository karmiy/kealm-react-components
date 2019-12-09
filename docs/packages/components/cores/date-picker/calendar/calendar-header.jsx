import React, { useCallback, useMemo, useState } from 'react';
import { CalendarHeaderProps, CalendarHeaderDefaultProps } from './interface';
import { useDidUpdate } from 'hooks';
import Icon from '../../icon';
import YearPanel from '../year';
import { RenderWrapper } from '../../../common';
import { leftPad, mergeStr } from 'utils/common/base';
import { MAX_SAFE_YEAR, MIN_SAFE_YEAR } from 'utils/common/date';

function CalendarHeader(props) {
    const {
        prefixCls,
        disabled,
        year,
        month,
        onChange,
        visible,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const isMinMonth = year === MIN_SAFE_YEAR && month === 1,
        isMaxMonth = year === MAX_SAFE_YEAR && month === 12,
        isMinYear = year === MIN_SAFE_YEAR,
        isMaxYear = year === MAX_SAFE_YEAR;
    const [YearPanelVisible, setYearPanelVisible] = useState(false);

    // ---------------------------------- effect ----------------------------------
    useDidUpdate(() => {
        visible && setYearPanelVisible(false);
    }, [visible]);

    // ---------------------------------- event ----------------------------------
    const onPrevYear = useCallback(() => {
        if(disabled || isMinYear) return;

        onChange(year - 1, month);
    }, [disabled, year, month, isMinYear]);

    const onPrevMonth = useCallback(() => {
        if(disabled || isMinMonth) return;

        let _month = month === 1 ? 12 : month - 1,
            _year = month === 1 ? year - 1 : year;
        onChange(_year, _month);
    }, [disabled, year, month, isMinMonth]);

    const onNextYear = useCallback(() => {
        if(disabled || isMaxYear) return;

        onChange(year + 1, month);
    }, [disabled, year, month, isMaxYear]);

    const onNextMonth = useCallback(() => {
        if(disabled || isMaxMonth) return;

        let _month = month === 12 ? 1 : month + 1,
            _year = month === 12 ? year + 1 : year;
        onChange(_year, _month);
    }, [disabled, year, month, isMaxMonth]);

    const onYearSelect = useCallback(selectedYear => {
        setYearPanelVisible(false);
        year !== selectedYear && onChange(selectedYear, month);
    }, [year, month]);

    // ---------------------------------- render mini chunk ----------------------------------
    const renderPrevYear = useMemo(() => {
        const className = mergeStr({
            [`${prefixCls}__header-btn`]: true,
            [`${prefixCls}__header-prev-year`]: true,
            'is-disabled': disabled || isMinYear,
        });
        return (
            <button className={className} onClick={onPrevYear}>
                <Icon type={'double-left'} />
            </button>
        )
    }, [prefixCls, onPrevYear, disabled, isMinYear]);

    const renderPrevMonth = useMemo(() => {
        const className = mergeStr({
            [`${prefixCls}__header-btn`]: true,
            [`${prefixCls}__header-prev-month`]: true,
            'is-disabled': disabled || isMinMonth,
        });
        return (
            <button className={className} onClick={onPrevMonth}>
                <Icon type={'left'} />
            </button>
        )
    }, [prefixCls, onPrevMonth, disabled, isMinMonth]);

    const renderNextYear = useMemo(() => {
        const className = mergeStr({
            [`${prefixCls}__header-btn`]: true,
            [`${prefixCls}__header-next-year`]: true,
            'is-disabled': disabled || isMaxYear,
        });
        return (
            <button className={className} onClick={onNextYear}>
                <Icon type={'double-right'} />
            </button>
        )
    }, [prefixCls, onNextYear, disabled, isMaxYear]);

    const renderNextMonth = useMemo(() => {
        const className = mergeStr({
            [`${prefixCls}__header-btn`]: true,
            [`${prefixCls}__header-next-month`]: true,
            'is-disabled': disabled || isMaxMonth,
        });
        return (
            <button className={className} onClick={onNextMonth}>
                <Icon type={'right'} />
            </button>
        )
    }, [prefixCls, onNextMonth, disabled, isMaxMonth]);

    const renderSelect = useMemo(() => {
        const className = mergeStr({
            [`${prefixCls}__header-select`]: true,
            'is-disabled': disabled,
        })
        return (
            <span className={className}>
                <a className={`${prefixCls}__header-year`} onClick={() => setYearPanelVisible(true)}>{leftPad(year, 4, '0')} 年</a>
                <a className={`${prefixCls}__header-month`}>{month} 月</a>
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
            <RenderWrapper visible={YearPanelVisible}>
                <YearPanel year={year} onSelect={onYearSelect} visible={visible} />
            </RenderWrapper>
        </div>
    );
}

CalendarHeader.propTypes = CalendarHeaderProps;
CalendarHeader.defaultProps = CalendarHeaderDefaultProps;

export default CalendarHeader;