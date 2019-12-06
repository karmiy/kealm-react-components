import React from 'react';
import { useContextConf, useClassName } from 'hooks';

function YearPanel(props) {
    const {componentCls} = useContextConf('year-panel');
    const {
        prefixCls,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const className = `${prefixCls}-calendar-year-panel`;

    // ---------------------------------- render ----------------------------------
    return (
        <div className={className}>
            123
        </div>
    );
}

export default YearPanel;