import React, { useMemo } from 'react';

/**
 * Get events for the input box
 */
function useInputEvents(props) {
    const {
        /* 事件 */
        onChange,
        onKeyDown,
        onKeyPress,
        onKeyUp,
        onBlur,
        onFocus,
        onInput,
        /* attrs */
        autoFocus,
        maxLength,
        minLength,
        max,
        min,
        placeholder,
        disabled,
        autoComplete,
        name,
        readOnly,
        step,
        ...others
    } = props;

    const inputEvents = useMemo(() => {
        return {
            onChange,
            onKeyDown,
            onKeyPress,
            onKeyUp,
            onBlur,
            onFocus,
            onInput,
        }
    }, [onChange, onKeyDown, onKeyPress, onKeyUp, onBlur, onFocus, onInput]);

    return {
        inputEvents,
        ...others,
    }
}

export default useInputEvents;