const toString = Object.prototype.toString;

const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

/**
 * 消除前后空格
 * @param string
 * @returns {string}
 */
export const trim = function(string) {
    return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

/**
 * 转驼峰
 * @param name
 * @returns {string}
 */
export const camelCase = function(name) {
    return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
    }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

/**
 * 是否为对象
 * @param value: any
 * @returns {boolean}
 */
export const isObject = function(value) {
    return toString.call(value) === '[object Object]';
}

/**
 * 是否为数组
 * @param value: any
 * @returns {boolean}
 */
export const isArray = Array.isArray || function(value) {
    return toString.call(value) === '[object Array]';
}

/**
 * 是否为函数
 * @param value: any
 * @returns {boolean}
 */
export const isFunction = function(value) {
    return toString.call(value) === '[object Function]';
}

/**
 * 是否为整数
 * @param value: any
 * @returns {boolean}
 */
export const isInteger = Number.isInteger || function(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
};

/**
 * 是否为IE
 * @returns {boolean}
 */
export const isIE = function() {
    return !isNaN(Number(document.documentMode));
};

/**
 * 是否为Edge
 * @returns {boolean}
 */
export const isEdge = function() {
    return navigator.userAgent.indexOf('Edge') > -1;
};

/**
 * 是否为空
 * @returns {boolean}
 */
export const isEmpty = function(value) {
    return value === null || value === undefined;
};

/**
 * 从对象移除某些项
 * @param obj
 * @param fields
 */
export const omit = function(obj, fields) {
    const shallowCopy = {
        ...obj,
    };
    for (let i = 0; i < fields.length; i++) {
        const key = fields[i];
        delete shallowCopy[key];
    }
    return shallowCopy;
}