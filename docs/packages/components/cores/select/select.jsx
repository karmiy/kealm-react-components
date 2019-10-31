import React from 'react';
import { useContextConf, useClassName } from 'hooks';

function Select(props) {
    const { componentCls } = useContextConf('select');
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
            {children}
        </div>
    );
};

export default Select;
