import React, { useCallback, useRef } from 'react';
import useDidMount from './useDidMount';
import useDidUpdate from './useDidUpdate';
import usePrevProps from './usePrevProps';
import { isArray, isEmpty } from 'utils/common/base';

/**
 * Consistent callback
 */
function useWatch(fn, watcher, immediate = false, async = false) {
    if(isEmpty(watcher)) throw new Error('watch prop can\'t be empty');
    if(!isArray(watcher)) throw new Error('parameter 1 needs to be an array');

    const prev = usePrevProps([...watcher]);

    const _fnStore = useRef(null);
    _fnStore.current = fn;

    immediate && useDidMount(() => {
        prev ? _fnStore.current(...prev) : _fnStore.current(prev);
    }, async);

    useDidUpdate(() => {
        prev ? _fnStore.current(...prev) : _fnStore.current(prev);
    }, [...watcher], async);
}

export default useWatch;