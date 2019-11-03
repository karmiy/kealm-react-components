import React, { useContext } from 'react';
import { useContextConf, useClassName } from 'hooks';
import { SelectContext } from './select';

function Option(props) {
    const {componentCls} = useContextConf('select-dropdown');
    const {
        children,
        className,
        value,
        onClick,
        ...others
    } = props;

    const { selectedValue, onSelect } = useContext(SelectContext);

    const isSelected = value === selectedValue;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}__item`]: true,
        selected: isSelected,
        [className]: className,
    }, [className, componentCls, isSelected]);

    // ---------------------------------- event ----------------------------------
    const onToggle = (e) => {
        onClick && onClick(e);
        onSelect(value);
    }

    // ---------------------------------- render ----------------------------------
    return (
        <li className={classNames} {...others} onClick={onToggle}>
            {children}
        </li>
    );
};

export default Option;