export const inputNumberProps = [
    {
        param: 'defaultValue',
        des: '初始值',
        type: 'number',
        option: '--',
        default: '--',
    },
    {
        param: 'value',
        des: '当前值',
        type: 'number',
        option: '--',
        default: '--',
    },
    {
        param: 'max',
        des: '最大值',
        type: 'number',
        option: '--',
        default: 'Infinity',
    },
    {
        param: 'min',
        des: '最小值',
        type: 'number',
        option: '--',
        default: '-Infinity',
    },
    {
        param: 'step',
        des: '每次改变步数，可以为小数',
        type: 'number',
        option: '--',
        default: '1',
    },
    {
        param: 'disabled',
        des: '禁用',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'precision',
        des: '数值精度，不可与 formatter 格式化混用',
        type: 'number',
        option: '--',
        default: '--',
    },
    {
        param: 'size',
        des: '输入框大小',
        type: 'string',
        option: 'large / small',
        default: '--',
    },
    {
        param: 'controlsRight',
        des: '传统数字输入框样式，控制按钮位于右侧',
        type: 'boolean',
        option: '--',
        default: 'true',
    },
    {
        param: 'formatter',
        des: '指定输入框展示值的格式',
        type: '(value: string) => string',
        option: '--',
        default: '--',
    },
    {
        param: 'parser',
        des: '指定从 formatter 里转换回数字的方式，和 formatter 搭配使用',
        type: '(value: string) => string',
        option: '--',
        default: '--',
    }
]

export const inputNumberEvents = [
    {
        name: 'onChange',
        des: '变化回调',
        callback: '(value: number)',
    }
]