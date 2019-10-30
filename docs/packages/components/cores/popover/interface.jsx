import PropTypes from 'prop-types';

const noop = () => {};

/* popover-props */
export const PopoverProps = {
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
}

export const PopoverDefaultProps = {
    trigger: 'click',
    defaultVisible: false,
    onVisibleChange: noop,
    disabled: false,
    placement: 'top',
    offset: '0',
    showArrow: true,
    openDelay: 0,
    closeDelay: 200,
}