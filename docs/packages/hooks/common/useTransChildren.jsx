import React, { useMemo } from 'react';
import { isFragment } from 'react-is';

/**
 * translate children of props without fragment
 */
function useTransChildren(children) {
    return useMemo(() => {
        return isFragment(children) ? children.props.children : children;
    }, [children]);
}

export default useTransChildren;