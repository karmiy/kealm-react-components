import React from 'react';
import { PanelProps, PanelDefaultProps } from './interface';
import Header from './header';
import Combobox from './combobox';

function Panel(props) {
    const {
        prefix,
        value,
        onChange,
        placeholder,
        disabled,
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
            />
            <Combobox
                prefix={prefix}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    );
}

Panel.propTypes = PanelProps;
Panel.defaultProps = PanelDefaultProps;

export default Panel;