import PropTypes from 'prop-types';

const noop = () => {};

/* common-props */
export const commonProps = {
    className: PropTypes.string,
    position: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
}

export const commonDefaultProps = {
    position: 'top',
    onChange: noop,
}

/* tabs-props */
export const TabsProps = {
    ...commonProps,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export const TabsDefaultProps = {
    ...commonDefaultProps,
}

/* tab-nav-props */
export const TabNavProps = {
    ...commonProps,
}

export const TabNavDefaultProps = {
    ...commonDefaultProps,
}

/* tab-panel-props */
export const TabPanelProps = {
    className: PropTypes.string,
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.node,
    active: PropTypes.bool,
}

export const TabPanelDefaultProps = {
    active: false,
}
