import React, { useState, useCallback, useRef } from 'react';
import useDidUpdate from './useDidUpdate';

/**
 * UseState will callback
 */
function useStateCallable(defaultState, isAsync = false) {
    const [state, setState] = useState(defaultState);
    const callbackRef = useRef(null);
    const toggleRef = useRef(false);

    useDidUpdate(() => {
        if(toggleRef.current) {
            callbackRef.current && callbackRef.current(state);
            callbackRef.current = null;
            toggleRef.current = false;
        }
    }, undefined, isAsync);

    const _setState = useCallback((nextState, callback) => {
        if(callback) {
            toggleRef.current = true;
            callbackRef.current = callback;
        }
        setState(nextState);
    }, []);

    return [state, _setState];
}

export default useStateCallable;