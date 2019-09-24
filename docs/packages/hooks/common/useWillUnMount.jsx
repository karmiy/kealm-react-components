import React, { useLayoutEffect } from 'react';

/**
 * ComponentWillUnMount
 */
function useWillUnMount(callback) {
    useLayoutEffect(() => callback, []);
}

export default useWillUnMount;