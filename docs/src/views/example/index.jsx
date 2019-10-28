import React, { useState, useMemo, useRef } from 'react';
import { Button } from '@kealm/react-components';
import { DomWrapper, Popper } from '@kealm/react-components-utils';

function ExampleDoc() {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(true);
    const ref = useRef(null);
    window.ref = ref;
    const btn = <button className="k" key={'btn'}>btn</button>;
    return (
        <div className='page-box'>
            <Button onClick={() => setCount(c => c + 1)}>累加</Button>
            <Button onClick={() => setVisible(v => !v)}>切换</Button>
            {count ? (
                <>
                    <div>123</div>
                    {btn}
                </>
            ) : btn}
        </div>
    )
}

export default ExampleDoc;