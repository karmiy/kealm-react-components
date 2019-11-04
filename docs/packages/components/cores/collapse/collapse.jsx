import React, { memo, Children, cloneElement, useState, useCallback, useMemo } from 'react';
import { CollapseProps, CollapseDefaultProps } from "./interface";
import { useContextConf, useClassName, useDidUpdate, useSyncOnce } from 'hooks';
import { toArray, removeOfArray } from 'utils/common/array';
import { transChildren } from 'utils/common/react-util';

const noop = () => {};

function Collapse(props) {
    const { componentCls } = useContextConf('collapse');
    const {
        children,
        className,
        value,
        defaultValue,
        onChange,
        iconLeft,
        accordion,
        unmountOnExit,
        showArrow,
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
    const _children = transChildren(children);

    // 初始化当前active激活项
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

    // ---------------------------------- event ----------------------------------
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
    }, [activeNames, value, onChange, accordion])

    // ---------------------------------- render chunk ----------------------------------
    // 激活选中的collapse-item
    const renderChildren = useMemo(() => {
        return Children.map(_children, (child, index) => {
            if(child) {
                const name = child.props.name || `collapse-item-${index}`;
                const isDisabled = child.props.disabled;
                return cloneElement(child, {
                    expand: activeNames.includes(name) && !isDisabled,
                    name,
                    iconLeft: !!iconLeft,
                    unmountOnExit: !!unmountOnExit,
                    onExpandChange: isDisabled ? noop : onExpandChange,
                    showArrow,
                })
            }
        })
    }, [_children, activeNames, onExpandChange, iconLeft, unmountOnExit, showArrow]);

    // ---------------------------------- render ----------------------------------
    return (
        <div role='tablist' className={classNames} {...others}>
            {renderChildren}
        </div>
    )
}

Collapse.propTypes = CollapseProps;
Collapse.defaultProps = CollapseDefaultProps;

export default memo(Collapse);