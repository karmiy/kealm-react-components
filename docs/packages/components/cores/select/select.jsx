import React from 'react';
import { useContextConf, useClassName } from 'hooks';
import Input from '../input';
import Trigger from '../trigger';

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

    const dropdownWrap = (
        <>
            <div className={`${componentCls}-dropdown__wrap`}>
                <ul className={`${componentCls}-dropdown__list`}>
                    <li className={`${componentCls}-dropdown__item`}>
                        <span>黄金糕</span>
                    </li>
                    <li className={`${componentCls}-dropdown__item`}>
                        <span>双皮奶</span>
                    </li>
                </ul>
            </div>
            <div className="popper__arrow" style={{left: '35px'}} />
        </>
    )

    // ---------------------------------- render ----------------------------------
    return (
        <Trigger
            placement={'bottom-start'}
            popup={dropdownWrap}
            className={`${componentCls}-dropdown km-popper`}
            style={{minWidth: '240px'}}
            showArrow={false}
        >
            <div className={classNames} {...others}>
                <Input placeholder={'请选择'} suffix={'down'} readOnly />
            </div>
        </Trigger>
    );
};

export default Select;
