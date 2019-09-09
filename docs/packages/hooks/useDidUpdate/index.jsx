import React, { useRef, useLayoutEffect } from 'react';

/**
 * componentDidUpdate
 * @param callback 回调
 * @param dependencies 依赖项，不传则都会触发
 */
function useDidUpdate(callback, dependencies) {
    const mounted = useRef(false);
    useLayoutEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            return;
        }
        callback && callback();
    }, dependencies);
}

export default useDidUpdate;