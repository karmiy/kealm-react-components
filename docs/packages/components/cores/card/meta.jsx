import React, { memo, useMemo } from 'react';
import { CardMetaProps, CardMetaDefaultProps } from './interface';
import { useContextConf, useClassName } from 'hooks';

function Meta(props) {
    const {
        className,
        children,
        title,
        desc,
        avatar,
        ...others
    } = props;
    const { componentCls } = useContextConf(`card-meta`);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}`]: true,
        [className]: className,
    }, [className, componentCls]);

    // ---------------------------------- render chunk ----------------------------------
    const renderAvatar = useMemo(() => {
        if(!avatar) return null;

        return (
            <div className={`${componentCls}__avatar`}>
                {avatar}
            </div>
        )
    }, [componentCls, avatar]);
    const renderDetail = useMemo(() => {
        return (
            <div className={`${componentCls}__detail`}>
                <div className={`${componentCls}__title`}>
                    {title}
                </div>
                <div className={`${componentCls}__desc`}>
                    {desc}
                </div>
            </div>
        )
    }, [componentCls, title, desc]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} {...others}>
            {renderAvatar}
            {renderDetail}
        </div>
    );
}

Meta.propTypes = CardMetaProps;
Meta.defaultProps = CardMetaDefaultProps;

export default memo(Meta);