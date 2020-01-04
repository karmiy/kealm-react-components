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
    },
    {
        param: 'icon',
        des: '自定义图标',
        type: 'ReactNode',
        option: '--',
        default: '--',
    },
    {
        param: 'key',
        des: '当前提示的唯一标志',
        type: 'string',
        option: '--',
        default: '--',
    }
]

export const messageMethodEvents = [
    {
        name: 'onMount',
        des: '组件挂载时触发',
        callback: '(el: HTMLElement) => void',
    },
    {
        name: 'onClose',
        des: '关闭时触发的回调函数',
        callback: '() => void',
    }
]