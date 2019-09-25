import React, { useMemo } from 'react';
import { CardMetaProps, CardMetaDefaultProps } from './interface';
import { useContextConf, useClassName } from 'hooks';

function Meta(props) {
    const {
        className,
        children,
        title,
        desc,
        ...others
    } = props;
    const { componentCls } = useContextConf(`card-meta`);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}`]: true,
        [className]: className,
    }, [className, componentCls]);


    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} {...others}>
            <div className={`${componentCls}__detail`}>
                <div className={`${componentCls}__title`}>
                    {title}
                </div>
                <div className={`${componentCls}__desc`}>
                    {desc}
                </div>
            </div>
        </div>
    );
}

Meta.propTypes = CardMetaProps;
Meta.defaultProps = CardMetaDefaultProps;

export default Meta;