export const buttonProps = [
    {
        param: 'type',
        des: '类型',
        type: 'string',
        option: 'primary / success / warning / danger / info / text',
        default: '--',
    },
    {
        param: 'plain',
        des: '是否朴素按钮',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'round',
        des: '是否圆角按钮',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'circle',
        des: '是否圆形按钮',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'icon',
        des: '图标类名',
        type: 'string',
        option: {
            link: '/component/icon',
            info: 'Icon组件',
        },
        default: '--',
    },
    {
        param: 'iconRight',
        des: '是否图标置右',
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
        param: 'loading',
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

export const buttonEvents = [
    {
        name: 'click',
        des: '点击事件',
        callback: '--',
    }
]