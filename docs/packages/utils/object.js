import { isEmpty } from './common';

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

/**
 * 过滤对象空值(null、undefined)
 * @param obj
 */
export const filterEmptyProp = function (obj) {
    const _obj = {};
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            !isEmpty(obj[key]) && (_obj[key] = obj[key]);
        }
    }
    return _obj;
}

/**
 * 浅合并对象属性
 * @param origin 被合并项
 * @param source 合并项
 * @param effects 保留项
 */
export const shallowMergeProp = function (origin, source, effects = []) {
    const effectObj = effects.reduce((_, prop) => {
        origin.hasOwnProperty(prop) && !isEmpty(origin[prop]) && (_[prop] = origin[prop]);
        return _;
    }, {});
    return Object.assign({}, origin, source, effectObj);
}