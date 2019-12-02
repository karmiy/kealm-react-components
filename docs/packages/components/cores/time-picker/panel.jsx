import React from 'react';
import { PanelProps, PanelDefaultProps } from './interface';
import Header from './header';
import Combobox from './combobox';
import { RenderWrapper } from '../../common';

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
            <RenderWrapper visible={addon} unmountOnExit>
                {addon(value, onChange)}
            </RenderWrapper>
        </div>
    );
}

Panel.propTypes = PanelProps;
Panel.defaultProps = PanelDefaultProps;

export default Panel;