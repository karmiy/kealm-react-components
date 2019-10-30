import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useCorrectOnce } from 'hooks';
import { isFunction } from 'utils/common/base';

/**
 * Build isVisible, setIsVisible and isMount hook for popper
 * Core-props: defaultVisible, visible, onVisibleChange, trigger
 */
function useTrigger(defaultVisible, visible, onVisibleChange, trigger, disabled) {
    const [isVisible, setIsVisible] = useState(defaultVisible || false); // Default invisible

    // Not manual, default internal control
    if(trigger === 'click' || trigger === 'hover' || trigger === 'focus') visible = undefined;

    const _isVisible = visible !== undefined ? visible : isVisible; // The actual state(depending on visible, no default)

    // Save the state to return the constant setIsVisible
    const stateStoreRef = useRef({
        _isVisible,
        trigger,
        onVisibleChange,
    });

    useEffect(() => {
        stateStoreRef.current = {
            _isVisible,
            trigger,
            onVisibleChange,
        }
    }, [_isVisible, trigger, onVisibleChange]);

    // Can be used to mount popper DOM
    const isMount = useCorrectOnce(_isVisible);

    // logic visibleChange
    const visibleChange = useCallback((v) => {
        const { _isVisible, trigger, onVisibleChange } = stateStoreRef.current;

        // Example like setIsVisible(v => !v)
        if(isFunction(v)) v = v(_isVisible);

        if(v === _isVisible) return;

        onVisibleChange(v);
        // If there is props.visible, it is controlled by props.visible
        if(trigger === 'manual') return;

        setIsVisible(v);
    }, []);

    return {
        isVisible: disabled ? false : _isVisible,
        setIsVisible: visibleChange,
        isMount,
    }
}

export default useTrigger;