import React, { memo, Children, cloneElement, useState, useMemo, useRef, useLayoutEffect, useEffect } from 'react';
import {Button, Row, Col, Tag, Input, Popover} from '@kealm/react-components';
import { DomWrapper, Popper, Motion } from '@kealm/react-components-utils';
import { handleEleOfType } from 'utils/common/react-util';

function T(props) {
    console.log('T');
    return (
        <div>
            <p>{props.id}</p>
            {props.children}
        </div>
    )
}
T = memo(T);

function TT(props) {
    console.log('TT');
    return (
        <div>
            <p>{props.id}</p>
        </div>
    )
}
TT = memo(TT);

function ExampleDoc() {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(true);
    const [pop, setPop] = useState(null);

    return (
        <div>
            <T id={count}>
                <TT id={2} />
            </T>
            <Button onClick={() => setCount(1)} >Update</Button>
        </div>
    )
}

export default ExampleDoc;