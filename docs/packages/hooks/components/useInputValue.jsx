import React, { useState, useCallback } from 'react';

/**
 * build inputValue, setInputValue and inputChange hook for input
 * core-props: defaultValue、value、onChange
 */
function useInputValue(defaultValue, value, onChange) {
    // logic inputValue
    const [innerValue, setInnerValue] = useState(defaultValue || '');
    const inputValue = value !== undefined ? value : innerValue; // The actual value(depending on value, no default)

    // logic inputChange
    const inputChange = useCallback(e => {
        // trigger change event
        onChange(e);
        // If there is props.value, it is controlled by props.value
        if(value !== undefined) return;

        setInnerValue(e.target.value);
    }, [onChange, value, setInnerValue]);

    return {
        inputValue,
        setInputValue: setInnerValue,
        inputChange,
    }
}

export default useInputValue;