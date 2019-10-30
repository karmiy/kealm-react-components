import PropTypes from 'prop-types';

const noop = () => {};

export const CommonProps = {
    // component: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.element.isRequired,
    trigger: PropTypes.string,
    defaultVisible: PropTypes.bool,
    visible: PropTypes.bool,
    onVisibleChange: PropTypes.func,
    title: PropTypes.node,
    content: PropTypes.node,
    disabled: PropTypes.bool,
    width: PropTypes.number,
    placement: PropTypes.string,
    offset: PropTypes.string,
    showArrow: PropTypes.bool,
    openDelay: PropTypes.number,
    closeDelay: PropTypes.number,
    transitionName: PropTypes.string,
}

export const CommonDefaultProps = {
    trigger: 'click',
    defaultVisible: false,
    onVisibleChange: noop,
    disabled: false,
    placement: 'top',
    offset: '0',
    showArrow: true,
    openDelay: 0,
    closeDelay: 200,
    transitionName: 'km-popper',
}

/* trigger-props */
export const TriggerProps = {
    ...CommonProps,
    component: PropTypes.string,
}

export const TriggerDefaultProps = {
    ...CommonDefaultProps,
    component: 'trigger',
}