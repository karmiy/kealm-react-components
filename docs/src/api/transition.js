export const commonProps = [
    {
        param: 'visible',
        des: '是否可见',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'appear',
        des: '是否显示入场动画',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'unmountOnExit',
        des: '隐藏后是否销毁元素',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'exclusive',
        des: '是否只能有一组动画',
        type: 'boolean',
        option: '--',
        default: 'true',
    }
]

export const commonEvents = [
    {
        name: 'visibleChange',
        des: '可见状态改变后触发',
        callback: '(visible: boolean)',
    }
]

export const fadeTransitionProps = [
    {
        param: 'transitionName',
        des: '过渡动画样式，例如 transitionName: fade，在元素初始时加上fade-enter、fade-enter-active，下一帧移除fade-enter并插入fade-enter-to，动画结束后移除样式，appear、leave与enter过程相同',
        type: 'string',
        option: '--',
        default: 'km-fade-transition',
    }
]


export const zoomTransitionProps = [
    {
        param: 'transitionName',
        des: '过渡动画样式，例如 transitionName: zoom，在元素初始时加上zoom-enter、zoom-enter-active，下一帧移除zoom-enter并插入zoom-enter-to，动画结束后移除样式，appear、leave与enter过程相同',
        type: 'string',
        option: '--',
        default: '--',
    },
    {
        param: 'position',
        des: 'zoom动画方向',
        type: 'string',
        option: '--',
        default: 'center',
    }
]