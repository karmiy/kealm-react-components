import React, { useState, useCallback, useRef } from 'react';
import useDidUpdate from './useDidUpdate';

/**
 * useState will callback
 */
function useStateCallable(defaultState) {
    const [state, setState] = useState(defaultState);
    const callbackRef = useRef(null);
    const toggleRef = useRef(false);

    useDidUpdate(() => {
        if(toggleRef.current) {
            callbackRef.current && callbackRef.current();
            callbackRef.current = null;
            toggleRef.current = false;
        }
    });

    const _setState = useCallback((nextState, callback) => {
        if(callback) {
            toggleRef.current = true;
            callbackRef.current = callback;
        }
        setState(nextState);
    }, [setState]);

    return [state, _setState];
}

export default useStateCallable;