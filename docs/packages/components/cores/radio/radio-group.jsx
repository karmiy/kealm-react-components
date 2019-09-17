import React, { useRef, useMemo, Children, cloneElement } from 'react';
import { RadioGroupProps, RadioGroupDefaultProps } from "./interface";
import { useContextConf, useClassName, useTransChildren, useForceUpdate } from 'hooks';
import { isEmpty } from 'utils/base';

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
    // 转化children
    const _children = useTransChildren(children);

    const forceUpdate = useForceUpdate();
    // 默认选中的radio.value
    const _valueRef = useRef(defaultValue);
    // 实际选中的radio.value(依赖value，没有取默认)
    const checkedValue = value !== undefined ? value : _valueRef.current;

    // ---------------------------------- render chunk ----------------------------------
    // 激活选中的radio
    const renderChildren = useMemo(() => {
        return Children.map(_children, child => {
            const { value: _val, disabled: _disabled, solid: _solid, name: _name, size: _size } = child.props;
            return cloneElement(child, {
                checked: _val === checkedValue,
                disabled: isEmpty(_disabled) ? disabled : _disabled,
                solid: isEmpty(_solid) ? solid : _solid,
                name: isEmpty(_name) ? name : _name,
                size: isEmpty(_size) ? size : _size,
                onChange: val => {
                    // 有value，由用户自主onChange控制
                    if(!isEmpty(value)) {
                        onChange(val);
                        return;
                    }
                    // 没有value，Group内部控制
                    _valueRef.current = val;
                    forceUpdate();
                },
            })
        })
    }, [_children, checkedValue, value, onChange, disabled, solid, size, name]);

    // ---------------------------------- render ----------------------------------
    return (
        <div role={'radio-group'} className={classNames} {...others}>
            {renderChildren}
        </div>
    )
}
RadioGroup.propTypes = RadioGroupProps;
RadioGroup.defaultProps = RadioGroupDefaultProps;

export default RadioGroup;