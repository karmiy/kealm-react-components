import PropTypes from 'prop-types';

const noop = () => {};

/* checked DOM公共样式 */
export const AbstractCheckProps = {
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    name: PropTypes.string,
}

export const AbstractCheckDefaultProps = {
    // disabled: false,
    onChange: noop,
}

/* checked-group DOM公共样式 */
export const AbstractCheckGroupProps = {
    className: PropTypes.string,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    name: PropTypes.string,
}

export const AbstractCheckGroupDefaultProps = {
    onChange: noop,
    // disabled: false,
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
    size: PropTypes.string,
    solid: PropTypes.bool,
    ...AbstractCheckGroupProps,
}

export const RadioGroupDefaultProps = {
    // solid: false,
    ...AbstractCheckGroupDefaultProps,
}

/* radio-button-props */
export const RadioButtonProps = {
    solid: PropTypes.bool,
    size: PropTypes.string,
    ...AbstractCheckProps
}

export const RadioButtonDefaultProps = {
    // solid: false,
    ...AbstractCheckDefaultProps,
}
