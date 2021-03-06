import PropTypes from 'prop-types';
import { noop } from 'utils/common/base';

/* steps-props */
export const StepsProps = {
    className: PropTypes.string,
    direction: PropTypes.oneOf(['horizontal', 'vertical']),
    current: PropTypes.number,
    size: PropTypes.oneOf(['small']),
    status: PropTypes.oneOf(['wait', 'process', 'finish', 'error']),
    progressDot: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    onChange: PropTypes.func,
}

export const StepsDefaultProps = {
    direction: 'horizontal',
    current: 0,
    progressDot: false,
    onChange: noop,
}

/* step-props */
export const StepProps = {
    className: PropTypes.string,
    title: PropTypes.node,
    subTitle: PropTypes.node,
    description: PropTypes.node,
    status: PropTypes.string,
    current: PropTypes.number,
    stepNum: PropTypes.number,
    icon: PropTypes.node,
    progressDot: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    onChange: PropTypes.func,
}

export const StepDefaultProps = {
    stepNum: 0,
    progressDot: false,
    onChange: noop,
}