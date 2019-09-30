import React from 'react';
import { isArray } from 'utils/common/base';

const defaultKey = `km_animate_${Date.now()}`;

/**
 * Add key to a single of props.children
 */
export function completeChildrenKeys(children) {
    if (React.isValidElement(children)) {
        if (!children.key) {
            return React.cloneElement(children, {
                key: defaultKey,
            });
        }
    }
    return children;
}

/**
 * Props.children converts to array
 */
export function toArrayChildren(children) {
    if(isArray(children)) return children;

    const ret = [];
    React.Children.forEach(children, (child) => {
        ret.push(child);
    });
    return ret;
}

/**
 * Find the child by key
 */
export function findChildInChildrenByKey(children, key) {
    let ret = null;
    if (children) {
        ret = children.find(child => child && child.key === key);
    }
    return ret;
}

/**
 * merge children and let the same child be a newer one
 */
export function mergeChildren(prev, next) {
    let ret = [];

    // For each key of `next`, the list of keys to insert before that key in
    // the combined list
    const nextChildrenPending = {};
    let pendingChildren = [];
    prev.forEach((child) => {
        if (child && findChildInChildrenByKey(next, child.key)) {
            if (pendingChildren.length) {
                nextChildrenPending[child.key] = pendingChildren;
                pendingChildren = [];
            }
        } else {
            pendingChildren.push(child);
        }
    });

    next.forEach((child) => {
        if (child && Object.prototype.hasOwnProperty.call(nextChildrenPending, child.key)) {
            ret = ret.concat(nextChildrenPending[child.key]);
        }
        ret.push(child);
    });

    ret = ret.concat(pendingChildren);

    return ret;
}

/**
 * Find the child by key, and the child is the display state
 */
export function findShownChildInChildrenByKey(children, key, showProp) {
    let ret = null;
    if (children) {
        children.forEach((child) => {
            if (child && child.key === key && child.props[showProp]) {
                if (ret) {
                    throw new Error('two child with same key for children');
                }
                ret = child;
            }
        });
    }
    return ret;
}

/**
 * Judging whether two children are the same
 */
export function isSameChildren(c1, c2, showProp) {
    let same = c1.length === c2.length;
    if (same) {
        c1.forEach((child, index) => {
            const child2 = c2[index];
            if (child && child2) {
                if ((child && !child2) || (!child && child2)) {
                    same = false;
                } else if (child.key !== child2.key) {
                    same = false;
                } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
                    same = false;
                }
            }
        });
    }
    return same;
}