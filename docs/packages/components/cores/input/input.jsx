import React, { useMemo, useCallback } from 'react';
import Icon from '../icon';
import { InputProps, InputDefaultProps } from "./interface";
import { useContextConf, useClassName, useInputValue, useInputEvents } from 'hooks';
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
        allowClear,
        prefix,
        suffix,
        prepend,
        append,
        size,
        maxLength,
        showLimitCount,
        ...others
    } = props;

    const { inputEvents, ...domProps } = useInputEvents(others);
    const { onChange, ...otherEvents } = inputEvents;

    // ---------------------------------- logic code ----------------------------------
    const { inputValue, setInputValue, inputChange }  = useInputValue(defaultValue, value, onChange)
    const hasSuffix = allowClear || suffix || showLimitCount;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        'is-disabled': disabled,
        [`${componentCls}--suffix`] : hasSuffix,
        [`${componentCls}--prefix`] : prefix,
        [`${componentCls}-group`] : prepend || append,
        [`${componentCls}-group--prepend`] : prepend,
        [`${componentCls}-group--append`] : append,
        [`${componentCls}--${size}`] : size,
        [`${componentCls}--count`] : showLimitCount,
        [className]: className
    }, [className, componentCls, disabled, hasSuffix, prefix, prepend, append, size, showLimitCount]);

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

    const renderLimitCount = useMemo(() => {
        if(!maxLength || !showLimitCount) return null;

        return (
            <span className={`${componentCls}__count`}>
                <span className={`${componentCls}__count-inner`}>{inputValue.length}/{maxLength}</span>
            </span>
        )
    }, [maxLength, showLimitCount, componentCls, inputValue]);

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
                    {renderLimitCount}
                </span>
            </span>
        )
    }, [hasSuffix, componentCls, renderClearEle, renderSuffixEle, renderLimitCount]);

    const renderPrependWrapper = useMemo(() => {
        if(!prepend) return null;

        return (
            <div className={`${componentCls}-group__prepend`}>
                {prepend}
            </div>
        )
    }, [prepend, componentCls]);

    const renderAppendWrapper = useMemo(() => {
        if(!append) return null;

        return (
            <div className={`${componentCls}-group__append`}>
                {append}
            </div>
        )
    }, [append, componentCls]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} {...domProps}>
            {renderPrependWrapper}
            <input
                type="text"
                className={_inputClassNames}
                value={inputValue}
                onChange={inputChange}
                disabled={disabled}
                placeholder={placeholder}
                maxLength={maxLength}
                {...otherEvents}
            />
            {renderPrefixWrapper}
            {renderSuffixWrapper}
            {renderAppendWrapper}
        </div>
    )
}

Input.propTypes = InputProps;
Input.defaultProps = InputDefaultProps;

export default Input