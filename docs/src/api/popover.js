export const popoverProps = [
    {
        param: 'trigger',
        des: '触发方式',
        type: 'string',
        option: 'click / focus / hover / manual',
        default: 'click',
    },
    {
        param: 'defaultVisible',
        des: '默认是否显示',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'visible',
        des: '用于手动控制浮层显示隐藏',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'title',
        des: '标题',
        type: 'string / ReactNode',
        option: '--',
        default: '--',
    },
    {
        param: 'content',
        des: '显示的内容',
        type: 'string / ReactNode',
        option: '--',
        default: '--',
    },
    {
        param: 'width',
        des: '宽度',
        type: 'number',
        option: '--',
        default: '--',
    },
    {
        param: 'placement',
        des: '出现的位置',
        type: 'string',
        option: 'top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end',
        default: 'top',
    },
    {
        param: 'offset',
        des: '出现位置的偏移量，可以是如 \'20, 30\' 表示水平,垂直，更多表示方法参考 popper.js',
        type: 'string',
        option: '--',
        default: '0',
    },
    {
        param: 'showArrow',
        des: '是否显示箭头',
        type: 'boolean',
        option: '--',
        default: 'true',
    },
    {
        param: 'openDelay',
        des: '触发方式为 hover 时的显示延迟，单位为毫秒',
        type: 'number',
        option: '--',
        default: '0',
    },
    {
        param: 'closeDelay',
        des: '触发方式为 hover 时的隐藏延迟，单位为毫秒',
        type: 'number',
        option: '--',
        default: '200',
    }
]

export const popoverEvents = [
    {
        name: 'onVisibleChange',
        des: '显示隐藏的回调',
        callback: '(visible) => void',
    }
]