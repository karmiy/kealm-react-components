import React from 'react';
import Header from './header';
import Calendar from './calendar';

function Panel(props) {
    const {
        prefixCls,
        placeholder,
        disabled,
    } = props;

    // ---------------------------------- render ----------------------------------
    return (
        <div className={`${prefixCls}-panel`}>
            <Header prefixCls={prefixCls} placeholder={placeholder} disabled={disabled} />
            <Calendar prefixCls={prefixCls} />
        </div>
    );
}

export default Panel;