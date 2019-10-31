export const tagProps = [
    {
        param: 'type',
        des: '类型',
        type: 'string',
        option: 'success / info / warning / danger',
        default: '--',
    },
    {
        param: 'color',
        des: '背景色',
        type: 'string',
        option: '--',
        default: '--',
    },
    {
        param: 'font',
        des: '字体色',
        type: 'string',
        option: '--',
        default: '--',
    },
    {
        param: 'closable',
        des: '是否可关闭',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'effect',
        des: '主题',
        type: 'string',
        option: 'dark / light / plain',
        default: 'light',
    },
    {
        param: 'size',
        des: '标签尺寸',
        type: 'string',
        option: 'large / small',
        default: '--',
    }
]

export const tagEvents = [
    {
        name: 'onClose',
        des: '关闭 Tag 时触发的事件',
        callback: '(tag) => void',
    }
]