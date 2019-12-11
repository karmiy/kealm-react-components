import React, { useCallback } from 'react';
import useController from './useController';

const { createConfig } = useController;

/**
 * Build inputValue, setInputValue and inputChange hook for input
 * Core-props: defaultValue、value、onChange
 */
function useInputValue(defaultValue, value, onChange) {
    const [inputValue, setInputValue, setInnerValue] = useController(defaultValue, value, onChange, '');

    const inputChange = useCallback(e => {
        setInputValue(createConfig({
            value: e.target.value,
            event: e,
        }));
    }, []);

    return {
        inputValue,
        setInputValue: setInnerValue,
        inputChange,
    }
}

export default useInputValue;