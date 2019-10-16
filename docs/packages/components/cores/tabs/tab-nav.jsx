import React, { Children, useMemo, useRef, useLayoutEffect } from 'react';
import { useContextConf, useClassName } from 'hooks';
import { TabNavProps, TabNavDefaultProps } from './interface';
import { mergeStr } from 'utils/common/base';

function TabNav(props) {
    const {componentCls} = useContextConf('tabs');
    const {
        children,
        className,
        position,
        value,
        onChange,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}__nav-wrap`]: true,
        [`is-${position}`]: position,
        [className]: className,
    }, [className, componentCls, position]);

    // ---------------------------------- logic code ----------------------------------
    // dom of tab-nav-item
    const tabNavItemRefs = useRef({});
    const barRef = useRef(null);

    useLayoutEffect(() => {
        const activeNavItem = tabNavItemRefs.current[value],
            activeBar = barRef.current;
        if(activeNavItem) {
            activeBar.style.width = `${activeNavItem.offsetWidth}px`;
            activeBar.style.transform = `translate(${activeNavItem.offsetLeft}px)`;
        }
    }, [value])

    // ---------------------------------- render chunk ----------------------------------
    const renderItems = useMemo(() => {
        return Children.map(children, child => {
            const { label, name, active } = child.props;

            const clsName = mergeStr({
                [`${componentCls}__item`]: true,
                [`is-${position}`]: true,
                'is-active': active,
            });

            return (
                <div
                    ref={node => tabNavItemRefs.current[name] = node}
                    role={'tab'}
                    tabIndex={active ? 0 : -1}
                    className={clsName}
                    onClick={() => onChange(name)}
                >{label}</div>
            );
        });
    }, [children, componentCls, position, onChange]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} {...others}>
            <div className={`${componentCls}__nav-scroll`}>
                <div role={'tablist'} className={`${componentCls}__nav is-${position}`}>
                    <div ref={barRef} className={`${componentCls}__active-bar is-${position}`} style={{width: '62px'}} />
                    {renderItems}
                </div>
            </div>
        </div>
    );
};

TabNav.propTypes = TabNavProps;
TabNav.defaultProps = TabNavDefaultProps;

export default TabNav;