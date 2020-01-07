import React, { useRef, useCallback } from 'react';

let count = 0;

/**
 * setTimeout
 * @param autoClear: Whether to automatically clear when setting the same name
 */
function useTimeout(autoClear = false) {
    const storeRef = useRef({});

    const clearTimer = useCallback((name) => {
        name = name || `timeout-${count}`;
        clearTimeout(storeRef.current[name]);
        delete storeRef.current[name];
    }, []);

    const setTimer = useCallback((callback, time = 0, name) => {
        name = name || `timeout-${count++}`;

        if(autoClear) clearTimeout(storeRef.current[name]);

        storeRef.current[name] = setTimeout(() => {
            callback();
            clearTimer(name);
        }, time);
    }, []);

    return [setTimer, clearTimer];
}

export default useTimeout;