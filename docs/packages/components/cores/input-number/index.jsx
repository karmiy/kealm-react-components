import React, { useCallback, useState, useEffect, useRef } from 'react';
import { useContextConf, useClassName, usePuppet, useStateStore } from 'hooks';
import { InputNumberProps, InputNumberDefaultProps } from './interface';
import Input from '../input';
import Icon from '../icon';
import addDomEventListener from 'add-dom-event-listener';
import { trim, isEmpty } from 'utils/common/base';

const isNumber = (value) => {
    return !Number.isNaN(Number(value));
}

const getPrecision = value => {
    if (value === undefined) return 0;
    const valueString = value.toString();
    const dotPosition = valueString.indexOf('.');
    let precision = 0;
    if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1;
    }
    return precision;
}

const toPrecision = (value, precision) => {
    if(isEmpty(precision)) return `${value}`;

    if(value === '') return value;

    const valuePrecision = getPrecision(value);

    if(valuePrecision >= precision) return `${value}`;

    return value.toFixed(precision);
}

function InputNumber(props) {
    const {componentCls} = useContextConf('input-number');
    const {
        className,
        defaultValue,
        value,
        onChange,
        max,
        min,
        step,
        disabled,
        size,
        controlsRight,
        ...others
    } = props;

    // ---------------------------------- variable ----------------------------------
    const _defaultValue = defaultValue === null ? '' : defaultValue,
        _value = value === null ? '' : value;
    const [
        outerValue,
        innerValue,
        setOuterValue,
        setInnerValue
    ] = usePuppet(_defaultValue, _value, onChange, '', disabled, false);
    const inputNumberRef = useRef(null);
    const stateStoreRef = useStateStore({ max, min }, false);

    // ---------------------------------- class ----------------------------------
    const overMax = outerValue !== '' && outerValue >= max,
        belowMin = outerValue !== '' && outerValue <= min;

    const classNames = useClassName({
        [componentCls]: true,
        'is-controls-right': controlsRight,
        'is-disabled': disabled,
        [`${componentCls}--${size}`]: size,
        [className]: className,
    }, [className, componentCls, disabled, size, controlsRight]);

    const handlerUpClassNames = useClassName({
        [`${componentCls}__increase`]: true,
        'is-disabled': disabled || overMax,
    }, [componentCls, disabled, overMax]);

    const handlerDownClassNames = useClassName({
        [`${componentCls}__decrease`]: true,
        'is-disabled': disabled || belowMin,
    }, [componentCls, disabled, belowMin]);

    // ---------------------------------- event ----------------------------------
    const onHandler = useCallback((increase) => {
        setOuterValue(v => {
            if(v === '') return min === -Infinity ? 0 : min;

            const stepPrecision = Math.max(getPrecision(step), getPrecision(v));
            const precisionFactor = Math.pow(10, stepPrecision + 1);
            const nextValue = increase ?
                (v * precisionFactor + step * precisionFactor) / precisionFactor
                :
                (v * precisionFactor - step * precisionFactor) / precisionFactor;

            return Math.min(Math.max(nextValue, min), max);
        });
    }, [step, min, max]);

    const onIncrease = useCallback(() => onHandler(true), [onHandler]);
    const onDecrease = useCallback(() => onHandler(false), [onHandler]);

    const onInputChange = useCallback(e => {
        setInnerValue(e.target.value);
    }, []);

    // ---------------------------------- logic code ----------------------------------

    useEffect(() => {
        const inputEle = inputNumberRef.current.querySelector('input');

        let oldValue = '';

        const focusListener = addDomEventListener(inputEle, 'focus', function (e) {
            oldValue = trim(e.target.value);
        }, false);

        const blurListener = addDomEventListener(inputEle, 'blur', function (e) {
            const { min, max } = stateStoreRef.current;
            const targetValue = trim(e.target.value);

            if(!isNumber(targetValue)) {
                // Reload input when it's not a number
                setInnerValue(oldValue === '' ? oldValue : Number(oldValue));
            } else if(targetValue === '') {
                setOuterValue('', null);
            } else {
                setOuterValue(Math.min(Math.max(Number(targetValue), min), max));
            }
        }, false);

        return () => {
            focusListener.remove();
            blurListener.remove();
        }
    }, []);

    // ---------------------------------- render ----------------------------------
    return (
        <div ref={inputNumberRef} className={classNames} {...others}>
            <span unselectable={'unselectable'} role={'button'} className={handlerDownClassNames} onClick={onDecrease}>
                <Icon type={controlsRight ? 'down' : 'minus'} />
            </span>
            <span unselectable={'unselectable'} role={'button'} className={handlerUpClassNames} onClick={onIncrease}>
                <Icon type={controlsRight ? 'up' : 'plus'} />
            </span>
            <Input value={`${innerValue}`} onChange={onInputChange} disabled={disabled} size={size} />
        </div>
    );
}

InputNumber.propTypes = InputNumberProps;
InputNumber.defaultProps = InputNumberDefaultProps;

export default InputNumber;