import React, { useRef, useMemo } from 'react';

/**
 * Store newest props，Fix the delayed acquisition of props closures
 */
function usePropsStore(props) {
    const propsStore = useRef(null);
    useMemo(() => {
        propsStore.current = props;
    }, [props]);

    return propsStore;
}

export default usePropsStore;