import React, { useRef, useCallback, useMemo } from 'react';
import { RadioProps, RadioDefaultProps } from "./interface";
import { useContextConf, useClassName, useForceUpdate } from 'hooks';

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
    const forceUpdate = useForceUpdate();
    const _checkedRef = useRef(defaultChecked || false); // 默认选中状态
    const isChecked = checked !== undefined ? checked : _checkedRef.current; // 实际选中(依赖checked，没有取默认)

    // ---------------------------------- class ----------------------------------
    // root-className
    const classNames = useClassName({
        [componentCls]: true,
        [className]: className,
        'is-checked': isChecked,
        'is-disabled': disabled,
    }, [className, componentCls, isChecked, disabled]);

    // _input-className
    const _inputClassNames = useClassName({
        [`${componentCls}__input`]: true,
        'is-checked': isChecked,
        'is-disabled': disabled,
    }, [componentCls, isChecked, disabled]);


    // ---------------------------------- event ----------------------------------
    const radioChange = useCallback(e => {
        if(disabled) return;

        onChange(e.target.value);
        // 如果有props.checked，由props.checked控制
        if(checked !== undefined) return;

        _checkedRef.current = e.target.checked;
        forceUpdate();
    }, [onChange, checked, disabled]);

    // ---------------------------------- render chunk ----------------------------------
    // render-input
    const renderInput = useMemo(() => {
        return (
            <span className={_inputClassNames}>
                <input type="radio" tabIndex={-1} className={`${componentCls}__original `} checked={isChecked} onChange={radioChange} value={value} disabled={disabled} />
                <span className={`${componentCls}__inner`} />
            </span>
        )
    }, [_inputClassNames, componentCls, isChecked, radioChange, value]);

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