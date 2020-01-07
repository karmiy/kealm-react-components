import React, { useRef, useCallback } from 'react';
import useController from './useController';

const { createConfig } = useController;

/**
 * Build isChecked and checkChange hook for radio、checkbox
 * Core-props: defaultChecked、checked、groupValues、value、onChange
 */
function useCheckValue(defaultChecked, checked, groupValues, value, onChange) {
    // logic if it's packaged by group
    const _checked = groupValues ? groupValues.includes(value) : checked;

    const [isChecked, setIsChecked] = useController(defaultChecked, _checked, onChange, false);

    // logic checkChange
    const checkChange = useCallback((e, changedValue) => {
        setIsChecked(createConfig({
            value: e.target.checked,
            event: [e, changedValue],
        }));
    }, []);

    return {
        isChecked,
        checkChange,
    }
}

export default useCheckValue;