import PropTypes from 'prop-types';

const noop = () => {};

const commonProps = {
    className: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
}

const commonDefaultProps = {
    onChange: noop,
}

/* radio-props */
export const RadioProps = {
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    ...commonProps,
}

export const RadioDefaultProps = {
    disabled: false,
    ...commonDefaultProps,
}

/* radio-group-props */
export const RadioGroupProps = {
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ...commonProps,
}

export const RadioGroupDefaultProps = {
    ...commonDefaultProps,
}

/* radio-button-props */
export const RadioButtonProps = {
    ...commonProps,
}

export const RadioButtonDefaultProps = {
    ...commonDefaultProps,
}
