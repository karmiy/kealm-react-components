import PropTypes from 'prop-types';
import { noop } from 'utils/common/base';

const FORMAT = value => value;

const VALUE_TYPE = PropTypes.oneOfType([PropTypes.number, PropTypes.array]);

const commonProps = {
    value: VALUE_TYPE,
    openTooltip: PropTypes.bool,
    tipFormatter: PropTypes.func,
    disabled: PropTypes.bool,
    max: PropTypes.number,
    min: PropTypes.number,
    step: PropTypes.number,
    defaultTooltipVisible: PropTypes.bool,
    range: PropTypes.bool,
    vertical: PropTypes.bool,
}

const commonDefaultProps = {
    openTooltip: true,
    tipFormatter: FORMAT,
    disabled: false,
    max: 100,
    min: 0,
    step: 1,
    defaultTooltipVisible: false,
    range: false,
    vertical: false,
}

/* slider-props */
export const SliderProps = {
    className: PropTypes.string,
    defaultValue: VALUE_TYPE,
    onChange: PropTypes.func,
    showStops: PropTypes.bool,
    completeStops: PropTypes.bool,
    height: PropTypes.number,
    marks: PropTypes.object,
    ...commonProps,
}

export const SliderDefaultProps = {
    defaultValue: 0,
    onChange: noop,
    showStops: false,
    completeStops: false,
    ...commonDefaultProps,
}

/* slider-button-props */
export const SliderButtonProps = {
    prefix: PropTypes.string,
    runwayRef: PropTypes.object,
    onSliderChange: PropTypes.func,
    toolTipController: PropTypes.object,
    ...commonProps,
}

export const SliderButtonDefaultProps = {
    ...commonDefaultProps,
}