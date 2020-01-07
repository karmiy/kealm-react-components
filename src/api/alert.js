export const alertProps = [
    {
        param: 'type',
        des: '类型',
        type: 'string',
        option: 'success / warning / info / error',
        default: 'info',
    },
    {
        param: 'effect',
        des: '选择提供的主题',
        type: 'string',
        option: 'light / dark',
        default: 'light',
    },
    {
        param: 'title',
        des: '标题',
        type: 'string / ReactNode',
        option: '--',
        default: '--',
    },
    {
        param: 'description',
        des: '辅助性文字',
        type: 'string / ReactNode',
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
        param: 'closeText',
        des: '自定义关闭按钮',
        type: 'string / ReactNode',
        option: '--',
        default: '--',
    },
    {
        param: 'showIcon',
        des: '是否显示辅助图标',
        type: 'boolean',
        option: '--',
        default: 'false',
    }
]

export const alertEvents = [
    {
        name: 'onClose',
        des: '关闭时触发的回调函数',
        callback: '(e: Event) => void',
    },
    {
        name: 'afterClose',
        des: '关闭动画结束后触发的回调函数',
        callback: '() => void',
    }
]