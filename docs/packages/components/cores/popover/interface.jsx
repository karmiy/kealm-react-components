import PropTypes from 'prop-types';
import { CommonProps, CommonDefaultProps } from '../trigger/interface';

/* popover-props */
export const PopoverProps = {
    ...CommonProps,
    title: PropTypes.node,
    content: PropTypes.node,
}

export const PopoverDefaultProps = {
    ...CommonDefaultProps,
}