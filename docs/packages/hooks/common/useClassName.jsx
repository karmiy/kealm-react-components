import React, { useMemo } from 'react';
import { mergeStr } from 'utils/common/base';

/**
 * Build root className
 */
function useClassName(obj = {}, dependencies) {
    return useMemo(() => {
        return mergeStr(obj);
    }, dependencies);
}

export default useClassName;