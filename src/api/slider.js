export const sliderProps = [
    {
        param: 'defaultValue',
        des: '设置初始取值。当 range 为 false 时，使用 number，否则用 [number, number]',
        type: 'number / number[]',
        option: '--',
        default: '--',
    },
    {
        param: 'value',
        des: '设置当前取值。当 range 为 false 时，使用 number，否则用 [number, number]',
        type: 'number / number[]',
        option: '--',
        default: '--',
    },
    {
        param: 'defaultTooltipVisible',
        des: '默认打开 Tooltip',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'openTooltip',
        des: '是否开启 Tooltip',
        type: 'boolean',
        option: '--',
        default: 'true',
    },
    {
        param: 'tipFormatter',
        des: '格式化 Tooltip 提示信息',
        type: 'function',
        option: '--',
        default: '--',
    },
    {
        param: 'disabled',
        des: '是否禁用',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'max',
        des: '最大值',
        type: 'number',
        option: '--',
        default: '0',
    },
    {
        param: 'min',
        des: '最小值',
        type: 'number',
        option: '--',
        default: '0',
    },
    {
        param: 'step',
        des: '步长',
        type: 'number',
        option: '--',
        default: '1',
    },
    {
        param: 'showStops',
        des: '是否显示间断点',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'completeStops',
        des: '间断点是否完整显示，默认已划过的区域不显示出间断点',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'range',
        des: '是否为范围选择',
        type: 'boolean',
        option: '--',
        default: 'false'
    },
    {
        param: 'vertical',
        des: '是否竖向模式',
        type: 'boolean',
        option: '--',
        default: 'false'
    },
    {
        param: 'height',
        des: 'Slider 高度，竖向模式时必填',
        type: 'number',
        option: '--',
        default: '--'
    },
    {
        param: 'marks',
        des: '刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式',
        type: '{ number: string / ReactNode } or { number: { style: object, label: string / ReactNode } }',
        option: '--',
        default: '--'
    }
]

export const sliderEvents = [
    {
        name: 'onChange',
        des: '当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入',
        callback: '(value)',
    }
]