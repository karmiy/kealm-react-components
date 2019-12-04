export const timePickerProps = [
    {
        param: 'defaultOpenValue',
        des: '面板打开时默认选中的值',
        type: 'Date',
        option: '--',
        default: '--',
    },
    {
        param: 'defaultValue',
        des: '默认时间',
        type: 'Date',
        option: '--',
        default: '--',
    },
    {
        param: 'value',
        des: '当前时间',
        type: 'Date',
        option: '--',
        default: '--',
    },
    {
        param: 'defaultVisible',
        des: '面板是否默认打开',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'visible',
        des: '用于手动控制面板打开关闭',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'disabled',
        des: '禁用全部操作',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'placeholder',
        des: '未选择时间时输入框显示的文本信息',
        type: 'string',
        option: '--',
        default: '请选择时间',
    },
    {
        param: 'allowClear',
        des: '是否展示清除按钮',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'size',
        des: '时间选择器大小',
        type: 'string',
        option: 'large / small',
        default: '--',
    },
    {
        param: 'format',
        des: '展示的时间格式，可以在 HH、hh、mm、ss 4个项中自定义格式，会被用于正则匹配',
        type: 'string',
        option: '--',
        default: 'HH:mm:ss',
    },
    {
        param: 'hourStep',
        des: '小时选项间隔',
        type: 'number',
        option: '--',
        default: '1',
    },
    {
        param: 'minuteStep',
        des: '分钟选项间隔',
        type: 'number',
        option: '--',
        default: '1',
    },
    {
        param: 'secondStep',
        des: '秒选项间隔',
        type: 'number',
        option: '--',
        default: '1',
    },
    {
        param: 'disabledHours',
        des: '禁止选择部分小时选项',
        type: '() => array',
        option: '--',
        default: '--',
    },
    {
        param: 'disabledMinutes',
        des: '禁止选择部分分钟选项',
        type: '(selectedHour) => array',
        option: '--',
        default: '--',
    },
    {
        param: 'disabledSeconds',
        des: '禁止选择部分秒选项',
        type: '(selectedHour, selectedMinute) => array',
        option: '--',
        default: '--',
    },
    {
        param: 'hideDisabledOptions',
        des: '隐藏禁止选择的选项',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'addon',
        des: '选择框底部显示自定义的内容',
        type: '(value: Date, setValue) => ReactNode',
        option: '--',
        default: '--',
    }
]

export const timePickerEvents = [
    {
        name: 'onChange',
        des: '时间发生变化的回调',
        callback: '(value: Date)',
    },
    {
        name: 'onVisibleChange',
        des: '面板打开/关闭时的回调',
        callback: '(visible) => void',
    }
]
