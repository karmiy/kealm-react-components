import React, { useRef } from 'react';

/**
 * true => true
 * false => false
 * watch false -> true => always true
 */
function useCorrectOnce(variable) {
    const onceRef = useRef(variable);

    if(variable && !onceRef.current) {
        onceRef.current = true;
    }

    return onceRef.current;
}

export default useCorrectOnce;