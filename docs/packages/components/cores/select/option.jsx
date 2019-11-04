import React, { memo, useContext } from 'react';
import { useContextConf, useClassName } from 'hooks';
import { SelectContext } from './select';
import { OptionProps, OptionDefaultProps } from './interface';

function Option(props) {
    const {componentCls} = useContextConf('select-dropdown');
    const {
        children,
        className,
        value,
        onClick,
        disabled,
        ...others
    } = props;

    const { selectedValue, onSelect } = useContext(SelectContext);

    const isSelected = value === selectedValue;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}__item`]: true,
        selected: isSelected,
        'is-disabled': disabled,
        [className]: className,
    }, [className, componentCls, isSelected, disabled]);

    // ---------------------------------- event ----------------------------------
    const onToggle = (e) => {
        if(disabled) return;

        onClick && onClick(e);
        onSelect(value);
    }

    // ---------------------------------- render ----------------------------------
    return (
        <li className={classNames} {...others} onClick={onToggle}>
            {children}
        </li>
    );
}

Option.propTypes = OptionProps;
Option.defaultProps = OptionDefaultProps;

export default memo(Option);