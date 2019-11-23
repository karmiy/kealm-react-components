import React, {
    Component,
    PureComponent,
    memo,
    Children,
    cloneElement,
    useState,
    useMemo,
    useRef,
    useLayoutEffect,
    useEffect,
    useCallback
} from 'react';
import {Button, Row, Col, Tag, Input, Popover, Radio} from '@kealm/react-components';
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

class K extends PureComponent {
    render() {
        console.log('k');
        return <div>K</div>
    }
}

class KK extends PureComponent {
    render() {
        console.log(<div>1</div>);
        console.log(this);
        console.log('kk');
        return <div>{this.props.children}</div>
    }
}

const values = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4}
]

function ExampleDoc() {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);
    const [pop, setPop] = useState(null);
    const [value, setValue] = useState(null);
    const ref = useRef(null);

    const func = useDebounce((v) => console.log(v), 2000, {leading: true, trailing: false});
    const func2 = useThrottle((v) => console.log(v), 2000);

    return (
        <div>
            <Radio.Group defaultValue={values[2]}>
                <Radio value={values[0]}>A</Radio>
                <Radio value={values[1]}>B</Radio>
                <Radio value={values[2]}>C</Radio>
                <Radio value={values[3]}>D</Radio>
            </Radio.Group>
            {/*<Button onClick={() => setCount(c => c + 1)} >Update{count}</Button>*/}
        </div>
    )
}

export default ExampleDoc;