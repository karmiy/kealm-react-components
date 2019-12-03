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
import { isObject } from '../../../packages/utils/common/base';
import { isElement } from 'react-is';
import { isValidDate, isValidFormat } from 'utils/common/date';
window.isValidDate = isValidDate;

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
        // console.log(isElement(this));
        console.log(this);
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

function logValidDate(dateStr, format, expect, isStrict = true) {
    const result = isValidDate(dateStr, format, isStrict);
    console.log(`verifyDate: ${dateStr}; expect: ${expect}; result: ${result}; ------------- pass: ${expect === result}`);
}

function logValidFormat(dateStr, format, expect, isStrict = true) {
    const result = isValidFormat(dateStr, format, isStrict);
    console.log(`verifyDate: ${dateStr}; expect: ${expect}; result: ${result}; ------------- pass: ${expect === result}`);
}

function ExampleDoc() {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);
    const [pop, setPop] = useState(null);
    const [value, setValue] = useState(null);
    const ref = useRef(null);

    const func = useDebounce((v) => console.log(v), 2000, {leading: true, trailing: false});
    const func2 = useThrottle((v) => console.log(v), 2000);
    const el = <K>123</K>
    // console.log(isElement(el));
    // console.log(el);
    logValidDate('2019-01-01 12:13:21', 'YYYY-MM-DD HH:mm:ss', true);
    logValidDate('2019-01-01 12:13:21', 'YYYY-MM-DD hh:mm:ss', true);
    logValidDate('2019-01-01 13:13:21', 'YYYY-MM-DD hh:mm:ss', false);
    logValidDate('2019-01-01 12:13:60', 'YYYY-MM-DD hh:mm:ss', false);
    logValidDate('2019-02-28', 'YYYY-MM-DD', true);
    logValidDate('2019-02-29', 'YYYY-MM-DD', false);
    logValidDate('2019#01-29', 'YYYY#MM-DD', true);
    logValidDate('19:23?59', 'HH:mm?ss', true);
    logValidDate('1970#13', 'YYYY#mm', true);
    logValidDate('1969#13', 'YYYY#mm', true);
    logValidDate('59%@(11', 'mm%@(ss', true);

    // logValidFormat('59?11', 'mm?ss', true);
    return (
        <div>
            {/*{el}*/}
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