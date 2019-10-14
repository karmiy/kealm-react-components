export const stepsProps = [
    {
        param: 'current',
        des: '指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态',
        type: 'number',
        option: '--',
        default: '0',
    },
    {
        param: 'direction',
        des: '指定步骤条方向',
        type: 'string',
        option: 'horizontal / vertical',
        default: 'horizontal',
    },
    {
        param: 'size',
        des: '指定大小',
        type: 'string',
        option: 'default / small',
        default: 'default',
    },
    {
        param: 'status',
        des: '指定当前步骤的状态',
        type: 'string',
        option: 'wait / process / finish / error',
        default: '--',
    },
    {
        param: 'progressDot',
        des: '点状步骤条',
        type: 'boolean',
        option: '--',
        default: 'false',
    }
]

export const stepsEvents = [
    {
        name: 'onChange',
        des: '点击切换步骤时触发',
        callback: '(current) => void',
    }
]

export const stepProps = [
    {
        param: 'title',
        des: '标题',
        type: 'string / ReactNode',
        option: '--',
        default: '--',
    },
    {
        param: 'subTitle',
        des: '子标题',
        type: 'string / ReactNode',
        option: '--',
        default: '--',
    },
    {
        param: 'description',
        des: '步骤的详情描述',
        type: 'string / ReactNode',
        option: '--',
        default: '--',
    },
    {
        param: 'status',
        des: '指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态',
        type: 'string',
        option: 'wait / process / finish / error',
        default: '--',
    },
    {
        param: 'icon',
        des: '步骤图标的类型',
        type: 'ReactNode',
        option: {
            link: '/component/icon',
            info: 'Icon组件',
        },
        default: '--',
    }
]