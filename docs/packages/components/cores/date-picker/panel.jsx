import React, { useCallback } from 'react';
import { PanelProps, PanelDefaultProps } from './interface';
import Header from './header';
import Calendar from './calendar';

function Panel(props) {
    const {
        prefixCls,
        value,
        onChange,
        placeholder,
        disabled,
        format,
        visible,
        onVisibleChange,
    } = props;

    // ---------------------------------- event ----------------------------------
    const onCalendarSelect = useCallback(selectedDate => {
        onVisibleChange(false);
        if(value && value.getTime() === selectedDate.getTime())
            return;
        onChange(selectedDate);
    }, [value]);

    // ---------------------------------- render ----------------------------------
    const commonProps = {
        prefixCls,
        value,
        disabled,
        onChange,
        visible,
    };

    return (
        <div className={`${prefixCls}-panel`}>
            <Header {...commonProps} placeholder={placeholder} format={format} />
            <Calendar {...commonProps} onSelect={onCalendarSelect} />
        </div>
    );
}

Panel.propTypes = PanelProps;
Panel.defaultProps = PanelDefaultProps;

export default Panel;