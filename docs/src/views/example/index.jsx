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

function TT(props) {
    console.log('TT');
    return (
        <div>
            2
        </div>
    )
}

function ExampleDoc() {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);
    const [pop, setPop] = useState(null);

    return (
        <div>
            true
            <T>
                {[1,2,3].map(item => {
                    console.log(item);
                    return <div key={item}>{item}</div>;
                })}
                <TT />
            </T>
            <Button onClick={() => setCount(1)} >Update</Button>
        </div>
    )
}

export default ExampleDoc;