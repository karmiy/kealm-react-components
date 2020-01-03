export const messageMethodProps = [
    {
        param: 'content',
        des: '提示内容',
        type: 'string / ReactNode / config',
        option: '--',
        default: '--',
    },
    {
        param: 'duration',
        des: '自动关闭的延时，单位秒。设为 0 时不自动关闭',
        type: 'number',
        option: '--',
        default: '3000',
    }
]

export const messageMethodEvents = [
    {
        name: 'onClose',
        des: '关闭时触发的回调函数',
        callback: '() => void',
    }
]