import PropTypes from 'prop-types';

const noop = () => {};

/* popper-props */
export const PopperProps = {
    popper: PropTypes.element,
    children: PropTypes.element,
    placement: PropTypes.string,
    positionFixed: PropTypes.bool,
    eventsEnabled: PropTypes.bool,
    removeOnDestroy: PropTypes.bool,
    modifiers: PropTypes.object,
    onCreate: PropTypes.func,
    onUpdate: PropTypes.func,
}

export const PopperDefaultProps = {
    placement: 'bottom',
    positionFixed: false,
    eventsEnabled: true,
    removeOnDestroy: false,
    modifiers: Object.create(null),
    onCreate: noop,
    onUpdate: noop,
}