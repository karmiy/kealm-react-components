import React, { useState, useCallback, useEffect } from 'react';
import { isEmpty } from 'utils/common/base';
import { useController, useStateStore, useTimeout } from 'hooks';

/**
 * Bidirectional drive
 * Build outerValue、innerValue、onInnerChange、onOuterChange for Two way control
 * strict: Control whether internal values can be changed freely
 */
function usePuppet(defaultProp, prop, onChange, emptyProp = false, disabled = false, strict = false) {
    const [outerValue, setOutValue] = useController(defaultProp, prop, onChange, emptyProp, disabled);
    const [innerValue, setInnerValue] = useState(outerValue);
    const stateStoreRef = useStateStore({ prop, outerValue, disabled, strict }, false);
    const [setTimer] = useTimeout(true);

    const onInnerChange = useCallback(v => {
        const { prop, disabled, strict } = stateStoreRef.current;

        if(disabled) return;
        if(!isEmpty(prop) && strict) return;

        setInnerValue(v);
    }, []);

    const onOuterChange = useCallback((v, ...rest) => {
        const { prop, outerValue } = stateStoreRef.current;

        // Prevent outerValue from changing
        if(v === outerValue) {
            onInnerChange(outerValue);
        }

        // Prevent prop from changing
        setTimer(() => {
            !isEmpty(prop) && outerValue === stateStoreRef.current.prop && onInnerChange(outerValue);
        }, 0, 'input-number');

        setOutValue(v, ...rest);
    }, []);

    // External values drive internal changes
    useEffect(() => {
        setInnerValue(outerValue);
    }, [outerValue]);

    return [outerValue, innerValue, onOuterChange, onInnerChange];
}

export default usePuppet;