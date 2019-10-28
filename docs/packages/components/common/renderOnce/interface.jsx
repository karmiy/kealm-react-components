import PropTypes from 'prop-types';

const noop = () => {};

/* render-once-props */
export const RenderOnceProps = {
    visible: PropTypes.bool,
    fallback: PropTypes.node,
    onCreate: PropTypes.func,
}

export const RenderOnceDefaultProps = {
    visible: false,
    onCreate: noop,
}