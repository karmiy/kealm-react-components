import React, { useRef, useCallback } from 'react';
import { useForceUpdate } from 'hooks';

/**
 * Build isChecked and checkChange hook for radio、checkbox
 * Core-props: defaultChecked、checked、groupValues、value、onChange
 */
function useCheckValue(defaultChecked, checked, groupValues, value, onChange) {
    // logic if it's packaged by group
    const _checked = groupValues ? groupValues.includes(value) : checked;

    // logic isChecked
    const forceUpdate = useForceUpdate();
    const _checkedRef = useRef(defaultChecked || false); // default selected state
    const isChecked = _checked !== undefined ? _checked : _checkedRef.current; // The actual selected(depending on checked, no default)

    // logic checkChange
    const checkChange = useCallback(e => {
        // if(disabled) return;

        onChange(e);
        // If there is props.checked, it is controlled by props.checked
        if(checked !== undefined) return;

        _checkedRef.current = e.target.checked;
        forceUpdate();
    }, [onChange, checked]);

    return {
        isChecked,
        checkChange,
    }
}

export default useCheckValue;