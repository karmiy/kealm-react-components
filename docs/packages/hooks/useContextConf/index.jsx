import React, { useMemo } from 'react';

/**
 * global config
 */
function useContextConf(name) {
    return useMemo(() => {
        return {
            componentCls: `km-${name}`,
        }
    }, [])
}

export default useContextConf;