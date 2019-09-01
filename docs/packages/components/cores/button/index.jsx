import React from 'react';
import { ButtonProps, DefaultProps } from "./interface";
import Icon from '../icon';
import { useContextConf, useClassName } from 'hooks';

function Button(props) {
    const { componentCls } = useContextConf('button');
    const {
        className,
        type,
        plain,
        round,
        circle,
        icon,
        ..._props
    } = props;

    const classNames = useClassName({
        [className]: className,
        [componentCls]: true,
        [`${componentCls}-${type}`]: true,
        [`is-plain`]: plain,
        [`is-round`]: round,
        [`is-circle`]: circle,
    });

    const iconNode = icon ? <Icon type={icon} /> : null;

    const contentNode = props.children ? <span>{props.children}</span> : null;

    return (
        <button className={classNames} {..._props}>
            {iconNode}
            {contentNode}
        </button>
    )
}

Button.propTypes = ButtonProps;
Button.defaultProps = DefaultProps;

export default Button