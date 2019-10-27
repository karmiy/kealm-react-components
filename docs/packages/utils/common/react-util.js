import React from 'react';
import { isFragment } from 'react-is';

/**
 * Translate children of props without fragment
 */
export const transChildren = function(children) {
    return isFragment(children) ? children.props.children : children;
}

/**
 * Clone react element(including fragment)
 */
export const cloneVElement = function(ele, props) {
    const _ele = transChildren(ele);
    return React.cloneElement(_ele, props);
}

/**
 * Whether to include an react element
 */
export const isContainEle = function (children, type) {
    let contains = false;
    React.Children.forEach(children, (element) => {
        if (element && element.type && element.type === type) {
            contains = true;
        }
    });
    return contains;
}

/**
 * Validate type
 */
export const validateType = function (element, type) {
    return element && element.type && element.type === type;
}