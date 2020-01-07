import React, { useState, useLayoutEffect, useRef } from 'react';
import PopperJs from 'popper.js';
import { useContextConf, useClassName } from 'hooks';
import DomWrapper from '../dom-wrapper';
import { filterEmptyProp } from 'utils/common/object';

const initialStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0,
    pointerEvents: 'none',
};

const initialArrowStyle = {};

function Popper2(props) {
    const {
        children: reference,
        popper,
        placement,
        positionFixed,
        eventsEnabled,
        removeOnDestroy,
        modifiers: _modifiers,
        onCreate,
        onUpdate
    } = props;

    const [data, setData] = useState(null);
    const instanceRef = useRef(null);
    const popperRef = useRef(null);
    const referenceRef = useRef(null);

    const modifiers = {
        applyStyle: {
            enabled: false,
        },
        applyStyleReact: {
            enabled: true,
            order: 900,
            fn(data) {
                setData(data);
            }
        },
        ..._modifiers,
    }

    const options = filterEmptyProp({
        placement,
        positionFixed,
        eventsEnabled,
        removeOnDestroy,
        onCreate,
        onUpdate,
        modifiers,
    });

    const getPopperStyle = () => {
        const popperEl = popperRef.current.el;
        return !popperEl || !data ?
        initialStyle : {
            position: data.offsets.popper.position,
            ...data.styles,
        }
    }

    const getPopperPlacement = () => {
        return !data ? undefined : data.placement;
    }

    const getArrowStyle = () => {
        return !data ? initialArrowStyle : data.arrowStyles;
    }

    const getOutOfBoundariesState = () => {
        return !data ? undefined : data.hide;
    }

    const scheduleUpdate = () => {
        const instance = instanceRef.current;
        if(!instance) return;

        instance.scheduleUpdate();
    }

    const destroyPopperInstance = () => {
        const instance = instanceRef.current;
        if(!instance) return;

        instance.destroy();
        instanceRef.current = null;
    }

    const updatePopperInstance = () => {
        destroyPopperInstance();

        const popperEl = popperRef.current.el,
            referenceEl = referenceRef.current.el;

        if(!popperEl || !referenceEl) return;

        instanceRef.current = new PopperJs(referenceEl, popperEl, options);
        scheduleUpdate();
    }

    const renderReference = (
        <DomWrapper ref={referenceRef}>
            {reference()}
        </DomWrapper>
    );

    const renderPopper = (
        <DomWrapper ref={popperRef}>
            {popper({
                style: getPopperStyle(),
                placement: getPopperPlacement(),
                outOfBoundaries: getOutOfBoundariesState(),
                scheduleUpdate,
                arrowProps: {
                    style: getArrowStyle(),
                },
            })}
        </DomWrapper>
    )

    useLayoutEffect(() => {
        const popperEl = popperRef.current.el,
            referenceEl = referenceRef.current.el;
        const instance = instanceRef.current;

        if(!popperEl || !referenceEl) {
            destroyPopperInstance();
        }

        if(!instance) {
            updatePopperInstance();
        }
        // if(popperRef.current) return;
    })

    // ---------------------------------- render ----------------------------------
    return (
        <>
            {renderPopper}
            {renderReference}
        </>
    )
};

export default Popper2;