import React, { useRef } from 'react';


function useSyncOnce(callback) {
    const mounted = useRef(true);
    if(mounted.current) {
        callback && callback();
        mounted.current = false
    }
}

export default useSyncOnce;