import React, { useRef, useCallback } from 'react';
import { useController } from 'hooks';
import { isArray } from 'utils/common/base';

/**
 * Build checkedValue and checkChange hook for radio-group、checkbox-group
 * Core-props: defaultChecked、checked、groupValues、value、onChange、disabled
 * Param.defaultValue defaults to empty arrays when checkbox-group
 */
function useCheckGroupValue(defaultValue, value, onChange) {
    // Judge whether it's checkbox or radio
    const isCheckbox = isArray(defaultValue);

    const [checkedValue, setCheckedValue] = useController(defaultValue, value, onChange, isCheckbox ? [] : undefined);

    const checkChange = useCallback((e, changedValue) => {
        if(isCheckbox) {
            setCheckedValue(checkedValue => {
                // changed value and checked of checkbox
                const { checked: changedChecked} = e.target;
                // value of checkbox group after change
                return changedChecked
                    ? [...checkedValue, changedValue]
                    : checkedValue.filter(item => item !== changedValue);
            });
        } else {
            setCheckedValue(changedValue, e, changedValue);
        }
    }, []);

    return {
        checkedValue,
        checkChange,
    }
}

export default useCheckGroupValue;