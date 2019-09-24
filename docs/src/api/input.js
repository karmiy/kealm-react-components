export const inputProps = [
    {
        param: 'defaultValue',
        des: '默认值',
        type: 'string',
        option: '--',
        default: '--',
    },
    {
        param: 'value',
        des: '输入值',
        type: 'string',
        option: '--',
        default: '--',
    },
    {
        param: 'placeholder',
        des: '输入框占位文本',
        type: 'string',
        option: '--',
        default: '--',
    },
    {
        param: 'maxLength',
        des: '原生属性，最大输入长度',
        type: 'number',
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
        param: 'allowClear',
        des: '是否允许清空',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'prefix',
        des: '输入框头部图标',
        type: 'string / ReactNode',
        option: '--',
        default: '--',
    },
    {
        param: 'suffix',
        des: '输入框尾部图标',
        type: 'string / ReactNode',
        option: '--',
        default: '--',
    },
    {
        param: 'prepend',
        des: '是否加载状态',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'active',
        des: '是否激活状态',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'size',
        des: '尺寸',
        type: 'string',
        option: 'large / small',
        default: '--',
    },
    {
        param: 'nativeType',
        des: '原生type',
        type: 'string',
        option: 'button / submit / reset',
        default: 'button'
    }
]

export const inputEvents = [
    {
        name: 'click',
        des: '点击事件',
        callback: '--',
    }
]