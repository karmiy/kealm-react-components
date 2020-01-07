import React, { useCallback } from 'react';
import useSyncOnce from './useSyncOnce';
import useStateStore from './useStateStore';
import { throttle } from 'utils/common/base';

/**
 * Build throttling function，returns the singleton
 * Return constant func
 */
function useThrottle(func, wait = 0, options) {
    // Always store the latest original functions
    const funcRef = useStateStore({func}, false);

    // Creates a function with a constant reference as the first argument to the throttling function
    const ministrant = useCallback((...rest) => {
        const { func: _func } = funcRef.current;
        return _func && _func(...rest);
    }, []);

    // Throttling function
    return useSyncOnce(() => throttle(ministrant, wait, options));
}

export default useThrottle;