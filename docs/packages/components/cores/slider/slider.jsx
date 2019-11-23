import React, { useRef, useEffect, useMemo, useState, useCallback } from 'react';
import { useContextConf, useClassName, useController, useStateStore } from 'hooks';
import { SliderProps, SliderDefaultProps } from './interface';
import addDomEventListener from 'add-dom-event-listener';
import SliderButton from './slider-button';
import { RenderWrapper } from '../../common';
import { findWithinValueForStep } from './slider-button';
import { isArray, isObject } from 'utils/common/base';
import { toArray } from 'utils/common/array';
import { findParentNodeByClass } from 'utils/common/dom';

const createStops = (range = 0, step = 1) => {
    let count = Math.floor(range / step);
    const arr = [];
    while (count > 0) {
        // Skip the most marginal points
        if(step * count === range) {
            count--;
            continue;
        }
        // if(current >= step * count + min) break;

        // arr.unshift((step * count--) * 100 / (max - min));
        arr.unshift(step * count--);
    }
    return arr;
}

export const rectAttr = vertical => vertical ? 'top' : 'left';
export const offsetAttr = vertical => vertical ? 'offsetHeight' : 'offsetWidth';
export const clientAttr = (e, vertical) => vertical ? e.clientY : e.clientX;

function Slider(props) {
    const {componentCls} = useContextConf('slider');
    const {
        children,
        className,
        defaultValue,
        value,
        onChange,
        openTooltip,
        tipFormatter,
        disabled,
        max,
        min,
        step,
        defaultTooltipVisible,
        showStops,
        completeStops,
        range,
        vertical,
        height,
        marks,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        'is-vertical': vertical,
        [className]: className,
    }, [className, componentCls, vertical]);

    const runwayClassNames = useClassName({
        [`${componentCls}__runway`]: true,
        'is-disabled': disabled,
    }, [componentCls, disabled]);

    // ---------------------------------- variable ----------------------------------
    const [num, setNum] = useController(defaultValue, value, onChange, range ? [] : 0, disabled);
    const sliderRef = useRef(null);
    const runwayRef = useRef(null);
    const marksRef = useRef(null);
    const toolTipController = useRef([]); // Save slider-button's setIsTooltipShow
    const stateRef = useStateStore({
        value: num,
        disabled,
        max,
        min,
        step,
        range,
        vertical,
    }, false);
    const stops = useMemo(() => createStops(max - min, step), [step, min ,max]);
    const sliderButtonProps = {
        prefix: componentCls,
        value: num,
        runwayRef: runwayRef,
        onSliderChange: setNum,
        openTooltip: openTooltip,
        tipFormatter: tipFormatter,
        disabled: disabled,
        max: max,
        min: min,
        step: step,
        defaultTooltipVisible,
        toolTipController,
        range,
        vertical,
    };

    // ---------------------------------- error validate ----------------------------------
    if(range && !isArray(num)) throw new Error('The current value needs to be an array when props.range is true');

    toArray(num).forEach(n => {
        if(n > max || n < min) throw new Error('The current value needs to be within the maximum and minimum ranges');
    });

    // ---------------------------------- style ----------------------------------
    const runwayStyle = {
        height: height ? `${height}px` : null,
    };

    const barLen = range
            ?
            `${Math.round((Math.abs(num[1] - num[0]) / (max - min)) * 100)}%`
            :
            `${Math.round(((num - min) / (max - min)) * 100)}%`;
    const barOffset = range
            ?
            `${Math.round(((Math.min.apply(null, num) - min) / (max - min)) * 100)}%`
            :
            '0%';

    const barStyle = {
        width: !vertical ? barLen : null,
        left: !vertical ? barOffset : null,
        height: vertical ? barLen : null,
        bottom: vertical ? barOffset : null,
    };

    // ---------------------------------- event ----------------------------------
    const handleSlider = useCallback(newValue => {
        const tooltipFunc = toolTipController.current;
        const { value, range, max, min, step } = stateRef.current;

        const nextValue = findWithinValueForStep(step, min, max, newValue);

        // If it is range selection, find the nearest
        if(range) {
            const [leftValue, rightValue] = value;
            // D-value
            const diffLeft = Math.abs(newValue - leftValue),
                diffRight = Math.abs(rightValue - newValue);

            if(diffLeft < diffRight) {
                setNum([nextValue, rightValue]);
                tooltipFunc[0](true);
            } else if(diffLeft > diffRight) {
                setNum([leftValue, nextValue]);
                tooltipFunc[1](true);
            } else {
                // Same distance, smaller
                if(leftValue === rightValue) {
                    // 1. Buttons overlap
                    if(nextValue <= leftValue) {
                        // 1-1.Click the position on the left side of the button
                        setNum([nextValue, rightValue]);
                        tooltipFunc[0](true);
                    } else {
                        // 1-2.Click the position on the right side of the button
                        setNum([leftValue, nextValue]);
                        tooltipFunc[1](true);
                    }
                } else {
                    // 2. Buttons do not overlap
                    setNum(leftValue < rightValue ? [nextValue, rightValue] : [leftValue, nextValue]);
                    tooltipFunc[leftValue <= rightValue ? 0 : 1](true);
                }
            }
        } else {
            setNum(nextValue);
            tooltipFunc.forEach(func => func(true));
        }
    }, []);

    // ---------------------------------- logic code ----------------------------------
    useEffect(() => {
        const runwayEle = runwayRef.current;
        const tooltipFunc = toolTipController.current;
        const marksEle = marksRef.current;

        // Runway click event
        const clickListener = addDomEventListener(runwayEle, 'click', e => {
            const { disabled, max, min, vertical } = stateRef.current;

            // Disabled
            if(disabled) return;

            const currentPos = clientAttr(e, vertical),
                startPos = runwayEle.getBoundingClientRect()[rectAttr(vertical)],
                diffOffset = !vertical ?
                        currentPos - startPos
                        :
                        (runwayEle[offsetAttr(vertical)] - (currentPos - startPos));

            const newValue = Math.round((diffOffset / runwayEle[offsetAttr(vertical)]) * (max - min)) + min;

            // Change position for Slider
            handleSlider(newValue);
        }, false);

        // Outside click
        const outSideClickListener = addDomEventListener(window, 'click', e => {
            const sliderEle = sliderRef.current;
            if(!sliderEle.contains(e.target)) tooltipFunc.forEach(func => func(false));
        }, false);

        // Marks click
        const marksClickListener = marksEle ? addDomEventListener(marksEle, 'click', e => {
            e.stopPropagation();
            const marksTextEle = findParentNodeByClass(e.target, `${componentCls}__marks-text`);
            if(marksTextEle) {
                const newValue = marksTextEle.dataset.value;
                handleSlider(newValue);
            }
        }, false) : { remove: () => {} };

        return () => {
            clickListener.remove();
            outSideClickListener.remove();
            marksClickListener && marksClickListener.remove();
        };
    }, []);

    // ---------------------------------- render chunk ----------------------------------
    const renderSliderButtons = (() => {
        return (
            <>
                <SliderButton
                    {...sliderButtonProps}
                    index={0}
                />
                <RenderWrapper visible={range} unmountOnExit>
                    <SliderButton
                        {...sliderButtonProps}
                        index={1}
                    />
                </RenderWrapper>
            </>
        )
    })();

    const renderStops = (() => {
        if(!showStops) return null;

        return stops.map(stop => {
            if(!range && num >= stop + min && !completeStops) return null;

            const percent = stop * 100 / (max - min);
            const style = {
                left: !vertical ? `${percent}%` : null,
                bottom: vertical ? `${percent}%` : null,
            }
            return <div key={stop} className={`${componentCls}__stop`} style={style} />
        });
    })();

    const renderMarks = useMemo(() => {
        if(!marks) return null;

        const marksStops = [];
        const marksTexts = [];
        for(let pos in marks) {
            if (marks.hasOwnProperty(pos)) {
                const option = marks[pos];
                const { style, label } = isObject(option) ? option : {};
                const offset = `${(pos - min) * 100 / (max - min)}%`;
                const stopStyle = {
                    left: !vertical ? offset : null,
                    bottom: vertical ? offset: null,
                }
                const textStyle = {
                    ...style,
                    ...stopStyle,
                };
                marksStops.push(<div key={pos} className={`${componentCls}__stop ${componentCls}__marks-stop`} style={stopStyle} />);
                marksTexts.push(<div key={pos} className={`${componentCls}__marks-text`} style={textStyle} data-value={pos}>{label || option}</div>);
            }
        }
        return (
            <>
                <div>
                    {marksStops}
                </div>
                <div ref={marksRef} className={`${componentCls}__marks`}>
                    {marksTexts}
                </div>
            </>
        )
    }, [marks, componentCls, min, max, vertical]);

    // ---------------------------------- render ----------------------------------
    return (
        <div ref={sliderRef} role={'slider'} className={classNames} {...others}>
            <div ref={runwayRef} className={runwayClassNames} style={runwayStyle}>
                <div className={`${componentCls}__bar`} style={barStyle} />
                {renderSliderButtons}
                {renderStops}
                {renderMarks}
            </div>
        </div>
    );
}

Slider.propTypes = SliderProps;
Slider.defaultProps = SliderDefaultProps;

export default Slider;