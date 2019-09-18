import React, { useRef } from 'react';

/**
 * synchronize once
 */
function useSyncOnce(callback) {
    const ref = useRef(true);
    ref.current && (callback && callback(), ref.current = false);
}

export default useSyncOnce;