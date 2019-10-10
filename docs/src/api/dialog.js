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
        param: 'closable',
        des: '是否显示右上角的关闭按钮',
        type: 'boolean',
        option: '--',
        default: 'true',
    },
    {
        param: 'closeIcon',
        des: '自定义关闭图标',
        type: 'ReactNode',
        option: '--',
        default: {
            link: '/component/icon',
            info: '<Icon type="close" />',
        },
    },
    {
        param: 'footer',
        des: '底部内容，当不需要默认底部按钮时，可以设为 footer={null}',
        type: 'string / ReactNode',
        option: '--',
        default: '确定取消按钮',
    },
    {
        param: 'okText',
        des: '确认按钮文字',
        type: 'string / ReactNode',
        option: '--',
        default: '确定 / 知道了(信息提示)',
    },
    {
        param: 'cancelText',
        des: '取消按钮文字',
        type: 'string / ReactNode',
        option: '--',
        default: '取消',
    },
    {
        param: 'showOk',
        des: '是否显示确定按钮',
        type: 'boolean',
        option: '--',
        default: 'true',
    },
    {
        param: 'showCancel',
        des: '是否显示取消按钮',
        type: 'boolean',
        option: '--',
        default: 'true',
    },
    {
        param: 'okButtonProps',
        des: 'ok 按钮 props',
        type: 'object',
        option: {
            link: '/component/button',
            info: 'Button',
        },
        default: '--',
    },
    {
        param: 'cancelButtonProps',
        des: 'cancel 按钮 props',
        type: 'object',
        option: {
            link: '/component/button',
            info: 'Button',
        },
        default: '--',
    },
    {
        param: 'getContainer',
        des: '指定 Dialog 挂载的 HTML 节点, null 为挂载在当前 dom',
        type: 'HTMLElement | () => HTMLElement',
        option: '--',
        default: 'document.body',
    },
    {
        param: 'center',
        des: '垂直居中展示',
        type: 'boolean',
        option: '--',
        default: 'false',
    }
]

export const dialogEvents = [
    {
        name: 'onOk',
        des: '点击确定回调',
        callback: '(e: Event)',
    },
    {
        name: 'onCancel',
        des: '点击遮罩层或右上角叉或取消按钮的回调',
        callback: '(e: Event)',
    },
    {
        name: 'afterClose',
        des: 'Dialog 完全关闭后的回调',
        callback: '() => void',
    }
]

export const confirmProps = [
    {
        param: 'content',
        des: '内容',
        type: 'string / ReactNode',
        option: '--',
        default: '--',
    },
    {
        param: 'icon',
        des: '自定义图标',
        type: 'string / ReactNode',
        option: '--',
        default: '--',
    },
    {
        param: 'closeAfterOk',
        des: '点击确定后关闭窗口',
        type: 'boolean',
        option: '--',
        default: 'true',
    }
]

export const confirmEvents = [
    {
        name: 'onOk',
        des: '点击确定回调，可以返回Promise',
        callback: '(e: Event) => void / Promise',
    },
    {
        name: 'afterOk',
        des: 'onOk执行回调完成后触发，通常用于配合返回Promise的onOk',
        callback: '(e: Event, info?: any, status?: Boolean)',
    }
]