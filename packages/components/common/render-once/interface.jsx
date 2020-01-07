import PropTypes from 'prop-types';
import { noop } from 'utils/common/base';

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