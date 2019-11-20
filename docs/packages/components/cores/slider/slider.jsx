import React, { useRef, useEffect } from 'react';
import { useContextConf, useClassName, useController, useStateStore } from 'hooks';
import { SliderProps, SliderDefaultProps } from './interface';
import addDomEventListener from 'add-dom-event-listener';
import SliderButton from './slider-button';
import { RenderWrapper } from '../../common';

const createStops = (range = 100, step = 1, current = 0) => {
    let count = Math.floor(range / step);
    const arr = [];
    while (count >= 0) {
        if(step * count === 100) {
            count--;
            continue;
        }
        if(current >= step * count) break;

        arr.unshift(step * count--);
    }
    return arr;
}

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
        showStops,
        ...others
    } = props;

    // ---------------------------------- class ----------------------------------
    const classNames = useClassName({
        [componentCls]: true,
        [className]: className,
    }, [className, componentCls]);

    const runwayClassNames = useClassName({
        [`${componentCls}__runway`]: true,
        'is-disabled': disabled,
    }, [componentCls, disabled]);

    // ---------------------------------- variable ----------------------------------
    const [num, setNum] = useController(defaultValue, value, onChange, 0, disabled);
    const runwayRef = useRef(null);
    const stateRef = useStateStore({
        value: num,
        disabled,
        max,
        min,
    }, false);
    const stops = createStops(max - min, step, num - min);

    // ---------------------------------- style ----------------------------------
    const barStyle = {
        width: `${Math.round(((num - min) / (max - min)) * 100)}%`,
        left: '0%'
    };

    // ---------------------------------- logic code ----------------------------------
    useEffect(() => {
        const runway = runwayRef.current;
        const listener = addDomEventListener(runway, 'mousedown', e => {
            const { disabled, max, min } = stateRef.current;

            // Disabled
            if(disabled) return;

            const currentX = e.clientX, startX = runway.getBoundingClientRect().left;
            const nextValue = Math.round(((currentX - startX) / runway.offsetWidth) * (max - min)) + min;

            setNum(nextValue);
        }, false);

        return () => listener.remove();
    }, []);

    // ---------------------------------- render ----------------------------------
    return (
        <div role={'slider'} className={classNames} {...others}>
            <div ref={runwayRef} className={runwayClassNames}>
                <div className={`${componentCls}__bar`} style={barStyle} />
                <SliderButton
                    prefix={componentCls}
                    value={num}
                    runwayRef={runwayRef}
                    onSliderChange={setNum}
                    openTooltip={openTooltip}
                    tipFormatter={tipFormatter}
                    disabled={disabled}
                    max={max}
                    min={min}
                    step={step}
                />
                <RenderWrapper visible={showStops} unmountOnExit>
                    {
                        stops.map(stop => {
                            return <div key={stop} className={`${componentCls}__stop`} style={{left: `${stop}%`}} />
                        })
                    }
                </RenderWrapper>
            </div>
        </div>
    );
}

Slider.propTypes = SliderProps;
Slider.defaultProps = SliderDefaultProps;

export default Slider;