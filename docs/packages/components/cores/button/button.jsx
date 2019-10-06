import React, { useMemo } from 'react';
import { ButtonProps, ButtonDefaultProps } from "./interface";
import Icon from '../icon';
import { RenderWrapper, Motion } from '../../common';
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

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [`${componentCls}--${type}`]: true,
        [`is-plain`]: plain,
        [`is-round`]: round,
        [`is-circle`]: circle,
        [`is-disabled`]: disabled,
        [`is-loading`]: loading,
        [`is-active`]: active,
        [`${componentCls}--${size}`]: !!size,
        [className]: className,
    }, [className, componentCls, plain, round, circle, disabled, loading, active, size]);

    // ---------------------------------- render chunk ----------------------------------
    // icon
    const renderIcon = useMemo(() => {
        return icon ? <Icon type={icon} /> : null;
    }, [icon])

    // content
    const renderContent = useMemo(() => {
        return children ? <span>{children}</span> : null;
    }, [children])

    // loading
    const renderLoading = useMemo(() => {
        return (
            <Motion showProp={'visible'} transitionName={`${componentCls}-loading`}>
                <RenderWrapper visible={loading} unmountOnExit>
                    <Icon type={'loading'} />
                </RenderWrapper>
            </Motion>
        )
    }, [componentCls, loading]);

    // ---------------------------------- render ----------------------------------
    return (
        <button type={nativeType} className={classNames} disabled={disabled} {...others}>
            {!iconRight && (renderLoading || renderIcon)}
            {renderContent}
            {iconRight && (renderLoading || renderIcon)}
        </button>
    )
}

Button.propTypes = ButtonProps;
Button.defaultProps = ButtonDefaultProps;

export default Button