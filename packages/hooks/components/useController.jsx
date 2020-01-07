import React, { useState, useCallback, useRef, useEffect } from 'react';
import { isEmpty, isFunction, isArray, isObject, isString, isBoolean } from 'utils/common/base';
import { useStateStore } from '../common';

const mark = Symbol('controller');

/**
 * Build value、setValue for some components like defaultOpen、open、onOpenChange
 * setValue is constant
 */
function useController(defaultProp, prop, event, emptyProp = false, disabled = false) {
    // logic propValue
    const [innerProp, setInnerProp] = useState(isEmpty(defaultProp) ? emptyProp : defaultProp);
    const value = prop !== undefined ? prop : innerProp; // The actual value(depending on prop, no default)

    // Save the state to return the constant setValue
    const stateStoreRef = useStateStore({
        event,
        prop,
        value,
        disabled,
    });

    const shouldEventTrigger = useCallback((nextValue, shouldTrigger, name) => {
        const { value } = stateStoreRef.current;
        if(isEmpty(shouldTrigger)) {
            return nextValue !== value;
        }
        if(isBoolean(shouldTrigger)) return shouldTrigger;

        if(isFunction(shouldTrigger)) return shouldTrigger(value, nextValue);

        if(!isEmpty(name) && isObject(shouldTrigger) && !isEmpty(shouldTrigger[name])) {
            return isFunction(shouldTrigger[name]) ? shouldTrigger[name](value, nextValue) : !!shouldTrigger[name];
        }

        return nextValue !== value;
    }, []);

    const eventTrigger = useCallback(({nextValue, name, param, shouldTrigger, transform = true}) => {
        const { value, event } = stateStoreRef.current;

        if(!shouldEventTrigger(nextValue, shouldTrigger, name)) return;

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
        let nextValue = null;

        if(disabled) return;

        if(useController.isConfig(config)) {
            let { value: _nextValue, event: eventConfig, shouldTrigger } = config;

            if(!Object.keys(config).includes('event')) console.error('The event parameter cannot be null');

            // Example like setIsVisible(v => !v)
            nextValue = isFunction(_nextValue) ? _nextValue(value) : _nextValue;

            // Trigger change event
            // 1. Multiple event items
            if(isObject(event)) {
                isObject(eventConfig) && Object.keys(eventConfig).forEach(name => eventTrigger({ nextValue, name, param: eventConfig[name], shouldTrigger }));

                isArray(eventConfig) && eventConfig.forEach(name => eventTrigger({ nextValue, name, param: nextValue, shouldTrigger, transform: false }));

                isString(eventConfig) && eventTrigger({ nextValue, name: eventConfig, param: nextValue, shouldTrigger, transform: false });
            }

            // 2. Single event items
            if(isFunction(event)) {
                eventTrigger({ nextValue, param: eventConfig, shouldTrigger });
            }
        } else {
            nextValue = isFunction(config) ? config(value) : config;

            eventTrigger({ nextValue, param: nextValue, transform: false});
        }
        // If there is prop, it is controlled by self
        if(prop !== undefined) return;

        setInnerProp(nextValue);
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