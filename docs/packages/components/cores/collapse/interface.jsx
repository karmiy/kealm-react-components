import PropTypes from 'prop-types';

const noop = () => {};

/* collapse-props */
export const CollapseProps = {
    className: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
    onChange: PropTypes.func,
}

export const CollapseDefaultProps = {
    onChange: noop,
}

/* collapse-item-props */
export const CollapseItemProps = {
    className: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    expand: PropTypes.bool,
    onExpandChange: PropTypes.func,
}

export const CollapseItemDefaultProps = {
    expand: false,
}