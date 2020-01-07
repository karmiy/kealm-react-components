import PropTypes from 'prop-types';


/* motion-props */
export const RenderWrapperProps = {
    visible: PropTypes.bool.isRequired,
    unmountOnExit: PropTypes.bool,
}

export const RenderWrapperDefaultProps = {
    unmountOnExit: false,
}