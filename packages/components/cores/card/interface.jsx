import PropTypes from 'prop-types';

/* card-props */
export const CardProps = {
    className: PropTypes.string,
    size: PropTypes.oneOf(['small']),
    title: PropTypes.node,
    extra: PropTypes.node,
    cover: PropTypes.node,
    bordered: PropTypes.bool,
    shadow: PropTypes.oneOf(['always', 'hover', 'never']),
    type: PropTypes.string,
    actions: PropTypes.array,
}

export const CardDefaultProps = {
    bordered: true,
}

/* card-meta-props */
export const CardMetaProps = {
    className: PropTypes.string,
    title: PropTypes.node,
    desc: PropTypes.node,
    avatar: PropTypes.node,
}

export const CardMetaDefaultProps = {
}

/* card-grid-props */
export const CardGridProps = {
    className: PropTypes.string,
    style: PropTypes.object,
    hoverable: PropTypes.bool,
}

export const CardGridDefaultProps = {
    hoverable: true,
}