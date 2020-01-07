const toString = Object.prototype.toString;

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
 * 是否为字符串
 * @param value: any
 * @returns {boolean}
 */
export const isString = function(value) {
    return toString.call(value) === '[object String]';
};