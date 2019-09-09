/**
 * 转数组
 * @param activeKey
 * @returns {array}
 */
export const toArray = function(key) {
    let currentKey = key;
    if (!Array.isArray(currentKey)) {
        currentKey = currentKey ? [currentKey] : [];
    }
    return currentKey;
}

/**
 * 从数组中移除某一项
 * @param array
 * @param item
 * @param isDestroy 是否改变原数组，true返回更改后原数组，false返回新数组
 * @returns {array}
 */
export const removeOfArray = function(array, item, isDestroy = false) {
    !isDestroy && (array = [...array]);
    const index = array.indexOf(item);
    index !== -1 && array.splice(index, 1);
    return array;
}