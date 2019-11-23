export const checkboxProps = [
    {
        param: 'autoFocus',
        des: '是否默认聚焦',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
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
        param: 'value',
        des: '根据 value 进行比较，判断是否选中',
        type: 'any',
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
        param: 'name',
        des: 'input [ type = "checkbox" ] 的 name属性',
        type: 'string',
        option: '--',
        default: '--',
    },
    {
        param: 'indeterminate',
        des: '设置 indeterminate 状态，只负责样式控制',
        type: 'boolean',
        option: '--',
        default: 'false',
    }
]

export const checkboxEvents = [
    {
        name: 'onChange',
        des: '选项变化时的回调函数',
        callback: '(e: Event, value)',
    }
]

export const checkboxGroupProps = [
    {
        param: 'defaultValue',
        des: '默认选中的值',
        type: 'array',
        option: '--',
        default: '--',
    },
    {
        param: 'value',
        des: '用于设置当前选中的值',
        type: 'array',
        option: '--',
        default: '--',
    },
    {
        param: 'disabled',
        des: '子单选框是否禁用',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'name',
        des: '子单选框中 input [ type = "checkbox" ] 的 name属性',
        type: 'string',
        option: '--',
        default: '--',
    },
    {
        param: 'size',
        des: '子单选框大小，只对按钮样式生效',
        type: 'string',
        option: 'large / small',
        default: '--',
    },
    {
        param: 'solid',
        des: '子单选框填色风格，只对按钮样式生效',
        type: 'boolean',
        option: '--',
        default: 'false',
    }
]

export const checkboxGroupEvents = [
    {
        name: 'onChange',
        des: '选项变化时的回调函数',
        callback: '(checkedValue: array)',
    }
]

export const checkboxButtonProps = [
    {
        param: 'autoFocus',
        des: '是否默认聚焦',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
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
        param: 'value',
        des: '根据 value 进行比较，判断是否选中',
        type: 'any',
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
        param: 'name',
        des: 'input [ type = "checkbox" ] 的 name属性',
        type: 'string',
        option: '--',
        default: '--',
    },
    {
        param: 'size',
        des: '按钮大小',
        type: 'string',
        option: 'large / small',
        default: '--',
    },
    {
        param: 'solid',
        des: '是否填色风格',
        type: 'boolean',
        option: '--',
        default: 'false',
    }
]

export const checkboxButtonEvents = [
    ...checkboxEvents
]