import React, { useMemo, useCallback } from 'react';
import Icon from '../icon';
import { CollapseItemProps, CollapseItemDefaultProps } from "./interface";
import { useContextConf, useClassName } from 'hooks';
import { CollapseTransition } from '../transition';

function CollapseItem(props) {
    const { componentCls } = useContextConf('collapse-item');
    const {
        children,
        className,
        name,
        title,
        expand,
        onExpandChange,
        disabled,
        iconLeft,
        expandIcon,
        unmountOnExit,
        extra,
        ...others
    } = props;
    // ---------------------------------- class ----------------------------------
    // 根元素class
    const classNames = useClassName({
        [className]: className,
        [componentCls]: true,
        'is-disabled': disabled,
    }, [className, disabled]);

    // header class
    const headerClassNames = useClassName({
        [`${componentCls}__header`]: true,
    }, [])

    // wrap class
    const wrapClassNames = useClassName({
        [`${componentCls}__wrap`]: true,
    }, [])

    // content class
    const contentClassNames = useClassName({
        [`${componentCls}__content`]: true,
    }, [])

    // arrow class
    const arrowClassNames = useClassName({
        [`${componentCls}__arrow`]: true,
        'is-active': expand,
        'is-left': iconLeft,
    }, [expand, iconLeft])

    // extra class
    const extraClassNames = useClassName({
        [`${componentCls}__extra`]: true,
    }, [extra])

    // ---------------------------------- event ----------------------------------
    // header-click
    const headerClick = useCallback(() => {
        onExpandChange(name, !expand);
    }, [onExpandChange, name, expand]);

    // ---------------------------------- render chunk ----------------------------------
    // render-header
    const renderHeader = useMemo(() => {
        const _expandIcon = expandIcon ? React.cloneElement(expandIcon, {className: arrowClassNames}) : null;
        const iconNode = _expandIcon || <Icon type={'right'} className={arrowClassNames} />;
        const extraNode = extra ? React.cloneElement(extra, {className: extraClassNames}) : null;
        return (
            <div role={'button'} tabIndex={0} className={headerClassNames} onClick={headerClick}>
                {iconLeft && iconNode}
                {title}
                {!iconLeft && iconNode}
                {extraNode}
            </div>
        )
    }, [iconLeft, headerClassNames, arrowClassNames, headerClick, title, expandIcon, extra, arrowClassNames]);

    // render-wrap
    const renderWrap = useMemo(() => {
        return (
            <div role={'tabpanel'} className={wrapClassNames}>
                <div className={contentClassNames}>
                    {children}
                </div>
            </div>
        )
    }, [contentClassNames, wrapClassNames, children])

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} {...others}>
            <div role={'tab'}>
                {/* header */}
                {renderHeader}
                {/* wrap */}
                <CollapseTransition visible={expand} unmountOnExit={unmountOnExit}>
                    {renderWrap}
                </CollapseTransition>
            </div>
        </div>
    )
}

CollapseItem.propTypes = CollapseItemProps;
CollapseItem.defaultProps = CollapseItemDefaultProps;

export default CollapseItem