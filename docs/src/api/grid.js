export const rowProps = [
    {
        param: 'gutter',
        des: '栅格间隔',
        type: 'string / number',
        option: '--',
        default: '--',
    },
    {
        param: 'type',
        des: '布局模式，可选 flex，现代浏览器下有效',
        type: 'string',
        option: '--',
        default: '--',
    },
    {
        param: 'justify',
        des: 'flex 布局下的水平排列方式',
        type: 'string',
        option: '--',
        default: '--',
    },
    {
        param: 'align',
        des: 'flex 布局下的垂直排列方式',
        type: 'string',
        option: '--',
        default: '--',
    }
]

export const colProps = [
    {
        param: 'span',
        des: '栅格占据的列数',
        type: 'string / number',
        option: '--',
        default: '--',
    },
    {
        param: 'offset',
        des: '栅格左侧的间隔格数',
        type: 'string / number',
        option: '--',
        default: '--',
    },
    {
        param: 'pull',
        des: '栅格向左移动格数',
        type: 'string / number',
        option: '--',
        default: '--',
    },
    {
        param: 'push',
        des: '栅格向右移动格数',
        type: 'string / number',
        option: '--',
        default: '--',
    },
    {
        param: 'order',
        des: '栅格顺序，flex 布局模式下有效',
        type: 'string / number',
        option: '--',
        default: '--',
    },
    {
        param: 'xs',
        des: '<768px 响应式栅格数或者栅格属性对象',
        type: 'string / number / object(例如： {span: 4, offset: 4})',
        option: '--',
        default: '--',
    },
    {
        param: 'sm',
        des: '≥768px 响应式栅格数或者栅格属性对象',
        type: 'string / number / object(例如： {span: 4, offset: 4})',
        option: '--',
        default: '--',
    },
    {
        param: 'md',
        des: '≥992px 响应式栅格数或者栅格属性对象',
        type: 'string / number / object(例如： {span: 4, offset: 4})',
        option: '--',
        default: '--',
    },
    {
        param: 'lg',
        des: '≥1200px 响应式栅格数或者栅格属性对象',
        type: 'string / number / object(例如： {span: 4, offset: 4})',
        option: '--',
        default: '--',
    },
    {
        param: 'xl',
        des: '≥1920px 响应式栅格数或者栅格属性对象',
        type: 'string / number / object(例如： {span: 4, offset: 4})',
        option: '--',
        default: '--',
    }
]