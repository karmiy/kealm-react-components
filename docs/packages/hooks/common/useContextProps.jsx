import React, { useMemo, useContext } from 'react';
import { shallowMergeProp } from 'utils/object';

/**
 * prop from props else context
 */
function useContextProps(props, context, effects = []) {
    const cxt = useContext(context) || {};
    return shallowMergeProp(cxt, props, effects);
}

export default useContextProps;