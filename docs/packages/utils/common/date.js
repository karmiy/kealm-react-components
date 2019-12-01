import { leftPad } from './base';

const formatOptions = [
    'YYYY',
    'MM',
    'DD',
    'HH',
    'hh',
    'mm',
    'ss'
];
export function verifySafeTime(option, num) {
    switch (option) {
        case 'YYYY':
            return num > 99 && num < 10000;
        case 'MM':
            return num > 0 && num < 13; // 1 ~ 12
        case 'DD':
            return num > 0 && num < 32; // 1 ~ 31
        case 'HH':
            return num >= 0 && num < 24; // 0 ~ 23
        case 'hh':
            return num > 0 && num < 13; // 12 ~ 1 ~ 11
        case 'mm':
            return num >= 0 && num < 60; // 0 ~ 59
        case 'ss':
            return num >= 0 && num < 60; // 0 ~ 59
    }
}

/**
 * 校验日期格式，如 '2019-01-02 12:11' 是否符合 'YYYY-MM-DD HH:mm'
 * @param dateStr
 * @param format
 * @param isStrict 是否严格判断，即 2019-1-1 能否匹配 YYYY-MM-DD
 * @returns {boolean}
 */
export function isValidFormat(dateStr, format, isStrict = true) {
    // 转为 'YYYY|MM|DD|HH|hh|mm|ss'
    const formatExpStr = formatOptions.join('|');

    // 将如 YYYY-MM-DD 转为 ^\d{1,4}-\d{1,2}-\d{1,2}$
    const formatExp = new RegExp(formatExpStr, 'g');
    const dateExpStr = '^' + format.replace(formatExp, str => {
        return isStrict ? '\\d{' + str.length + '}' : '\\d{1,' + str.length + '}';
    }) + '$';
    return new RegExp(dateExpStr).test(dateStr);
}

/**
 * 捕获日期信息， 18:30 HH:mm  => {HH: 18, mm: 30}
 * @param dateStr
 * @param format
 * @param isStrict 如果为false，则 8:30 HH:mm  => {mm: 30}
 * @returns {}
 */
export function catchFormatOptions(dateStr, format, isStrict = true) {
    const obj = {};
    // 1、如18:8 HH:mm  =>  { HH:18, mm: 8 }
    // 转为 'YYYY|MM|DD|HH|hh|mm|ss'
    const formatExpStr = formatOptions.join('|');

    // 将如 HH:mm 转为 ^(\d{1,2}):(\d{1,2})$
    const optionStore = []; // 顺序存如 ['HH', 'mm']
    const dateExpStr = '^' + format.replace(new RegExp(formatExpStr, 'g'), str => {
        optionStore.push(str);
        return '(\\d{1,' + str.length + '})';
    }) + '$';

    // 获取正则里的组，如从18:8 获取 [18, 8]
    const matchItems = dateStr.match(new RegExp(dateExpStr));
    // 预防格式错误
    if(!matchItems || matchItems.length === 0) return obj;

    const matchGroup = matchItems.slice(1);
    // 遍历 matchGroup，构造 { HH:18, mm: 8 }
    optionStore.forEach((option, index) => {
        const num = matchGroup[index];
        if(isStrict && option.length !== num.length) return;
        obj[option] = num; // 顺序取
    });

    return obj;
}

/**
 * 填补日期格式  如18:28 HH:mm 转 YYYY-MM-DD 18:28:ss
 * @param dateStr
 * @param format
 * @param isStrict 是否严格填补，如 18:9 HH:mm 在 isStrict: false 时得到 18:mm
 * @param standardFormat
 * @returns {string}
 */
export function padFormat(dateStr, format, isStrict = true, standardFormat = 'YYYY-MM-DD HH:mm:ss') {
    // 如是 hh 12小时制，标准格式改为 hh
    !format.includes('HH') && format.includes('hh') && standardFormat === 'YYYY-MM-DD HH:mm:ss' && (standardFormat = 'YYYY-MM-DD hh:mm:ss');

    const obj = catchFormatOptions(dateStr, format, isStrict);

    if(Object.keys(obj).length === 0) return standardFormat;

    // 2、YYYY-MM-DD HH:mm:ss  =>  YYYY-MM-DD 18:28:ss
    return standardFormat.replace(new RegExp(Object.keys(obj).join('|'), 'g'), key => obj[key]);
}

