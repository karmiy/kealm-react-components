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
    }, [value, onChange]);

    // ---------------------------------- render ----------------------------------
    const commonProps = {
        value,
        disabled,
        visible,
    };

    return (
        <div className={`${prefixCls}-panel`}>
            <Header
                {...commonProps}
                prefixCls={prefixCls}
                placeholder={placeholder}
                format={format}
                onChange={onChange}
            />
            <Calendar
                {...commonProps}
                onSelect={onCalendarSelect}
            />
        </div>
    );
}

Panel.propTypes = PanelProps;
Panel.defaultProps = PanelDefaultProps;

export default Panel;