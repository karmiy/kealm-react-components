import PropTypes from 'prop-types';

/* card-props */
export const CardProps = {
    className: PropTypes.string,
    size: PropTypes.string,
    title: PropTypes.node,
    extra: PropTypes.node,
    cover: PropTypes.node,
    border: PropTypes.bool,
    shadow: PropTypes.string,
}

export const CardDefaultProps = {
    border: true,
}

/* card-meta-props */
export const CardMetaProps = {
    className: PropTypes.string,
    title: PropTypes.node,
    desc: PropTypes.node,
}

export const CardMetaDefaultProps = {
}