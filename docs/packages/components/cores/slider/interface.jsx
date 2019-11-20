import PropTypes from 'prop-types';
import { noop } from 'utils/common/base';

const FORMAT = value => value;

const commonProps = {
    value: PropTypes.number,
    openTooltip: PropTypes.bool,
    tipFormatter: PropTypes.func,
    disabled: PropTypes.bool,
    max: PropTypes.number,
    min: PropTypes.number,
    step: PropTypes.number,
}

const commonDefaultProps = {
    openTooltip: true,
    tipFormatter: FORMAT,
    disabled: false,
    max: 100,
    min: 0,
    step: 1,
}

/* slider-props */
export const SliderProps = {
    className: PropTypes.string,
    defaultValue: PropTypes.number,
    onChange: PropTypes.func,
    showStops: PropTypes.bool,
    ...commonProps,
}

export const SliderDefaultProps = {
    defaultValue: 0,
    onChange: noop,
    showStops: false,
    ...commonDefaultProps,
}

/* slider-button-props */
export const SliderButtonProps = {
    prefix: PropTypes.string,
    runwayRef: PropTypes.object,
    onSliderChange: PropTypes.func,
    ...commonProps,
}

export const SliderButtonDefaultProps = {
    ...commonDefaultProps,
}