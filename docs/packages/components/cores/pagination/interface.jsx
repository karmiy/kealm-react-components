import PropTypes from 'prop-types';
import { noop } from 'utils/common/base';

/* pagination-props */
export const PaginationProps = {
    className: PropTypes.string,
    defaultCurrent: PropTypes.number,
    defaultPageSize: PropTypes.number,
    current: PropTypes.number,
    pageSize: PropTypes.number,
    onChange: PropTypes.func,
    onPageSizeChange: PropTypes.func,
    total: PropTypes.number,
}

export const PaginationDefaultProps = {
    defaultCurrent: 1,
    defaultPageSize: 10,
    onChange: noop,
    onPageSizeChange: noop,
    total: 0,
}