import PropTypes from 'prop-types';

const noop = () => {};

/* common-props */
export const CommonTransitionProps = {
    visible: PropTypes.bool, // Whether visible
    appear: PropTypes.bool, // Whether to enter perform an animation
    unmountOnExit: PropTypes.bool, // Whether unmount dom when component exit
    exclusive: PropTypes.bool,
    visibleChange: PropTypes.func,
}

export const CommonTransitionDefaultProps = {
    visible: false,
    appear: false,
    unmountOnExit: false,
    exclusive: true,
    visibleChange: noop,
}

/* collapse-transition-props */
export const CollapseTransitionProps = {
    ...CommonTransitionProps,
}

export const CollapseTransitionDefaultProps = {
    ...CommonTransitionDefaultProps,
}

/* fade-transition-props */
export const FadeTransitionProps = {
    ...CommonTransitionProps,
    transitionName: PropTypes.string, // CSS className, just like 'fade-in' will render from fade-in => fade-in-active => fade-in-to
}

export const FadeTransitionDefaultProps = {
    ...CommonTransitionDefaultProps,
    transitionName: 'km-fade-transition',
}

/* zoom-transition-props */
export const ZoomTransitionProps = {
    ...CommonTransitionProps,
    transitionName: PropTypes.string, // CSS className, just like 'zoom-in' will render from zoom-in => zoom-in-active => zoom-in-to
    position: PropTypes.oneOf(['center', 'top', 'bottom', 'left', 'right']),
}

export const ZoomTransitionDefaultProps = {
    ...CommonTransitionDefaultProps,
    position: 'center'
}