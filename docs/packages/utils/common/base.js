const toString = Object.prototype.toString;

const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

/**
 * 空函数、数组、对象
 */
export const noop = () => {};
export const emptyArr = [];
export const emptyObj = Object.create(null);

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
 * 是否为字符串
 * @param value: any
 * @returns {boolean}
 */
export const isString = function(value) {
    return toString.call(value) === '[object String]';
}

/**
 * 是否为布尔类型
 * @param value: any
 * @returns {boolean}
 */
export const isBoolean = function(value) {
    return toString.call(value) === '[object Boolean]';
}

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
 * 左补位，如日期'1'补为'01'
 * @param str: string
 * @param len: number
 * @param ch: string，用什么补位，默认空格补
 * @returns {string}
 */
const spaceCache = [
    '',
    ' ',
    '  ',
    '   ',
    '    ',
    '     ',
    '      ',
    '       ',
    '        ',
    '         '
];

export function leftPad (str, len, ch) {
    str = str + '';
    len = len - str.length;
    if (len <= 0) return str;

    if (!ch && ch !== 0) ch = ' ';
    ch = ch + '';
    if (ch === ' ' && len < 10) return spaceCache[len] + str;
    let pad = '';
    while (true) {
        if (len & 1) pad += ch;
        len >>= 1;
        if (len) ch += ch;
        else break;
    }
    return pad + str;
}

/**
 * 节流
 * @param func 节流函数
 * @param wait 等待时长
 * @param options 配置:
 *              leading(true: 立即执行; false: 第一次执行也wait)
 *              trailing(true 函数setTimeout异步执行效果; false 函数仅通过计算时间同步执行)
 * @returns {function(): *}
 */
export const throttle = function (func, wait, options = {}) {
    const {leading = true, trailing = true} = options;
    let timeout, context, args, result;
    let previous = 0;
    const later = function () {
        previous = !leading ? 0 : (Date.now() || new Date().getTime());
        timeout = null;
        result = func.apply(context, args);
        if(!timeout) context = args = null;
    }
    const throttled = function() {
        const now = Date.now() || new Date().getTime();
        if(!previous && !leading) previous = now;
        // remaining 为距离下次执行 func 的时间
        // remaining > wart，表示系统时间被调整过
        const remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if(remaining <= 0 || remaining > wait) {
            if(timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            // 重置previous
            previous = now;
            // 执行函数
            result = func.apply(context, args);
            if(!timeout) context = args = null;
        } else if(!timeout && trailing) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    }
    throttled.cancel = function () {
        clearTimeout(timeout);
        previous = 0;
        timeout = context = args = null;
    }
    return throttled;
}

/**
 * 防抖
 * @param func 节流函数
 * @param wait 等待时长
 * @param options 配置:
 *              leading(true: 立即执行; false: 第一次执行也wait)
 *              trailing(true 延迟结束后调用; false 延迟结束后不调用)
 * @returns {function(): *}
 */
export const debounce = function (func, wait, options = {}) {
    const {leading = false, trailing = true} = options;
    let immediate = false;
    let timeout, result;

    // 延迟执行函数
    const later = (context, args) => setTimeout(() => {
        timeout = null;
        if(immediate) {
            immediate = false;
            return;
        }
        result = func.apply(context, args);
        context = args = null;
    }, wait);

    const debounced = function (...params) {
        if(!timeout) {
            trailing && (timeout = later(this, params));

            if(leading) {
                result = func.apply(this, params);
                immediate = true;
            }
        } else {
            clearTimeout(timeout);
            immediate = false;
            timeout = later(this, params);
        }
        return result;
    }

    debounced.cancel = function () {
        clearTimeout(timeout);
        timeout = null;
    }
    return debounced;
}

/**
 * merge String from object
 * @param obj
 * @param separator
 * @returns {string}
 */
export const mergeStr = function (obj = {}, separator = ' ') {
    let className = '';
    for(let cls in obj) {
        if(obj.hasOwnProperty(cls)) {
            obj[cls] && (className += `${cls}${separator}`);
        }
    }
    return className.slice(0, -1);
}

/**
 * Transforms special symbols in RegExp
 * @param str
 */
export const transRegExpSpec = function (str = '') {
    return str.replace(/[$\\^)}?(.{+*|\]\[]/g, s => '\\' + s);
}