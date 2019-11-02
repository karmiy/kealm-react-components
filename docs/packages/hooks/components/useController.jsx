import React, { useState, useCallback, useRef, useEffect } from 'react';
import { isEmpty, isFunction } from 'utils/common/base';

/**
 * Build value、setValue for some components like defaultOpen、open、onOpenChange
 * setValue is constant
 */
function useController(defaultProp, prop, onChange, emptyProp = false) {
    // logic propValue
    const [innerProp, setInnerProp] = useState(isEmpty(defaultProp) ? emptyProp : defaultProp);
    const value = prop !== undefined ? prop : innerProp; // The actual value(depending on prop, no default)

    // Save the state to return the constant setValue
    const stateStoreRef = useRef({
        onChange,
        prop,
        value,
    });

    useEffect(() => {
        stateStoreRef.current = {
            prop,
            value,
            onChange,
        }
    }, [prop, value, onChange]);

    // logic setPropValue
    // v: value to set
    // c: value to onChange
    const setValue = useCallback((v, c = v) => {
        const { prop, value, onChange } = stateStoreRef.current;

        // Example like setIsVisible(v => !v)
        if(isFunction(v)) v = v(value);
        if(isFunction(c)) c = c(value);

        // trigger change event
        onChange(c);
        // If there is prop, it is controlled by self
        if(prop !== undefined) return;

        setInnerProp(v);
    }, []);

    return [value, setValue, setInnerProp];
}

export default useController;