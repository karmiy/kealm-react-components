import PropTypes from 'prop-types';

export const noop = () => {};

/* steps-props */
export const StepsProps = {
    className: PropTypes.string,
    direction: PropTypes.string,
    current: PropTypes.number,
    size: PropTypes.string,
    status: PropTypes.string,
    progressDot: PropTypes.bool,
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
    progressDot: PropTypes.bool,
    onChange: PropTypes.func,
}

export const StepDefaultProps = {
    stepNum: 0,
    progressDot: false,
    onChange: noop,
}