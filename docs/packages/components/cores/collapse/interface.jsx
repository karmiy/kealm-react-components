import PropTypes from 'prop-types';

/* collapse-props */
export const CollapseProps = {
    className: PropTypes.string,
}

export const CollapseDefaultProps = {
}

/* collapse-item-props */
export const CollapseItemProps = {
    className: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
}

export const CollapseItemDefaultProps = {
}