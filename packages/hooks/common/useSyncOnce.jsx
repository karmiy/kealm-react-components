import React, { useRef } from 'react';

/**
 * Synchronize once，and always return the first result
 */
function useSyncOnce(callback) {
    const flagRef = useRef(true);
    const returnRef = useRef(null);
    // ref.current && (callback && callback(), ref.current = false);
    if(flagRef.current) {
        flagRef.current = false;
        returnRef.current = callback && callback();
    }
    return returnRef.current;
}

export default useSyncOnce;