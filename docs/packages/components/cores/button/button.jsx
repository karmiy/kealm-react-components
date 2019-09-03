import React from 'react';
import { ButtonProps, ButtonDefaultProps } from "./interface";
import Icon from '../icon';
import { useContextConf, useClassName } from 'hooks';

function Button(props) {
    const { componentCls } = useContextConf('button');
    const {
        children,
        className,
        type,
        plain,
        round,
        circle,
        icon,
        iconRight,
        disabled,
        loading,
        active,
        size,
        nativeType,
        ...others
    } = props;

    const classNames = useClassName({
        [className]: className,
        [componentCls]: true,
        [`${componentCls}-${type}`]: true,
        [`is-plain`]: plain,
        [`is-round`]: round,
        [`is-circle`]: circle,
        [`is-disabled`]: disabled,
        [`is-loading`]: loading,
        [`is-active`]: active,
        [`${componentCls}-${size}`]: !!size,
    });

    // icon
    const iconNode = icon ? <Icon type={icon} /> : null;

    // content
    const contentNode = children ? <span>{children}</span> : null;

    // loading
    const loadingNode = loading ? <Icon type='loading' /> : null

    return (
        <button type={nativeType} className={classNames} disabled={disabled} {...others}>
            {!iconRight && (loadingNode || iconNode)}
            {contentNode}
            {iconRight && (loadingNode || iconNode)}
        </button>
    )
}

Button.propTypes = ButtonProps;
Button.defaultProps = ButtonDefaultProps;

export default Button