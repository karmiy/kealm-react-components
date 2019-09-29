import React, { useState, useRef, useCallback } from 'react';
import { AnimateProps, AnimateDefaultProps } from './interface';
import {
    getChildrenFromProps,
    toArrayChildren,
    findChildInChildrenByKey,
    mergeChildren,
    findShownChildInChildrenByKey
} from './utils/childrenUtils';
import AnimateChild from './animate-child';
import { usePrevProps, useDidUpdate } from 'hooks';
import animUtil from './utils/animate';

function Animate(props) {
    const {
        children,
        showProp,
        exclusive,
        animation,
        transitionName,
        transitionAppear,
        transitionEnter,
        transitionLeave
    }  = props;

    // 构建数据存储:
    // 当前运动中的key
    const currentlyAnimatingKeysRef = useRef({});
    // 准备执行enter/leave动画的key
    const keysToEnterRef = useRef([]);
    const keysToLeaveRef = useRef([]);
    // animate-child的item
    const childrenRefs = useRef({});

    let renderChildren = children;

    const prevProps = usePrevProps(props);
    if(prevProps) {
        console.log(123);
        // 重新render后，对比2次的props
        const prevChildren = toArrayChildren(getChildrenFromProps(prevProps));
        const nextChildren = toArrayChildren(getChildrenFromProps(props));
        // 动画是唯一的(每次只能一组)，前一次的直接停止
        if(exclusive) {
            Object.keys(currentlyAnimatingKeysRef.current).forEach((key) => {
                stop(key);
            });
        }

        // 推算接下来要渲染的节点
        let newChildren = [];
        // child组件用来控制显示隐藏的prop
        if(showProp) {
            // 先遍历旧节点，把所有旧节点当前先状态保存起来
            prevChildren.forEach(prevChild => {
                // 找到旧节点对应的新节点，判断状态变化
                const nextChild = prevChild && findChildInChildrenByKey(nextChildren, prevChild.key);
                let newChild;
                // 如果本来是显示的，接下来要去除，则先置为显示，为了让它接下来可以做动画
                if ((!nextChild || !nextChild.props[showProp]) && prevChild.props[showProp]) {
                    newChild = React.cloneElement(nextChild || prevChild, {
                        [showProp]: true,
                    });
                } else {
                    newChild = nextChild;
                }
                // 保存状态更新的旧节点，即时接下来要移除
                if (newChild) {
                    newChildren.push(newChild);
                }
            });
            nextChildren.forEach(nextChild => {
                // 如果新节点本来没有，现在有，则这次要渲染
                if (!nextChild || !findChildInChildrenByKey(prevChildren, nextChild.key)) {
                    newChildren.push(nextChild);
                }
            });
        }else {
            newChildren = mergeChildren(
                prevChildren,
                nextChildren
            );
        }

        renderChildren = newChildren;

        // 遍历新节点，找到要执行进入动画的节点
        nextChildren.forEach(child => {
            const key = child && child.key;
            // 如果该节点发现它本来就在执行动画，不操作
            if (child && currentlyAnimatingKeysRef.current[key]) {
                return;
            }
            const hasPrev = child && findChildInChildrenByKey(prevChildren, key);
            if (showProp) {
                const showInNext = child.props[showProp];
                if(hasPrev) {
                    const showInPrev = findShownChildInChildrenByKey(prevChildren, key, showProp);
                    // 如果显示是本来是隐藏的，现在是显示的，加入进入动画队列
                    if (!showInPrev && showInNext) {
                        keysToEnterRef.current.push(key);
                    }
                } else if (showInNext) {
                    // 如果之前没有这个节点，现在有了，加入进入动画队列
                    keysToEnterRef.current.push(key);
                }
            } else if (!hasPrev) {
                // 纯新节点，加入进入动画队列
                keysToEnterRef.current.push(key);
            }
        })

        // 遍历旧节点，找到要执行离开动画的节点
        prevChildren.forEach(child => {
            const key = child && child.key;
            // 如果该节点发现它本来就在执行动画，不操作
            if (child && currentlyAnimatingKeysRef.current[key]) {
                return;
            }
            const hasNext = child && findChildInChildrenByKey(nextChildren, key);
            if (showProp) {
                const showInNow = child.props[showProp];
                if (hasNext) {
                    const showInNext = findShownChildInChildrenByKey(nextChildren, key, showProp);
                    // 接下来要隐藏，本来是显示的，加入离开动画队列
                    if (!showInNext && showInNow) {
                        keysToLeaveRef.current.push(key);
                    }
                } else if (showInNow) {
                    // 本来显示，接下来节点都没了，加入离开动画队列
                    keysToLeaveRef.current.push(key);
                }
            } else if (!hasNext) {
                // 节点从有到无，加入离开动画队列
                keysToLeaveRef.current.push(key);
            }
        })
    }


    const stop = useCallback(key => {
        delete currentlyAnimatingKeysRef.current[key];
        const component = childrenRefs.current[key];
        if (component) {
            component.stop();
        }
    }, []);

    const performAppear = (key) => {
        if (childrenRefs.current[key]) {
            currentlyAnimatingKeysRef.current[key] = true;
            childrenRefs.current[key].componentWillAppear(() => {
                handleDoneAdding(key, 'appear');
            });
        }
    }

    const performEnter = useCallback(key => {
        if (childrenRefs.current[key]) {
            currentlyAnimatingKeysRef.current[key] = true;
            childrenRefs.current[key].componentWillEnter(() => {
                handleDoneAdding(key, 'enter');
            });
        }
    }, []);

    const performLeave = useCallback(key => {
        if (childrenRefs.current[key]) {
            currentlyAnimatingKeysRef.current[key] = true;
            childrenRefs.current[key].componentWillLeave(() => {
                handleDoneLeaving(key);
            });
        }
    }, []);

    const handleDoneAdding = useCallback((key, type) => {
        delete currentlyAnimatingKeysRef.current[key];
        // if update on exclusive mode, skip check

        // if (props.exclusive && props !== this.nextProps) {
        if (exclusive) {
            return;
        }
        const currentChildren = toArrayChildren(getChildrenFromProps(props));
        if (!isValidChildByKey(currentChildren, key)) {
            // exclusive will not need this
            // 本来进场了又发现离开了，执行离开动画
            performLeave(key);
        } else if (type === 'appear') {
            if (animUtil.allowAppearCallback(props)) {
                props.onAppear(key);
                props.onEnd(key, true);
            }
        } else if (animUtil.allowEnterCallback(props)) {
            props.onEnter(key);
            props.onEnd(key, true);
        }
    }, [props]);

    const handleDoneLeaving = useCallback(key => {
        delete currentlyAnimatingKeysRef.current[key];
        // if update on exclusive mode, skip check
        // if (props.exclusive && props !== this.nextProps) {
        if (props.exclusive) {
            return;
        }
        const currentChildren = toArrayChildren(getChildrenFromProps(props));
        // in case state change is too fast
        if (isValidChildByKey(currentChildren, key)) {
            // 离开了后现在又发现进入了，执行进入动画
            performEnter(key);
        } else {
            const end = () => {
                if (animUtil.allowLeaveCallback(props)) {
                    props.onLeave(key);
                    props.onEnd(key, false);
                }
            };
            /*if (!isSameChildren(this.state.children,
                currentChildren, props.showProp)) {
                this.setState({
                    children: currentChildren,
                }, end);
            } else {
                end();
            }*/
            end();
        }
    });

    const isValidChildByKey = (currentChildren, key) => {
        const showProp = props.showProp;
        if (showProp) {
            return findShownChildInChildrenByKey(currentChildren, key, showProp);
        }
        return findChildInChildrenByKey(currentChildren, key);
    }

    useDidUpdate(() => {
        const keysToEnter = keysToEnterRef.current;
        keysToEnterRef.current = [];
        keysToEnter.forEach(performEnter);
        const keysToLeave = keysToLeaveRef.current;
        keysToLeaveRef.current = [];
        keysToLeave.forEach(performLeave);
    })


    return renderChildren.map(child => {
        if (child === null || child === undefined) {
            return child;
        }
        if (!child.key) {
            throw new Error('must set key for children');
        }
        return (
            <AnimateChild
                key={child.key}
                ref={node => childrenRefs.current[child.key] = node}
                animation={animation}
                transitionName={transitionName}
                transitionAppear={transitionAppear}
                transitionEnter={transitionEnter}
                transitionLeave={transitionLeave}
            >
                {child}
            </AnimateChild>
        );
    })

}

Animate.propTypes = AnimateProps;
Animate.defaultProps = AnimateDefaultProps;
export default Animate;