import React, { useMemo, useContext } from 'react';
import { shallowMergeProp } from 'utils/base/object';

/**
 * Prop from props else context
 */
function useContextProps(props, context, effects = []) {
    const cxt = useContext(context) || {};
    return shallowMergeProp(cxt, props, effects);
}

export default useContextProps;