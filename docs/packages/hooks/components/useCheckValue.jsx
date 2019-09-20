import React, { useRef, useCallback } from 'react';
import { useForceUpdate } from 'hooks';

/**
 * build isChecked and checkChange hook for radio、checkbox
 * core-props: defaultChecked、checked、groupValues、value、onChange、disabled
 */
function useCheckValue(defaultChecked, checked, groupValues, value, onChange, disabled) {
    // logic if it's packaged by group
    const _checked = groupValues ? groupValues.includes(value) : checked;

    // logic isChecked
    const forceUpdate = useForceUpdate();
    const _checkedRef = useRef(defaultChecked || false); // 默认选中状态
    const isChecked = _checked !== undefined ? _checked : _checkedRef.current; // 实际选中(依赖checked，没有取默认)

    // logic checkChange
    const checkChange = useCallback(e => {
        if(disabled) return;

        onChange(e);
        // If there is props. checked, it is controlled by props. checked
        if(checked !== undefined) return;

        _checkedRef.current = e.target.checked;
        forceUpdate();
    }, [onChange, checked, disabled]);

    return {
        isChecked,
        checkChange,
    }
}

export default useCheckValue;