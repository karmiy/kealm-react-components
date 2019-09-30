import React, { useMemo } from 'react';
import { CardProps, CardDefaultProps } from './interface';
import { useContextConf, useClassName } from 'hooks';
import { isContainEle, transChildren } from 'utils/base/react-util';
import Grid from './grid';

function Card(props) {
    const {
        className,
        children,
        size,
        title,
        extra,
        bordered,
        cover,
        shadow,
        type,
        actions,
        ...others
    } = props;
    const { componentCls } = useContextConf(`card`);

    // ---------------------------------- logic code ----------------------------------
    const isContainGrid = isContainEle(transChildren(children), Grid);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}`]: true,
        [`is-${size}`]: size,
        [`is-bordered`]: bordered,
        [`is-${shadow}-shadow`]: shadow,
        [`is-grid`]: isContainGrid,
        [`is-inner`]: type,
        [className]: className,
    }, [className, componentCls, size, bordered, shadow, isContainGrid, type]);

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

    const renderActions = useMemo(() => {
        if(!actions || !actions.length) return null;

        const length = actions.length;
        return (
            <ul className={`${componentCls}__actions`}>
                {actions.map((action, index) => {
                    return (
                        <li style={{width: `${100/length}%`}} key={index}><span>{action}</span></li>
                    )
                })}
            </ul>
        )
    }, [actions]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} {...others}>
            {renderHeader}
            {renderCover}
            {renderBody}
            {renderActions}
        </div>
    );
}

Card.propTypes = CardProps;
Card.defaultProps = CardDefaultProps;

export default Card;