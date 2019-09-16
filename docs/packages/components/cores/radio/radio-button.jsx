import React from 'react';
import { RadioButtonProps, RadioButtonDefaultProps } from "./interface";
import { useContextConf, useClassName } from 'hooks';

function RadioButton(props) {
    const { componentCls } = useContextConf('radio-button');

    const {
        className,
        children,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    // root-className
    const classNames = useClassName({
        [componentCls]: true,
        [className]: className,
    }, [className, componentCls]);

    // ---------------------------------- logic code ----------------------------------


    // ---------------------------------- render ----------------------------------
    return (
        <label role={'radio'} tabIndex={0} className={classNames} {...others}>
            <input type="radio" tabIndex={-1} className={`${componentCls}__orig-radio`} />
            <span className={`${componentCls}__inner`}>{children}</span>
        </label>
    )
}
RadioButton.propTypes = RadioButtonProps;
RadioButton.defaultProps = RadioButtonDefaultProps;

export default RadioButton;