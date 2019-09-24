import React, { useRef, useLayoutEffect } from 'react';

/**
 * ComponentDidUpdate
 * @param callback
 * @param dependencies
 */
function useDidUpdate(callback, dependencies) {
    const mounted = useRef(true);
    useLayoutEffect(() => {
        if (mounted.current) {
            mounted.current = false;
        }else {
            return callback && callback();
        }
    }, dependencies);
}

export default useDidUpdate;