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