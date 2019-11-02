import React from 'react';
import { useContextConf, useClassName } from 'hooks';

function Option(props) {
    const {componentCls} = useContextConf('select-dropdown');
    const {
        children,
        className,
        value,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}__item`]: true,
        [className]: className,
    }, [className, componentCls]);

    // ---------------------------------- render ----------------------------------
    return (
        <li className={classNames} {...others}>
            {children}
        </li>
    );
};

export default Option;