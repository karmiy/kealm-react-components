import React, { useLayoutEffect, useEffect } from 'react';

/**
 * ComponentDidMount
 */
function useDidMount(callback, async = false) {
    (async ? useEffect : useLayoutEffect)(() => {
        callback && callback();
    }, []);
}

export default useDidMount;