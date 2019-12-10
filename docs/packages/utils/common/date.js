import {leftPad, transRegExpSpec} from './base';

export const MAX_SAFE_YEAR = 9999;
export const MIN_SAFE_YEAR = 100;

const formatOptions = [
    'YYYY',
    'MM',
    'DD',
    'HH',
    'hh',
    'mm',
    'ss'
];

const formatMethods = {
    'YYYY': 'setFullYear',
    'MM': 'setMonth',
    'DD': 'setDate',
    'HH': 'setHours',
    'hh': 'setHours',
    'mm': 'setMinutes',
    'ss': 'setSeconds',
};

const nameMethods = {
    'year': 'setFullYear',
    'month': 'setMonth',
    'date': 'setDate',
    'hour': 'setHours',
    'minute': 'setMinutes',
    'second': 'setSeconds',
};

export function verifySafeTime(option, num) {
    switch (option) {
        case 'YYYY':
            return num >= MIN_SAFE_YEAR && num <= MAX_SAFE_YEAR; // 100 ~ 9999
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
    // 转义正则特殊符号
    format = transRegExpSpec(format);

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
 * @returns object: {string: number}
 */
export function catchFormatOptions(dateStr, format, isStrict = true) {
    // 转义正则特殊符号
    format = transRegExpSpec(format);

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
        obj[option] = Number(num); // 顺序取
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
    return standardFormat.replace(new RegExp(Object.keys(obj).join('|'), 'g'), key => leftPad(obj[key], key.length, '0'));
}

/**
 * 构造一个临时日期字符串，如 2019-01-01 12:12:12
 * @param options: {YYYY: 2019, MM: 1}
 * @returns {string}
 */
export function createDateStr(options) {
    // 创建一个临时日期
    const fullOptions = {
        'YYYY': 2019,
        'MM': 1,
        'DD': 1,
        'HH': 0,
        'hh': -1,
        'mm': 0,
        'ss': 0,
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

/**
 * 是否有效的日期
 * @param dateStr
 * @param format
 * @param isStrict
 * @returns {boolean}
 */
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
        if(formatOptions.hasOwnProperty(option) && !verifySafeTime(option, formatOptions[option])) return false;
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
 * 设置日期
 * @param date
 * @param Options: {hour: 12, minute: 1} / {HH: 12, mm: 1}
 * @param isFormat: 是否配置项为格式化配置如 HH
 * @returns {Date}
 */
export function handleDate(date, Options = {}, isFormat = false) {
    date = date || new Date();
    for(let item in Options) {
        if(Options.hasOwnProperty(item)) {
            const value = Number(Options[item]);
            const method = isFormat ? formatMethods[item] : nameMethods[item];
            date[method]((item === 'MM' || item === 'month') ? value - 1 : value);
        }
    }
    return date;
}

/**
 * 设置时间
 * @param date
 * @param time
 * @returns {Date}
 */
/*export function setTime(date, time) {
    date = date || new Date();
    const [hour, minute, second] = time.split(':');
    date.setHours(hour);
    date.setMinutes(minute);
    date.setSeconds(second);
    return date;
}*/

/**
 * 设置单个时间配置
 * @param date
 * @param time
 * @param type
 * @returns {Date}
 */
/*export function setTimeOption(date, time, type) {
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
}*/

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
 * 获取日期该周的第一天
 * @param date: Date
 * @returns {Date}
 */
export function beginOfWeek(date) {
    date = new Date(date);
    const day = date.getDay() || 7;
    if(day === 1) return date;
    date.setDate(date.getDate() - (day - 1));
    return date;
}

/**
 * 获取日期该周的最后一天
 * @param date: Date
 * @returns {Date}
 */
export function endOfWeek(date) {
    date = new Date(date);
    const day = date.getDay();
    if(day === 0) return date;
    date.setDate(date.getDate() + (7 - day));
    return date;
}

/**
 * 获取日期该月的最后一天
 * @param date: Date
 * @returns {Date}
 */
export function endOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

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
 * @param dateLeft: Date
 * @param dateRight: Date
 * @returns {number}
 */
export function diffSeconds(dateLeft, dateRight) {
    return (dateLeft - dateRight) / divisors.seconds;
}

/**
 * 求2个日期分钟数之差
 * @param dateLeft: Date
 * @param dateRight: Date
 * @returns {number}
 */
export function diffMinutes(dateLeft, dateRight) {
    return (dateLeft - dateRight) / divisors.minutes;
}

/**
 * 求2个日期小时数之差
 * @param dateLeft: Date
 * @param dateRight: Date
 * @returns {number}
 */
export function diffHours(dateLeft, dateRight) {
    return (dateLeft - dateRight) / divisors.hours;
}

/**
 * 求2个日期天数之差
 * @param dateLeft: Date
 * @param dateRight: Date
 * @returns {number}
 */
export function diffDays(dateLeft, dateRight) {
    return (dateLeft - dateRight) / divisors.days;
}

/**
 * 求2个日期周数之差
 * @param dateLeft: Date
 * @param dateRight: Date
 * @returns {number}
 */
export function diffWeeks(dateLeft, dateRight) {
    return diffDays(dateLeft, dateRight) / 7;
}

/**
 * 求2个日期月数之差
 * @param dateLeft: Date
 * @param dateRight: Date
 * @returns {number}
 */
export function diffMonth(dateLeft, dateRight) {
    let eom, ret;
    ret = (dateLeft.getFullYear() - dateRight.getFullYear()) * 12;
    ret += dateLeft.getMonth() - dateRight.getMonth();
    eom = endOfMonth(dateRight).getDate();
    ret += (dateLeft.getDate() / eom) - (dateRight.getDate() / eom);
    return ret;
}

/**
 * 求2个日期年份之差
 * @param dateLeft: Date
 * @param dateRight: Date
 * @returns {number}
 */
export function diffYears(dateLeft, dateRight) {
    let ret = dateLeft.getFullYear() - dateRight.getFullYear();
    ret += (dayOfYear(dateLeft) - dayOfYear(dateRight)) / daysInYear(dateRight);
    return ret;
}

/**
 * 构造日历
 * @param year
 * @param month
 * @returns {[]}
 */
export function createCalendar(year, month) {
    const ROW_COUNT = 6, COL_COUNT = 7,
        TOTAL_COUNT = ROW_COUNT * COL_COUNT;  // 共 6 * 7 = 42
    let currentCount = 0;
    const calendar = [];
    function addCalendar(item, unShift = false) {
        if(currentCount % COL_COUNT === 0) {
            unShift ? calendar.unshift([item]) : calendar.push([item]);
        } else {
            unShift ? calendar[0].unshift(item) : calendar[calendar.length - 1].push(item);
        }
        currentCount++;
    }
    // 构造该月历的第一天 最后一天
    const firstDay = new Date(createDateStr({YYYY: year, MM: month}));

    // 向前补全第一行在1号前的日期
    const loopDay = new Date(firstDay);
    while(loopDay.getDay() !== 1) {
        loopDay.setDate(loopDay.getDate() - 1);
        addCalendar({
            date: loopDay.getDate(),
            year: loopDay.getFullYear(),
            month: loopDay.getMonth() + 1,
            day: loopDay.getDay(),
            dayNum: loopDay.getDay() || 7,
            isPrevMonth: true,
            isNextMonth: false,
        }, true);
    }
    // reset -01
    loopDay.setTime(firstDay.getTime());

    while (currentCount < TOTAL_COUNT) {
        const _year = loopDay.getFullYear(),
            _month = loopDay.getMonth() + 1;
        addCalendar({
            date: loopDay.getDate(),
            year: _year,
            month: _month,
            day: loopDay.getDay(),
            dayNum: loopDay.getDay() || 7,
            isPrevMonth: (_year === year && _month < month) || (_year < year),
            isNextMonth: (_year === year && _month > month) || (_year > year),
        });
        loopDay.setDate(loopDay.getDate() + 1);
    }
    return calendar;
}

/**
 * 获取10年期
 * @param year
 */
export function getDecades(year) {
    const decades = [];

    const lastYear = ((year / 10) | 0) * 10 + 9;
    let loopYear = lastYear - 9;

    while (loopYear <= lastYear) {
        decades.push(loopYear);
        loopYear++;
    }
    return decades;
}

/**
 * 构造10年期表格 4 * 3
 * @param year
 * @param isPad: 是否补全到 12 项
 */
export function createDecadeTable(year, isPad = true) {
    const COL_COUNT = 3;
    const decadeTable = [];
    let currentCount = 0;
    function addDecade(item, unShift = false) {
        if(currentCount % COL_COUNT === 0) {
            unShift ? decadeTable.unshift([item]) : decadeTable.push([item]);
        } else {
            unShift ? decadeTable[0].unshift(item) : decadeTable[decadeTable.length - 1].push(item);
        }
        currentCount++;
    }

    const decades = getDecades(year);
    const firstYear = decades[0],
        lastYear = decades[decades.length - 1];

    if(isPad) {
        // 插入前一个10年期的最后一项
        addDecade({
            year: firstYear - 1,
            isPrevDecade: true,
            isNextDecade: false,
            isIncluded: firstYear - 1 === year,
        });
    }

    decades.forEach(item => {
        addDecade({
            year: item,
            isPrevDecade: false,
            isNextDecade: false,
            isIncluded: item === year,
        });
    });

    if(isPad) {
        // 插入前一个10年期的最后一项
        addDecade({
            year: lastYear + 1,
            isPrevDecade: false,
            isNextDecade: true,
            isIncluded: lastYear + 1 === year,
        });
    }

    return decadeTable;
}

/**
 * 获取一个世纪年份
 * @param year
 */
export function getCenturies(year) {
    const lastYear = ((year / 100) | 0) * 100 + 99;
    let loopYear = lastYear - 99;
    const centuries = [];
    while (loopYear <= lastYear) {
        centuries.push(loopYear);
        loopYear++;
    }

    return centuries;
}

/**
 * 构造世纪表格 4 * 3
 * @param year
 * @param isPad
 * @returns {[]}
 */
export function createCenturyTable(year, isPad = true) {
    const COL_COUNT = 3;
    const centuryTable = [];
    let currentCount = 0;
    function addCentury(item, unShift = false) {
        if(currentCount % COL_COUNT === 0) {
            unShift ? centuryTable.unshift([item]) : centuryTable.push([item]);
        } else {
            unShift ? centuryTable[0].unshift(item) : centuryTable[centuryTable.length - 1].push(item);
        }
        currentCount++;
    }

    const centuries = getCenturies(year),
        firstYear = centuries[0],
        lastYear = centuries[centuries.length - 1];

    if(isPad) {
        // 插入前一个世纪最后一项
        addCentury({
            from: firstYear - 10,
            to: firstYear - 1,
            isIncluded: false,
            isPrevCentury: true,
            isNextCentury: false,
        });
    }

    let index = 0, len = centuries.length;
    while (index < len) {
        const fromYear = centuries[index],
            toYear = centuries[index + 9];
        addCentury({
            from: fromYear,
            to: toYear,
            isIncluded: fromYear <= year && toYear >= year,
            isPrevCentury: false,
            isNextCentury: false,
        });
        index += 10;
    }

    if(isPad) {
        // 插入下一个世纪第一项
        addCentury({
            from: lastYear + 1,
            to: lastYear + 10,
            isIncluded: false,
            isPrevCentury: false,
            isNextCentury: true,
        });
    }

    return centuryTable;
}