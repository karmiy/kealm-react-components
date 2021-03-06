import React, { useRef, useEffect, useMemo } from 'react';

/**
 * Save the state to return the constant setValue
 * Typically used to retrieve stored data in an event
 */
function useStateStore(states = {}, async = true) {
    const stateStoreRef = useRef(null);

    (async ? useEffect : useMemo)(() => {
        stateStoreRef.current = states;
    }, Object.values(states));

    return stateStoreRef;
}

export default useStateStore;