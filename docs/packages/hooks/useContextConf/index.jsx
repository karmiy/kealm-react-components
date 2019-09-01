import React from 'react';

/**
 * 全局配置项
 */
function useContextConf(name) {
    return {
        componentCls: `km-${name}`,
    }
}

export default useContextConf;