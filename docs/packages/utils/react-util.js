import React from 'react';
import { isFragment } from 'react-is';

/**
 * translate children of props without fragment
 */
export const transChildren = function(children) {
    return isFragment(children) ? children.props.children : children;
}

/**
 * clone react element(including fragment)
 */
export const cloneVElement = function(ele, props) {
    const _ele = transChildren(ele);
    return React.cloneElement(_ele, props);
}