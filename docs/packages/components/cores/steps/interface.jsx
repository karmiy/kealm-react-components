import PropTypes from 'prop-types';

/* steps-props */
export const StepsProps = {
    className: PropTypes.string,
    direction: PropTypes.string,
}

export const StepsDefaultProps = {
    direction: 'horizontal',
}

/* step-props */
export const StepProps = {
    className: PropTypes.string,
    title: PropTypes.node,
    description: PropTypes.node,
}

export const StepDefaultProps = {
}