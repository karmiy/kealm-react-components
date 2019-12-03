export const selectProps = [
    {
        param: 'defaultValue',
        des: '指定默认选中的条目',
        type: 'string / string[] / number / number[] / labeledValue / labeledValue[]',
        option: '--',
        default: '--',
    },
    {
        param: 'value',
        des: '选中值',
        type: 'string / string[] / number / number[] / labeledValue / labeledValue[]',
        option: '--',
        default: '--',
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
        param: 'placeholder',
        des: '选择框默认文字',
        type: 'string',
        option: '--',
        default: '请选择',
    },
    {
        param: 'clearable',
        des: '是否可清除选项',
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
        param: 'multiple',
        des: '是否开启多选模式',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'collapseTags',
        des: '多选时是否将选中值按文字的形式展示',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'emptyFilterContent',
        des: '当过滤后的列表数据为空时显示的文本',
        type: 'string / ReactNode',
        option: '--',
        default: '无匹配内容',
    },
    {
        param: 'emptyContent',
        des: '下拉选择器可用选项为空时显示的文本',
        type: 'string / ReactNode',
        option: '--',
        default: '无数据',
    },
    {
        param: 'filterable',
        des: '是否可搜索',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'filterMethod',
        des: '搜索过滤方法',
        type: '(value, label, inputValue) => boolean',
        option: '--',
        default: '(value, label, inputValue) => label.includes(inputValue)',
    },
    {
        param: 'loading',
        des: '是否正在从远程获取数据',
        type: 'boolean',
        option: '--',
        default: 'false'
    },
    {
        param: 'loadingContent',
        des: '加载时显示的文本',
        type: 'string / ReactNode',
        option: '--',
        default: '<Icon type={\'loading\'} /> 加载中'
    },
    {
        param: 'remote',
        des: '是否为远程搜索',
        type: 'boolean',
        option: '--',
        default: 'false'
    },
    {
        param: 'labelInValue',
        des: '是否把每个选项的 label 包装到 value 中，将会在 onChange 中获得 labeledValue 对象',
        type: 'boolean',
        option: '--',
        default: 'false'
    },
    {
        param: 'selectorClassName',
        des: '选择器类名，作用于触发框，若需要给弹出框添加类名可用 className',
        type: 'string',
        option: '--',
        default: '--',
    },
    {
        param: 'selectorStyle',
        des: '选择器样式，作用于触发框，若需要给弹出框添加样式可用 style',
        type: 'object',
        option: '--',
        default: '--',
    },
    {
        param: 'maxRows',
        des: '最大显示的列表条数',
        type: 'number',
        option: '--',
        default: '6'
    },
    {
        param: 'virtualScroll',
        des: '是否开启列表性能优化，通常在列表数据量过多影响性能时开启，不支持分组',
        type: 'boolean',
        option: '--',
        default: 'false'
    }
]

export const selectEvents = [
    {
        name: 'onChange',
        des: '选中 option 时触发',
        callback: '(value / value[] / option / options[])',
    },
    {
        name: 'onVisibleChange',
        des: '显示隐藏的回调',
        callback: '(visible) => void',
    },
    {
        name: 'onClear',
        des: '点击清空图标时触发',
        callback: '(e: Event)',
    },
    {
        name: 'onRemote',
        des: '远程搜索方法，开启 remote 配置后，在输入框编辑时触发',
        callback: '(inputValue) => void',
    }
]

export const optionProps = [
    {
        param: 'value',
        des: '选中值',
        type: 'string / number',
        option: '--',
        default: '--',
    },
    {
        param: 'label',
        des: '选项绑定文本，用于在选择时呈现于输入框中',
        type: 'string',
        option: '--',
        default: '--',
    },
    {
        param: 'disabled',
        des: '是否禁用',
        type: 'boolean',
        option: '--',
        default: 'false',
    }
]

export const groupProps = [
    {
        param: 'label',
        des: '分组的组名',
        type: 'string',
        option: '--',
        default: '--',
    }
]