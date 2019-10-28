import PropTypes from 'prop-types';

/* popover-props */
export const PopoverProps = {
    className: PropTypes.string,
    children: PropTypes.element.isRequired,
    trigger: PropTypes.string,
}

export const PopoverDefaultProps = {
    trigger: 'click',
}