import React, { useMemo } from 'react';
import { CheckboxProps, CheckboxDefaultProps } from "./interface";
import { useContextConf, useClassName, useCheckValue } from 'hooks';

function Checkbox(props) {
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
        [className]: className,
    }, [className, componentCls, isChecked, disabled]);

    // _input-className
    const _inputClassNames = useClassName({
        [`${componentCls}__input`]: true,
        'is-checked': isChecked,
        'is-disabled': disabled,
    }, [componentCls, isChecked, disabled]);

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