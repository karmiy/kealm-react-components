import React, { useState, useCallback, useEffect, useRef } from 'react';
import addDomEventListener from 'add-dom-event-listener';
import { useThrottle, useSyncOnce } from 'hooks';

/**
 * Use for long list
 * @param list
 * @param renderCount
 * @param itemSize
 * @param extraCount: The number of extra nodes rendered outsize of window
 * @param enable
 * @returns {{totalSize: number, offset: number, scrollNodeRef: *, start: number, end: number}}
 */
function useVirtualScroll(list = [], renderCount, itemSize, extraCount = 0, enable = true) {
    const [start, setStart] = useState(-extraCount);
    const [offset, setOffset] = useState(0);
    const scrollNodeRef = useRef(null);
    const scrollFuncRef = useRef(null);
    useSyncOnce(() => {
        !window.k && (window.k = scrollNodeRef);
    })

    const onScroll = useCallback(e => {
        const scrollTop = e.target.scrollTop;
        const _start = Math.floor(scrollTop / itemSize) - extraCount;
        if(Math.abs(_start - start) < extraCount) return;

        setStart(_start);
        setOffset(Math.max(scrollTop - extraCount * itemSize, 0));
    }, [itemSize, extraCount, start]);

    scrollFuncRef.current = useThrottle(onScroll, 1000 / 60);

    /*scrollFuncRef.current = useCallback(e => {
        const scrollTop = e.target.scrollTop;
        const _start = Math.floor(scrollTop / itemSize) - extraCount;
        if(Math.abs(_start - start) < extraCount) return;

        setStart(_start);
        setOffset(Math.max(scrollTop - extraCount * itemSize, 0));
    }, [itemSize, extraCount, start]);*/

    useEffect(() => {
        const scrollNode = scrollNodeRef.current;

        const scrollEvent = enable && scrollNode ? addDomEventListener(scrollNodeRef.current, 'scroll', e => {
            scrollFuncRef.current(e);
        }) : null;
        return () => scrollEvent && scrollEvent.remove();
    }, [enable]);

    // console.log(start, start + renderCount + extraCount, offset, list.length * itemSize);

    return {
        scrollNodeRef,
        start: Math.max(start, 0),
        end: start + renderCount + 2 * extraCount,
        offset,
        totalSize: list.length * itemSize,
    };
}

export default useVirtualScroll;