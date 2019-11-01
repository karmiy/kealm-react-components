import React, { Children, cloneElement, useState, useMemo, useRef, useLayoutEffect, useEffect } from 'react';
import {Button, Row, Col, Tag, Input, Popover} from '@kealm/react-components';
import { DomWrapper, Popper, Motion } from '@kealm/react-components-utils';
import { handleEleOfType } from 'utils/common/react-util';

function ExampleDoc() {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(true);
    const [pop, setPop] = useState(null);
    // const [ele, setEle] = useState([<div key={1} style={{width: '200px', border: '1px solid #1394ff'}} >123</div>]);
    const [ele, setEle] = useState([<Col key={1}><Tag>123</Tag></Col>]);
    const [tags, setTags] = useState(['Tag1']);

    /*const el = (
        <div>
            <div>3333</div>
            <>
                <Col>1</Col>
            </>
            <div>
                <Col>2</Col>
                <Col>3</Col>
            </div>
        </div>
    )

    const _el = handleEleOfType(el, 'k', child => {
        return cloneElement(child, {
            children: '10'
        })
    });*/
    const el = <div key={2} style={{width: '200px', border: '1px solid #1394ff'}} >321</div>
    return (
        <div className='page-box'>
            <Row gutter={8}>
                <Motion transitionName={'km-zoom-center'}>
                    {ele}
                </Motion>
                <Col>
                    <Button onClick={() => setEle(r => {
                        return [
                            ...r,
                            <Col key={r.length + 1}><Tag>321</Tag></Col>
                        ]
                    })}>添加</Button>
                    <Button onClick={() => setEle(r => {
                        const rr = r.pop();
                        return [...r];
                    })}>移除</Button>
                </Col>
            </Row>
            <Row gutter={8}>
                <Motion transitionName={'km-zoom-center'}>
                    {tags.map(tag => <Col key={tag}><Tag closable>{tag}</Tag></Col>)}
                </Motion>
                <Col>
                    <Button onClick={() => setTags(r => {
                        return [
                            ...r,
                            `${r.length + 1}`
                        ]
                    })}>添加</Button>
                </Col>
            </Row>
            <Popover>
                <span>111</span>
            </Popover>
        </div>
    )
}

export default ExampleDoc;