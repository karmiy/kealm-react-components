import React, { useCallback, useRef } from 'react';
import useDidUpdate from './useDidUpdate';

/**
 * UseCallback with unique
 */
function useCallbackUnique(fn, dependencies) {
    const callbackRef = useRef(null);
    const _fn = useCallback(fn, dependencies);

}

export default useCallbackUnique;