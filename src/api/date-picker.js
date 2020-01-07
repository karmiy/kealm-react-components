export const commonProps = [
    {
        param: 'defaultValue',
        des: '默认日期，在 RangePicker 中为数组类型',
        type: 'Date / Date[]',
        option: '--',
        default: '--',
    },
    {
        param: 'defaultPickerValue',
        des: '默认面板日期，控制默认打开的区域，在 RangePicker 中为数组类型',
        type: 'Date / Date[]',
        option: '--',
        default: '--',
    },
    {
        param: 'value',
        des: '日期，在 RangePicker 中为数组类型',
        type: 'Date / Date[]',
        option: '--',
        default: '--',
    },
    {
        param: 'visible',
        des: '用于手动控制面板打开关闭',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'pickerClassName',
        des: '选择器类名，作用于触发框，若需要给弹出框添加类名可用 className',
        type: 'string',
        option: '--',
        default: '--',
    },
    {
        param: 'pickerStyle',
        des: '选择器样式，作用于触发框，若需要给弹出框添加样式可用 style',
        type: 'object',
        option: '--',
        default: '--',
    },
    {
        param: 'disabled',
        des: '禁用',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'allowClear',
        des: '是否显示清除按钮',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'size',
        des: '输入框大小，large 高度为 40px，small 为 24px，默认是 32px',
        type: 'string',
        option: 'large / small',
        default: '--',
    },
    {
        param: 'disabledDate',
        des: '不可选择的日期',
        type: '(currentDate: Date) => boolean',
        option: '--',
        default: '--',
    },
    {
        param: 'renderExtraFooter',
        des: '在面板中添加额外的页脚',
        type: '(value: Date, setValue) => ReactNode',
        option: '--',
        default: '--',
    },
    {
        param: 'dateRender',
        des: '自定义日期单元格的内容',
        type: '(currentDate: Date) => ReactNode',
        option: '--',
        default: '--',
    },
    {
        param: 'suffixIcon',
        des: '自定义的选择框后缀图标',
        type: 'string / ReactNode',
        option: '--',
        default: '<Icon type={\'calendar\'} />',
    }
]

export const commonEvents = [
    {
        name: 'onChange',
        des: '时间发生变化的回调，在 RangePicker 中参数为数组类型',
        callback: '(date: Date, dateStr: string) => void / (date: Date[], dateStr: string[]) => void',
    },
    {
        name: 'onPanelChange',
        des: '日期面板变化时的回调，在 RangePicker 中参数为数组类型',
        callback: '(date: Date) => void / (date: Date[]) => void',
    },
    {
        name: 'onVisibleChange',
        des: '面板打开/关闭时的回调',
        callback: '(visible) => void',
    }
]

export const datePickerProps = [
    {
        param: 'format',
        des: '设置日期格式',
        type: 'string',
        option: '--',
        default: 'yyyy-MM-dd',
    },
    {
        param: 'placeholder',
        des: '输入框提示文字',
        type: 'string',
        option: '--',
        default: '请选择日期',
    },
    {
        param: 'showTime',
        des: '增加时间选择功能',
        type: 'boolean / object',
        option: {
            link: '/component/time-picker',
            info: 'TimePicker Options',
        },
        default: 'false',
    },
    {
        param: 'showToday',
        des: '是否展示“今天”与“此刻”按钮',
        type: 'boolean',
        option: '--',
        default: 'true',
    },
    {
        param: 'disabledTime',
        des: '不可选择的时间',
        type: '(currentDate: Date) => boolean',
        option: '--',
        default: '--',
    }
]

export const datePickerEvents = [
    {
        name: 'onOk',
        des: '点击确定按钮的回调',
        callback: '() => void',
    }
]

export const monthPickerProps = [
    {
        param: 'format',
        des: '设置日期格式',
        type: 'string',
        option: '--',
        default: 'yyyy-MM',
    },
    {
        param: 'placeholder',
        des: '输入框提示文字',
        type: 'string',
        option: '--',
        default: '请选择月份',
    }
]

export const weekPickerProps = [
    {
        param: 'format',
        des: '设置日期格式',
        type: 'string',
        option: '--',
        default: 'YYYY 第ww周',
    },
    {
        param: 'placeholder',
        des: '输入框提示文字',
        type: 'string',
        option: '--',
        default: '请选择周数',
    }
]

export const rangePickerProps = [
    {
        param: 'format',
        des: '设置日期格式',
        type: 'string',
        option: '--',
        default: 'yyyy-MM-dd',
    },
    {
        param: 'startPlaceholder',
        des: '左侧输入框提示文字',
        type: 'string',
        option: '--',
        default: '开始日期',
    },
    {
        param: 'endPlaceholder',
        des: '右侧输入框提示文字',
        type: 'string',
        option: '--',
        default: '结束日期',
    },
    {
        param: 'showTime',
        des: '增加时间选择功能',
        type: 'boolean / object',
        option: {
            link: '/component/time-picker',
            info: 'TimePicker Options',
        },
        default: 'false',
    },
    {
        param: 'disabledTime',
        des: '不可选择的时间',
        type: '(currentDate: Date) => boolean',
        option: '--',
        default: '--',
    },
    {
        param: 'separator',
        des: '设置分隔符',
        type: 'string / ReactNode',
        option: '--',
        default: '~',
    }
]

export const rangePickerEvents = [
    {
        name: 'onOk',
        des: '点击确定按钮的回调',
        callback: '() => void',
    }
]