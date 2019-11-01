import React from 'react';
import { useContextConf, useClassName } from 'hooks';
import Input from '../input';

function Select(props) {
    const { componentCls } = useContextConf('select');
    const {
        children,
        className,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [className]: className,
    }, [className, componentCls]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} {...others}>
            <Input placeholder={'请选择'} suffix={'down'} readOnly />
        </div>
    );
};

export default Select;
