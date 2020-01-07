export const switchProps = [
    {
        param: 'defaultChecked',
        des: '初始是否选中',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'checked',
        des: '指定当前是否选中',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'disabled',
        des: '是否禁用',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'activeColor',
        des: '打开时的背景色',
        type: 'string',
        option: '--',
        default: '#1394ff',
    },
    {
        param: 'inActiveColor',
        des: '关闭时的背景色',
        type: 'string',
        option: '--',
        default: '#bfbfbf',
    },
    {
        param: 'activeContent',
        des: '选中时的内容',
        type: 'string / ReactNode',
        option: '--',
        default: '--',
    },
    {
        param: 'inActiveContent',
        des: '非选中时的内容',
        type: 'string / ReactNode',
        option: '--',
        default: '--',
    },
    {
        param: 'loading',
        des: '加载中的开关',
        type: 'boolean',
        option: '--',
        default: 'false',
    }
]

export const switchEvents = [
    {
        name: 'onChange',
        des: '变化时回调函数',
        callback: '(checked: boolean, e: Event) => void',
    }
]