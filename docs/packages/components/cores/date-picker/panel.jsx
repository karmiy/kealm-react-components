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
    const onCalendarChange = useCallback((...rest) => {
        onChange(...rest);
        onVisibleChange(false);
    }, []);

    // ---------------------------------- render ----------------------------------
    const commonProps = {
        prefixCls,
        value,
        disabled,
        onChange,
    };

    return (
        <div className={`${prefixCls}-panel`}>
            <Header {...commonProps} placeholder={placeholder} format={format} visible={visible} />
            <Calendar {...commonProps} onChange={onCalendarChange} />
        </div>
    );
}

Panel.propTypes = PanelProps;
Panel.defaultProps = PanelDefaultProps;

export default Panel;