import React, { Children, cloneElement, useState, useCallback } from 'react';
import { CollapseProps, CollapseDefaultProps } from "./interface";
import { useContextConf, useClassName, useDidUpdate, useSyncOnce } from 'hooks';
import { toArray, removeOfArray } from 'utils/array';

const noop = () => {};

function Collapse(props) {
    const { componentCls } = useContextConf('collapse');
    const {
        children,
        className,
        value,
        defaultValue,
        onChange,
        accordion,
        ...others
    } = props;

    // root-className
    const classNames = useClassName({
        [className]: className,
        [componentCls]: true,
    });

    let initValue = null;
    useSyncOnce(() => {
        // 初始化当前active状态的collapse-item，默认[]
        initValue = toArray(value || defaultValue);
        // 手风琴模式只取一项
        accordion && (initValue = initValue.slice(0, 1));
    });
    const [activeNames, setActiveNames] = useState(initValue);

    // value改变时修改激活状态
    useDidUpdate(() => {
        setActiveNames(value);
    }, [value])

    // 展开/收起 回调
    const onExpandChange = useCallback((name, expand) => {
        let nextActiveNames = activeNames;
        if(expand && !activeNames.includes(name)) {
            nextActiveNames = accordion ? [name] : [...activeNames, name];
        }else if(!expand && activeNames.includes(name)) {
            nextActiveNames = removeOfArray(activeNames, name);
        }
        // 如果有props.value，将控制权交给onChange
        onChange(nextActiveNames);

        !value && setActiveNames(nextActiveNames);
    })
    // 激活选中的collapse-item
    const _children = Children.map(children, (child, index) => {
        const name = child.props.name || `collapse-item-${index}`;
        const isDisabled = child.props.disabled;
        return cloneElement(child, {
            expand: activeNames.includes(name) && !isDisabled,
            name,
            onExpandChange: isDisabled ? noop : onExpandChange,
        })
    });

    return (
        <div role='tablist' className={classNames} {...others}>
            {_children}
        </div>
    )
}

Collapse.propTypes = CollapseProps;
Collapse.defaultProps = CollapseDefaultProps;

export default Collapse