import React, { Children, cloneElement } from 'react';
import { isFragment } from 'react-is';
import { isArray } from './base';

/**
 * Translate children of props without fragment
 * @param {node} children
 * @returns {node}
 */
export const transChildren = function(children) {
    return isFragment(children) ? children.props.children : children;
}

/**
 * Clone react element(including fragment)
 * @param {node} ele
 * @param {object} props
 * @returns {node}
 */
export const cloneVElement = function(ele, props) {
    const _ele = transChildren(ele);
    return cloneElement(_ele, props);
}

/**
 * Whether to include an react element
 * @param {node} children
 * @param {component / string} type
 * @returns {boolean}
 */
export const isContainEle = function (children, type) {
    let contains = false;
    Children.forEach(children, (element) => {
        if (element && element.type && element.type === type) {
            contains = true;
        }
    });
    return contains;
}

/**
 * Validate type for ReactNode
 * @param {node} element
 * @param {component / string} type
 * @returns {boolean}
 */
export const validateType = function (element, type) {
    return element && element.type && element.type === type;
}

/**
 * Find nodes of this type under the react element
 * @param {node} element
 * @param {component / string} type
 * @returns {node}
 */
export const loopEleOfType = function (element, type) {
    const filters = Children.map(element, child => {
        if(!child) return null;

        if(validateType(child, type)) return child;

        if(!child.props || !child.props.children) return null;

        return loopEleOfType(child.props.children, type);
    });

    if(isArray(filters) && !filters.length) return null;

    return filters;
}

/**
 * Find nodes of this type under the react element
 * @param {node} element
 * @param {component / node} type
 * @param {function} handler
 * @returns {node}
 */
export const handleEleOfType = function (element, type, handler) {
    return Children.map(element, child => {
        if(!child) return child; // React.Children will filter the returned null or undefined value

        if(validateType(child, type)) return handler(child);

        if(!child.props || !child.props.children) return child;

        return cloneElement(child, {
            children: handleEleOfType(child.props.children, type, handler),
        });
    })
}