import React, { useRef, useMemo, useCallback } from 'react';
import { useForceUpdate } from "hooks";

/**
 * build isChecked and checkChange hook for radio、checkbox
 * core-props: defaultChecked、checked、onChange、disabled
 */
function useCheckValue(defaultChecked, checked, onChange, disabled) {
    // logic isChecked
    const forceUpdate = useForceUpdate();
    const _checkedRef = useRef(defaultChecked || false); // 默认选中状态
    const isChecked = checked !== undefined ? checked : _checkedRef.current; // 实际选中(依赖checked，没有取默认)

    // logic checkChange
    const checkChange = useCallback(e => {
        if(disabled) return;

        onChange(e.target.value);
        // 如果有props.checked，由props.checked控制
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