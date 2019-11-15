import React, { useState, useCallback, useRef, useEffect } from 'react';
import { isEmpty, isFunction } from 'utils/common/base';
import { useStateStore } from 'hooks';

/**
 * Build value、setValue for some components like defaultOpen、open、onOpenChange
 * setValue is constant
 */
function useController(defaultProp, prop, onChange, emptyProp = false, disabled = false) {
    // logic propValue
    const [innerProp, setInnerProp] = useState(isEmpty(defaultProp) ? emptyProp : defaultProp);
    const value = prop !== undefined ? prop : innerProp; // The actual value(depending on prop, no default)

    // Save the state to return the constant setValue
    const stateStoreRef = useStateStore({
        onChange,
        prop,
        value,
        disabled,
    });

    // logic setPropValue
    // v: value to set
    // c: value to onChange
    const setValue = useCallback((v, c) => {
        const { prop, value, onChange, disabled } = stateStoreRef.current;


        if(disabled) return;

        // Example like setIsVisible(v => !v)
        isFunction(v) && (v = v(value));
        isEmpty(c) ? (c = v) : (isFunction(c) && (c = c(value)));
        // if(isFunction(c)) c = c(value);

        if(v === value) return;

        // trigger change event
        onChange(c);
        // If there is prop, it is controlled by self
        if(prop !== undefined) return;

        setInnerProp(v);
    }, []);

    return [value, setValue, setInnerProp];
}

export default useController;