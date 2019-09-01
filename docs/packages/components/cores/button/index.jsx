import React from 'react';
import { ButtonProps, DefaultProps } from "./interface";
import { useContextConf, useClassName } from 'hooks';

function Button(props) {
    const { componentCls } = useContextConf('button');
    const {
        className,
        type,
        plain,
        round,
        ..._props
    } = props;

    const classNames = useClassName({
        [className]: className,
        [componentCls]: true,
        [`${componentCls}-${type}`]: true,
        [`is-plain`]: plain,
        [`is-round`]: round,
    });
    return (
        <button className={classNames} {..._props}>
            <span className={'active'}>{props.children}</span>
        </button>
    )
}

Button.propTypes = ButtonProps;
Button.defaultProps = DefaultProps;

export default Button