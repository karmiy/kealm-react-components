import React from 'react';
import { RadioButtonProps, RadioButtonDefaultProps } from "./interface";
import { useContextConf, useClassName, useCheckValue } from 'hooks';

function RadioButton(props) {
    const { componentCls } = useContextConf('radio-button');

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
        ...others
    } = props;

    // ---------------------------------- logic code ----------------------------------
    const { isChecked, checkChange } = useCheckValue(defaultChecked, checked, onChange, disabled);

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
        <label role={'radio'} tabIndex={0} className={classNames} {...others}>
            <input type="radio" tabIndex={-1} className={`${componentCls}__orig-radio`} checked={isChecked} onChange={checkChange} value={value} disabled={disabled} name={name} />
            <span className={`${componentCls}__inner`}>{children}</span>
        </label>
    )
}
RadioButton.propTypes = RadioButtonProps;
RadioButton.defaultProps = RadioButtonDefaultProps;

export default RadioButton;