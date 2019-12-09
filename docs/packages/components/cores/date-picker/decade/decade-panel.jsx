import React from 'react';
import { useContextConf, useClassName } from 'hooks';
import DecadeHeader from './decade-header';
import DecadeBody from './decade-body';

function DecadePanel(props) {
    const { componentCls } = useContextConf('calendar');
    const {
        className,
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}-panel`]: true,
        [className]: className,
    }, [componentCls, className]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames}>
            <DecadeHeader prefixCls={componentCls} />
            <DecadeBody prefixCls={componentCls} />
        </div>
    );
}

export default DecadePanel;