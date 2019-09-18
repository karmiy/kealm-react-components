import React, { useLayoutEffect } from 'react';

/**
 * componentDidMount
 */
function useDidMount(callback) {
    useLayoutEffect(() => {
        callback && callback();
    }, []);
}

export default useDidMount;