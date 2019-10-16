import React, { Children, cloneElement, useMemo } from 'react';
import { useContextConf, useClassName, useTabsValue } from 'hooks';
import { TabsProps, TabsDefaultProps } from './interface';
import TabNav from './tab-nav';
import { transChildren } from 'utils/common/react-util';

function Tabs(props) {
    const { componentCls } = useContextConf('tabs');
    const {
        children,
        className,
        position,
        defaultValue,
        value,
        onChange,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [`${componentCls}--${position}`]: position,
        [className]: className,
    }, [className, componentCls, position]);

    // ---------------------------------- logic code ----------------------------------
    const {
        tabsValue,
        tabsChange
    } = useTabsValue(defaultValue, value, onChange, children);

    const _children = transChildren(children);

    // ---------------------------------- render chunk ----------------------------------
    const renderChildren = useMemo(() => {
        return Children.map(_children, child => {
            if(child) {
                return cloneElement(child, {
                    active: tabsValue === child.props.name,
                })
            }
        })
    }, [_children, tabsValue]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} {...others}>
            <div className={`${componentCls}__header is-${position}`}>
                <TabNav position={position} value={tabsValue} onChange={tabsChange}>
                    {renderChildren}
                </TabNav>
            </div>
            <div className={`${componentCls}__content`}>
                {renderChildren}
            </div>
        </div>
    );
};

Tabs.propTypes = TabsProps;
Tabs.defaultProps = TabsDefaultProps;

export default Tabs;
