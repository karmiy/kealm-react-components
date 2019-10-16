import React, { Children, useState, useCallback } from 'react';
import { isEmpty } from 'utils/common/base';

function findFirstName(children = []) {
    let name = null;
    if(Children.count(children) === 0) throw new Error('missing panels');

    const _children = Children.toArray(children),
        length = _children.length;

    for(let i = 0; i < length; i++) {
        if(_children[i] && _children[i].props.name) {
            name = _children[i].props.name;
            break;
        }
    }
    if(name === null) throw new Error('can\'t find the first panel with name');

    return name;
}

/**
 * Build inputValue, setInputValue and inputChange hook for tabs
 * Core-props: defaultValue、value、onChange
 */
function useTabsValue(defaultValue, value, onChange, panels) {
    // logic tabsValue
    const [innerValue, setInnerValue] = useState(!isEmpty(defaultValue) ? defaultValue : findFirstName(panels));
    const tabsValue = value !== undefined ? value : innerValue; // The actual value(depending on value, no default)

    // logic tabsChange
    const tabsChange = useCallback(v => {
        // trigger change event
        onChange(v);
        // If there is props.value, it is controlled by props.value
        if(value !== undefined) return;

        setInnerValue(v);
    }, [onChange, value, setInnerValue]);

    return {
        tabsValue,
        setTabsValue: setInnerValue,
        tabsChange,
    }
}

export default useTabsValue;