import PropTypes from 'prop-types';

const noop = () => {};

/* checked DOM公共样式 */
const AbstractCheckProps = {
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
}

const AbstractCheckDefaultProps = {
    disabled: false,
    onChange: noop,
}

/* radio-props */
export const RadioProps = {
    ...AbstractCheckProps,
}

export const RadioDefaultProps = {
    ...AbstractCheckDefaultProps,
}

/* radio-group-props */
export const RadioGroupProps = {
    className: PropTypes.string,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    size: PropTypes.string,
    fill: PropTypes.bool,
}

export const RadioGroupDefaultProps = {
    // disabled: false,  --------- Default false cannot be set, it will directly affect radio
    // fill: false,  --------- Default false cannot be set, it will directly affect radio
}

/* radio-button-props */
export const RadioButtonProps = {
    fill: PropTypes.bool,
    size: PropTypes.string,
    ...AbstractCheckProps
}

export const RadioButtonDefaultProps = {
    fill: false,
    ...AbstractCheckDefaultProps,
}
