import PropTypes from 'prop-types';
import { noop } from 'utils/common/base';

/* motion-props */
export const MotionProps = {
    className: PropTypes.string,
    style: PropTypes.object,
    animation: PropTypes.object,
    transitionName: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
    transitionEnter: PropTypes.bool,
    transitionAppear: PropTypes.bool,
    transitionLeave: PropTypes.bool,
    exclusive: PropTypes.bool,
    onAppear: PropTypes.func,
    onEnter: PropTypes.func,
    onLeave: PropTypes.func,
    onEnd: PropTypes.func,
    showProp: PropTypes.string,
    children: PropTypes.node,
}

export const MotionDefaultProps = {
    animation: {},
    transitionEnter: true,
    transitionLeave: true,
    transitionAppear: false,
    onAppear: noop,
    onEnter: noop,
    onLeave: noop,
    onEnd: noop,
}