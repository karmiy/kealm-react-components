import React from 'react';
import { useContextConf, useClassName } from 'hooks/common';

function Mask(props) {
    const {
        className,
        ...others
    } = props;
    const { componentCls } = useContextConf(`mask`);

    const classNames = useClassName({
        [componentCls]: true,
        [className]: className,
    }, [className, componentCls]);

    return <div className={`${classNames}`} {...others} />
}

export default Mask;