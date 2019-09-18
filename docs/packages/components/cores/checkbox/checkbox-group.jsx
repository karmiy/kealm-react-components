import React, { useRef, useMemo, Children, cloneElement } from 'react';
import { CheckboxGroupProps, CheckboxGroupDefaultProps } from "./interface";
import { useContextConf, useClassName, useTransChildren, useForceUpdate } from 'hooks';
import { isEmpty } from 'utils/base';

export const CheckedContext = React.createContext();

function CheckboxGroup(props) {
    const { componentCls } = useContextConf('checkbox-group');

    const {
        className,
        children,
        defaultValue,
        value,
        onChange,
        disabled,
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
    // 默认选中的checkbox.value
    const _valueRef = useRef(defaultValue);
    // 实际选中的checkbox.value(依赖value，没有取默认)
    const checkedValue = value !== undefined ? value : _valueRef.current;

    // ---------------------------------- render chunk ----------------------------------
    // 激活选中的radio
    const renderChildren = useMemo(() => {
        return Children.map(_children, child => {
            const { value: _val, disabled: _disabled, name: _name } = child.props;
            return cloneElement(child, {
                checked: checkedValue.includes(_val),
                disabled: isEmpty(_disabled) ? disabled : _disabled,
                name: isEmpty(_name) ? name : _name,
                onChange: e => {
                    // 状态改变的checkbox.value与checked
                    const changedValue = e.target.value, changedChecked = e.target.checked;
                    // 变化后checkbox组的value
                    const nextCheckedValue = changedChecked
                        ? [...checkedValue, changedValue]
                        : checkedValue.filter(item => item !== changedValue);

                    onChange(nextCheckedValue);

                    // 有value，由用户自主onChange控制
                    if(!isEmpty(value)) return;
                    // 没有value，Group内部控制
                    _valueRef.current = nextCheckedValue;
                    forceUpdate();
                },
            })
        })
    }, [_children, checkedValue, value, onChange, disabled, name]);

    // ---------------------------------- render ----------------------------------
    return (
        <div role={'checkbox-group'} className={classNames} {...others}>
            <CheckedContext.Provider>
                {renderChildren}
            </CheckedContext.Provider>
        </div>
    )
}
CheckboxGroup.propTypes = CheckboxGroupProps;
CheckboxGroup.defaultProps = CheckboxGroupDefaultProps;

export default CheckboxGroup;