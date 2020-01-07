import React, { useRef } from 'react';

/**
 * Get last props
 */
function usePrevProps(props) {
    const propsRef = useRef(null);
    const flagRef = useRef(false);
    if(!flagRef.current) {
        propsRef.current = props;
        flagRef.current = true;
        return null;
    }else {
        const prevProps = propsRef.current;
        propsRef.current = props;
        return prevProps;
    }
}

export default usePrevProps;