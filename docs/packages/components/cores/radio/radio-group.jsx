import React, { useRef, useMemo } from 'react';
import { RadioGroupProps, RadioGroupDefaultProps } from "./interface";
import { useContextConf, useClassName, useForceUpdate } from 'hooks';
import { CheckedContext } from './context';
import { isEmpty } from 'utils/common';

function RadioGroup(props) {
    const { componentCls } = useContextConf('radio-group');

    const {
        className,
        children,
        defaultValue,
        value,
        onChange,
        disabled,
        solid,
        size,
        name,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    // root-className
    const classNames = useClassName({
        [componentCls]: true,
        [className]: className,
    }, [className, componentCls]);

    // ---------------------------------- logic code ----------------------------------
    const forceUpdate = useForceUpdate();
    // 默认选中的radio.value
    const _valueRef = useRef(defaultValue);
    // 实际选中的radio.value(依赖value，没有取默认)
    const checkedValue = value !== undefined ? value : _valueRef.current;

    // ---------------------------------- context.provider ----------------------------------
    // 传递给选择框的context
    const providers = useMemo(() => ({
        disabled,
        name,
        solid,
        size,
        groupValues: !isEmpty(checkedValue) ? [checkedValue] : [],
        onChange: e => {
            // 有value，由用户自主onChange控制
            onChange(e);
            if(!isEmpty(value)) return;

            // 没有value，Group内部控制
            _valueRef.current = e.target.value;
            forceUpdate();
        },
    }), [checkedValue, value, onChange, disabled, solid, size, name])

    // ---------------------------------- render ----------------------------------
    return (
        <CheckedContext.Provider value={providers}>
            <div role={'radio-group'} className={classNames} {...others}>
                {children}
            </div>
        </CheckedContext.Provider>
    )
}
RadioGroup.propTypes = RadioGroupProps;
RadioGroup.defaultProps = RadioGroupDefaultProps;

export default RadioGroup;