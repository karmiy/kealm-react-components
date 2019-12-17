import React, { useCallback, useRef, useMemo, useState } from 'react';
import { RangeInputProps, RangeInputDefaultProps } from './interface';
import { useContextConf, useClassName, useController } from 'hooks';
import { extract, omit } from 'utils/common/object';
import KeyCode from 'utils/common/keyCode';
import { isString, mergeStr } from 'utils/common/base';
import Icon from '../icon';
import { cloneVElement } from 'utils/common/react-util';

const { createConfig } = useController;

function createEvent(e, ele) {
    const event = Object.create(e);
    event.target = ele;
    event.currentTarget = ele;
    return event;
}

function RangeInput(props) {
    const { componentCls } = useContextConf('input');
    const { componentCls: rangeCls } = useContextConf('range-input');
    const {
        className,
        defaultValue,
        value,
        onChange,
        onKeyDown,
        onPressEnter,
        onFocus,
        onBlur,
        disabled,
        allowClear,
        startPlaceholder,
        endPlaceholder,
        prefix,
        suffix,
        size,
        inputStyle,
        separator,
        ...others
    } = props;

    // ---------------------------------- within props ----------------------------------
    const rootOthers = extract(others, ['style', 'onClick']);
    const inputOthers = omit(others, ['style', 'onClick']);

    // ---------------------------------- variable ----------------------------------
    const [rangeValue, setRangeValue] = useController(defaultValue, value, onChange, [], disabled);
    const leftInputRef = useRef(null), rightInputRef = useRef(null);
    const hasSuffix = allowClear || suffix;
    const [isFocus, setIsFocus] = useState(false);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [rangeCls]: true,
        'is-disabled': disabled,
        [`${rangeCls}--suffix`] : hasSuffix,
        [`${rangeCls}--prefix`] : prefix,
        [`${rangeCls}--${size}`] : size,
        'is-focus': isFocus,
        [className]: className,
    }, [className, componentCls, rangeCls, disabled, hasSuffix, prefix, size, isFocus]);

    // ---------------------------------- event ----------------------------------
    const onInputChange = useCallback(e => {
        const isLeft = e.target === leftInputRef.current;
         const anotherInputEle = isLeft ? rightInputRef.current : leftInputRef.current;
        const event = Object.create(e);
        event.target = anotherInputEle;
        event.currentTarget = anotherInputEle;

        setRangeValue(createConfig({
            value: isLeft ? [e.target.value, event.target.value] : [event.target.value, e.target.value],
            event: isLeft ? [e, event] : [event, e],
        }))
    }, []);

    const onClear = useCallback(e => {
        // Change e.target to input
        const leftInputEle = leftInputRef.current,
            rightInputEle = rightInputRef.current;

        const leftEvent = createEvent(e, leftInputEle),
            rightEvent = createEvent(e, rightInputEle);

        const originalLeftInputValue = leftInputEle.value,
            originalRightInputValue = rightInputEle.value;

        leftInputEle.value = rightInputEle.value = '';

        setRangeValue(createConfig({
            value: [leftEvent.target.value, rightEvent.target.value],
            event: [leftEvent, rightEvent],
        }))

        leftInputEle.value = originalLeftInputValue;
        rightInputEle.value = originalRightInputValue;
    }, []);

    const onClearMouseDown = useCallback(e => e.preventDefault(), []); // Prevent Focus Loss

    const onKeydownTrigger = useCallback((e) => {
        if(e.keyCode === KeyCode.ENTER) {
            onPressEnter(e.target.value, e);
        }
        onKeyDown && onKeyDown(e);
    }, [onPressEnter, onKeyDown]);

    const onFocusTrigger = useCallback((e) => {
        setIsFocus(true);
        onFocus && onFocus(e);
    }, [onFocus]);

    const onBlurTrigger = useCallback((e) => {
        setIsFocus(false);
        onBlur && onBlur(e);
    }, [onBlur]);

    // ---------------------------------- render mini chunk ----------------------------------
    const renderPrefixEle = useMemo(() => {
        if(!prefix) return null;

        return isString(prefix)
            ?
            <Icon className={`${componentCls}__icon`} type={prefix} />
            :
            cloneVElement(prefix, {
                className: mergeStr({
                    [`${componentCls}__icon`]: true,
                    [prefix.props.className]: prefix.props.className,
                })
            })
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
            cloneVElement(suffix, {
                className: mergeStr({
                    [`${componentCls}__icon`]: true,
                    [suffix.props.className]: suffix.props.className,
                })
            })
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
                    {renderSuffixEle}
                    {renderClearEle}
                </span>
            </span>
        )
    }, [hasSuffix, componentCls, renderClearEle, renderSuffixEle]);

    // ---------------------------------- render ----------------------------------
    return (
        <div tabIndex={0} className={classNames} {...rootOthers}>
            <input
                ref={leftInputRef}
                className={`${componentCls}__inner`}
                style={inputStyle}
                type="text"
                value={rangeValue[0] || ''}
                onChange={onInputChange}
                onKeyDown={onKeydownTrigger}
                onFocus={onFocusTrigger}
                onBlur={onBlurTrigger}
                placeholder={startPlaceholder}
                disabled={disabled}
                {...inputOthers}
            />
            <span className={`${rangeCls}__separator`}>{separator}</span>
            <input
                ref={rightInputRef}
                className={`${componentCls}__inner`}
                style={inputStyle}
                type="text"
                value={rangeValue[1] || ''}
                onChange={onInputChange}
                onKeyDown={onKeydownTrigger}
                onFocus={onFocusTrigger}
                onBlur={onBlurTrigger}
                placeholder={endPlaceholder}
                disabled={disabled}
                {...inputOthers}
            />
            {renderPrefixWrapper}
            {renderSuffixWrapper}
        </div>
    );
}

RangeInput.propTypes = RangeInputProps;
RangeInput.defaultProps = RangeInputDefaultProps;

export default RangeInput;