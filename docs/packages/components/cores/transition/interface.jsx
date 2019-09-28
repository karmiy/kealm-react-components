import PropTypes from 'prop-types';

/* common-props */
export const CommonTransitionProps = {
    visible: PropTypes.bool, // Whether visible
    appear: PropTypes.bool, // Whether to enter perform an animation
    unmountOnExit: PropTypes.bool, // Whether unmount dom when component exit
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
}