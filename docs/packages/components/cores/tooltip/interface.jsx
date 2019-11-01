import PropTypes from 'prop-types';
import { CommonProps, CommonDefaultProps } from '../trigger/interface';
import { omit } from 'utils/common/object';

/* tooltip-props */
export const TooltipProps = {
    ...omit(CommonProps, ['trigger']),
    manual: PropTypes.bool,
    effect: PropTypes.oneOf(['dark', 'light']),
    content: PropTypes.node,
}

export const TooltipDefaultProps = {
    ...omit(CommonDefaultProps, ['trigger']),
    manual: false,
    effect: 'dark',
}