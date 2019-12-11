import React, { useState, useCallback, useRef, useEffect } from 'react';
import { isEmpty, isFunction, isArray, isObject, isString } from 'utils/common/base';
import { useStateStore } from '../common';

const mark = Symbol('controller');

/**
 * Build value、setValue for some components like defaultOpen、open、onOpenChange
 * setValue is constant
 */
function useController(defaultProp, prop, event, emptyProp = false, disabled = false, forceTrigger = false) {
    // logic propValue
    const [innerProp, setInnerProp] = useState(isEmpty(defaultProp) ? emptyProp : defaultProp);
    const value = prop !== undefined ? prop : innerProp; // The actual value(depending on prop, no default)

    // Save the state to return the constant setValue
    const stateStoreRef = useStateStore({
        event,
        prop,
        value,
        disabled,
        forceTrigger,
    });

    // logic setPropValue
    // v: value to set
    // rest: value to event
    /*const setValue = useCallback((v, ...rest) => {
        const { prop, value, event, disabled, forceTrigger } = stateStoreRef.current;

        if(disabled) return;

        // Example like setIsVisible(v => !v)
        isFunction(v) && (v = v(value));
        // isEmpty(c) ? (c = v) : (isFunction(c) && (c = c(value)));
        rest = !rest.length ? [v] : rest.map(c => isFunction(c) ? c(value) : c);
        // if(isFunction(c)) c = c(value);

        if(v === value && !forceTrigger) return;

        // trigger change event
        event(...rest);
        // If there is prop, it is controlled by self
        if(prop !== undefined) return;

        setInnerProp(v);
    }, []);*/

    const eventTrigger = useCallback(({name, param, isChanged, transform = true}) => {
        const { value, event, forceTrigger } = stateStoreRef.current;

        if(isEmpty(name) && !forceTrigger && !isChanged) return; // single
        if(!isEmpty(name) && isObject(forceTrigger) && !forceTrigger[name] && !isChanged) return; // multiple

        const params = transform ?
            (
            isArray(param) ?
            param.map(p => isFunction(p) ? p(value) : p)
            :
            [isFunction(param) ? param(value) : param]
            )
            :
            [param];

        if(isFunction(event)) {
            event(...params);
        } else {
            const func = event[name];
            func && func(...params);
        }
    }, []);

    const setValue = useCallback(config => {
        const { prop, value, event, disabled } = stateStoreRef.current;

        if(disabled) return;

        if(useController.isConfig(config)) {
            let { value: nextValue, event: eventConfig } = config;

            if(!Object.keys(config).includes('event')) console.error('The event parameter cannot be null');

            // Example like setIsVisible(v => !v)
            isFunction(nextValue) && (nextValue = nextValue(value));

            const isChanged = nextValue !== value;

            // Trigger change event
            // 1. Multiple event items
            if(isObject(event)) {
                isObject(eventConfig) && Object.keys(eventConfig).forEach(name => eventTrigger({ name, param: eventConfig[name], isChanged }));

                isArray(eventConfig) && eventConfig.forEach(name => eventTrigger({ name, param: nextValue, isChanged, transform: false }));

                isString(eventConfig) && eventTrigger({ name: eventConfig, param: nextValue, isChanged, transform: false });
            }

            // 2. Single event items
            if(isFunction(event)) {
                eventTrigger({ param: eventConfig, isChanged });
            }
            // If there is prop, it is controlled by self
            if(prop !== undefined) return;

            setInnerProp(nextValue);
        } else {
            const nextValue = isFunction(config) ? config(value) : config;
            const isChanged = nextValue !== value;

            eventTrigger({ param: nextValue, isChanged, transform: false});

            // If there is prop, it is controlled by self
            if(prop !== undefined) return;

            setInnerProp(nextValue);
        }
    }, []);

    return [value, setValue, setInnerProp];
}

/**
 * { value, eventName: string / array, eventParam }
 * @param config
 * @returns object
 */
useController.createConfig = function (config) {
    return {
        ...config,
        [mark]: mark,
    }
}

useController.isConfig = function (config) {
    return isObject(config) && config[mark] === mark;
}

useController.catchValue = function (config, prevValue) {
    if(useController.isConfig(config)) {
        return isFunction(config.value) ? config.value(prevValue) : config.value;
    }
    return isFunction(config) ? config(prevValue) : config;
}

export default useController;