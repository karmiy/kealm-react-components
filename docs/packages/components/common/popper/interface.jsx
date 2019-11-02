import PropTypes from 'prop-types';

const noop = () => {};

const placements = [
    'top-start',
    'top',
    'top-end',
    'bottom-start',
    'bottom',
    'bottom-end',
    'left-start',
    'left',
    'left-end',
    'right-start',
    'right',
    'right-end'
];

export const PopperJsProps = {
    placement: PropTypes.oneOf(placements),
    positionFixed: PropTypes.bool,
    eventsEnabled: PropTypes.bool,
    removeOnDestroy: PropTypes.bool,
    modifiers: PropTypes.object,
    onCreate: PropTypes.func,
    onUpdate: PropTypes.func,
}

export const PopperJsDefaultProps = {
    placement: 'bottom',
    positionFixed: false,
    eventsEnabled: true,
    removeOnDestroy: false,
    onCreate: noop,
    onUpdate: noop,
}

/* popper-props */
export const PopperProps = {
    ...PopperJsProps,
    popper: PropTypes.element,
    children: PropTypes.element,
}

export const PopperDefaultProps = {
    ...PopperJsDefaultProps,
}