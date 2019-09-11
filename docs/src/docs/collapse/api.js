export const CollapseProps = [
    {
        param: 'value',
        des: '当前激活的面板',
        type: 'string / array',
        option: '--',
        default: '--',
    },
    {
        param: 'defaultValue',
        des: '默认激活的面板',
        type: 'string / array',
        option: '--',
        default: '--',
    },
    {
        param: 'accordion',
        des: '是否手风琴模式',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'iconLeft',
        des: '是否箭头置左',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'unmountOnExit',
        des: '隐藏后是否销毁DOM',
        type: 'boolean',
        option: '--',
        default: 'false',
    }
]

export const collapseEvents = [
    {
        name: 'onChange',
        des: '当前激活面板改变时触发，返回数组',
        callback: '(activeNames: array)',
    }
]

export const CollapseItemProps = [
    {
        param: 'title',
        des: '面板标题',
        type: 'string',
        option: '--',
        default: '--',
    },
    {
        param: 'name',
        des: '唯一标志符',
        type: 'string / number',
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
        param: 'expandIcon',
        des: '自定义切换图标',
        type: 'ReactNode',
        option: '--',
        default: '<Icon type={\'right\'} />',
    },
    {
        param: 'unmountOnExit',
        des: '销毁折叠后隐藏的面板',
        type: 'boolean',
        option: '--',
        default: 'false',
    }
]