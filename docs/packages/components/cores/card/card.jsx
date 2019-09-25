import React, { useMemo } from 'react';
import { CardProps, CardDefaultProps } from './interface';
import { useContextConf, useClassName } from 'hooks';

function Card(props) {
    const {
        className,
        children,
        size,
        title,
        extra,
        border,
        cover,
        shadow,
        ...others
    } = props;
    const { componentCls } = useContextConf(`card`);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}`]: true,
        [`is-${size}`]: size,
        [`is-bordered`]: border,
        [`is-${shadow}-shadow`]: shadow,
        [className]: className,
    }, [className, componentCls, size, border, shadow]);

    // ---------------------------------- render chunk ----------------------------------
    const renderHeader = useMemo(() => {
        if(!title) return null;

        return (
            <div className={`${componentCls}__header`}>
                <div className={`${componentCls}__wrapper`}>
                    <div className={`${componentCls}__title`}>
                        {title}
                    </div>
                    <div className={`${componentCls}__extra`}>
                        {extra}
                    </div>
                </div>
            </div>
        )
    }, [componentCls, title, extra]);

    const renderBody = useMemo(() => {
        if(!children) return null;

        return (
            <div className={`${componentCls}__body`}>
                {children}
            </div>
        )
    }, [componentCls, children])

    const renderCover = useMemo(() => {
        if(!cover) return null;

        return (
            <div className={`${componentCls}__cover`}>
                {cover}
            </div>
        )
    }, [componentCls, cover]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} {...others}>
            {renderHeader}
            {renderCover}
            {renderBody}
        </div>
    );
}

Card.propTypes = CardProps;
Card.defaultProps = CardDefaultProps;

export default Card;