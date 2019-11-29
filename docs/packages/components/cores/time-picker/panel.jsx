import React from 'react';
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
    } = props;

    // ---------------------------------- render ----------------------------------
    return (
        <div className={`${prefix}__inner`}>
            <Header
                prefix={prefix}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                format={format}
            />
            <Combobox
                prefix={prefix}
                defaultOpenValue={defaultOpenValue}
                value={value}
                onChange={onChange}
                disabled={disabled}
                visible={visible}
            />
        </div>
    );
}

Panel.propTypes = PanelProps;
Panel.defaultProps = PanelDefaultProps;

export default Panel;