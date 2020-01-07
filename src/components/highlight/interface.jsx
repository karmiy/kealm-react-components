import PropTypes from 'prop-types';

/* highlight-props */
export const HighlightProps = {
    title: PropTypes.string,
    code: PropTypes.string,
    collapsible: PropTypes.bool,
    expand: PropTypes.bool,
}

export const HighlightDefaultProps = {
    title: 'Demo',
    collapsible: true,
    expand: false,
}