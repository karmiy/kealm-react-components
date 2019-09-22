import React, { useMemo, useCallback } from 'react';
import Icon from '../icon';
import { PasswordProps, PasswordDefaultProps } from "./interface";
import { useContextConf, useClassName, useInputValue } from 'hooks';

function Password(props) {
    const { componentCls } = useContextConf('input');
    const {
        className,
        placeholder,
        disabled,
        defaultValue,
        value,
        onChange,
        ...others
    } = props;

    // ---------------------------------- logic code ----------------------------------
    const { inputValue, setInputValue, inputChange }  = useInputValue(defaultValue, value, onChange)

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        'is-disabled': disabled,
        [`${componentCls}--suffix`] : true,
        [className]: className
    }, [className, componentCls, disabled]);

    const _inputClassNames = useClassName({
        [`${componentCls}__inner`]: true,
    }, [componentCls]);

    // ---------------------------------- event ----------------------------------
    const onClear = useCallback(() => setInputValue(''), [setInputValue]);
    const onClearMouseDown = useCallback(e => e.preventDefault(), []); // Prevent Focus Loss

    // ---------------------------------- render chunk ----------------------------------
    const renderSuffix = useMemo(() => {
        return (
            <span className={`${componentCls}__suffix`}>
                <span className={`${componentCls}__suffix-inner`}>
                    <Icon className={`${componentCls}__icon ${componentCls}__handle`}
                                         type={'eye'}
                                         onClick={onClear}
                                         onMouseDown={onClearMouseDown} />
                </span>
            </span>
        )
    }, [])

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

Password.propTypes = PasswordProps;
Password.defaultProps = PasswordDefaultProps;

export default Password