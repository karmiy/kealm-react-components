export const commonProps = [
    {
        param: 'autoFocus',
        des: '是否默认聚焦',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
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
        param: 'minLength',
        des: '原生属性，最小输入长度',
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
]

export const commonEvents = [
    {
        name: 'onChange',
        des: '在 Input 值改变时触发',
        callback: '(e: Event)',
    },
    {
        name: '--',
        des: '支持原生input事件，如: onKeyDown onKeyUp onBlur onFocus onInput',
        callback: '(e: Event)',
    }
]

export const inputProps = [
    {
        param: 'allowClear',
        des: '是否允许清空',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'prefix',
        des: '输入框头部内容',
        type: 'string / ReactNode',
        option: '--',
        default: '--',
    },
    {
        param: 'suffix',
        des: '输入框尾部内容',
        type: 'string / ReactNode',
        option: '--',
        default: '--',
    },
    {
        param: 'prepend',
        des: '输入框前置内容',
        type: 'string / ReactNode',
        option: '--',
        default: '--',
    },
    {
        param: 'append',
        des: '输入框后置内容',
        type: 'string / ReactNode',
        option: '--',
        default: '--',
    },
    {
        param: 'size',
        des: '尺寸',
        type: 'string',
        option: 'large / small',
        default: '--',
    },
    {
        param: 'showLimitCount',
        des: '是否展示字数统计',
        type: 'boolean',
        option: '--',
        default: 'false',
    }
]


export const passwordProps = [
    {
        param: 'size',
        des: '尺寸',
        type: 'string',
        option: 'large / small',
        default: '--',
    },
    {
        param: 'showToggleIcon',
        des: '是否显示可视切换图标',
        type: 'boolean',
        option: '--',
        default: 'true',
    }
]

export const textareaProps = [
    {
        param: 'rows',
        des: '输入框行数',
        type: 'string / number',
        option: '--',
        default: '--',
    },
    {
        param: 'autosize',
        des: '自适应内容高度，可传入对象: { minRows: 2, maxRows: 6 }',
        type: 'boolean / object',
        option: '--',
        default: 'false',
    },
    {
        param: 'showLimitCount',
        des: '是否展示字数统计',
        type: 'boolean',
        option: '--',
        default: 'false',
    }
]

export const searchProps = [
    {
        param: 'size',
        des: '尺寸',
        type: 'string',
        option: 'large / small',
        default: '--',
    },
    {
        param: 'enterButton',
        des: '是否有确认按钮，可设为按钮文字',
        type: 'boolean / ReactNode',
        option: '--',
        default: 'false',
    },
]

export const searchEvents = [
    {
        name: 'onSearch',
        des: '点击搜索或按下回车键时的回调',
        callback: '(e: Event)',
    },
]