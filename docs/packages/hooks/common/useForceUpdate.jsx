import React, { useState, useCallback } from 'react';

/**
 * Force update
 */
function useForceUpdate() {
    const setState = useState(0)[1];
    return useCallback(() => setState(x => x + 1), []);
}

export default useForceUpdate;