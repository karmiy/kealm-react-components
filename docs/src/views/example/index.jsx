import React, { memo, Children, cloneElement, useState, useMemo, useRef, useLayoutEffect, useEffect, useCallback } from 'react';
import {Button, Row, Col, Tag, Input, Popover} from '@kealm/react-components';
import { DomWrapper, Popper, Motion } from '@kealm/react-components-utils';
import { handleEleOfType } from 'utils/common/react-util';
import { useDebounce, useThrottle } from 'hooks';
import addDomEventListener from 'add-dom-event-listener';

function T(props) {
    console.log('T');
    return (
        <div>
            1
        </div>
    )
}
T = memo(T)

function TT(props) {
    console.log('TT');
    return (
        <div>
            {props.children}
        </div>
    )
}
TT = memo(TT);

function ExampleDoc() {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);
    const [pop, setPop] = useState(null);
    const ref = useRef(null);

    const func = useDebounce((v) => console.log(v), 2000, {leading: true, trailing: false});
    const func2 = useThrottle((v) => console.log(v), 2000);

    const scrollFunc = useCallback(() => {
        setCount(c => c + 1)
    }, [count]);

    const scrollFuncRef = useRef(null);
    scrollFuncRef.current = useCallback(() => {
        console.log(count);
    }, [count]);

    useEffect(() => {
        const scrollEvent = addDomEventListener(ref.current, 'scroll', () => {
            scrollFuncRef.current();
        });
        return () => {
            scrollEvent.remove();
        }
    }, [scrollFunc])

    return (
        <div>
            <div ref={ref} style={{height: '200px', overflow: 'auto', backgroundColor: '#1394ff'}}>
                <p style={{height: '2000px'}} />
            </div>
            <Button onClick={() => setCount(c => c + 1)} >Update{count}</Button>
        </div>
    )
}

export default ExampleDoc;