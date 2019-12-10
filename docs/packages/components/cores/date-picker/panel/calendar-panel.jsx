import React from 'react';
import { useContextConf, useClassName, usePuppet } from 'hooks';

function CalendarPanel(props) {
    const { componentCls } = useContextConf('calendar');
    const {
        className,
        defaultValue,
        value,
        onSelect,
        disabled,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [
        outerYear,
        innerYear,
        setOuterYear,
        setInnerYear
    ] = usePuppet(defaultValue, value, onSelect, null, disabled, false, true);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}-panel`]: true,
        [className]: className,
    }, [componentCls, className]);


    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames}>
            123
        </div>
    );
}

export default CalendarPanel;