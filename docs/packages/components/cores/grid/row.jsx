import React, { Children, cloneElement, useMemo } from 'react';
import { RowProps, RowDefaultProps } from "./interface";
import { useContextConf, useClassName } from 'hooks';
import { handleEleOfType, transChildren } from 'utils/common/react-util';
import Col from './col';

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
    const _children = transChildren(children);

    // ---------------------------------- render chunk ----------------------------------
    const renderChildren = useMemo(() => {
        if(!gap) return _children;

        // Find Col Nodes
        // const filterCols = loopEleOfType(_children, Col);
        return handleEleOfType(_children, Col, child => {
            return cloneElement(child, {
                style: {
                    paddingLeft: gap ? `${gap}px` : null,
                    paddingRight: gap ? `${gap}px` : null,
                },
            })
        });

        /*return Children.map(filterCols, child => {
            if(child) {
                return cloneElement(child, {
                    style: {
                        paddingLeft: gap ? `${gap}px` : null,
                        paddingRight: gap ? `${gap}px` : null,
                    },
                })
            }
        })*/
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