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
import { Button, Row, Col, Tag, Input, Popover, Radio, DatePicker } from '@kealm/react-components';
import { DomWrapper, Popper, Motion } from '@kealm/react-components-utils';
import { handleEleOfType } from 'utils/common/react-util';
import { useDebounce, useThrottle, useController } from 'hooks';
import addDomEventListener from 'add-dom-event-listener';
import { isObject } from '../../../packages/utils/common/base';
import { isElement } from 'react-is';
import { isValidDate, isValidFormat, createCalendar } from 'utils/common/date';
import { YearPanel, DecadePanel, MonthPanel } from '../../../packages/components/cores/date-picker/panels';
import Calendar from '../../../packages/components/cores/date-picker/calendar';
window.isValidDate = isValidDate;
// console.log(useController);

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

function P(props) {
    return <div>{props.id} - {props.name}</div>
}

function createP(Component) {
    return function (props) {
        return (
            <Component {...props} id={10} />
        )
    }
}

const PP = createP(P);

function ExampleDoc() {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);
    const [pop, setPop] = useState(null);
    const [value, setValue] = useState(null);
    const ref = useRef(null);

    const func = useDebounce((v) => console.log(v), 2000, {leading: true, trailing: false});
    const func2 = useThrottle((v) => console.log(v), 2000);
    // const el = <K>123</K>
    // console.log(isElement(el));
    // console.log(el);
    /*logValidDate('2019-01-01 12:13:21', 'YYYY-MM-DD HH:mm:ss', true);
    logValidDate('2019-01-01 12:13:21', 'YYYY-MM-DD hh:mm:ss', true);
    logValidDate('2019-01-01 13:13:21', 'YYYY-MM-DD hh:mm:ss', false);
    logValidDate('2019-01-01 12:13:60', 'YYYY-MM-DD hh:mm:ss', false);
    logValidDate('2019-02-28', 'YYYY-MM-DD', true);
    logValidDate('2019-02-29', 'YYYY-MM-DD', false);
    logValidDate('2019#01-29', 'YYYY#MM-DD', true);
    logValidDate('19:23?59', 'HH:mm?ss', true);
    logValidDate('1970#13', 'YYYY#mm', true);
    logValidDate('1969#13', 'YYYY#mm', true);
    logValidDate('59%@(11', 'mm%@(ss', true);*/
    // console.log(createCalendar(2019, 7));

    // logValidFormat('59?11', 'mm?ss', true);

    // console.log('render');
    return (
        <div style={{
            width: '500px',
            height: '300px',
            border: '1px solid #e4e7ed'
        }}>
            <PP name={'kar'} />
            {/*{el}*/}
            {/*<div onClick={() => {
                setCount(1);
                setTimeout(() => setVisible(true));
            }}>test</div>
            <Radio.Group defaultValue={values[2]}>
                <Radio value={values[0]}>A</Radio>
                <Radio value={values[1]}>B</Radio>
                <Radio value={values[2]}>C</Radio>
                <Radio value={values[3]}>D</Radio>
            </Radio.Group>
            <DatePicker />*/}
            {/*<DecadePanel onSelect={(v, u) => console.log(v, u, 'select')} onChange={(v, u) => console.log(v, u, 'change')} />*/}
            {/*<Calendar defaultValue={new Date()} onSelect={(v) => console.log(v, 'select')} onChange={(v) => console.log(v, 'change')} />*/}
            {/*<YearPanel defaultValue={new Date('2018-01-01 12:11:10')} onSelect={(v) => console.log(v, 'select')} onChange={(v) => console.log(v, 'change')} visible={visible} />*/}
            <MonthPanel onSelect={(v) => console.log(v, 'select')} onChange={(v) => console.log(v, 'change')} visible={visible} />
            <Button onClick={() => setVisible(v => !v)} >Update</Button>
            {/*<Button onClick={() => setCount(c => c + 1)} >Update{count}</Button>*/}
        </div>
    )
}

export default ExampleDoc;