import PropTypes from 'prop-types';

const commonProps = {
    className: PropTypes.string,
}

const commonDefaultProps = {
}

/* radio-props */
export const RadioProps = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ...commonProps,
}

export const RadioDefaultProps = {
    ...commonDefaultProps,
}
