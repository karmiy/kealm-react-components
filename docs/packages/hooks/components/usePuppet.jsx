import React, { useState, useCallback, useEffect } from 'react';
import { isEmpty } from 'utils/common/base';
import { useController, useStateStore } from 'hooks';

/**
 * Bidirectional drive
 * Build outerValue、innerValue、onInnerChange、onOuterChange for Two way control
 * strict: Control whether internal values can be changed freely
 */
function usePuppet(defaultProp, prop, onChange, emptyProp = false, disabled = false, strict = false) {
    const [outerValue, setOutValue] = useController(defaultProp, prop, onChange, emptyProp, disabled);
    const [innerValue, setInnerValue] = useState(outerValue);
    const stateStoreRef = useStateStore({ prop, outerValue, disabled, strict }, false);

    const onInnerChange = useCallback(v => {
        const { prop, disabled, strict } = stateStoreRef.current;

        if(disabled) return;
        if(!isEmpty(prop) && strict) return;

        setInnerValue(v);
    }, []);

    const onOuterChange = useCallback((v, ...rest) => {
        const { prop, outerValue } = stateStoreRef.current;

        // Prevent prop or outerValue from changing
        if(!isEmpty(prop) || v === outerValue) {
            onInnerChange(outerValue);
        }

        setOutValue(v, ...rest);
    }, []);

    // External values drive internal changes
    useEffect(() => {
        setInnerValue(outerValue);
    }, [outerValue]);

    return [outerValue, innerValue, onOuterChange, onInnerChange];
}

export default usePuppet;