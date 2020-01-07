import React, { useMemo } from 'react';
import { useContextConf, useClassName } from 'hooks';
import { BreadcrumbItemProps, BreadcrumbItemDefaultProps } from './interface';
import { isEmpty } from 'utils/common/base';

function BreadcrumbItem(props) {
    const {componentCls} = useContextConf('breadcrumb');
    const {
        children,
        className,
        to,
        separator,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}__item`]: true,
        [className]: className,
    }, [className, componentCls]);

    // ---------------------------------- render mini chunk ----------------------------------
    const innerContent = useMemo(() => {
        if(isEmpty(to)) return children;

        return <a href={to}>{children}</a>
    }, [to, children]);

    // ---------------------------------- render ----------------------------------
    return (
        <span role={'navigation'} className={classNames} {...others}>
            <span role={'link'} className={`${componentCls}__inner`}>
                {innerContent}
            </span>
            <span role={'presentation'} className={`${componentCls}__separator`}>{separator}</span>
        </span>
    );
};

BreadcrumbItem.propTypes = BreadcrumbItemProps;
BreadcrumbItem.defaultProps = BreadcrumbItemDefaultProps;

export default BreadcrumbItem;