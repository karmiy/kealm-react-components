import React, { useState, useCallback } from 'react';
import useController from './useController';

/**
 * Build inputValue, setInputValue and inputChange hook for input
 * Core-props: defaultValue、value、onChange
 */
function useInputValue(defaultValue, value, onChange) {
    const [inputValue, setInputValue] = useController(defaultValue, value, onChange, '');

    const inputChange = useCallback(e => {
        setInputValue(e.target.value, e);
    }, []);

    return {
        inputValue,
        setInputValue,
        inputChange,
    }
}

export default useInputValue;