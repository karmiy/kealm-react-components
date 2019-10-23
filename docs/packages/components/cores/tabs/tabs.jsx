import React, { Children, cloneElement, useMemo } from 'react';
import { useContextConf, useClassName, useTabsValue } from 'hooks';
import { TabsProps, TabsDefaultProps } from './interface';
import TabNav from './tab-nav';
// import Icon from '../icon';
import { transChildren } from 'utils/common/react-util';
import { mergeStr } from 'utils/common/base';
import { RenderWrapper } from '../../common';

function Tabs(props) {
    const { componentCls } = useContextConf('tabs');
    const {
        children,
        className,
        position,
        defaultValue,
        value,
        onChange,
        type,
        headerClass,
        contentClass,
        headerStyle,
        contentStyle,
        wrapClass,
        wrapStyle,
        closable,
        onClick,
        onRemove,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [`${componentCls}--${position}`]: position,
        [`${componentCls}--${type}`]: type,
        [className]: className,
    }, [className, componentCls, position, type]);

    // ---------------------------------- logic code ----------------------------------
    const {
        tabsValue,
        tabsChange
    } = useTabsValue(defaultValue, value, onChange, children);

    const _children = transChildren(children);

    // ---------------------------------- render mini chunk ----------------------------------
    const renderChildren = useMemo(() => {
        return Children.map(_children, child => {
            if(child) {
                return cloneElement(child, {
                    active: tabsValue === child.props.name,
                })
            }
        })
    }, [_children, tabsValue]);

    /*const renderPlusIcon = useMemo(() => {
        return (
            <RenderWrapper visible={editable} unmountOnExit>
                    <span tabIndex={0} className={`${componentCls}__new-tab`} onClick={() => onEdit('add')}>
                        <Icon type={'plus'}/>
                    </span>
            </RenderWrapper>
        )
    }, [editable, componentCls, onEdit]);*/

    const renderTabNav = useMemo(() => {
        const tabNavProps = {
            className: wrapClass,
            style: wrapStyle,
            position,
            value: tabsValue,
            onChange: tabsChange,
            type,
            closable,
            onRemove,
            onClick,
        }
        return (
            <TabNav {...tabNavProps}>
                {renderChildren}
            </TabNav>
        )
    }, [wrapClass, wrapStyle, position, tabsValue, tabsChange, type, closable, onRemove, onClick, renderChildren]);

    // ---------------------------------- render chunk ----------------------------------

    const renderHeader = useMemo(() => {
        const clsName = mergeStr({
            [`${componentCls}__header`]: true,
            [`is-${position}`]: position,
            [headerClass]: headerClass,
        });
        return (
            <div className={clsName} style={headerStyle}>
                {renderTabNav}
            </div>
        )
    }, [componentCls, position, headerClass, headerStyle, renderTabNav]);

    const renderContent = useMemo(() => {
        const clsName = mergeStr({
            [`${componentCls}__content`]: true,
            [contentClass]: contentClass,
        });
        return (
            <div className={clsName} style={contentStyle}>
                {renderChildren}
            </div>
        )
    }, [componentCls, renderChildren, contentClass, contentStyle]);

    const renderTabs = useMemo(() => {
        if(position !== 'bottom')
            return <>{renderHeader}{renderContent}</>;

        return <>{renderContent}{renderHeader}</>;
    }, [position, renderHeader, renderContent]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} {...others}>
            {renderTabs}
        </div>
    );
};

Tabs.propTypes = TabsProps;
Tabs.defaultProps = TabsDefaultProps;

export default Tabs;
