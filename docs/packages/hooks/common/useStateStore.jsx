import React, { useRef, useEffect } from 'react';

/**
 * Save the state to return the constant setValue
 * Typically used to retrieve stored data in an event
 */
function useStateStore(states = {}) {
    const stateStoreRef = useRef(states);

    useEffect(() => {
        stateStoreRef.current = states;
    }, Object.values(states));

    return stateStoreRef;
}

export default useStateStore;