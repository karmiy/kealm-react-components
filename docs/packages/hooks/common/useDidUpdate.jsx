import React, { useRef, useLayoutEffect } from 'react';

/**
 * componentDidUpdate
 * @param callback
 * @param dependencies
 */
function useDidUpdate(callback, dependencies) {
    const mounted = useRef(true);
    useLayoutEffect(() => {
        if (mounted.current) {
            mounted.current = false;
        }else {
            callback && callback();
        }
    }, dependencies);
}

export default useDidUpdate;