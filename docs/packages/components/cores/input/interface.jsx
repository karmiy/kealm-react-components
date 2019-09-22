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
    prefix: PropTypes.node,
    suffix: PropTypes.node,
}

export const InputDefaultProps = {
    ...AbstractInputDefaultProps,
    allowClear: false,
}

/* password-props */
export const PasswordProps = {
    ...AbstractInputProps,
    showToggleIcon: PropTypes.bool,
}

export const PasswordDefaultProps = {
    ...AbstractInputDefaultProps,
    showToggleIcon: true,
}

/* textarea-props */
export const TextareaProps = {
    ...AbstractInputProps,
    rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    autosize: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
}

export const TextareaDefaultProps = {
    ...AbstractInputDefaultProps,
    autosize: false,
}