import React, { useRef, useCallback } from 'react';
import { useForceUpdate, useStateStore } from 'hooks';
import { isEmpty } from 'utils/common/base';
import { isArray } from 'utils/common/base';

/**
 * Build checkedValue and checkChange hook for radio-group、checkbox-group
 * Core-props: defaultChecked、checked、groupValues、value、onChange、disabled
 * Param.defaultValue defaults to empty arrays when checkbox-group
 */
function useCheckGroupValue(defaultValue, value, onChange) {
    // Judge whether it's checkbox or radio
    const isCheckbox = isArray(defaultValue);

    const forceUpdate = useForceUpdate();
    // defaultValue
    const _valueRef = useRef(defaultValue);
    // Actually selected value (depending on value, not default)
    const checkedValue = value !== undefined ? value : _valueRef.current;

    const stateStoreRef = useStateStore({
        isCheckbox,
        checkedValue,
        onChange,
        value,
    })

    const checkChange = useCallback(e => {
        const { isCheckbox, checkedValue, onChange, value } = stateStoreRef.current;

        let nextValue = null;
        // When value is valued, it is controlled by the user's own onChange
        if(isCheckbox) {
            // changed value and checked of checkbox
            const { value: changedValue, checked: changedChecked} = e.target;
            // value of checkbox group after change
            const nextCheckedValue = changedChecked
                ? [...checkedValue, changedValue]
                : checkedValue.filter(item => item !== changedValue);

            onChange(nextCheckedValue);
            nextValue = nextCheckedValue;
        }else {
            onChange(e);
            nextValue = e.target.value;
        }
        if(!isEmpty(value)) return;

        // group Internal Control When Value is Valueless
        _valueRef.current = nextValue;
        forceUpdate();

    }, []);

    return {
        checkedValue,
        checkChange,
    }
}

export default useCheckGroupValue;