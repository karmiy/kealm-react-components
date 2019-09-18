import PropTypes from 'prop-types';
import {
    AbstractCheckProps,
    AbstractCheckDefaultProps,
    AbstractCheckGroupProps,
    AbstractCheckGroupDefaultProps,
} from '../radio/interface'

const empty = [];

/* checkbox-props */
export const CheckboxProps = {
    ...AbstractCheckProps,
    indeterminate: PropTypes.bool,
}

export const CheckboxDefaultProps = {
    ...AbstractCheckDefaultProps,
    indeterminate: false,
}

/* checkbox-group-props */
export const CheckboxGroupProps = {
    ...AbstractCheckGroupProps,
    defaultValue: PropTypes.array,
    value: PropTypes.array,
}

export const CheckboxGroupDefaultProps = {
    ...AbstractCheckGroupDefaultProps,
    defaultValue: empty,
}
