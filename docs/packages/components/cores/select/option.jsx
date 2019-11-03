import React from 'react';
import { useContextConf, useClassName } from 'hooks';

function Option(props) {
    const {componentCls} = useContextConf('select-dropdown');
    const {
        children,
        className,
        value,
        selectedValue,
        ...others
    } = props;

    const isSelected = value === selectedValue;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}__item`]: true,
        selected: isSelected,
        [className]: className,
    }, [className, componentCls, isSelected]);

    // ---------------------------------- render ----------------------------------
    return (
        <li className={classNames} {...others}>
            {children}
        </li>
    );
};

export default Option;