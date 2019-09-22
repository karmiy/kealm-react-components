import PropTypes from 'prop-types';

const noop = () => {};

/* resize-observer-props */
export const ResizeObserverProps = {
    disabled: PropTypes.bool,
    onResize: PropTypes.func,
}

export const ResizeObserverDefaultProps = {
    disabled: false,
    onResize: noop,
}