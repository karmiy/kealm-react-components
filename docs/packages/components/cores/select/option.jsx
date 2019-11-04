import React, { memo, useContext } from 'react';
import { useContextConf, useClassName } from 'hooks';
import { SelectContext } from './select';
import { OptionProps, OptionDefaultProps } from './interface';
import Icon from '../icon';
import { RenderWrapper } from '../../common';

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

    const { selectedValue, onSelect, multiple } = useContext(SelectContext);

    const isSelected = multiple ? selectedValue.includes(value) : value === selectedValue;

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
        onSelect(value, !isSelected);
    }

    // ---------------------------------- render ----------------------------------
    return (
        <li className={classNames} {...others} onClick={onToggle}>
            <span>
                {children}
            </span>
            <RenderWrapper visible={multiple && isSelected} unmountOnExit>
                <Icon type={'check'} className={`${componentCls}__item-check`} />
            </RenderWrapper>
        </li>
    );
}

Option.propTypes = OptionProps;
Option.defaultProps = OptionDefaultProps;

export default memo(Option);