import React, { useMemo } from 'react';

/**
 * Global config
 */
function useContextConf(name) {
    return useMemo(() => {
        return {
            prefix: 'km',
            componentCls: `km-${name}`,
        }
    }, [name])
}

export default useContextConf;