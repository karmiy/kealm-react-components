import React, { Children, cloneElement, useMemo } from 'react';
import { RowProps, RowDefaultProps } from "./interface";
import { useContextConf, useClassName, useTransChildren } from 'hooks';

function Row(props) {
    const { componentCls } = useContextConf('row');

    const {
        children,
        className,
        style,
        gutter,
        type,
        justify,
        align,
        ...others
    } = props;

    // 分栏间隔
    const gap = useMemo(() => {
        return gutter ? parseFloat(gutter) / 2 : 0;
    }, [gutter])

    // ---------------------------------- class ----------------------------------
    // root-className
    const classNames = useClassName({
        [componentCls]: true,
        [`${componentCls}--${type}`]: type,
        [`is-justify-${justify}`]: justify,
        [`is-align-${align}`]: align,
        [className]: className,
    }, [className, type, justify, align]);

    // ---------------------------------- style ----------------------------------
    const styles = useMemo(() => {
        return {
            marginLeft: gap ? `-${gap}px` : null,
            marginRight: gap ? `-${gap}px` : null,
            ...style,
        }
    }, [style, gap]);

    // ---------------------------------- logic code ----------------------------------
    // 转化children
    const _children = useTransChildren(children);

    // ---------------------------------- render chunk ----------------------------------
    const renderChildren = useMemo(() => {
        if(!gap) return _children;

        return Children.map(_children, child => {
            return cloneElement(child, {
                style: {
                    paddingLeft: gap ? `${gap}px` : null,
                    paddingRight: gap ? `${gap}px` : null,
                },
            })
        })
    }, [_children, gap]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} style={styles} {...others}>
            {renderChildren}
        </div>
    )
}
Row.propTypes = RowProps;
Row.defaultProps = RowDefaultProps;

export default Row;