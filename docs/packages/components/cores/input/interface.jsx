import PropTypes from 'prop-types';

const noop = () => {};

/* input-common-props */
export const AbstractInputProps = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
}

export const AbstractInputDefaultProps = {
    disabled: false,
    onChange: noop,
}

/* input-props */
export const InputProps = {
    ...AbstractInputProps,
    allowClear: PropTypes.bool,
}

export const InputDefaultProps = {
    ...AbstractInputDefaultProps,
    allowClear: false,
}

/* password-props */
export const PasswordProps = {
    ...AbstractInputProps,
}

export const PasswordDefaultProps = {
    ...AbstractInputDefaultProps,
}