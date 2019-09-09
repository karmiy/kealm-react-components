import React, { useLayoutEffect } from 'react';

/**
 * componentWillUnMount
 */
function useWillUnMount(callback) {
    useLayoutEffect(() => callback, []);
}

export default useWillUnMount;