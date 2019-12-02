import React, { useMemo } from 'react';
import { PanelProps, PanelDefaultProps } from './interface';
import Header from './header';
import Combobox from './combobox';

function Panel(props) {
    const {
        prefix,
        defaultOpenValue,
        value,
        onChange,
        placeholder,
        disabled,
        visible,
        format,
        isAM,
        hourStep,
        minuteStep,
        secondStep,
        disabledHours,
        disabledMinutes,
        disabledSeconds,
        hideDisabledOptions,
        addon,
    } = props;

    // ---------------------------------- render chunk ----------------------------------
    const renderAddon = useMemo(() => {
        if(!addon) return null;

        return addon(value, onChange);
    }, [addon, value]);

    // ---------------------------------- render ----------------------------------
    const commonProps = {
        prefix,
        defaultOpenValue,
        value,
        onChange,
        disabled,
        format,
        isAM,
        hourStep,
        minuteStep,
        secondStep,
        disabledHours,
        disabledMinutes,
        disabledSeconds,
    }
    return (
        <div className={`${prefix}__inner`}>
            <Header
                placeholder={placeholder}
                {...commonProps}
            />
            <Combobox
                visible={visible}
                hideDisabledOptions={hideDisabledOptions}
                {...commonProps}
            />
            {renderAddon}
        </div>
    );
}

Panel.propTypes = PanelProps;
Panel.defaultProps = PanelDefaultProps;

export default Panel;