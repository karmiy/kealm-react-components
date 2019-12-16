import React, { useCallback } from 'react';
// import { CalendarProps, CalendarDefaultProps } from './interface';
import { useContextConf, useClassName, usePuppet, useController } from 'hooks';
import Calendar from '../calendar';

const { createConfig } = useController;

function RangeCalendar(props) {
    const { componentCls } = useContextConf('range-calendar');
    const {
        className,
        defaultValue,
        value,
        onChange,
        onSelect,
        disabled,
        visible,
        showWeek,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [
        outerValue,
        innerValue,
        setOuterValue,
        setInnerValue
    ] = usePuppet(defaultValue, value, { onChange, onSelect }, null, disabled, false);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [className]: className,
    }, [componentCls, className, showWeek]);

    return (
        <div className={classNames}>
            <div className={`${componentCls}__body`}>
                <div className={`${componentCls}__part`}>
                    <Calendar />
                </div>
                <div className={`${componentCls}__part`}>
                    <Calendar />
                </div>
            </div>
        </div>
    )
}

// RangeCalendar.propTypes = CalendarProps;
// RangeCalendar.defaultProps = CalendarDefaultProps;

export default RangeCalendar;