export function createDateStr(options) {
    // 创建一个临时日期
    const fullOptions = {
        'YYYY': 2019,
        'MM': 1,
        'DD': 1,
        'HH': 12,
        'hh': -1,
        'mm': 12,
        'ss': 12,
        ...options,
    };
    fullOptions['hh'] !== -1 ? (delete fullOptions['HH']) : (delete fullOptions['hh']);

    let fullDateStr = ''; // 2019-01-01 12:12:12
    for(let option in fullOptions) {
        const value = leftPad(fullOptions[option], option.length, '0');
        switch (option) {
            case 'YYYY':
                fullDateStr += value;
                break;
            case 'MM':
            case 'DD':
                fullDateStr += `-${value}`;
                break;
            case 'HH':
            case 'hh':
                fullDateStr += ` ${value}`;
                break;
            case 'mm':
            case 'ss':
                fullDateStr += `:${value}`;
                break;
        }
    }
    return fullDateStr;
}

export function isValidDate(dateStr, format, isStrict = true) {
    // 严格模式下，如 1:13 不能匹配 HH:mm，需要 01:13
    // if(isStrict && dateStr.length !== format.length) return false;

    // 校验格式是否正确，如 '18:13' 与 'HH:mm'
    if(!isValidFormat(dateStr, format, isStrict)) return false;

    // 获取格式对应项 {HH: 18, mm: 13}
    const formatOptions = catchFormatOptions(dateStr, format, isStrict);

    // 校验各个格式对应项的有效性
    if(Object.keys(formatOptions).length === 0) return false;

    for(let option in formatOptions) {
        if(formatOptions.hasOwnProperty(option) && !verifySafeTime(option, Number(formatOptions[option]))) return false;
    }

    // 构造完整的日期字符串 2019-01-01 18:13:12，校验日期是否有效
    const fullDateStr = createDateStr(formatOptions);
    const vDate = new Date(fullDateStr);
    if(vDate.toString() === 'Invalid Date') return false;

    // 将日期重新转为日期字符串，比对前后是否一致，预防2019-02-31这种情况
    const _fullDateStr = formatDate(vDate, format.includes('hh') ? 'YYYY-MM-DD hh:mm:ss' : 'YYYY-MM-DD HH:mm:ss');
    return fullDateStr === _fullDateStr;
}

/**
 * 是否有效的时间(时分秒)
 * @param time: string
 * @param format: string
 * @param isStrict: boolean 是否格式判断，即 01:01:01 可以通过，1:1:1不可通过
 * @returns {boolean}
 */
export function isValidTime(time, format = 'HH:mm:ss', isStrict = true) {
    const date = new Date(`2019-01-01 ${time}`);
    if(date.toString() === 'Invalid Date') return false;
    return !(isStrict && time.length !== 8);
}

/**
 * 设置时间
 * @param date
 * @param time
 * @returns {Date}
 */
export function setTime(date, time) {
    date = date || new Date();
    const [hour, minute, second] = time.split(':');
    date.setHours(hour);
    date.setMinutes(minute);
    date.setSeconds(second);
    return date;
}

/**
 * 设置单个时间配置
 * @param date
 * @param time
 * @param type
 * @returns {Date}
 */
export function setTimeOption(date, time, type) {
    date = date || new Date();
    switch (type) {
        case 'hour':
            date.setHours(time);
            break;
        case 'minute':
            date.setMinutes(time);
            break;
        case 'second':
            date.setSeconds(time);
            break;
    }
    return date;
}

/**
 * 格式化日期
 * @param date: Date
 * @param fmt: string, 如'YYYY-MM-DD hh:mm:ss'
 * @returns {string}
 */
