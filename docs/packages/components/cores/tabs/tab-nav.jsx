import React, { Children, useMemo, useRef, useLayoutEffect, useState, useCallback } from 'react';
import { useContextConf, useClassName, useDidMount, useDidUpdate, useStateCallable } from 'hooks';
import { TabNavProps, TabNavDefaultProps } from './interface';
import { mergeStr } from 'utils/common/base';
import { getTranslate, setTranslate, getStyle } from 'utils/common/dom';
import Icon from '../icon';
import { RenderWrapper } from '../../common';

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

    // ---------------------------------- logic code: variable ----------------------------------
    const [isScroll, setIsScroll] = useStateCallable(false);
    const [tabDisabled, setTabDisabled] = useState({prev: false, next: false});
    // const [prevDisabled, setPrevDisabled] = useState(false);
    // const [nextDisabled, setNextDisabled] = useState(false);

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [`${componentCls}__nav-wrap`]: true,
        [`is-${position}`]: position,
        'is-scrollable': isScroll,
        [className]: className,
    }, [className, componentCls, position, isScroll]);

    const prevTabClassNames = useClassName({
        [`${componentCls}__nav-prev`]: true,
        'is-disabled': tabDisabled.prev,
    }, [componentCls, tabDisabled.prev]);

    const nextTabClassNames = useClassName({
        [`${componentCls}__nav-next`]: true,
        'is-disabled': tabDisabled.next,
    }, [componentCls, tabDisabled.next]);

    // ---------------------------------- logic code: ref ----------------------------------

    // nodeList of tab-nav-item
    const tabNavItemRefs = useRef({});
    // active-bar
    const barRef = useRef(null);
    // nav-wrap
    const navWrapRef = useRef(null);
    // nav-scroll
    const navScrollRef = useRef(null);
    // nav-inner
    const navInnerRef = useRef(null);
    // nav-prev
    const navPrevRef = useRef(null);
    // nav-next
    const navNextRef = useRef(null);

    // ---------------------------------- logic code: active-bar ----------------------------------
    // 定位active-bar的位置
    useLayoutEffect(() => {
        const activeNavItem = tabNavItemRefs.current[value],
            activeBar = barRef.current;
        if(activeNavItem) {
            activeBar.style.width = `${activeNavItem.offsetWidth}px`;
            activeBar.style.transform = `translate(${activeNavItem.offsetLeft}px)`;
        }
    }, [value]);

    // ---------------------------------- logic code: scroll ----------------------------------
    const isHoriz = position === 'top' || position === 'bottom';
    const _direct = isHoriz ? ['Left', 'Right'] : ['Top', 'Button'],
        _attr = isHoriz ? 'Width' : 'Height';

    const scope = {
        get max() {
            return 0;
        },
        get min() {
            return navScrollRef.current[`client${_attr}`] - navInnerRef.current[`offset${_attr}`];
        },
        get hasScroll() {
            return navInnerRef.current[`offset${_attr}`] - navWrapRef.current[`client${_attr}`] > 0;
        },
        get speed() {
            return 70;
        },
    }

    // 初始化时控制是否出现箭头滑动
    useDidMount(() => {
        if(scope.hasScroll) {
            setIsScroll(true, () => {
                const transitionTime = parseFloat(getStyle(navWrapRef.current, 'transitionDuration')) * 1000;
                // waiting padding-transition
                setTimeout(() => {
                    const inner_wrap = navInnerRef.current;
                    const scroll_wrap = navScrollRef.current;
                    const activeItem = tabNavItemRefs.current[value];
                    if(!activeItem) return;

                    // 当前激活tab是第一个，prev tab 禁用
                    if(activeItem.offsetLeft === 0) {
                        setTabDisabled({prev: true, next: false});
                        return;
                    }

                    // 当前激活tab不完全在视野内，滑动至视野内
                    if(activeItem.offsetLeft > scroll_wrap.offsetWidth - activeItem.offsetWidth) {
                        const _value = -(activeItem.offsetLeft - scroll_wrap.offsetWidth + activeItem.offsetWidth);
                        setTranslate(inner_wrap, {
                            x: isHoriz ? _value : 0,
                            y: !isHoriz ? _value : 0,
                        });
                        setTabDisabled({
                            prev: false,
                            next: _value === scope.min,
                        });
                    }
                }, transitionTime + 200);
            });
        }
    });

    // 初始化结束后如果isScroll，判断disabled与当前激活nav的位置
    /*useDidUpdate(() => {
        console.log(1);
    }, [isScroll]);*/

    // ---------------------------------- event ----------------------------------
    const onPrevClick = useCallback(() => {
        if(tabDisabled.rev) return;

        const inner_wrap = navInnerRef.current;
        const _value = Math.min(getTranslate(inner_wrap)[isHoriz ? 'x' : 'y'] + scope.speed, scope.max);
        setTranslate(inner_wrap, {
            x: isHoriz ? _value : 0,
            y: !isHoriz ? _value : 0,
        });
        if(_value === scope.max) {
            setTabDisabled({
                prev: true,
                next: false,
            })
        } else if(tabDisabled.next === true) {
            setTabDisabled({
                prev: false,
                next: false,
            })
        }
    }, [tabDisabled]);

    const onNextClick = useCallback(() => {
        if(tabDisabled.next) return;

        const inner_wrap = navInnerRef.current;
        const _value = Math.max(getTranslate(inner_wrap)[isHoriz ? 'x' : 'y'] - scope.speed, scope.min);
        setTranslate(inner_wrap, {
            x: isHoriz ? _value : 0,
            y: !isHoriz ? _value : 0,
        });
        if(_value === scope.min) {
            setTabDisabled({
                prev: false,
                next: true,
            })
        } else if(tabDisabled.prev === true) {
            setTabDisabled({
                prev: false,
                next: false,
            })
        }
    }, [tabDisabled]);

    const onWrapClick = useCallback(() => {
        if(scope.hasScroll && !isScroll) {
            setIsScroll(true);
            setTabDisabled({prev: true, next: false});
        } else if(!scope.hasScroll && isScroll) {
            setIsScroll(false);
            setTabDisabled({prev: false, next: false});
            setTranslate(navInnerRef.current, {x: 0, y: 0});
        }
    }, [isScroll]);

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
        <div className={classNames} {...others} ref={navWrapRef} onClick={onWrapClick}>
            <RenderWrapper visible={isScroll} unmountOnExit>
                <div className={prevTabClassNames} ref={navPrevRef} onClick={onPrevClick}>
                    <Icon type={'left'} />
                </div>
            </RenderWrapper>
            <RenderWrapper visible={isScroll} unmountOnExit>
                <div className={nextTabClassNames} ref={navNextRef} onClick={onNextClick}>
                    <Icon type={'right'} />
                </div>
            </RenderWrapper>
            <div className={`${componentCls}__nav-scroll`} ref={navScrollRef}>
                <div role={'tablist'} className={`${componentCls}__nav is-${position}`} ref={navInnerRef}>
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