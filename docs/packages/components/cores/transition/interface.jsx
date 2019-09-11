import PropTypes from 'prop-types';

/* collapse-transition-props */
export const CollapseTransitionProps = {
    visible: PropTypes.bool, // is visible
    unmountOnExit: PropTypes.bool, // is unmount dom when component exit
}

export const CollapseTransitionDefaultProps = {
    visible: false,
    unmountOnExit: false,
}