import PropTypes from 'prop-types';

/* portal-props */
export const PortalProps = {
    className: PropTypes.string,
    visible: PropTypes.bool,
    getContainer: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
}

export const PortalDefaultProps = {
    visible: true,
}