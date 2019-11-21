import React, { useRef, useEffect, useMemo, useState } from 'react';
import { useContextConf, useClassName, useController, useStateStore } from 'hooks';
import { SliderProps, SliderDefaultProps } from './interface';
import addDomEventListener from 'add-dom-event-listener';
import SliderButton from './slider-button';
import { RenderWrapper } from '../../common';
import { findWithinValueForStep } from './slider-button';
import { isArray, isObject } from 'utils/common/base';
import { toArray } from 'utils/common/array';

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

    // ---------------------------------- logic code ----------------------------------
    useEffect(() => {
        const runway = runwayRef.current;
        const tooltipFunc = toolTipController.current;
        // Click event
        const clickListener = addDomEventListener(runway, 'click', e => {
            const { value, disabled, max, min, step, range, vertical } = stateRef.current;

            // Disabled
            if(disabled) return;

            const currentPos = clientAttr(e, vertical),
                startPos = runway.getBoundingClientRect()[rectAttr(vertical)],
                diffOffset = !vertical ?
                        currentPos - startPos
                        :
                        (runway[offsetAttr(vertical)] - (currentPos - startPos));

            const newValue = Math.round((diffOffset / runway[offsetAttr(vertical)]) * (max - min)) + min;

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
        }, false);

        // Outside click
        const outSideClickListener = addDomEventListener(window, 'click', e => {
            const sliderEle = sliderRef.current;
            if(!sliderEle.contains(e.target)) tooltipFunc.forEach(func => func(false));
        }, false);

        return () => {
            clickListener.remove();
            outSideClickListener.remove();
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

    const renderMarks = useMemo(() => {
        if(!marks) return null;

        const marksTexts = [];
        for(let pos in marks) {
            if (marks.hasOwnProperty(pos)) {
                const option = marks[pos];
                if(isObject(option)) {
                    const { style, label } = option;
                    const textStyle = {
                        ...style,
                        left: '0%',
                    }
                    marksTexts.push(<div key={pos} className={`${componentCls}__marks-text`} style={textStyle}>{label}</div>);
                }
            }
        }
    }, [marks, componentCls]);

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

    // ---------------------------------- render ----------------------------------
    return (
        <div ref={sliderRef} role={'slider'} className={classNames} {...others}>
            <div ref={runwayRef} className={runwayClassNames} style={runwayStyle}>
                <div className={`${componentCls}__bar`} style={barStyle} />
                {renderSliderButtons}
                {renderStops}
                {renderMarks}
                {/*<div className={`${componentCls}__marks`}>
                    <div className={`${componentCls}__marks-text`} style={{left: '0%'}}>0%</div>
                    <div className={`${componentCls}__marks-text`} style={{left: '8%'}}>8%</div>
                </div>*/}
            </div>
        </div>
    );
}

Slider.propTypes = SliderProps;
Slider.defaultProps = SliderDefaultProps;

export default Slider;