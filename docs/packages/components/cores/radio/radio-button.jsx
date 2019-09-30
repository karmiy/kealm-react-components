import React from 'react';
import { RadioButtonProps, RadioButtonDefaultProps } from "./interface";
import { useContextConf, useClassName, useCheckValue, useContextProps } from 'hooks';
import { CheckedContext } from './context';
import { extract, omit } from 'utils/base/object';

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
        groupValues,
        ...others
    } = useContextProps(props, CheckedContext, ['onChange']);

    // ---------------------------------- within props ----------------------------------
    const rootOthers = extract(others, ['style', 'onClick']);
    const radioOthers = omit(others, ['style', 'onClick']);

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


    // ---------------------------------- render ----------------------------------
    return (
        <label role={'radio-button'} tabIndex={0} className={classNames} {...rootOthers}>
            <input type="radio" tabIndex={-1} className={`${componentCls}__orig-radio`} checked={isChecked} onChange={checkChange} value={value} disabled={disabled} name={name} {...radioOthers} />
            <span className={`${componentCls}__inner`}>{children}</span>
        </label>
    )
}
RadioButton.propTypes = RadioButtonProps;
RadioButton.defaultProps = RadioButtonDefaultProps;

export default RadioButton;