import PropTypes from 'prop-types';
import {
    AbstractCheckProps,
    AbstractCheckDefaultProps,
    RadioGroupProps,
    RadioGroupDefaultProps,
    RadioButtonProps,
    RadioButtonDefaultProps,
} from '../radio/interface'
import { emptyArr } from 'utils/common/base';

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
    ...RadioGroupProps,
    defaultValue: PropTypes.array,
    value: PropTypes.array,
}

export const CheckboxGroupDefaultProps = {
    ...RadioGroupDefaultProps,
    defaultValue: emptyArr,
}

/* checkbox-button-props */
export const CheckboxButtonProps = {
    ...RadioButtonProps,
}

export const CheckboxButtonDefaultProps = {
    ...RadioButtonDefaultProps,
}