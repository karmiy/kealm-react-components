import React, { Children, useMemo, useRef, useState, useCallback } from 'react';
import { useContextConf, useClassName, useDidMount, useDidUpdate } from 'hooks';
import { TabNavProps, TabNavDefaultProps } from './interface';
import { mergeStr, isEmpty } from 'utils/common/base';
import { getStyle } from 'utils/common/dom';
import Icon from '../icon';
import { FadeTransition } from '../transition'
import { RenderWrapper } from '../../common';

const setMargin = function(dom, options = {}) {
    const { x, y } = options;
    x !== undefined && (dom.style.marginLeft = `${x}px`);
    y !== undefined && (dom.style.marginTop = `${y}px`);
}

const getMargin = function (dom) {
    return {
        x: parseFloat(getStyle(dom, 'marginLeft')),
        y: parseFloat(getStyle(dom, 'marginTop')),
    }
}

function TabNav(props) {
    const {componentCls} = useContextConf('tabs');
    const {
        children,
        className,
        position,
        value,
        type,
        closable,
        onClick,
        onChange,
        onRemove,
        ...others
    } = props;

    // ---------------------------------- variable ----------------------------------
    const [isScroll, setIsScroll] = useState(false);
    const [tabDisabled, setTabDisabled] = useState({prev: true, next: false});
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
    // timer
    const timer = useRef({
       bar: null,
       nav: null,
    });

    // ---------------------------------- logic code: variable ----------------------------------
    const isHoriz = position === 'top' || position === 'bottom';
    const _direct = isHoriz ? 'Left' : 'Top',
        _attr = isHoriz ? 'Width' : 'Height';
    const transitionDuration = 300;

    const scope = useMemo(() => {
        return {
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
                return 100;
            },
        }
    }, [_attr]);

    // ---------------------------------- function ----------------------------------
    // ScrollBar scroll to activeNav
    const scrollBarToActive = useCallback(() => {
        const activeNavItem = tabNavItemRefs.current[value],
            activeBar = barRef.current;
        if(activeNavItem && activeBar) {
            if(isHoriz) {
                activeBar.style.width = `${activeNavItem.offsetWidth}px`;
                activeBar.style.height = '';
                // activeBar.style.transform = `translateX(${activeNavItem.offsetLeft}px)`;
                activeBar.style.marginLeft = `${activeNavItem.offsetLeft}px`;
                activeBar.style.marginTop = '0';
            }else {
                activeBar.style.width = '';
                activeBar.style.height = `${activeNavItem.offsetHeight}px`;
                // activeBar.style.transform = `translateY(${activeNavItem.offsetTop}px)`;
                activeBar.style.marginTop = `${activeNavItem.offsetTop}px`;
                activeBar.style.marginLeft = `0`;
            }
        }
    }, [isHoriz, value]);

    // ActiveNav scroll to view
    const scrollActiveToView = useCallback(() => {
        const inner_wrap = navInnerRef.current;
        const scroll_wrap = navScrollRef.current;
        const activeItem = tabNavItemRefs.current[value];
        if(!activeItem) return;

        // If it's not scrolling, go back to the origin
        if(!isScroll) {
            setTabDisabled({prev: false, next: false});
            scrollToView(0);
            return;
        }

        // The currently active tab is the first, prev tab is disabled
        if(activeItem[`offset${_direct}`] === 0) {
            setTabDisabled({prev: true, next: false});
            scrollToView(0);
            return;
        }

        const activeSize = activeItem[`offset${_attr}`],
            activeOffset = activeItem[`offset${_direct}`],
            scrollWrapSize = scroll_wrap[`offset${_attr}`],
            innerWrapOffset = Math.abs(getMargin(inner_wrap)[isHoriz ? 'x' : 'y']);

        // If the currently active tab is not completely in the field of view and to the right of the field of view, slide to the field of view
        if(activeOffset + activeSize > scrollWrapSize + innerWrapOffset) {
            const _value = -(activeOffset + activeSize - scrollWrapSize);
            scrollToView(_value);
        }

        // If the currently active tab is not completely in the field of view and to the left of the field of view, slide to the field of view
        if(activeOffset < innerWrapOffset) {
            const _value = -activeOffset;
            scrollToView(_value);
        }

        // If the rolling offset is lower than the minimum value at close, it needs to be adjusted to the minimum value
        if(-innerWrapOffset < scope.min) {
            scrollToView(scope.min);
        }

        function scrollToView(_value) {
            setMargin(inner_wrap, {
                x: isHoriz ? _value : 0,
                y: !isHoriz ? _value : 0,
            });
            setTabDisabled({
                prev: _value === scope.max,
                next: _value === scope.min,
            });
        }
    }, [value, _direct, _attr, isHoriz, scope, isScroll]);

    // Verify the scrolling status and whether the return changes
    const validateScrollStatus = useCallback(() => {
        if(scope.hasScroll && !isScroll) {
            setIsScroll(true);
            setTabDisabled({prev: true, next: false});
            return true;
        } else if(!scope.hasScroll && isScroll) {
            setIsScroll(false);
            setTabDisabled({prev: false, next: false});
            // setTranslate(navInnerRef.current, {x: 0, y: 0});
            setMargin(navInnerRef.current, {x: 0, y: 0});
            return true;
        }
        return false;
    }, [isScroll, scope]);

    // ---------------------------------- event ----------------------------------
    const onPrevClick = useCallback(() => {
        if(tabDisabled.prev) return;

        const inner_wrap = navInnerRef.current;
        // const _value = Math.min(getTranslate(inner_wrap)[isHoriz ? 'x' : 'y'] + scope.speed, scope.max);
        const _value = Math.min(getMargin(inner_wrap)[isHoriz ? 'x' : 'y'] + scope.speed, scope.max);
        /*setTranslate(inner_wrap, {
            x: isHoriz ? _value : 0,
            y: !isHoriz ? _value : 0,
        });*/
        setMargin(inner_wrap, {
            x: isHoriz ? _value : 0,
            y: !isHoriz ? _value : 0,
        });
        if(_value === scope.max) {
            setTabDisabled({
                prev: true,
                next: false,
            })
        } else if(tabDisabled.next === true) { // Click prev button, always remove the disable state of next button
            setTabDisabled({
                prev: false,
                next: false,
            })
        }
    }, [tabDisabled, scope]);

    const onNextClick = useCallback(() => {
        if(tabDisabled.next) return;

        const inner_wrap = navInnerRef.current;
        // const _value = Math.max(getTranslate(inner_wrap)[isHoriz ? 'x' : 'y'] - scope.speed, scope.min);
        const _value = Math.max(getMargin(inner_wrap)[isHoriz ? 'x' : 'y'] - scope.speed, scope.min);
        /*setTranslate(inner_wrap, {
            x: isHoriz ? _value : 0,
            y: !isHoriz ? _value : 0,
        });*/
        setMargin(inner_wrap, {
            x: isHoriz ? _value : 0,
            y: !isHoriz ? _value : 0,
        });
        if(_value === scope.min) {
            setTabDisabled({
                prev: false,
                next: true,
            })
        } else if(tabDisabled.prev === true) { // Click next button, always remove the disable state of prev button
            setTabDisabled({
                prev: false,
                next: false,
            })
        }
    }, [tabDisabled, scope]);

    const onWrapClick = useCallback(() => {
        validateScrollStatus();
    }, [validateScrollStatus]);

    // ---------------------------------- logic code: active-bar ----------------------------------
    // Initialize positioning
    useDidMount(() => {
        clearTimeout(timer.current.bar);
        timer.current.bar = setTimeout(scrollBarToActive);
    });

    // Value drive
    useDidUpdate(() => {
        clearTimeout(timer.current.bar);
        timer.current.bar = setTimeout(scrollBarToActive);
    }, [value], true);

    // Position drive
    useDidUpdate(() => {
        clearTimeout(timer.current.bar);
        timer.current.bar = setTimeout(scrollBarToActive);
    }, [isHoriz], true);

    // Count drive
    useDidUpdate(() => {
        scrollBarToActive();
    }, [children.length], true);

    // ---------------------------------- logic code: scroll ----------------------------------

    // Judge whether scrolling state is required during initialization
    useDidMount(() => {
        scope.hasScroll && setIsScroll(true);
    });

    // Value drive
    useDidUpdate(() => {
        clearTimeout(timer.current.nav);
        timer.current.nav = setTimeout(scrollActiveToView);
    }, [value], true);

    // Position drive
    useDidUpdate(() => {
        clearTimeout(timer.current.nav);
        // Go back to the original position
        setMargin(navInnerRef.current, {x: 0, y: 0});
        // Delay 300ms for padding transition of nav-wrap
        timer.current.nav = setTimeout(() => {
            scrollActiveToView();
        }, transitionDuration);
    }, [isHoriz], true);

    // IsScroll drive
    useDidUpdate(() => {
        clearTimeout(timer.current.nav);
        // Delay 300ms for padding transition of nav-wrap
        timer.current.nav = setTimeout(() => {
            scrollActiveToView();
        }, transitionDuration);
    }, [isScroll], true);

    // Count drive
    useDidUpdate(() => {
        // onWrapClick();
        clearTimeout(timer.current.nav);
        timer.current.nav = setTimeout(() => {
            // If the scrolling status does not change, scroll the active nav to the field of view
            if(!validateScrollStatus()) {
                scrollActiveToView();
            }
        });
    }, [children.length], true);

    // ---------------------------------- render chunk ----------------------------------
    const renderItems = useMemo(() => {
        return Children.map(children, child => {
            const { label, name, active, disabled, closable: _closable } = child.props;

            const isClosable = isEmpty(_closable) ? closable : _closable;

            const clsName = mergeStr({
                [`${componentCls}__item`]: true,
                [`is-${position}`]: true,
                'is-active': active,
                'is-disabled': disabled,
                'is-closable': isClosable,
            });

            return (
                <div
                    ref={node => tabNavItemRefs.current[name] = node}
                    role={'tab'}
                    tabIndex={active ? 0 : -1}
                    className={clsName}
                    onClick={e => {
                        if(!disabled) {
                            onClick(e, name);
                            onChange(name);
                        }
                    }}
                >
                    {label}
                    <RenderWrapper visible={isClosable} unmountOnExit>
                        <Icon
                            type={'close'}
                            className={`${componentCls}__close`}
                            onClick={e => {
                                e.stopPropagation();
                                onRemove(name);
                            }}
                        />
                    </RenderWrapper>
                </div>
            );
        });
    }, [children, componentCls, position, closable, onChange, onClick, onRemove]);

    // ---------------------------------- render ----------------------------------
    return (
        <div className={classNames} {...others} ref={navWrapRef} onClick={onWrapClick}>
            <FadeTransition visible={isScroll} unmountOnExit>
                <div className={prevTabClassNames} ref={navPrevRef} onClick={onPrevClick}>
                    <Icon type={'left'} />
                </div>
            </FadeTransition>
            <FadeTransition visible={isScroll} unmountOnExit>
                <div className={nextTabClassNames} ref={navNextRef} onClick={onNextClick}>
                    <Icon type={'right'} />
                </div>
            </FadeTransition>
            <div className={`${componentCls}__nav-scroll`} ref={navScrollRef}>
                <div role={'tablist'} className={`${componentCls}__nav is-${position}`} ref={navInnerRef}>
                    <RenderWrapper visible={type !== 'card' && type !== 'border-card'} unmountOnExit>
                        <div ref={barRef} className={`${componentCls}__active-bar is-${position}`} />
                    </RenderWrapper>
                    {renderItems}
                </div>
            </div>
        </div>
    );
};

TabNav.propTypes = TabNavProps;
TabNav.defaultProps = TabNavDefaultProps;

export default TabNav;