import React, { Children, cloneElement,  useMemo } from 'react';
import { useContextConf, useClassName } from 'hooks';
import { BreadcrumbProps, BreadcrumbDefaultProps } from './interface';
import { transChildren } from 'utils/common/react-util';

function Breadcrumb(props) {
    const { componentCls } = useContextConf('breadcrumb');
    const {
        children,
        className,
        separator,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [className]: className,
    }, [className, componentCls]);

    // ---------------------------------- logic code ----------------------------------
    const _children = transChildren(children);

    // ---------------------------------- render chunk ----------------------------------
    const renderChildren = useMemo(() => {
        return Children.map(_children, child => {
            if(child) {
                return cloneElement(child, {
                    separator,
                })
            }
        })
    }, [_children, separator]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} {...others}>
            {renderChildren}
        </div>
    );
}

Breadcrumb.propTypes = BreadcrumbProps;
Breadcrumb.defaultProps = BreadcrumbDefaultProps;

export default Breadcrumb;