import React, { useState, useCallback, useEffect } from 'react';
import { isEmpty } from 'utils/common/base';
import useController from './useController';
import { useStateStore, useTimeout } from '../common';
/**
 * Bidirectional drive
 * Build outerValue、innerValue、onInnerChange、onOuterChange for Two way control
 * strict: Control whether internal values can be changed freely
 */
function usePuppet(defaultProp, prop, event, emptyProp = false, disabled = false, strict = false) {
    const [outerValue, setOutValue] = useController(defaultProp, prop, event, emptyProp, disabled);
    const [innerValue, setInnerValue] = useState(outerValue);
    const stateStoreRef = useStateStore({ prop, outerValue, disabled, strict }, false);
    const [setTimer] = useTimeout(true);

    const onInnerChange = useCallback(v => {
        const { prop, disabled, strict } = stateStoreRef.current;

        if(disabled) return;
        if(!isEmpty(prop) && strict) return;

        setInnerValue(v);
    }, []);

    const onOuterChange = useCallback(config => {
        const { prop, outerValue, disabled } = stateStoreRef.current;

        if(disabled) return;

        // Prevent outerValue from not changing
        const v = useController.catchValue(config, outerValue);
        if(v === outerValue) {
            onInnerChange(outerValue);
        }

        // Prevent prop from not changing
        setTimer(() => {
            !isEmpty(prop) && outerValue === stateStoreRef.current.prop && onInnerChange(outerValue);
        }, 0, 'puppet');

        setOutValue(useController.isConfig(config) ? {...config, value: v} : v);
    }, []);

    // External values drive internal changes
    useEffect(() => {
        setInnerValue(outerValue);
    }, [outerValue]);

    return [outerValue, innerValue, onOuterChange, onInnerChange];
}

export default usePuppet;