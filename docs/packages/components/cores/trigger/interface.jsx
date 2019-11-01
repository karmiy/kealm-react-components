import PropTypes from 'prop-types';

const noop = () => {};

const placements = [
    'top-start',
    'top',
    'top-end',
    'bottom-start',
    'bottom',
    'bottom-end',
    'left-start',
    'left',
    'left-end',
    'right-start',
    'right',
    'right-end'
]

export const CommonProps = {
    className: PropTypes.string,
    children: PropTypes.element.isRequired,
    trigger: PropTypes.string,
    defaultVisible: PropTypes.bool,
    visible: PropTypes.bool,
    onVisibleChange: PropTypes.func,
    disabled: PropTypes.bool,
    width: PropTypes.number,
    placement: PropTypes.oneOf(placements),
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
    popup: PropTypes.node,
}

export const TriggerDefaultProps = {
    ...CommonDefaultProps,
}