import React, { useMemo, useCallback } from 'react';
import { CheckboxProps, CheckboxDefaultProps } from "./interface";
import { useContextConf, useClassName, useCheckValue, useContextProps } from 'hooks';
import { CheckedContext } from '../radio/context';
import { extract, omit } from 'utils/common/object';

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
        indeterminate,
        groupValues,
        ...others
    } = useContextProps(props, CheckedContext, ['onChange']);

    // ---------------------------------- within props ----------------------------------
    const rootOthers = extract(others, ['style', 'onClick']);
    const checkboxOthers = omit(others, ['style', 'onClick']);

    // ---------------------------------- logic code ----------------------------------
    const { isChecked, checkChange } = useCheckValue(defaultChecked, checked, groupValues, value, onChange);

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

    // ---------------------------------- event ----------------------------------
    const onCheckChange = useCallback(e => {
        checkChange(e, value);
    }, [value]);

    // ---------------------------------- render chunk ----------------------------------
    // render-input
    const renderInput = useMemo(() => {
        return (
            <span className={_inputClassNames}>
                <input type="checkbox" tabIndex={-1} className={`${componentCls}__original `} checked={isChecked} onChange={onCheckChange} value={value} disabled={disabled} name={name} {...checkboxOthers} />
                <span className={`${componentCls}__inner`} />
            </span>
        )
    }, [_inputClassNames, componentCls, isChecked, value, disabled, name, ...Object.values(checkboxOthers)]);

    // render-label
    const renderLabel = useMemo(() => {
        return <span className={`${componentCls}__label`}>{children}</span>;
    }, [componentCls, children]);


    // ---------------------------------- render ----------------------------------
    return (
        <label role={'checkbox'} tabIndex={0} className={classNames} {...rootOthers}>
            {renderInput}
            {renderLabel}
        </label>
    )
}
Checkbox.propTypes = CheckboxProps;
Checkbox.defaultProps = CheckboxDefaultProps;

export default Checkbox;