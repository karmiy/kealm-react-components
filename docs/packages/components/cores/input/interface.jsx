import PropTypes from 'prop-types';

const noop = () => {};

/* input-common-props */
export const AbstractInputProps = {
    className: PropTypes.string,
    // autoFocus: PropTypes.bool,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    maxLength: PropTypes.number,
}

export const AbstractInputDefaultProps = {
    // autoFocus: false,
    disabled: false,
    onChange: noop,
}

/* input-props */
export const InputProps = {
    ...AbstractInputProps,
    allowClear: PropTypes.bool,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    prepend: PropTypes.node,
    append: PropTypes.node,
    size: PropTypes.oneOf(['large', 'small']),
    showLimitCount: PropTypes.bool,
}

export const InputDefaultProps = {
    ...AbstractInputDefaultProps,
    allowClear: false,
    showLimitCount: false,
}

/* password-props */
export const PasswordProps = {
    ...AbstractInputProps,
    size: PropTypes.oneOf(['large', 'small']),
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
    showLimitCount: PropTypes.bool,
}

export const TextareaDefaultProps = {
    ...AbstractInputDefaultProps,
    autosize: false,
    showLimitCount: false,
}

/* search-props */
export const SearchProps = {
    ...AbstractInputProps,
    size: PropTypes.oneOf(['large', 'small']),
    enterButton: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
    onSearch: PropTypes.func,
}

export const SearchDefaultProps = {
    ...AbstractInputDefaultProps,
    enterButton: false,
    onSearch: noop,
}

/*
    onChange,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    onBlur,
    onFocus,
    onInput,
*/
