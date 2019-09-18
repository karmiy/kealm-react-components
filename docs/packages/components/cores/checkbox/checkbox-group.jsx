import React, { useRef, useMemo } from 'react';
import { CheckboxGroupProps, CheckboxGroupDefaultProps } from "./interface";
import { useContextConf, useClassName, useForceUpdate } from 'hooks';
import { CheckedContext } from '../radio/context';
import { isEmpty } from 'utils/common';

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
    const forceUpdate = useForceUpdate();
    // 默认选中的checkbox.value
    const _valueRef = useRef(defaultValue);
    // 实际选中的checkbox.value(依赖value，没有取默认)
    const checkedValue = value !== undefined ? value : _valueRef.current;

    // ---------------------------------- context.provider ----------------------------------
    // 传递给选择框的context
    const providers = useMemo(() => ({
        disabled,
        name,
        groupValues: checkedValue,
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
    }), [checkedValue, value, onChange, disabled, name])

    // ---------------------------------- render ----------------------------------
    return (
        <CheckedContext.Provider value={providers}>
            <div role={'checkbox-group'} className={classNames} {...others}>
                {children}
            </div>
        </CheckedContext.Provider>
    )
}
CheckboxGroup.propTypes = CheckboxGroupProps;
CheckboxGroup.defaultProps = CheckboxGroupDefaultProps;

export default CheckboxGroup;