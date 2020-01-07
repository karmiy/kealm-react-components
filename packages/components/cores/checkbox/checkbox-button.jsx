import React, { useCallback } from 'react';
import { CheckboxButtonProps, CheckboxButtonDefaultProps } from "./interface";
import { useContextConf, useClassName, useCheckValue, useContextProps } from 'hooks';
import { CheckedContext } from '../radio/context';
import { extract, omit } from 'utils/common/object';

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

    // ---------------------------------- within props ----------------------------------
    const rootOthers = extract(others, ['style', 'onClick']);
    const checkboxOthers = omit(others, ['style', 'onClick']);

    // ---------------------------------- variable ----------------------------------
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

    // ---------------------------------- event ----------------------------------
    const onCheckChange = useCallback(e => {
        checkChange(e, value);
    }, [value]);

    // ---------------------------------- render ----------------------------------
    return (
        <label role={'checkbox-button'} tabIndex={0} className={classNames} {...rootOthers}>
            <input type="checkbox" tabIndex={-1} className={`${componentCls}__orig-checkbox`} checked={isChecked} onChange={onCheckChange} value={value} disabled={disabled} name={name} {...checkboxOthers} />
            <span className={`${componentCls}__inner`}>{children}</span>
        </label>
    )
}
CheckboxButton.propTypes = CheckboxButtonProps;
CheckboxButton.defaultProps = CheckboxButtonDefaultProps;

export default CheckboxButton;