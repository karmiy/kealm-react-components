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
}

export const PopoverDefaultProps = {
    trigger: 'click',
    defaultVisible: false,
    onVisibleChange: noop,
}