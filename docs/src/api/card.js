export const cardProps = [
    {
        param: 'size',
        des: 'card 的尺寸',
        type: 'string',
        option: 'default / small',
        default: 'default',
    },
    {
        param: 'title',
        des: '卡片标题',
        type: 'string / ReactNode',
        option: '--',
        default: '--',
    },
    {
        param: 'extra',
        des: '卡片右上角的操作区域',
        type: 'string / ReactNode',
        option: '--',
        default: '--',
    },
    {
        param: 'cover',
        des: '卡片封面',
        type: 'ReactNode',
        option: '--',
        default: '--',
    },
    {
        param: 'bordered',
        des: '是否有边框',
        type: 'boolean',
        option: '--',
        default: 'true',
    },
    {
        param: 'shadow',
        des: '设置阴影显示时机',
        type: 'string',
        option: 'always / hover / never',
        default: 'never',
    },
    {
        param: 'type',
        des: '卡片类型，可设置为 inner 或 不设置',
        type: 'string',
        option: '--',
        default: '--',
    },
    {
        param: 'actions',
        des: '卡片操作组，位置在卡片底部',
        type: 'Array<ReactNode>',
        option: '--',
        default: '--',
    }
]

export const cardMetaProps = [
    {
        param: 'title',
        des: '标题内容',
        type: 'string / ReactNode',
        option: '--',
        default: '--',
    },
    {
        param: 'desc',
        des: '描述内容',
        type: 'string / ReactNode',
        option: '--',
        default: '--',
    },
    {
        param: 'avatar',
        des: '头像/图标',
        type: 'string / ReactNode',
        option: '--',
        default: '--',
    }
]

export const cardGridProps = [
    {
        param: 'hoverable',
        des: '鼠标移过时可浮起',
        type: 'boolean',
        option: '--',
        default: 'true',
    },
    {
        param: 'desc',
        des: '描述内容',
        type: 'string / ReactNode',
        option: '--',
        default: '--',
    },
    {
        param: 'avatar',
        des: '头像/图标',
        type: 'string / ReactNode',
        option: '--',
        default: '--',
    }
]