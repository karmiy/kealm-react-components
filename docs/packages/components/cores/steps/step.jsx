import React from 'react';
import { useContextConf, useClassName } from 'hooks';

function Step(props) {
    const {componentCls} = useContextConf('step');
    const {
        children,
        className,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [className]: className,
    }, [className, componentCls]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} {...others}>
            123
        </div>
    );
};

export default Step;