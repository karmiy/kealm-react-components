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
    const onCalendarSelect = useCallback((...rest) => {
        onChange(...rest);
        onVisibleChange(false);
    }, []);

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
            {/*<div className={`${prefixCls}-panel__calendar`}>
                <Calendar {...commonProps} onChange={onCalendarChange} />
            </div>*/}
            <Calendar {...commonProps} onSelect={onCalendarSelect} />
        </div>
    );
}

Panel.propTypes = PanelProps;
Panel.defaultProps = PanelDefaultProps;

export default Panel;