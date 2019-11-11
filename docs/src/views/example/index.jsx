import React, { memo, Children, cloneElement, useState, useMemo, useRef, useLayoutEffect, useEffect } from 'react';
import {Button, Row, Col, Tag, Input, Popover} from '@kealm/react-components';
import { DomWrapper, Popper, Motion } from '@kealm/react-components-utils';
import { handleEleOfType } from 'utils/common/react-util';
import { useDebounce, useThrottle } from 'hooks';

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

    const func = useDebounce((v) => console.log(v), 2000, {leading: true, trailing: false});
    const func2 = useThrottle((v) => console.log(v), 2000);

    return (
        <div>
            true
            {/*<TT>
                {useMemo(() => {
                    return <T />
                }, [])}
            </TT>*/}
            <Button onClick={() => func(10)} >Update{count}</Button>
        </div>
    )
}

export default ExampleDoc;