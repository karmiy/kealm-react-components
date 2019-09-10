import React, { useMemo } from 'react';
import { IconProps } from './interface';
import { useContextConf, useClassName } from 'hooks';

function Icon(props) {
    const {
        type,
        className,
        ...others
    } = props;
    const { componentCls } = useContextConf(`icon-${type}`);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [className]: className,
        [componentCls]: true,
    }, className);

    // ---------------------------------- render ----------------------------------
    return useMemo(() => <i className={classNames} {...others} />, [props]);
}

Icon.propTypes = IconProps;

export default Icon;