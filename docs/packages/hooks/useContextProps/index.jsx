import React, { useMemo, useContext } from 'react';

const empty = {};

/**
 * prop from props else context
 */
function useContextProps(props, context) {
    const ctxt = useContext(context) || empty;

    return {...props, ...ctxt};
}

export default useContextProps;