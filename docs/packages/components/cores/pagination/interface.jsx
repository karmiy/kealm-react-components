import PropTypes from 'prop-types';
import { noop } from 'utils/common/base';

const PAGE_SIZE_OPTIONS = [10, 20, 30, 40];

const ITEM_RENDER = (current, type, originalElement) => originalElement;

/* pagination-props */
export const PaginationProps = {
    className: PropTypes.string,
    defaultCurrent: PropTypes.number,
    defaultPageSize: PropTypes.number,
    current: PropTypes.number,
    pageSize: PropTypes.number,
    pageSizeOptions: PropTypes.array,
    onChange: PropTypes.func,
    onPageSizeChange: PropTypes.func,
    total: PropTypes.number,
    disabled: PropTypes.bool,
    showSizeChanger: PropTypes.bool,
    showQuickJumper: PropTypes.bool,
    simple: PropTypes.bool,
    showTotal: PropTypes.func,
    itemRender: PropTypes.func,
}

export const PaginationDefaultProps = {
    defaultCurrent: 1,
    defaultPageSize: 10,
    pageSizeOptions: PAGE_SIZE_OPTIONS,
    onChange: noop,
    onPageSizeChange: noop,
    total: 0,
    disabled: false,
    showSizeChanger: false,
    showQuickJumper: false,
    simple: false,
    showTotal: noop,
    itemRender: ITEM_RENDER,
}