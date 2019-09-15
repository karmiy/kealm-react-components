import React, { useState } from 'react';
import { RadioProps, RadioDefaultProps } from "./interface";
import { useContextConf, useClassName } from 'hooks';

function Radio(props) {
    const { componentCls } = useContextConf('radio');

    const {
        className,
        label,
        value,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    // root-className
    const classNames = useClassName({
        [componentCls]: true,
        [className]: className,
    }, [className, componentCls]);

    // ---------------------------------- logic code ----------------------------------
    // const []

    // ---------------------------------- event ----------------------------------
    const change = (e) => {
        console.log(e.target.value);
    }

    // ---------------------------------- render ----------------------------------
    return (
        <label role={'radio'} tabIndex={0} className={classNames} {...others}>
            <span className={`${componentCls}__input`}>
                <input type="radio" tabIndex={-1} className={`${componentCls}__original `} onChange={change} value={label} />
                <span className={`${componentCls}__inner`} />
            </span>
            <span className={`${componentCls}__label`}>备选项</span>
        </label>
    )
}
Radio.propTypes = RadioProps;
Radio.defaultProps = RadioDefaultProps;

export default Radio;