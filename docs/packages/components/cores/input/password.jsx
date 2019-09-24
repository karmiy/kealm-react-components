import React, { useState, useMemo, useCallback, useRef } from 'react';
import Icon from '../icon';
import { PasswordProps, PasswordDefaultProps } from "./interface";
import { useContextConf, useClassName, useInputValue, useDidUpdate } from 'hooks';
import { extract, omit } from 'utils/object';

function Password(props) {
    const { componentCls } = useContextConf('input');
    const {
        className,
        placeholder,
        disabled,
        defaultValue,
        value,
        onChange,
        size,
        showToggleIcon,
        ...others
    } = props;

    // ---------------------------------- within props ----------------------------------
    const rootOthers = extract(others, ['style', 'onClick']);
    const inputOthers = omit(others, ['style', 'onClick']);

    // ---------------------------------- logic code ----------------------------------
    const [visible, setVisible] = useState(false);
    const passwordRef = useRef(null);
    const { inputValue, inputChange }  = useInputValue(defaultValue, value, onChange);

    // Switch to focus password box
    useDidUpdate(() => {
        passwordRef.current.focus();
    }, [visible])

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        'is-disabled': disabled,
        [`${componentCls}--suffix`] : true,
        [`${componentCls}--${size}`] : size,
        [className]: className
    }, [className, componentCls, disabled, size]);

    const _inputClassNames = useClassName({
        [`${componentCls}__inner`]: true,
    }, [componentCls]);

    // ---------------------------------- event ----------------------------------
    const onSwitch = useCallback(() => {
        setVisible(v => !v);
    }, [setVisible]);

    // ---------------------------------- render chunk ----------------------------------
    const renderSuffix = useMemo(() => {
        if(!showToggleIcon) return false;
        return (
            <span className={`${componentCls}__suffix`}>
                <span className={`${componentCls}__suffix-inner`}>
                    <Icon className={`${componentCls}__icon ${componentCls}__handle`}
                                         type={visible ? 'eye' : 'eye-o'}
                                         onClick={onSwitch}
                                          />
                </span>
            </span>
        )
    }, [showToggleIcon, visible])

    const renderInput = useMemo(() => {
        return (
            <input
                ref={passwordRef}
                type={visible ? 'text' : 'password'}
                className={_inputClassNames}
                value={inputValue}
                onChange={inputChange}
                disabled={disabled}
                placeholder={placeholder}
                {...inputOthers}
            />
        )
    }, [visible, _inputClassNames, inputValue, inputChange, disabled, placeholder, ...Object.values(inputOthers)]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} {...rootOthers}>
            {renderInput}
            {renderSuffix}
        </div>
    )
}

Password.propTypes = PasswordProps;
Password.defaultProps = PasswordDefaultProps;

export default Password