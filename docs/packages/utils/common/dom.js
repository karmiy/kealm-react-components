import { trim, camelCase } from './base';
const ieVersion = Number(document.documentMode);

/**
 * 判断类名
 * @param el
 * @param cls
 * @returns {boolean}
 */
export function hasClass(el, cls) {
    if (!el || !cls) return false;
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
    if (el.classList) {
        return el.classList.contains(cls);
    } else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
};

/**
 * 添加类名
 * @param el
 * @param cls
 */
export function addClass(el, cls) {
    if (!el) return;
    let curClass = el.className;
    const classes = (cls || '').split(' ');

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.add(clsName);
        } else if (!hasClass(el, clsName)) {
            curClass += ' ' + clsName;
        }
    }
    if (!el.classList) {
        el.className = curClass;
    }
};

/**
 * 移除类名
 * @param el
 * @param cls
 */
export function removeClass(el, cls) {
    if (!el || !cls) return;
    const classes = cls.split(' ');
    let curClass = ' ' + el.className + ' ';

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.remove(clsName);
        } else if (hasClass(el, clsName)) {
            curClass = curClass.replace(' ' + clsName + ' ', ' ');
        }
    }
    if (!el.classList) {
        el.className = trim(curClass);
    }
};

/**
 * 获取style
 * @param element
 * @param styleName
 */
export const getStyle = ieVersion < 9 ? function(element, styleName) {
    if (!element || !styleName) return null;
    styleName = camelCase(styleName);
    if (styleName === 'float') {
        styleName = 'styleFloat';
    }
    try {
        switch (styleName) {
            case 'opacity':
                try {
                    return element.filters.item('alpha').opacity / 100;
                } catch (e) {
                    return 1.0;
                }
            default:
                return (element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null);
        }
    } catch (e) {
        return element.style[styleName];
    }
} : function(element, styleName) {
    if (!element || !styleName) return null;
    styleName = camelCase(styleName);
    if (styleName === 'float') {
        styleName = 'cssFloat';
    }
    try {
        const computed = document.defaultView.getComputedStyle(element, '');
        return element.style[styleName] || computed ? computed[styleName] : null;
    } catch (e) {
        return element.style[styleName];
    }
};

/**
 * 获取 translate
 * @param dom
 * @returns {{x: number, y: number}}
 */
export const getTranslate = function (dom) {
    const transform = getStyle(dom, 'transform');
    if(transform === 'none') return {x: 0, y: 0};
    const trans = transform.slice(7, -1).split(',');
    return {
        x: +trans[4],
        y: +trans[5],
    }
}

/**
 * 设置 translate
 * @param dom
 * @param options
 */
export const setTranslate = function (dom, options = {}) {
    const { x, y } = options;
    const transform = getStyle(dom, 'transform');
    const trans = transform === 'none' ?
        [1, 0, 0, 1, 0, 0]
        :
        transform.slice(7, -1).split(',');
    x !== undefined && (trans[4] = x);
    y !== undefined && (trans[5] = y);
    dom.style.transform = `matrix(${trans.toString()})`;
}

/**
 * 通过 class 找到父节点
 * @param dom
 * @param className
 * @param self 是否包括自己
 * @returns {*}
 */
export const findParentNodeByClass = function (dom, className, self = true) {
    if(self && hasClass(dom, className))
        return dom;
    const parentNode = dom.parentNode;

    if(parentNode === document.documentElement)
        return null;

    return hasClass(parentNode, className) ? parentNode : findParentNodeByClass(parentNode, className, false);
}