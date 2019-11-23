import React, { useEffect, useRef, useState, useCallback } from 'react';
import { SliderButtonProps, SliderButtonDefaultProps } from './interface';
import { useClassName, useStateStore, useSyncOnce, useThrottle } from 'hooks';
import addDomEventListener from 'add-dom-event-listener';
import Tooltip from '../tooltip';
import { offsetAttr, clientAttr } from './slider';
import draggable from 'utils/draggable';

/**
 * Find an adjacent value within the step limit
 * @param step
 * @param min
 * @param max
 * @param current
 */
export function findWithinValueForStep(step, min, max, current) {
    let count = Math.floor((max - min) / step);
    // Example: ranges will be [-30, -20, -10, 0, 10, 20, 30] when min is -30 and max is 30
    const ranges = [];
    while (count >= 0) {
        ranges.unshift((step * count--) + min);
    }
    const len = ranges.length;
    if(len && ranges[len - 1] !== max) {
        ranges.push(max);
    }
    // Example
    const withinPrevIndex = ranges.findIndex((v, index) => {
        return v <= current && ranges[index + 1] >= current;
    });
    const withinPrev = ranges[withinPrevIndex],
        withinNext = ranges[withinPrevIndex + 1],
        half = (withinPrev + withinNext) / 2;
    return current <= half ? withinPrev : withinNext;
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
        toolTipController,
        defaultTooltipVisible,
        range,
        vertical,
        index,
    } = props;

    // ---------------------------------- variable ----------------------------------
    const buttonRef = useRef(null);
    const [isTooltipShow, setIsTooltipShow] = useState(defaultTooltipVisible);
    const [isDragging, setIsDragging] = useState(false);
    const stateRef = useStateStore({
        value,
        isDragging,
        disabled,
        max,
        min,
        step,
        range,
        vertical,
        index,
    }, false);

    // ---------------------------------- class ----------------------------------
    const buttonWrapClassNames = useClassName({
        [`${prefix}__button-wrapper`]: true,
        'is-dragging': isDragging,
    }, [prefix, isDragging]);

    // ---------------------------------- style ----------------------------------
    const _value = range ? value[index] : value;
    const buttonOffset = `${Math.round(((_value - min) / (max - min)) * 100)}%`;
    const buttonStyle = {
        left: !vertical ? buttonOffset : null,
        bottom: vertical ? buttonOffset : null,
    };

    // ---------------------------------- event ----------------------------------
    const onDragStart = useCallback((e, dataFlow) => {
        e.preventDefault();
        e.stopPropagation();

        const { value, disabled, range, index, vertical } = stateRef.current;
        // Disabled
        if(disabled) return;

        // 数据流
        const startValue = range ? value[index] : value;
        const startPos = clientAttr(e, vertical);
        Object.assign(dataFlow, { startValue, startPos });

        // Status change
        setIsDragging(true);
        setIsTooltipShow(true);
    }, []);

    const onDragging = useThrottle((e, dataFlow) => {
        const runwayEle = runwayRef.current;
        const { startValue, startPos } = dataFlow;
        const { max, min, range, index, vertical } = stateRef.current;
        const movingPos = clientAttr(e, vertical);
        const diffOffset = !vertical ? movingPos - startPos : startPos - movingPos;
        const diffValue = Math.round((diffOffset / runwayEle[offsetAttr(vertical)]) * (max - min));
        const newValue = Math.max(Math.min(diffValue + startValue, max), min);
        const nextValue = findWithinValueForStep(step, min, max, newValue);
        const rangeChange = oldValue => {
            oldValue[index] = nextValue;
            return [...oldValue];
        }
        onSliderChange(range ? rangeChange : nextValue);
    }, 1000 / 60);

    const onDragEnd = useCallback(e => {
        const buttonWrapperEle = buttonRef.current;
        setIsDragging(false);
        !buttonWrapperEle.contains(e.target) && setIsTooltipShow(false);
    }, []);

    // ---------------------------------- logic code ----------------------------------
    // Save setIsDragging for Parent
    useSyncOnce(() => {
        toolTipController.current.push(setIsTooltipShow);
    });

    // Show or hide tooltip when mouseenter/leave
    useEffect(() => {
        const buttonWrapperEle = buttonRef.current;

        const clickListener = addDomEventListener(buttonWrapperEle, 'click', e => {
            e.preventDefault();
            e.stopPropagation();
        }, false);
        const mouseenterListener = addDomEventListener(buttonWrapperEle, 'mouseenter', e => {
            e.preventDefault();
            e.stopPropagation();
            !stateRef.current.isDragging && setIsTooltipShow(true);
        }, false);
        const mouseleaveListener = addDomEventListener(buttonWrapperEle, 'mouseleave', e => {
            if(!e.relatedTarget) return;

            e.preventDefault();
            e.stopPropagation();
            !stateRef.current.isDragging && setIsTooltipShow(false)
        }, false);

        return () => {
            clickListener.remove();
            mouseenterListener.remove();
            mouseleaveListener.remove();
        }
    }, []);

    // Change value when it's dragging
    useEffect(() => {
        const buttonWrapperEle = buttonRef.current;

        const mousedownListener = draggable(buttonWrapperEle, {
            start: onDragStart,
            drag: onDragging,
            end: onDragEnd,
        });

        return () => mousedownListener.remove();
    }, []);

    // ---------------------------------- render ----------------------------------
    return (
        <div ref={buttonRef} className={buttonWrapClassNames} style={buttonStyle}>
            <Tooltip manual visible={openTooltip && isTooltipShow} content={tipFormatter(_value)}>
                <div tabIndex={0} className={`km-tooltip ${prefix}__button`} />
            </Tooltip>
        </div>
    );
}

SliderButton.propTypes = SliderButtonProps;
SliderButton.defaultProps = SliderButtonDefaultProps;

export default SliderButton;