import React, { useCallback } from 'react';
import { useController } from 'hooks';

/**
 * Build inputValue, setInputValue and inputChange hook for input
 * Core-props: defaultValue、value、onChange
 */
function useInputValue(defaultValue, value, onChange) {
    const [inputValue, setInputValue, setInnerValue] = useController(defaultValue, value, onChange, '');

    const inputChange = useCallback(e => {
        setInputValue(e.target.value, e);
    }, []);

    return {
        inputValue,
        setInputValue: setInnerValue,
        inputChange,
    }
}

export default useInputValue;