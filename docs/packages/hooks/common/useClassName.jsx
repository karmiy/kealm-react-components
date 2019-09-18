import React, { useMemo } from 'react';

/**
 * build root className
 */
function useClassName(obj = {}, dependencies) {
    return useMemo(() => {
        let className = '';
        for(let cls in obj) {
            if(obj.hasOwnProperty(cls)) {
                obj[cls] && (className += `${cls} `);
            }
        }
        return className.slice(0, -1);
    }, dependencies);
}

export default useClassName;