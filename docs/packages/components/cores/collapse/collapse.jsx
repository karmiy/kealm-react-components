import React, { Children, cloneElement, useState } from 'react';
import { CollapseProps, CollapseDefaultProps } from "./interface";
import { useContextConf, useClassName, useDidUpdate } from 'hooks';
import { toArray, removeOfArray } from 'utils/array';

function Collapse(props) {
    const { componentCls } = useContextConf('collapse');
    const {
        children,
        className,
        value,
        defaultValue,
        onChange,
        ...others
    } = props;

    // root-className
    const classNames = useClassName({
        [className]: className,
        [componentCls]: true,
    });

    // 当前active的collapse-item，默认[]
    const [activeNames, setActiveNames] = useState(toArray(value || defaultValue));

    // value改变时修改激活状态
    useDidUpdate(() => {
        setActiveNames(value);
    }, [value])

    // 激活选中的collapse-item
    const _children = Children.map(children, (child, index) => {
        const key = child.props.name || `collapse-item-${index}`;
        return cloneElement(child, {
            expand: activeNames.includes(key),
            onExpandChange: show => {
                let nextActiveNames = activeNames;
                if(show && !activeNames.includes(key)) {
                    nextActiveNames = [...activeNames, key];
                }else if(!show && activeNames.includes(key)) {
                    nextActiveNames = removeOfArray(activeNames, key);
                }
                // 如果有props.value，将控制权交给onChange
                onChange(nextActiveNames);

                !value && setActiveNames(nextActiveNames);
            }
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