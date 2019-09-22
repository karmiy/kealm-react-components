import React, { useMemo, useCallback } from 'react';
import Icon from '../icon';
import { InputProps, InputDefaultProps } from "./interface";
import { useContextConf, useClassName, useInputValue } from 'hooks';

function Input(props) {
    const { componentCls } = useContextConf('input');
    const {
        className,
        placeholder,
        disabled,
        defaultValue,
        value,
        onChange,
        allowClear,
        ...others
    } = props;

    // ---------------------------------- logic code ----------------------------------
    const { inputValue, setInputValue, inputChange }  = useInputValue(defaultValue, value, onChange)
    const hasSuffix = allowClear;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        'is-disabled': disabled,
        [`${componentCls}--suffix`] : hasSuffix,
        [className]: className
    }, [className, componentCls, disabled, hasSuffix]);

    const _inputClassNames = useClassName({
        [`${componentCls}__inner`]: true,
    }, [componentCls]);

    // ---------------------------------- event ----------------------------------
    const onClear = useCallback(() => setInputValue(''), [setInputValue]);
    const onClearMouseDown = useCallback(e => e.preventDefault(), []); // Prevent Focus Loss

    // ---------------------------------- render chunk ----------------------------------
    const renderSuffix = useMemo(() => {
        if(!hasSuffix) return null;
        return (
            <span className={`${componentCls}__suffix`}>
                <span className={`${componentCls}__suffix-inner`}>
                    {allowClear && <Icon className={`${componentCls}__icon ${componentCls}__handle`}
                                         type={'close-circle'}
                                         onClick={onClear}
                                         onMouseDown={onClearMouseDown} />}
                </span>
            </span>
        )
    }, [hasSuffix, allowClear])

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} {...others}>
            <input
                type="text"
                className={_inputClassNames}
                value={inputValue}
                onChange={inputChange}
                disabled={disabled}
                placeholder={placeholder}
            />
            {renderSuffix}
        </div>
    )
}

Input.propTypes = InputProps;
Input.defaultProps = InputDefaultProps;

export default Input