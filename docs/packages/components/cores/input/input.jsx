import React, { useMemo, useCallback } from 'react';
import Icon from '../icon';
import { InputProps, InputDefaultProps } from "./interface";
import { useContextConf, useClassName, useInputValue } from 'hooks';
import { isString } from 'utils/common';
import { cloneVElement } from 'utils/react-util';

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
        prefix,
        suffix,
        ...others
    } = props;

    // ---------------------------------- logic code ----------------------------------
    const { inputValue, setInputValue, inputChange }  = useInputValue(defaultValue, value, onChange)
    const hasSuffix = allowClear || suffix;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        'is-disabled': disabled,
        [`${componentCls}--suffix`] : hasSuffix,
        [`${componentCls}--prefix`] : prefix,
        [className]: className
    }, [className, componentCls, disabled, hasSuffix, prefix]);

    const _inputClassNames = useClassName({
        [`${componentCls}__inner`]: true,
    }, [componentCls]);

    // ---------------------------------- event ----------------------------------
    const onClear = useCallback(() => setInputValue(''), [setInputValue]);
    const onClearMouseDown = useCallback(e => e.preventDefault(), []); // Prevent Focus Loss

    // ---------------------------------- render mini chunk ----------------------------------
    const renderPrefixEle = useMemo(() => {
        if(!prefix) return null;

        return isString(prefix)
                ?
                <Icon className={`${componentCls}__icon`} type={prefix} />
                :
                cloneVElement(prefix, {className: `${componentCls}__icon`})
    }, [componentCls, prefix]);

    const renderClearEle = useMemo(() => {
        if(!allowClear) return null;

        return <Icon className={`${componentCls}__icon ${componentCls}__handle`}
                     type={'close-circle'}
                     onClick={onClear}
                     onMouseDown={onClearMouseDown} />;
    }, [allowClear, componentCls, onClear, onClearMouseDown]);

    const renderSuffixEle = useMemo(() => {
        if(!suffix) return null;

        return isString(suffix)
                ?
                <Icon className={`${componentCls}__icon`} type={suffix} />
                :
                cloneVElement(suffix, {className: `${componentCls}__icon`})
    }, [suffix, componentCls]);

    // ---------------------------------- render chunk ----------------------------------
    const renderPrefixWrapper = useMemo(() => {
        if(!prefix) return null;
        return (
            <span className={`${componentCls}__prefix`}>
                {renderPrefixEle}
            </span>
        )
    }, [prefix, renderPrefixEle]);

    const renderSuffixWrapper = useMemo(() => {
        if(!hasSuffix) return null;
        return (
            <span className={`${componentCls}__suffix`}>
                <span className={`${componentCls}__suffix-inner`}>
                    {renderClearEle}
                    {renderSuffixEle}
                </span>
            </span>
        )
    }, [hasSuffix, componentCls, renderClearEle, renderSuffixEle]);

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
            {renderPrefixWrapper}
            {renderSuffixWrapper}
        </div>
    )
}

Input.propTypes = InputProps;
Input.defaultProps = InputDefaultProps;

export default Input