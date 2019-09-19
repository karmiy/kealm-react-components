import React from 'react';
import { CheckboxButtonProps, CheckboxButtonDefaultProps } from "./interface";
import { useContextConf, useClassName, useCheckValue, useContextProps } from 'hooks';
import { CheckedContext } from '../radio/context';

function CheckboxButton(props) {
    const { componentCls } = useContextConf('checkbox-button');

    const {
        className,
        children,
        defaultChecked,
        checked,
        value,
        onChange,
        disabled,
        solid,
        size,
        name,
        groupValues,
        ...others
    } = useContextProps(props, CheckedContext, ['onChange']);

    // ---------------------------------- logic code ----------------------------------
    const { isChecked, checkChange } = useCheckValue(defaultChecked, checked, groupValues, value, onChange, disabled);

    // ---------------------------------- class ----------------------------------
    // root-className
    const classNames = useClassName({
        [componentCls]: true,
        'is-checked': isChecked,
        'is-disabled': disabled,
        'is-solid': solid,
        [`${componentCls}--${size}`]: size,
        [className]: className,
    }, [className, componentCls, isChecked, disabled, solid, size]);

    // ---------------------------------- logic code ----------------------------------


    // ---------------------------------- render ----------------------------------
    return (
        <label role={'checkbox-button'} tabIndex={0} className={classNames} {...others}>
            <input type="checkbox" tabIndex={-1} className={`${componentCls}__orig-checkbox`} checked={isChecked} onChange={checkChange} value={value} disabled={disabled} name={name} />
            <span className={`${componentCls}__inner`}>{children}</span>
        </label>
    )
}
CheckboxButton.propTypes = CheckboxButtonProps;
CheckboxButton.defaultProps = CheckboxButtonDefaultProps;

export default CheckboxButton;