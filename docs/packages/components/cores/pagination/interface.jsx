import PropTypes from 'prop-types';
import { noop } from 'utils/common/base';

const PAGE_SIZE_OPTIONS = PropTypes.oneOf([10, 20, 30, 40]);

const ITEM_RENDER = (current, type, originalElement) => originalElement;

/* pagination-props */
export const PaginationProps = {
    className: PropTypes.string,
    defaultCurrent: PropTypes.number,
    defaultPageSize: PAGE_SIZE_OPTIONS,
    current: PropTypes.number,
    pageSize: PAGE_SIZE_OPTIONS,
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