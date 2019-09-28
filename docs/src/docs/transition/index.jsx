import React, { useState, useMemo } from 'react';
import { Button, CollapseTransition, Row, Col } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

function TransitionDoc() {
    const [collapse, setCollapse] = useState(true);
    return (
        <div className='page-box'>
            <h1>Transition 过渡动画</h1>
            <p>提供了3种过渡效果的组件。</p>

            {/* collapse 展开折叠 */}
            <h2>collapse 展开折叠</h2>
            <p>实现折叠展开效果。</p>
            <div className="detail-box">
                <Button onClick={() => setCollapse(v => !v)}>Toggle</Button>
            </div>
            <Row gutter={16}>
                <Col span={5} className={'transition-demo-box'}>
                    <CollapseTransition visible={collapse}>
                        {useMemo(() => <div className="transition-demo" >collapse-base</div>, [])}
                    </CollapseTransition>
                </Col>
                <Col span={5}>
                    <CollapseTransition visible={collapse} unmountOnExit>
                        {useMemo(() => <div className="transition-demo" >collapse-unmount</div>, [])}
                    </CollapseTransition>
                </Col>
                <Col span={5}>
                    <CollapseTransition visible={collapse} appear>
                        {useMemo(() => <div className="transition-demo" >collapse-appear</div>, [])}
                    </CollapseTransition>
                </Col>
            </Row>

            {/* fade 淡入淡出 */}
            {/*<h2>fade 淡入淡出</h2>
            <p>控制元素的进出动画。</p>
            <Button type={'primary'} onClick={() => setVisible(v => !v)}>Toggle Fade</Button>*/}

            {/* API */}
            {/*{useMemo(() => <ApiTable title='Button' propsList={buttonProps} eventsList={buttonEvents} />, [])}*/}
        </div>
    )
}

export default TransitionDoc;