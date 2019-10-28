import React, { useState, useMemo, useRef } from 'react';
import { Button } from '@kealm/react-components';
import { DomWrapper, Popper } from '@kealm/react-components-utils';

function ExampleDoc() {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(true);
    const ref = useRef(null);
    window.ref = ref;
    return (
        <div className='page-box'>
            <Button onClick={() => setCount(c => c + 1)}>累加</Button>
            <Button onClick={() => setVisible(v => !v)}>切换</Button>
            <Popper
                ref={ref}
                popper={
                    <div style={{display: visible ? 'block' : 'none'}}>
                        123
                    </div>
                }
                reference={
                    <Button style={{marginTop: '300px'}}>Reference</Button>
                }
            />
        </div>
    )
}

export default ExampleDoc;