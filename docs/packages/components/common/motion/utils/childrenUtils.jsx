import React from 'react';
const defaultKey = `km_animate_${Date.now()}`;

/**
 * children是单个元素(非单个会是数组)，则添加key
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
 * 转数组
 */
export function toArrayChildren(children) {
    const ret = [];
    React.Children.forEach(children, (child) => {
        ret.push(child);
    });
    return ret;
}

/**
 * 通过key找到child
 */
export function findChildInChildrenByKey(children, key) {
    let ret = null;
    if (children) {
        children.forEach((child) => {
            if (ret) {
                return;
            }
            if (child && child.key === key) {
                ret = child;
            }
        });
    }
    return ret;
}

/**
 * 合并children
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
 * 通过key找到child，且child是显示状态
 */
export function findShownChildInChildrenByKey(children, key, showProp) {
    let ret = null;
    if (children) {
        children.forEach((child) => {
            if (child && child.key === key && child.props[showProp]) {
                if (ret) {
                    throw new Error('two child with same key for <rc-animate> children');
                }
                ret = child;
            }
        });
    }
    return ret;
}

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