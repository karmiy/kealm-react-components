import PropTypes from 'prop-types';
import { noop } from 'utils/common/base';

/* resize-observer-props */
export const ResizeObserverProps = {
    disabled: PropTypes.bool,
    onResize: PropTypes.func,
}

export const ResizeObserverDefaultProps = {
    disabled: false,
    onResize: noop,
}