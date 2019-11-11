import React, { useContext } from 'react';
import { useContextConf, useClassName } from 'hooks';
import { SelectContext } from './select';
import { OptionProps, OptionDefaultProps } from './interface';
import Icon from '../icon';
import { RenderWrapper } from '../../common';
import { isObject } from 'utils/common/base';

const isOptionIncludes = (selectedValue, value, multiple) => {
    if(multiple) {
        return !!selectedValue.find(item => {
            return isObject(item) ? item.value === value : item === value;
        });
    }else {
        return isObject(selectedValue) ? selectedValue.value === value : selectedValue === value;
    }
}

function Option(props) {
    const {componentCls} = useContextConf('select-dropdown');
    const {
        children,
        className,
        value,
        label,
        onClick,
        disabled,
        ...others
    } = props;

    const { selectedValue, onSelect, multiple, filterable, filterMethod, inputValue, labelInValue } = useContext(SelectContext);

    // ---------------------------------- logic code ----------------------------------
    const isSelected = isOptionIncludes(selectedValue, value, multiple);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}__item`]: true,
        selected: isSelected,
        'is-disabled': disabled,
        [className]: className,
    }, [className, componentCls, isSelected, disabled]);

    // ---------------------------------- logic code ----------------------------------
    if(filterable && !filterMethod(value, label, inputValue)) return null;

    // ---------------------------------- event ----------------------------------
    const onToggle = (e) => {
        if(disabled) return;

        onClick && onClick(e);

        const option = labelInValue ? {value, label} : value;
        onSelect(option, !isSelected);
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

export default Option;