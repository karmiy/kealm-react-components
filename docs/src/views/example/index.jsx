import React, { Children, cloneElement, useState, useMemo, useRef } from 'react';
import { Button, Row, Col } from '@kealm/react-components';
import { DomWrapper, Popper } from '@kealm/react-components-utils';
import { handleEleOfType } from 'utils/common/react-util';

function ExampleDoc() {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(true);
    const [pop, setPop] = useState(null);

    const el = (
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
    });

    return (
        <div className='page-box'>
            {_el}
        </div>
    )
}

export default ExampleDoc;