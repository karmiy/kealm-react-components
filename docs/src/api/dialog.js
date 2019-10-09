export const dialogProps = [
    {
        param: 'visible',
        des: '对话框是否可见',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'title',
        des: '标题',
        type: 'string / ReactNode',
        option: '--',
        default: '--',
    },
    {
        param: 'bodyStyle',
        des: 'Dialog body 样式',
        type: 'object',
        option: '--',
        default: '--',
    },
    {
        param: 'destroyOnClose',
        des: '关闭时销毁 Mask 与 Dialog 元素',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'keyboard',
        des: '是否支持键盘 esc 关闭',
        type: 'boolean',
        option: '--',
        default: 'true',
    },
    {
        param: 'confirmLoading',
        des: '确定按钮 loading',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'mask',
        des: '是否展示遮罩',
        type: 'boolean',
        option: '--',
        default: 'true',
    },
    {
        param: 'maskClosable',
        des: '点击遮罩是否允许关闭',
        type: 'boolean',
        option: '--',
        default: 'true',
    },
    {
        param: 'maskClassName',
        des: '遮罩类名',
        type: 'string',
        option: '--',
        default: '--',
    },
    {
        param: 'wrapClassName',
        des: '对话框外层容器的类名',
        type: 'string',
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
        param: 'nativeType',
        des: '原生type',
        type: 'string',
        option: 'button / submit / reset',
        default: 'button'
    }
]

export const dialogEvents = [
    {
        name: 'click',
        des: '点击事件',
        callback: '--',
    }
]