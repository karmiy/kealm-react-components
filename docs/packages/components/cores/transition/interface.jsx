import PropTypes from 'prop-types';

/* common-props */
export const CommonTransitionProps = {
    visible: PropTypes.bool, // Whether visible
    appear: PropTypes.bool, // Whether to enter perform an animation
    unmountOnExit: PropTypes.bool, // Whether unmount dom when component exit
    transitionName: PropTypes.string, // CSS className, just like 'fade-in' will render from fade-in => fade-in-active => fade-in-to
}

export const CommonTransitionDefaultProps = {
    visible: false,
    appear: false,
    unmountOnExit: false,
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
}

export const FadeTransitionDefaultProps = {
    ...CommonTransitionDefaultProps,
    transitionName: 'km-fade-transition',
}