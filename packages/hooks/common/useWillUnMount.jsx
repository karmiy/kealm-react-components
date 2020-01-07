import React, { useLayoutEffect, useEffect } from 'react';

/**
 * ComponentWillUnMount
 */
function useWillUnMount(callback, async = false) {
    (async ? useEffect : useLayoutEffect)(() => callback, []);
}

export default useWillUnMount;