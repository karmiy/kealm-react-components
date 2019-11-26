import { Children, cloneElement } from 'react';
import { isFragment, isElement } from 'react-is';
import { isArray, isObject } from './base';

/**
 * 是否为 React 元素
 * @param element: <div>...</div>、<K>...</K>
 * @returns {*}
 */
export const isReactElement = function (element) {
    return isElement(element);
}

/**
 * 转换 children，移除 fragment 包裹
 * @param {node} children
 * @returns {node}
 */
export const transChildren = function(children) {
    return isFragment(children) ? children.props.children : children;
}

/**
 * 克隆 React 元素(不包含 fragment)
 * @param {node} ele
 * @param {object} props
 * @returns {node}
 */
export const cloneVElement = function(ele, props) {
    const _ele = transChildren(ele);
    return cloneElement(_ele, props);
}

/**
 * 判断 children 中是否包含某个 React 元素类型
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
 * 校验 React 元素类型
 * @param {node} element
 * @param {component / string} type
 * @returns {boolean}
 */
export const validateType = function (element, type) {
    return element && element.type && element.type === type;
}

/**
 * 校验 child 类型
 * @param {node} child
 * @param {string / array} type
 */
export const validateChildType = function (child, type) {
    if(isArray(type) && type.every(t => !validateType(child, t))) {
        type = type.map(t => isObject(t) ? t.type.name : t);
        throw new Error(`You can only use ${type.join(' or ')} as children`);
    }
    if(!isArray(type) && !validateType(child, type)) {
        type = isObject(type) ? type.type.name : type;
        throw new Error(`You can only use ${type} as children`);
    }
}
/**
 * 校验 children 类型
 * @param {node} children
 * @param {string / array} type
 * @param {boolean} traversal 是否深度遍历
 */
export const validateChildrenType = function (children, type, traversal = false) {
    if(!Children.count(children)) return;

    if(!traversal) {
        const casualOpt = Children.toArray(children)[0];
        validateChildType(casualOpt, type);
    }else {
        Children.forEach(children, casualOpt => {
            validateChildType(casualOpt, type);
        });
    }
}

/**
 * 找到 React 元素下指定类型的元素节点
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
 * 找到 React 元素下指定类型的元素节点并操作它
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