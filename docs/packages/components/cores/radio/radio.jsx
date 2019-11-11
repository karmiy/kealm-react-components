import React, { useMemo } from 'react';
import { RadioProps, RadioDefaultProps } from "./interface";
import { useContextConf, useClassName, useContextProps, useCheckValue } from 'hooks';
import { CheckedContext } from './context';
import { extract, omit } from 'utils/common/object';

function Radio(props) {
    const { componentCls } = useContextConf('radio');
    const {
        className,
        children,
        defaultChecked,
        checked,
        value,
        onChange,
        disabled,
        name,
        groupValues,
        ...others
    } = useContextProps(props, CheckedContext, ['onChange']);

    // ---------------------------------- within props ----------------------------------
    const rootOthers = extract(others, ['style', 'onClick']);
    const radioOthers = omit(others, ['style', 'onClick']);

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
    }, [componentCls, isChecked, disabled]);

    // ---------------------------------- render chunk ----------------------------------
    // render-input
    const renderInput = useMemo(() => {
        return (
            <span className={_inputClassNames}>
                <input type="radio" tabIndex={-1} className={`${componentCls}__original `} checked={isChecked} onChange={checkChange} value={value} disabled={disabled} name={name} {...radioOthers} />
                <span className={`${componentCls}__inner`} />
            </span>
        )
    }, [_inputClassNames, componentCls, isChecked, value, disabled, name, ...Object.values(radioOthers)]);

    // render-label
    const renderLabel = useMemo(() => {
        return <span className={`${componentCls}__label`}>{children}</span>;
    }, [componentCls, children]);

    // ---------------------------------- render ----------------------------------
    return (
        <label role={'radio'} tabIndex={0} className={classNames} {...rootOthers}>
            {renderInput}
            {renderLabel}
        </label>
    )
}
Radio.propTypes = RadioProps;
Radio.defaultProps = RadioDefaultProps;

export default Radio;