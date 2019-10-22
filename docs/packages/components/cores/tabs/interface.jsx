import PropTypes from 'prop-types';

const noop = () => {};

/* common-props */
export const commonProps = {
    className: PropTypes.string,
    position: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    type: PropTypes.string,
    editable: PropTypes.bool,
    onEdit: PropTypes.func,
}

export const commonDefaultProps = {
    position: 'top',
    onChange: noop,
    editable: false,
    onEdit: noop,
}

/* tabs-props */
export const TabsProps = {
    ...commonProps,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    headerClass: PropTypes.string,
    contentClass: PropTypes.string,
    headerStyle: PropTypes.object,
    contentStyle: PropTypes.object,
    wrapClass: PropTypes.string,
    wrapStyle: PropTypes.object,
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

/* tab-pane-props */
export const TabPaneProps = {
    className: PropTypes.string,
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.node,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
}

export const TabPaneDefaultProps = {
    active: false,
    disabled: false,
}
