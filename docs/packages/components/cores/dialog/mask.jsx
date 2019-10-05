import React from 'react';
import { useContextConf, useClassName } from 'hooks/common';

function Mask() {
    const { componentCls } = useContextConf(`mask`);

    const classNames = useClassName({
        [componentCls]: true,
    }, [componentCls]);

    return <div className={`${classNames}`} />
}

export default Mask;