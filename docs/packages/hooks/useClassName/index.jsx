import React, { useMemo } from 'react';

/**
 * 构建className
 */
function useClassName(obj = {}, dependencies) {
    return useMemo(() => {
        let className = '';
        for(let cls in obj) {
            obj[cls] && (className += `${cls} `);
        }
        return className.slice(0, -1);
    }, dependencies);
}

export default useClassName;