export function formatDate(date, fmt) {
    const o = {
        "M+": date.getMonth() + 1, // 月
        "D+": date.getDate(), // 日
        "H+": date.getHours(), // 24小时制
        "h+": date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 12小时制
        "m+": date.getMinutes(), // 分
        "s+": date.getSeconds(), // 秒
        "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(Y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, leftPad((date.getFullYear() + "").substr(4 - RegExp.$1.length), RegExp.$1.length, '0'));
    for (let k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

/**
 * 获取相对日期
 * @param date: Date
 * @param dValue: number，偏移量，如向后10天，传递10
 * @param type: string，'year' | 'momth' | 'day' | 'hour' | 'minute' | 'second'
 * @param after: boolean，true表示往后计，false往前计
 * @returns {Date}
 */
export function getRelativeDate(date = new Date(), dValue, type, after) {
    let rDate = date, time = '', cloneDate = null;
    switch (type) {
        case 'second':
            time = date.valueOf() + (after ? (dValue * 1000) : -(dValue * 1000));
            rDate = new Date(time);
            break;
        case 'minute':
            time = date.valueOf() + (after ? (dValue * 60 * 1000) : -(dValue * 60 * 1000));
            rDate = new Date(time);
            break;
        case 'hour':
            time = date.valueOf() + (after ? (dValue * 60 * 60 * 1000) : -(dValue * 60 * 60 * 1000));
            rDate = new Date(time);
            break;
        case 'day':
            time = date.valueOf() + (after ? (dValue * 24 * 60 * 60 * 1000) : -(dValue * 24 * 60 * 60 * 1000));
            rDate = new Date(time);
            break;
        case 'month':
            cloneDate = new Date(date.valueOf());
            cloneDate.setMonth(cloneDate.getMonth() + (after ? dValue : -dValue));
            rDate = cloneDate;
            break;
        case 'year':
            cloneDate = new Date(date.valueOf());
            cloneDate.setFullYear(cloneDate.getFullYear() + (after ? dValue : -dValue));
            rDate = cloneDate;
            break;
    }
    return rDate;
}

const divisors = {
    days: 1000 * 60 * 60 * 24,
    hours: 1000 * 60 * 60,
    minutes: 1000 * 60,
    seconds: 1000
};

/**
 * 获取日期该月的最后一天
 * @param date: Date
 * @returns {Date}
 */
export function endOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};

/**
 * 获取日期该年的第一天
 * @param date: Date
 * @returns {Date}
 */
export function beginOfYear(date) {
    return new Date(date.getFullYear(), 0, 0);
}

/**
 * 获取日期该年的最后一天
 * @param date: Date
 * @returns {Date}
 */
export function endOfYear(date) {
    return new Date(date.getFullYear() + 1, 0, 0);
}

/**
 * 求日期是该年的第几天
 * @param date: Date
 * @returns {number}
 */
export function dayOfYear(date) {
    return (date - beginOfYear(date)) / divisors.days;
}

/**
 * 求日期该年共多少天
 * @param date: Date
 * @returns {number}
 */
export function daysInYear(date) {
    return (endOfYear(date) - beginOfYear(date)) / divisors.days;
};

/**
 * 求2个日期秒数之差
 * @param date1: Date
 * @param date2: Date
 * @returns {number}
 */
export function diffSeconds(date1, date2) {
    return (date1 - date2) / divisors.seconds;
}

/**
 * 求2个日期分钟数之差
 * @param date1: Date
 * @param date2: Date
 * @returns {number}
 */
export function diffMinutes(date1, date2) {
    return (date1 - date2) / divisors.minutes;
}

/**
 * 求2个日期小时数之差
 * @param date1: Date
 * @param date2: Date
 * @returns {number}
 */
export function diffHours(date1, date2) {
    return (date1 - date2) / divisors.hours;
}

/**
 * 求2个日期天数之差
 * @param date1: Date
 * @param date2: Date
 * @returns {number}
 */
export function diffDays(date1, date2) {
    return (date1 - date2) / divisors.days;
}

/**
 * 求2个日期周数之差
 * @param date1: Date
 * @param date2: Date
 * @returns {number}
 */
export function diffWeeks(date1, date2) {
    return diffDays(date1, date2) / 7;
}

/**
 * 求2个日期月数之差
 * @param date1: Date
 * @param date2: Date
 * @returns {number}
 */
export function diffMonth(date1, date2) {
    let eom, ret;
    ret = (date1.getFullYear() - date2.getFullYear()) * 12;
    ret += date1.getMonth() - date2.getMonth();
    eom = endOfMonth(date2).getDate();
    ret += (date1.getDate() / eom) - (date2.getDate() / eom);
    return ret;
}

/**
 * 求2个日期年份之差
 * @param date1: Date
 * @param date2: Date
 * @returns {number}
 */
export function diffYears(date1, date2) {
    let ret = date1.getFullYear() - date2.getFullYear();
    ret += (dayOfYear(date1) - dayOfYear(date2)) / daysInYear(date2);
    return ret;
}