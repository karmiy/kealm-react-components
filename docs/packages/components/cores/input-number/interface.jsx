import PropTypes from 'prop-types';
import { noop } from 'utils/common/base';

const format = value => value;

/* input-number-props */
export const InputNumberProps = {
    className: PropTypes.string,
    defaultValue: PropTypes.number,
    value: PropTypes.number,
    onChange: PropTypes.func,
    max: PropTypes.number,
    min: PropTypes.number,
    step: PropTypes.number,
    disabled: PropTypes.bool,
    precision: PropTypes.number,
    size: PropTypes.oneOf(['large', 'small']),
    controlsRight: PropTypes.bool,
    formatter: PropTypes.func,
    parser: PropTypes.func,
}

export const InputNumberDefaultProps = {
    onChange: noop,
    max: Infinity,
    min: -Infinity,
    step: 1,
    disabled: false,
    controlsRight: true,
    formatter: format,
    parser: format,
}