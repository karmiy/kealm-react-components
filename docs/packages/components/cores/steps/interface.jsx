import PropTypes from 'prop-types';

/* steps-props */
export const StepsProps = {
    className: PropTypes.string,
    direction: PropTypes.string,
    current: PropTypes.number,
    size: PropTypes.string,
}

export const StepsDefaultProps = {
    direction: 'horizontal',
    current: 0,
}

/* step-props */
export const StepProps = {
    className: PropTypes.string,
    title: PropTypes.node,
    subTitle: PropTypes.node,
    description: PropTypes.node,
    status: PropTypes.string,
    stepNum: PropTypes.number,
    icon: PropTypes.node,
}

export const StepDefaultProps = {
    status: 'wait',
    stepNum: 0,
}