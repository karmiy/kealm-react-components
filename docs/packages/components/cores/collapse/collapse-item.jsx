import React, { useState } from 'react';
import Icon from '../icon';
import { CollapseItemProps, CollapseItemDefaultProps } from "./interface";
import { useContextConf, useClassName } from 'hooks';
import { CollapseTransition } from '../transition';

function CollapseItem(props) {
    const [show, setShow] = useState(false);
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

    // arrow class
    const arrowClassNames = useClassName({
        [`${componentCls}__arrow`]: true,
        'is-active': show,
    })

    return (
        <div className={classNames} {...others}>
            <div role={'tab'}>
                {/* header */}
                <div role={'button'} tabIndex={0} className={headerClassNames} onClick={() => setShow(pre => !pre)}>
                    {title}
                    <Icon type={'right'} className={arrowClassNames} />
                </div>
                {/* wrap */}
                <CollapseTransition visible={show}>
                    <div role={'tabpanel'} className={wrapClassNames}>
                        <div className={`${componentCls}__content`}>
                            {children}
                        </div>
                    </div>
                </CollapseTransition>
            </div>
        </div>
    )
}

CollapseItem.propTypes = CollapseItemProps;
CollapseItem.defaultProps = CollapseItemDefaultProps;

export default CollapseItem