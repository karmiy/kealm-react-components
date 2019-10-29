import React, { useCallback, useState } from 'react';
import { useCorrectOnce } from 'hooks';

/**
 * Build isChecked and checkChange hook for radio、checkbox
 * Core-props: defaultChecked、checked、groupValues、value、onChange
 */
function useTrigger(defaultVisible, visible, onVisibleChange, trigger) {
    const [isVisible, setIsVisible] = useState(defaultVisible || false); // Default invisible

    // Not manual, default internal control
    if(trigger === 'click' || trigger === 'hover' || trigger === 'focus') visible = undefined;

    const _isVisible = visible !== undefined ? visible : isVisible; // The actual state(depending on visible, no default)

    // Can be used to mount popper DOM
    const isMount = useCorrectOnce(_isVisible);
    console.log(_isVisible);

    // logic visibleChange
    const visibleChange = useCallback((v) => {
        console.log(v, _isVisible);
        if(v === _isVisible) return;

        onVisibleChange(v);
        // If there is props.visible, it is controlled by props.visible
        if(trigger === 'manual') return;

        setIsVisible(v);
    }, [_isVisible, trigger]);

    return {
        isVisible: _isVisible,
        setIsVisible: visibleChange,
        isMount,
    }
}

export default useTrigger;