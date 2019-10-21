import React, { Children, cloneElement, useMemo } from 'react';
import { useContextConf, useClassName, useTabsValue } from 'hooks';
import { TabsProps, TabsDefaultProps } from './interface';
import TabNav from './tab-nav';
import Icon from '../icon';
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
        editable,
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

    // ---------------------------------- render chunk ----------------------------------
    const renderHeader = useMemo(() => {
        const clsName = mergeStr({
            [`${componentCls}__header`]: true,
            [`is-${position}`]: position,
            [headerClass]: headerClass,
        });
        return (
            <div className={clsName} style={headerStyle}>
                <RenderWrapper visible={editable} unmountOnExit>
                    <span tabIndex={0} className={`${componentCls}__new-tab`}>
                        <Icon type={'plus'} />
                    </span>
                </RenderWrapper>
                <TabNav position={position} value={tabsValue} onChange={tabsChange} type={type} editable={editable}>
                    {renderChildren}
                </TabNav>
            </div>
        )
    }, [componentCls, position, tabsValue, tabsChange, type, renderChildren, headerClass, headerStyle, editable]);

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
