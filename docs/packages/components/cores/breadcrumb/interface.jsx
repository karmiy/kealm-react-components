import PropTypes from 'prop-types';

/* breadcrumb-props */
export const BreadcrumbProps = {
    className: PropTypes.string,
    separator: PropTypes.node,
}

export const BreadcrumbDefaultProps = {
    separator: '/',
}

/* breadcrumb-item-props */
export const BreadcrumbItemProps = {
    className: PropTypes.string,
    to: PropTypes.string,
    separator: PropTypes.node,
}

export const BreadcrumbItemDefaultProps = {
}