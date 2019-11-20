import React, { useEffect, useRef, useState } from 'react';
import { SliderButtonProps, SliderButtonDefaultProps } from './interface';
import { useStateStore } from 'hooks';
import addDomEventListener from 'add-dom-event-listener';
import Tooltip from '../tooltip';

/**
 * Find an adjacent value within the step limit
 * @param step
 * @param min
 * @param max
 */
function findWithinValueForStep(step, min, max) {
    let count = Math.floor((max - min) / step);
    const ranges = [];
    while (count >= 0) {
        ranges.unshift((step * count--) + min);
    }
    return ranges;
}

function SliderButton(props) {
    const {
        prefix,
        value,
        runwayRef,
        onSliderChange,
        openTooltip,
        tipFormatter,
        disabled,
        max,
        min,
        step,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const buttonRef = useRef(null);
    const [isTooltipShow, setIsTooltipShow] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const stateRef = useStateStore({
        value,
        isDragging,
        disabled,
        max,
        min,
        step,
    }, false);

    // ---------------------------------- style ----------------------------------
    const buttonStyle = {
        left: `${Math.round(((value - min) / (max - min)) * 100)}%`,
    };

    // ---------------------------------- logic code ----------------------------------
    // Show or hide tooltip when mouseenter/leave
    useEffect(() => {
        const buttonWrapper = buttonRef.current;

        const enterListener = addDomEventListener(buttonWrapper, 'mouseenter', () => !stateRef.current.isDragging && setIsTooltipShow(true), false);
        const leaveListener = addDomEventListener(buttonWrapper, 'mouseleave', () => !stateRef.current.isDragging && setIsTooltipShow(false), false);

        return () => {
            enterListener.remove();
            leaveListener.remove();
        }
    }, []);

    // Change value when it's dragging
    useEffect(() => {
        const buttonWrapper = buttonRef.current,
            runway = runwayRef.current;

        const startListener = addDomEventListener(buttonWrapper, 'mousedown', e => {
            e.preventDefault();
            e.stopPropagation();

            const { value: startValue, disabled, max, min } = stateRef.current;
            const startX = e.clientX;

            // Disabled
            if(disabled) return;

            setIsDragging(true);
            setIsTooltipShow(true);

            const moveListener = addDomEventListener(window, 'mousemove', e => {
                const movingX = e.clientX;
                const diffValue = Math.round(((movingX - startX) / runway.offsetWidth) * (max - min));
                // console.log(diffValue, step);
                console.log(findWithinValueForStep(step, min, max));
                const nextValue = diffValue + startValue;
                nextValue !== startValue && onSliderChange(Math.max(Math.min(nextValue, max), min));
            });

            const endListener = addDomEventListener(window, 'mouseup', e => {
                setIsDragging(false);
                !buttonWrapper.contains(e.target) && setIsTooltipShow(false);
                moveListener.remove();
                endListener.remove();
            });
        }, false);

        return () => startListener.remove();
    }, []);

    // ---------------------------------- render ----------------------------------
    return (
        <div ref={buttonRef} className={`${prefix}__button-wrapper`} style={buttonStyle}>
            <Tooltip manual visible={openTooltip && isTooltipShow} content={tipFormatter(value)}>
                <div tabIndex={0} className={`km-tooltip ${prefix}__button`} />
            </Tooltip>
        </div>
    );
}

SliderButton.propTypes = SliderButtonProps;
SliderButton.defaultProps = SliderButtonDefaultProps;

export default SliderButton;