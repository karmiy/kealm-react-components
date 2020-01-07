import React, { Children, useState, useCallback } from 'react';
// import { isEmpty } from 'utils/common/base';
import useController from './useController';

function findFirstName(children = []) {
    let name = null;
    // if(Children.count(children) === 0) throw new Error('missing panels');
    if(Children.count(children) === 0) return null;

    const _children = Children.toArray(children),
        length = _children.length;

    for(let i = 0; i < length; i++) {
        if(_children[i] && _children[i].props.name) {
            name = _children[i].props.name;
            break;
        }
    }
    // if(name === null) throw new Error('can\'t find the first panel with name');

    return name;
}

/**
 * Build inputValue, setInputValue and inputChange hook for tabs
 * Core-props: defaultValue、value、onChange
 */
function useTabsValue(defaultValue, value, onChange, panels) {
    const [tabsValue, setTabsValue] = useController(defaultValue, value, onChange, findFirstName(panels));

    return {
        tabsValue,
        tabsChange: setTabsValue,
    }
}

export default useTabsValue;