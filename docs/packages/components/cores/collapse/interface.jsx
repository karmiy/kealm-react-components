import PropTypes from 'prop-types';

const noop = () => {};

const commonProps = {
    className: PropTypes.string,
    iconLeft: PropTypes.bool,
    unmountOnExit: PropTypes.bool,
    showArrow: PropTypes.bool,
}

const commonDefaultProps = {
    iconLeft: false,
    unmountOnExit: false,
    showArrow: true,
}

/* collapse-props */
export const CollapseProps = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
    onChange: PropTypes.func,
    accordion: PropTypes.bool, // 手风琴
    ...commonProps,
}

export const CollapseDefaultProps = {
    onChange: noop,
    accordion: false,
    ...commonDefaultProps,
}

/* collapse-item-props */
export const CollapseItemProps = {
    title: PropTypes.node,
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    expand: PropTypes.bool,
    onExpandChange: PropTypes.func,
    disabled: PropTypes.bool,
    expandIcon: PropTypes.node,
    extra: PropTypes.node,
    headerClass: PropTypes.string,
    wrapClass: PropTypes.string,
    ...commonProps,
}

export const CollapseItemDefaultProps = {
    expand: false,
    disabled: false,
    ...commonDefaultProps,
}