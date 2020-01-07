import React, { useCallback, useContext } from 'react';
import { ColProps, ColDefaultProps } from "./interface";
import { useContextConf, useClassName } from 'hooks';
import { isObject } from 'utils/common/base';
import { GridContext } from './row';

function Col(props) {
    const { componentCls } = useContextConf('col');

    const {
        children,
        className,
        span,
        offset,
        pull,
        push,
        order,
        xs,
        sm,
        md,
        lg,
        xl,
        style,
        ...others
    } = props;

    // ---------------------------------- style ----------------------------------
    const gap = useContext(GridContext);
    const styles = {
        ...style,
        paddingLeft: gap ? `${gap}px` : null,
        paddingRight: gap ? `${gap}px` : null,
    }

    // ---------------------------------- function ----------------------------------
    // reactive-className(xs、sm、md、lg、xl)
    const reactiveClass = useCallback((type, value) => {
        if(!isObject(value))
            return {
                [`${componentCls}-${type}-${value}`]: value,
            }
        const { span, pull, push, offset, order } = value;
        return {
            [`${componentCls}-${type}-${span}`]: span,
            [`${componentCls}-${type}-offset-${offset}`]: offset,
            [`${componentCls}-${type}-pull-${pull}`]: pull,
            [`${componentCls}-${type}-push-${push}`]: push,
            [`${componentCls}-${type}-order-${order}`]: order,
        }
    }, [componentCls]);

    // ---------------------------------- class ----------------------------------
    // root-className
    const classNames = useClassName({
        [componentCls]: true,
        [`${componentCls}-${span}`]: span,
        [`${componentCls}-offset-${offset}`]: offset,
        [`${componentCls}-pull-${pull}`]: pull,
        [`${componentCls}-push-${push}`]: push,
        [`${componentCls}-order-${order}`]: order,
        ...reactiveClass('xs', xs),
        ...reactiveClass('sm', sm),
        ...reactiveClass('md', md),
        ...reactiveClass('lg', lg),
        ...reactiveClass('xl', xl),
        [className]: className,
    }, [className, componentCls, span, offset, pull, push, order, reactiveClass, xs, sm, md, lg, xl]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} style={styles} {...others}>
            {children}
        </div>
    )
}

Col.propTypes = ColProps;
Col.defaultProps = ColDefaultProps;

export default Col;