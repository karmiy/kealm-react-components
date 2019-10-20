import React, { useCallback, useRef } from 'react';

/**
 * Consistent callback
 */
function useConsistentFunc(fn, dependencies) {
    const _fn = useCallback(fn, dependencies);
    const _fnStore = useRef(null);
    _fnStore.current = _fn;
    const {current: _consistent} = useRef((...rest) => {
        return _fnStore.current(...rest);
    });
    return _consistent;
}

export default useConsistentFunc;