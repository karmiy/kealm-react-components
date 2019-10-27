import React, { useState, useMemo, useRef } from 'react';
import { Button } from '@kealm/react-components';
import { DomWrapper, Popper, Reference, PopperManager } from '@kealm/react-components-utils';

function ExampleDoc() {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    return (
        <div className='page-box'>
            <Button onClick={() => setCount(c => c + 1)}>累加</Button>
            <Button onClick={() => console.log(ref.current.el)}>查看</Button>
            {/*<Popper
                popper={
                    <div>
                        123
                    </div>
                }
                reference={
                    <Button style={{marginTop: '300px'}}>Reference</Button>
                }
            />*/}
            <DomWrapper ref={ref}>
                {count ? count : null}
            </DomWrapper>
        </div>
    )
}

export default ExampleDoc;