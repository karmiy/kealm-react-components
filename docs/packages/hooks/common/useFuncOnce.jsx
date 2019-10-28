import React, { useRef, useCallback } from 'react';

/**
 * Function that can only be called once
 */
function useFuncOnce(callback) {
    const flagRef = useRef(true);
    return useCallback((...rest) => {
        if(!flagRef.current) return;

        callback(...rest);
        flagRef.current = false;
    }, [callback]);
}

export default useFuncOnce;