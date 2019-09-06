import React from 'react';
import Icon from '../icon';
import { CollapseItemProps, CollapseItemDefaultProps } from "./interface";
import { useContextConf, useClassName } from 'hooks';

function CollapseItem(props) {
    const { componentCls } = useContextConf('collapse-item');
    const {
        children,
        className,
        name,
        title,
        ...others
    } = props;

    // 根元素class
    const classNames = useClassName({
        [className]: className,
        [componentCls]: true,
    });

    // header class
    const headerClassNames = useClassName({
        [`${componentCls}__header`]: true,
    })

    // wrap class
    const wrapClassNames = useClassName({
        [`${componentCls}__wrap`]: true,
    })

    return (
        <div className={classNames} {...others}>
            <div role={'tab'}>
                {/* header */}
                <div role={'button'} tabIndex={0} className={headerClassNames}>
                    {title}
                    <Icon type={'right'} className={`${componentCls}__arrow`} />
                </div>
                {/* wrap */}
                <div role={'tabpanel'} className={wrapClassNames}>
                    <div className={`${componentCls}__content`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

CollapseItem.propTypes = CollapseItemProps;
CollapseItem.defaultProps = CollapseItemDefaultProps;

export default CollapseItem