import React, { memo } from 'react';
import { IconProps } from './interface';
import { useContextConf, useClassName } from 'hooks';

function Icon(props) {
    const {
        type,
        className,
        ...others
    } = props;
    const { componentCls } = useContextConf(`icon`);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}`]: true,
        [`${componentCls}-${type}`]: true,
        [className]: className,
    }, [type, className, componentCls]);

    // ---------------------------------- render ----------------------------------
    return <i className={classNames} {...others} />;
}

Icon.propTypes = IconProps;

export default memo(Icon);