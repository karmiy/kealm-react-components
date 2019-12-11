import React from 'react';
import { CalendarProps, CalendarDefaultProps } from './interface';
import { useContextConf, useClassName, usePuppet } from 'hooks';
import CalendarHeader from './calendar-header';
import CalendarBody from './calendar-body';

function Calendar(props) {
    const { componentCls } = useContextConf('calendar');
    const {
        className,
        defaultValue,
        value,
        onSelect,
        disabled,
        visible,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [
        outerValue,
        innerValue,
        setOuterValue,
        setInnerValue
    ] = usePuppet(defaultValue, value, onSelect, null, disabled, false, true);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [className]: className,
    }, [componentCls, className]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames}>
            <CalendarHeader
                prefixCls={componentCls}
                disabled={disabled}
                value={innerValue}
                onChange={setInnerValue}
                visible={visible}
            />
            <CalendarBody
                prefixCls={componentCls}
                disabled={disabled}
                value={innerValue}
                selectedDate={outerValue}
                onSelect={setOuterValue}
            />
        </div>
    );
}

Calendar.propTypes = CalendarProps;
Calendar.defaultProps = CalendarDefaultProps;

export default Calendar;