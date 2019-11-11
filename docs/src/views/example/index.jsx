import React, { memo, Children, cloneElement, useState, useMemo, useRef, useLayoutEffect, useEffect } from 'react';
import {Button, Row, Col, Tag, Input, Popover} from '@kealm/react-components';
import { DomWrapper, Popper, Motion } from '@kealm/react-components-utils';
import { handleEleOfType } from 'utils/common/react-util';

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

    return (
        <div>
            true
            <TT>
                {/*<T />*/}
                123
            </TT>
            <Button onClick={() => setCount(c => c+1)} >Update{count}</Button>
        </div>
    )
}

export default ExampleDoc;