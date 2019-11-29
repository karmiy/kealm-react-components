const formatOptions = [
    'YYYY',
    'MM',
    'DD',
    'HH',
    'hh',
    'mm',
    'ss'
]

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
    const dateExpStr = '^' + format.replace(new RegExp(formatExpStr, 'g'), str => '\\d{1,' + str.length + '}') + '$';
    return new RegExp(dateExpStr).test(dateStr);
}

/**
 * 填补日期格式  如18:28 HH:mm 转 YYYY-MM-DD 18:28:ss
 * @param dateStr
 * @param format
 * @param standardFormat
 * @returns {string}
 */
export function padFormat(dateStr, format, standardFormat = 'YYYY-MM-DD HH:mm:ss') {
    const obj = {};
    // 1、如18:8 HH:mm  =>  { HH:18, mm: 8 }
    // 转为 'YYYY|MM|DD|HH|hh|mm|ss'
    const formatExpStr = formatOptions.join('|');

    // 将如 HH:mm 转为 ^(\d{1,2}):(\d{1,2})$
    const optionStore = []; // 顺序存如 ['YYYY', 'MM']
    const dateExpStr = '^' + format.replace(new RegExp(formatExpStr, 'g'), str => {
        optionStore.push(str);
        return '(\\d{1,' + str.length + '})';
    }) + '$';

    // 获取正则里的组，如从18:8 获取 [18, 8]
    const matchGroup = dateStr.match(new RegExp(dateExpStr)).slice(1);
    // 遍历 matchGroup，构造 { HH:18, mm: 8 }
    optionStore.forEach((option, index) => {
        obj[option] = matchGroup[index]; // 顺序取
    })


    // 2、YYYY-MM-DD HH:mm:ss  =>  YYYY-MM-DD 18:28:ss
    return standardFormat.replace(new RegExp(Object.keys(obj).join('|'), 'g'), key => obj[key]);
}

export function isValidDate(dateStr, format, isStrict = true) {
    // 严格模式下，如 1:13 不能匹配 HH:mm，需要 01:13
    if(isStrict && dateStr.length !== format.length) return false;

    // 校验格式是否正确，如 '18:13' 与 'HH:mm'
    if(!isValidFormat(dateStr, format)) return false;

    // 校验日期是否有效
    const _format = padFormat(dateStr, format);
    const testDate = formatDate(new Date, _format);

    return testDate.toString() !== 'Invalid Date';
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
    if (/(Y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
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