/* From: https://juejin.im/post/5ddc7fa66fb9a07ad665b1f0 */
/**
 * Check whether the data is exceeded
 * @param {Number} number
 */
export const checkSafeNumber = (number) => {
    if (number > Number.MAX_SAFE_INTEGER || number < Number.MIN_SAFE_INTEGER) {
        console.log(`数字 ${number} 超限，请注意风险！`);
    }
};

/**
 * Revised data
 * @param {Number} number
 * @param {Number} precision
 */
export const revise = (number, precision = 12) => {
    return +parseFloat(number.toPrecision(precision));
}

/**
 * Gets the length after the decimal point
 * @param number
 */
export const digitLength = (number) => {
    return (number.toString().split('.')[1] || '').length;
};

/**
 * Remove the decimal point from the number
 * @param number
 * @returns {number}
 */
export const floatToInt = (number) => {
    return Number(number.toString().replace('.', ''));
};

/**
 * Precision computing multiplication
 * @param {Number} arg1 乘数 1
 * @param {Number} arg2 乘数 2
 */
export const multiplication = (arg1, arg2) => {
    const baseNum = digitLength(arg1) + digitLength(arg2);
    const result = floatToInt(arg1) * floatToInt(arg2);
    checkSafeNumber(result);
    return result / Math.pow(10, baseNum);
};

/**
 * Precision calculation addition
 * @param {Number} arg1 加数 1
 * @param {Number} arg2 加数 2
 */
export const add = (arg1, arg2) => {
    const baseNum = Math.pow(10, Math.max(digitLength(arg1), digitLength(arg2)));
    return (multiplication(arg1, baseNum) + multiplication(arg2, baseNum)) / baseNum;
}

/**
 * Precision calculation subtraction
 * @param {Number} arg1 减数 1
 * @param {Number} arg2 减数 2
 */
export const subtraction = (arg1, arg2) => {
    const baseNum = Math.pow(10, Math.max(digitLength(arg1), digitLength(arg2)));
    return (multiplication(arg1, baseNum) - multiplication(arg2, baseNum)) / baseNum;
};

/**
 * Precision calculation division
 * @param {Number} arg1 除数 1
 * @param {Number} arg2 除数 2
 */
export const division = (arg1, arg2) => {
    const baseNum = Math.pow(10, Math.max(digitLength(arg1), digitLength(arg2)));
    return multiplication(arg1, baseNum) / multiplication(arg2, baseNum);
};

/**
 * Round to the specified number
 * @param {Number} number 需要取舍的数字
 * @param {Number} ratio 精确到多少位小数
 */
export const round = (number, ratio) => {
    const baseNum = Math.pow(10, ratio);
    return division(Math.round(multiplication(number, baseNum)), baseNum);
}

