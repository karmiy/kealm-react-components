import React, { useMemo } from 'react';
import { isEmpty } from 'utils/base';

/**
 * build object without empty(null、undefined)
 */
function useNotEmptyObj(obj = {}, dependencies) {
    return useMemo(() => {
        const _obj = {};
        for(let key in obj) {
            obj.hasOwnProperty(key) && !isEmpty(obj[key]) && (_obj[key] = obj[key]);
        }
        return _obj;
    }, dependencies);
}

export default useNotEmptyObj;