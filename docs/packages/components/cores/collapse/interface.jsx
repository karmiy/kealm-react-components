import PropTypes from 'prop-types';

const noop = () => {};

/* collapse-props */
export const CollapseProps = {
    className: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
    onChange: PropTypes.func,
    accordion: PropTypes.bool, // 手风琴
    iconLeft: PropTypes.bool,
    unmountOnExit: PropTypes.bool,
}

export const CollapseDefaultProps = {
    onChange: noop,
    accordion: false,
    iconLeft: false,
    unmountOnExit: false,
}

/* collapse-item-props */
export const CollapseItemProps = {
    className: PropTypes.string,
    title: PropTypes.node,
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    expand: PropTypes.bool,
    onExpandChange: PropTypes.func,
    disabled: PropTypes.bool,
    iconLeft: PropTypes.bool,
    expandIcon: PropTypes.node,
    unmountOnExit: PropTypes.bool,
    extra: PropTypes.node,
}

export const CollapseItemDefaultProps = {
    expand: false,
    disabled: false,
    iconLeft: false,
    unmountOnExit: false,
}