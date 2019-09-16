import React, { useRef, useCallback, useMemo } from 'react';
import { RadioProps, RadioDefaultProps } from "./interface";
import { useContextConf, useClassName, useForceUpdate, useCheckValue } from 'hooks';

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
                <input type="radio" tabIndex={-1} className={`${componentCls}__original `} checked={isChecked} onChange={checkChange} value={value} disabled={disabled} />
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
        <label role={'radio'} tabIndex={0} className={classNames} {...others}>
            {renderInput}
            {renderLabel}
        </label>
    )
}
Radio.propTypes = RadioProps;
Radio.defaultProps = RadioDefaultProps;

export default Radio;