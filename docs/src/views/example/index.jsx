import React, { useState, useMemo, useRef } from 'react';
import { Button } from '@kealm/react-components';
import { DomWrapper, Popper } from '@kealm/react-components-utils';

function ExampleDoc() {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(true);
    const [pop, setPop] = useState(null);
    return (
        <div className='page-box'>
            <Button onClick={() => setCount(c => c + 1)}>累加</Button>
            <Button onClick={() => setVisible(v => !v)}>切换</Button>
            <Button onClick={() => setPop(<div>Popper Element</div>)}>添加popper</Button>
            <Button onClick={() => setPop(null)}>移除popper</Button>
            <Popper
                popper={pop}
            >
                <Button style={{margin: '150px 0 300px'}}>Reference</Button>
            </Popper>
        </div>
    )
}

export default ExampleDoc;