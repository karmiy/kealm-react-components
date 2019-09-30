import React, { useRef, useCallback } from 'react';
import useSyncOnce from './useSyncOnce';
import { throttle } from "utils/base/common";

/**
 * Build throttling function，returns the singleton
 */
function useThrottle(func, wait = 0, options) {
    // Always store the latest original functions
    const funcRef = useRef(null);
    if(funcRef.current !== func) funcRef.current = func;

    // Creates a function with a constant reference as the first argument to the throttling function
    const ministrant = useCallback(() => {
        return funcRef.current && funcRef.current();
    }, []);

    // Throttling function
    return useSyncOnce(() => throttle(ministrant, wait, options));
}

export default useThrottle;