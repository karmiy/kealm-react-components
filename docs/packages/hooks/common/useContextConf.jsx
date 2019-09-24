import React, { useMemo } from 'react';

/**
 * Global config
 */
function useContextConf(name) {
    return useMemo(() => {
        return {
            componentCls: `km-${name}`,
        }
    }, [])
}

export default useContextConf;