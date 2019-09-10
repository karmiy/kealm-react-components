import React, { useMemo } from 'react';

/**
 * 全局配置项
 */
function useContextConf(name) {
    return useMemo(() => {
        return {
            componentCls: `km-${name}`,
        }
    }, [])
}

export default useContextConf;