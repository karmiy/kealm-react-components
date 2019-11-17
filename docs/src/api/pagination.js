export const paginationProps = [
    {
        param: 'defaultCurrent',
        des: '默认的当前页数',
        type: 'number',
        option: '--',
        default: '1',
    },
    {
        param: 'current',
        des: '当前页数',
        type: 'number',
        option: '--',
        default: '--',
    },
    {
        param: 'defaultPageSize',
        des: '默认的每页条数',
        type: 'number',
        option: '--',
        default: '10',
    },
    {
        param: 'pageSize',
        des: '每页条数',
        type: 'number',
        option: '--',
        default: '--',
    },
    {
        param: 'pageSizeOptions',
        des: '指定每页条目选择器列表的选项',
        type: 'number[]',
        option: '--',
        default: '[10, 20, 30, 40]',
    },
    {
        param: 'total',
        des: '数据总数',
        type: 'number',
        option: '--',
        default: '--',
    },
    {
        param: 'disabled',
        des: '禁用分页',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'showSizeChanger',
        des: '是否展示 pageSize 下拉列表',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'showQuickJumper',
        des: '是否可以快速跳转至某页',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'simple',
        des: '是否为简单分页的形式',
        type: 'boolean',
        option: '--',
        default: 'false',
    },
    {
        param: 'showTotal',
        des: '用于显示数据总量和当前数据顺序',
        type: '(total, range) => string / ReactNode',
        option: 'function',
        default: '--',
    },
    {
        param: 'itemRender',
        des: '用于自定义页码的结构',
        type: '(current, type: \'page\' | \'prev\' | \'next\', originalElement) => ReactNode',
        option: '--',
        default: '--'
    }
]

export const paginationEvents = [
    {
        name: 'onChange',
        des: '页码改变的回调，参数是改变后的页码及每页条数',
        callback: '(pageNo) => void',
    },
    {
        name: 'onPageSizeChange',
        des: 'pageSize 变化的回调',
        callback: '(pageSize) => void',
    }
]