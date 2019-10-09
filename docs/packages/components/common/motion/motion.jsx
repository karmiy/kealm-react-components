import React, { useState, useRef, useCallback, useMemo } from 'react';
import { MotionProps, MotionDefaultProps } from './interface';
import {
    completeChildrenKeys,
    toArrayChildren,
    findChildInChildrenByKey,
    mergeChildren,
    findShownChildInChildrenByKey,
    isSameChildren
} from './utils/childrenUtils';
import MotionManager from './motion-manager';
import { usePrevProps, usePropsStore, useDidMount, useDidUpdate, useStateCallable } from 'hooks';
import animUtil from './utils/animate';

function Motion(props) {
    const {
        children,
        showProp,
        exclusive,
        animation,
        transitionName,
        transitionAppear,
        transitionEnter,
        transitionLeave,
        onAppear,
        onEnter,
        onLeave,
        onEnd,
    }  = props;

    const [_, forceUpdate] = useStateCallable(0);

    // ---------------------------------- store ----------------------------------
    // Get props up to date all the time
    // To prevent the function being delayed after the closure causes props not to be up to date
    const propsStore = usePropsStore(props);

    // Key in the current movement
    const currentlyAnimatingKeysRef = useRef({});
    // Props in the current movement
    const currentlyAnimatingPropsRef = useRef({});
    // Key to prepare to execute enter/leave animation
    const keysToEnterRef = useRef([]);
    const keysToLeaveRef = useRef([]);
    // Refs of MotionManager Component
    const childrenRefs = useRef({});

    // Children for rendering
    const renderChildrenRef = useRef(toArrayChildren(completeChildrenKeys(children)));

    // ---------------------------------- event ----------------------------------
    const stop = useCallback(key => {
        delete currentlyAnimatingKeysRef.current[key];
        const Manager = childrenRefs.current[key];
        if (Manager) {
            Manager.stop();
        }
    }, []);

    const handleDoneAdding = useCallback((key, type) => {
        delete currentlyAnimatingKeysRef.current[key];

        const newestProps = propsStore.current;
        // if (props.exclusive && props !== this.nextProps) {\
        /*if (exclusive && props !== newestProps) {
            return;
        }*/
        if (exclusive && currentlyAnimatingPropsRef.current[key] !== newestProps ) {
            return;
        }
        const currentChildren = toArrayChildren(completeChildrenKeys(newestProps.children));
        if (!isValidChildByKey(currentChildren, key)) {
            // exclusive will not need this
            // Originally entered and found out to leave, execute the exit animation
            performLeave(key);
        } else if (type === 'appear') {
            if (animUtil.allowAppearCallback(newestProps)) {
                newestProps.onAppear(key);
                newestProps.onEnd(key, true);
            }
        } else if (animUtil.allowEnterCallback(newestProps)) {
            newestProps.onEnter(key);
            newestProps.onEnd(key, true);
        }
    }, []);

    const handleDoneLeaving = useCallback(key => {
        delete currentlyAnimatingKeysRef.current[key];
        const newestProps = propsStore.current;
        // \\if update on exclusive mode, skip check
        // if (props.exclusive && props !== this.nextProps) {
        if (exclusive && currentlyAnimatingPropsRef.current[key] !== newestProps ) {
            return;
        }
        const currentChildren = toArrayChildren(completeChildrenKeys(newestProps.children));
        // in case state change is too fast
        if (isValidChildByKey(currentChildren, key)) {
            // After leaving, it enters again. Execution enters animation
            performEnter(key);
        } else {
            const end = () => {
                if (animUtil.allowLeaveCallback(props)) {
                    newestProps.onLeave(key);
                    newestProps.onEnd(key, false);
                }
            };
            if (!isSameChildren(renderChildrenRef.current,
                currentChildren, newestProps.showProp)) {
                renderChildrenRef.current = currentChildren;
                forceUpdate(v => !v, end);
            } else {
                end();
            }
        }
    }, []);

    const performAppear = useCallback(key => {
        if (childrenRefs.current[key] && !currentlyAnimatingKeysRef.current[key]) {
            currentlyAnimatingKeysRef.current[key] = true;
            currentlyAnimatingPropsRef.current[key] = propsStore.current;
            childrenRefs.current[key].componentWillAppear(() => {
                handleDoneAdding(key, 'appear');
            });
        }
    }, []);

    const performEnter = useCallback(key => {
        if (childrenRefs.current[key] && !currentlyAnimatingKeysRef.current[key]) {
            currentlyAnimatingKeysRef.current[key] = true;
            currentlyAnimatingPropsRef.current[key] = propsStore.current;
            childrenRefs.current[key].componentWillEnter(() => {
                handleDoneAdding(key, 'enter');
            });
        }
    }, []);

    const performLeave = useCallback(key => {
        if (childrenRefs.current[key] && !currentlyAnimatingKeysRef.current[key]) {
            currentlyAnimatingKeysRef.current[key] = true;
            currentlyAnimatingPropsRef.current[key] = propsStore.current;
            childrenRefs.current[key].componentWillLeave(() => {
                handleDoneLeaving(key);
            });
        }
    }, [])

    const isValidChildByKey = useCallback((currentChildren, key) => {
        if (showProp) {
            return findShownChildInChildrenByKey(currentChildren, key, showProp);
        }
        return findChildInChildrenByKey(currentChildren, key);
    }, [showProp]);

    // Perform the appear animation after initialization
    useDidMount(() => {
        // Execute appear animation
        let children = renderChildrenRef.current;
        if (showProp) {
            children = children.filter(child => {
                return !!child.props[showProp];
            });
        }
        children.forEach(child => {
            if (child) {
                performAppear(child.key);
            }
        });
    });

    useDidUpdate(() => {
        const keysToEnter = keysToEnterRef.current;
        keysToEnterRef.current = [];
        keysToEnter.forEach(performEnter);
        const keysToLeave = keysToLeaveRef.current;
        keysToLeaveRef.current = [];
        keysToLeave.forEach(performLeave);
    })


    const prevProps = usePrevProps(props);
    if(prevProps && prevProps !== propsStore.current) {
        // If exclusive mode, because only a set of animations, then take the previous child ren (final state)
        // If it's not exclusive mode, compare it with the currently rendered nodes
        const prevChildren = exclusive ?
            toArrayChildren(completeChildrenKeys(prevProps.children))
            :
            renderChildrenRef.current;
        const nextChildren = toArrayChildren(completeChildrenKeys(children));
        // Exclusive mode (only one set of animations at a time), stop the previous one directly
        if(exclusive) {
            Object.keys(currentlyAnimatingKeysRef.current).forEach((key) => {
                // If the motion of the node, before and after the state unchanged, can not cancel
                // For example, visible was false originally, and should not be re-rendered, visible was still false, so that the animation was cancelled without callback
                let stoppable = true;
                const prevChild = prevChildren.find(child => child.key === key);
                const nextChild = nextChildren.find(child => child.key === key);
                if(showProp) {
                    prevChild.props[showProp] === nextChild.props[showProp] && (stoppable = false);
                }else {
                    ((prevChild && nextChild) || (!prevChild && !nextChild)) && (stoppable = false);
                }
                stoppable && stop(key);
                !stoppable && (currentlyAnimatingPropsRef.current[key] = propsStore.current);
            });
        }

        // Estimate the next node to render
        let newChildren = [];
        if(showProp) {
            // Iterate through the old node to save the new state
            prevChildren.forEach(prevChild => {
                if(!prevChild) return;

                const nextChild = prevChild && findChildInChildrenByKey(nextChildren, prevChild.key);
                let newChild;
                // If it's supposed to be displayed, then hide it, reset it to display and animate it later.
                if ((!nextChild || !nextChild.props[showProp]) && prevChild.props[showProp]) {
                    newChild = React.cloneElement(nextChild || prevChild, {
                        [showProp]: true,
                    });
                } else {
                    newChild = nextChild;
                }
                // Save the old node for the status update, even if you want to remove it later
                if (newChild) {
                    newChildren.push(newChild);
                }
            });
            nextChildren.forEach(nextChild => {
                if(!nextChild) return;

                // If the new node does not exist, it will be rendered this time
                // if (!nextChild || !findChildInChildrenByKey(prevChildren, nextChild.key)) {
                if (!findChildInChildrenByKey(prevChildren, nextChild.key)) {
                    newChildren.push(nextChild);
                }
            });
        }else {
            newChildren = mergeChildren(
                prevChildren,
                nextChildren
            );
        }

        renderChildrenRef.current = newChildren;

        // Iterate through the new node to find the node to perform the entry animation
        nextChildren.forEach(child => {
            const key = child && child.key;
            // Node is performing animation, do nothing
            if (child && currentlyAnimatingKeysRef.current[key]) {
                return;
            }
            const hasPrev = child && findChildInChildrenByKey(prevChildren, key);
            if (showProp) {
                const showInNext = child.props[showProp];
                if(hasPrev) {
                    const showInPrev = findShownChildInChildrenByKey(prevChildren, key, showProp);
                    // It was hidden, but now it's shown. Join the queue of animations
                    if (!showInPrev && showInNext) {
                        keysToEnterRef.current.push(key);
                    }
                } else if (showInNext) {
                    // There was no such node before, but now there is, joining the animation queue.
                    keysToEnterRef.current.push(key);
                }
            } else if (!hasPrev) {
                // Pure new node, join into the animation queue
                keysToEnterRef.current.push(key);
            }
        })

        // Iterate through the old node to find the node to execute the exit animation
        prevChildren.forEach(child => {
            const key = child && child.key;
            // Node is performing animation, do nothing
            if (child && currentlyAnimatingKeysRef.current[key]) {
                return;
            }
            const hasNext = child && findChildInChildrenByKey(nextChildren, key);
            if (showProp) {
                const showInNow = child.props[showProp];
                if (hasNext) {
                    const showInNext = findShownChildInChildrenByKey(nextChildren, key, showProp);
                    // It was shown, now it's hidden, join and exit the animation queue
                    if (!showInNext && showInNow) {
                        keysToLeaveRef.current.push(key);
                    }
                } else if (showInNow) {
                    // It was shown, and then the node is removed, join and exit the animation queue
                    keysToLeaveRef.current.push(key);
                }
            } else if (!hasNext) {
                // Node from has to none, join off animation queue
                keysToLeaveRef.current.push(key);
            }
        })
    }
    return renderChildrenRef.current.map(child => {
        if (child === null || child === undefined) {
            return child;
        }
        if (!child.key) {
            throw new Error('must set key for children');
        }
        return (
            <MotionManager
                key={child.key}
                ref={node => childrenRefs.current[child.key] = node}
                animation={animation}
                transitionName={transitionName}
                transitionAppear={transitionAppear}
                transitionEnter={transitionEnter}
                transitionLeave={transitionLeave}
            >
                {child}
            </MotionManager>
        );
    })

}

Motion.propTypes = MotionProps;
Motion.defaultProps = MotionDefaultProps;
export default Motion;