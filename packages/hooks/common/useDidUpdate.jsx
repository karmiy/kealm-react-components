import React, { useRef, useLayoutEffect, useEffect } from 'react';

/**
 * ComponentDidUpdate
 * @param callback
 * @param dependencies
 * @param async
 */
function useDidUpdate(callback, dependencies, async = false) {
    const mounted = useRef(true);
    (async ? useEffect : useLayoutEffect)(() => {
        if (mounted.current) {
            mounted.current = false;
        }else {
            return callback && callback();
        }
    }, dependencies);
}

export default useDidUpdate;