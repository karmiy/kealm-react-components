import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useCorrectOnce, useController } from 'hooks';
import { isFunction } from 'utils/common/base';

/**
 * Build isVisible, setIsVisible and isMount hook for popper
 * Core-props: defaultVisible, visible, onVisibleChange, trigger
 */
function useTrigger(defaultVisible, visible, onVisibleChange, trigger, disabled) {
    // Not manual, default internal control
    if(trigger === 'click' || trigger === 'hover' || trigger === 'focus') visible = undefined;

    const [isVisible, setIsVisible] = useController(defaultVisible, visible, onVisibleChange);

    // Can be used to mount popper DOM
    const isMount = useCorrectOnce(isVisible);

    return {
        isVisible: disabled ? false : isVisible,
        setIsVisible,
        isMount,
    }
}

export default useTrigger;