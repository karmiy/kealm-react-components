import React, { useMemo } from 'react';
import { CheckboxProps, CheckboxDefaultProps } from "./interface";
import { useContextConf, useClassName, useCheckValue, useContextProps } from 'hooks';
import { CheckedContext } from '../radio/context';

function Checkbox(props) {
    // const c = useContext(CheckedContext);
    // console.log(c);
    const { componentCls } = useContextConf('checkbox');
    const {
        className,
        children,
        defaultChecked,
        checked,
        value,
        onChange,
        disabled,
        name,
        indeterminate,
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
        [className]: className,
    }, [className, componentCls, isChecked, disabled]);

    // _input-className
    const _inputClassNames = useClassName({
        [`${componentCls}__input`]: true,
        'is-checked': isChecked,
        'is-disabled': disabled,
        'is-indeterminate': indeterminate,
    }, [componentCls, isChecked, disabled, indeterminate]);

    // ---------------------------------- render chunk ----------------------------------
    // render-input
    const renderInput = useMemo(() => {
        return (
            <span className={_inputClassNames}>
                <input type="checkbox" tabIndex={-1} className={`${componentCls}__original `} checked={isChecked} onChange={checkChange} value={value} disabled={disabled} name={name} />
                <span className={`${componentCls}__inner`} />
            </span>
        )
    }, [_inputClassNames, componentCls, isChecked, checkChange, value]);

    // render-label
    const renderLabel = useMemo(() => {
        return <span className={`${componentCls}__label`}>{children}</span>;
    }, [componentCls, children]);


    // ---------------------------------- render ----------------------------------
    return (
        <label role={'checkbox'} tabIndex={0} className={classNames} {...others}>
            {renderInput}
            {renderLabel}
        </label>
    )
}
Checkbox.propTypes = CheckboxProps;
Checkbox.defaultProps = CheckboxDefaultProps;

export default Checkbox;