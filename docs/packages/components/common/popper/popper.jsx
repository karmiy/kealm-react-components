import React, { memo, useCallback, useLayoutEffect, useRef, useMemo } from 'react';
import PopperJs from 'popper.js';
import { PopperProps, PopperDefaultProps } from './interface';
import DomWrapper from '../domWrapper';
import { filterEmptyProp } from 'utils/common/object';

function Popper(props) {
    const {
        children: reference,
        popper,
        placement,
        positionFixed,
        eventsEnabled,
        removeOnDestroy,
        modifiers,
        onCreate,
        onUpdate
    } = props;

    const instanceRef = useRef(null);
    const popperRef = useRef(null);
    const referenceRef = useRef(null);

    const options = filterEmptyProp({
        placement,
        positionFixed,
        eventsEnabled,
        removeOnDestroy,
        onCreate,
        onUpdate,
        modifiers,
    });

    // ---------------------------------- function ----------------------------------

    const destroyPopperInstance = useCallback(() => {
        const instance = instanceRef.current;
        if(!instance) return;

        instance.destroy();
        instanceRef.current = null;
    }, []);

    const updatePopperInstance = useCallback(() => {
        destroyPopperInstance();

        const popperEl = popperRef.current.el,
            referenceEl = referenceRef.current.el;

        if(!popperEl || !referenceEl) return;

        instanceRef.current = new PopperJs(referenceEl, popperEl, options);
        instanceRef.current.scheduleUpdate();
    });

    // ---------------------------------- logic code ----------------------------------

    useLayoutEffect(() => {
        updatePopperInstance();
    }, [placement, positionFixed, eventsEnabled, removeOnDestroy]);

    useLayoutEffect(() => {
        const popperEl = popperRef.current.el,
            referenceEl = referenceRef.current.el;
        const instance = instanceRef.current;

        if(!popperEl || !referenceEl) {
            destroyPopperInstance();
            return;
        }

        if(!instance) {
            updatePopperInstance();
        }
    });

    // ---------------------------------- render chunk ----------------------------------
    const renderReference = useMemo(() => {
        return (
            <DomWrapper ref={referenceRef}>
                {reference}
            </DomWrapper>
        )
    }, [reference]);

    const renderPopper = useMemo(() => {
        return (
            <DomWrapper ref={popperRef}>
                {popper}
            </DomWrapper>
        )
    }, [popper]);

    // ---------------------------------- render ----------------------------------
    return (
        <>
            {renderPopper}
            {renderReference}
        </>
    )
}

Popper.propTypes = PopperProps;
Popper.defaultProps = PopperDefaultProps;

export default memo(Popper);