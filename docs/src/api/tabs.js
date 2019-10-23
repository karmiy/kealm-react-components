export const tabsProps = [
    {
        param: 'defaultValue',
        des: '初始化选中面板的 name',
        type: 'string / number',
        option: '--',
        default: '第一个面板',
    },
    {
        param: 'value',
        des: '当前激活 tab 面板的 name',
        type: 'string / number',
        option: '--',
        default: '--',
    },
    {
        param: 'headerClass',
        des: 'header 区域类名',
        type: 'string',
        option: '--',
        default: '--',
    },
    {
        param: 'contentClass',
        des: 'content 区域类名',
        type: 'string',
        option: '--',
        default: '--',
    },
    {
        param: 'wrapClass',
        des: 'wrap 区域类名，通常用于在垂直方向时限制导航条高度',
        type: 'string',
        option: '--',
        default: '--',
    },
    {
        param: 'headerStyle',
        des: 'header 区域样式',
        type: 'object',
        option: '--',
        default: '--',
    },
    {
        param: 'contentStyle',
        des: 'content 区域样式',
        type: 'object',
        option: '--',
        default: '--',
    },
    {
        param: 'wrapStyle',
        des: 'wrap 区域样式，通常用于在垂直方向时限制导航条高度',
        type: 'object',
        option: '--',
        default: '--',
    },
    {
        param: 'position',
        des: '选项卡所在位置',
        type: 'string',
        option: 'top / right / bottom / left',
        default: 'top',
    },
    {
        param: 'type',
        des: '风格类型',
        type: 'string',
        option: 'card / border-card',
        default: '--',
    },
    {
        param: 'closable',
        des: '标签是否可关闭',
        type: 'boolean',
        option: '--',
        default: 'false',
    }
]

export const tabsEvents = [
    {
        name: 'onClick',
        des: '点击事件',
        callback: '(e: Event, activeName)',
    },
    {
        name: 'onChange',
        des: '切换面板的回调',
        callback: '(activeName)',
    },
    {
        name: 'onRemove',
        des: '点击 tab 移除按钮后触发',
        callback: '(activeName)',
    }
]

export const tabPaneProps = [
    {
        param: 'name',
        des: '与选项卡绑定值 value 对应的标识符，表示选项卡别名',
        type: 'string / number',
        option: '--',
        default: '--',
    },
    {
        param: 'label',
        des: '选项卡标题',
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
    },
    {
        param: 'closable',
        des: '标签是否可关闭',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'lazy',
        des: '标签是否延迟渲染，设为 true 后，标签内容会在第一次选中时才去执行渲染',
        type: 'boolean',
        option: '--',
        default: 'false',
    }
]