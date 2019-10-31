import React from 'react';
import { isFragment } from 'react-is';
import { isArray } from './base';

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

/**
 * Find nodes of this type under the react element
 * @param element
 * @param type
 */
export const loopEleOfType = function (element, type) {
    const filters = React.Children.map(element, child => {
        if(!child) return null;

        if(validateType(child, type)) return child;

        if(!child.props || !child.props.children) return null;

        return loopEleOfType(child.props.children, type);
    });

    if(isArray(filters) && !filters.length) return null;

    return filters;
    /*if(!element) return null;

    let _children = null;

    if(isArray(element)) {
        _children = element;
    }else  {
        if(validateType(element, type)) return element;

        if(!element.props || !element.props.children) return null;

        _children = element.props.children;
    }

    const filters = React.Children.map(_children, child => {
        return loopEleOfType(child, type);
    });

    if(isArray(filters) && !filters.length) return null;

    return filters;*/
}