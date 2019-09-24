import React, { useLayoutEffect } from 'react';

/**
 * ComponentDidMount
 */
function useDidMount(callback) {
    useLayoutEffect(() => {
        callback && callback();
    }, []);
}

export default useDidMount;