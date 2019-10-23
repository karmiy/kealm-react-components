import PropTypes from 'prop-types';

const noop = () => {};

/* common-props */
export const commonProps = {
    className: PropTypes.string,
    position: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    closable: PropTypes.bool,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onRemove: PropTypes.func,
}

export const commonDefaultProps = {
    position: 'top',
    closable: false,
    onClick: noop,
    onChange: noop,
    onRemove: noop,
}

/* tabs-props */
export const TabsProps = {
    ...commonProps,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    headerClass: PropTypes.string,
    contentClass: PropTypes.string,
    wrapClass: PropTypes.string,
    headerStyle: PropTypes.object,
    contentStyle: PropTypes.object,
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
    closable: PropTypes.bool,
    lazy: PropTypes.bool,
}

export const TabPaneDefaultProps = {
    active: false,
    disabled: false,
    lazy: false,
}
