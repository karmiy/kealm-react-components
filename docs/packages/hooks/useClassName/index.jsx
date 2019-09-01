import React from 'react';

/**
 * 构建className
 */
function useClassName(obj = {}) {
    let className = '';
    for(let cls in obj) {
        obj[cls] && (className += `${cls} `);
    }
    return className.slice(0, -1);
}

export default useClassName;