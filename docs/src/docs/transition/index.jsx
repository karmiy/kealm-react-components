import React, { useState, useMemo, useCallback } from 'react';
import { Button, FadeTransition, CollapseTransition, ZoomTransition, Row, Col } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';
import { commonProps, commonEvents, fadeTransitionProps, zoomTransitionProps } from 'api/transition';
import { CodeFade, CodeCollapse, CodeZoom } from 'demos/transition';

function TransitionDoc() {
    const [fade, setFade] = useState(true);
    const [collapse, setCollapse] = useState(true);
    const [zoom, setZoom] = useState(true);

    const changeFade = useCallback(() => {
        setFade(v => !v);
    }, [setFade]);

    const changeCollapse = useCallback(() => {
        setCollapse(v => !v);
    }, [setCollapse]);

    const changeZoom = useCallback(() => {
        setZoom(v => !v);
    }, [setZoom]);

    return (
        <div className='page-box'>
            <h1>Transition 过渡动画</h1>
            <p>提供了3种过渡效果的组件。</p>

            {/* Fade 淡入淡出 */}
            <h2>Fade 淡入淡出</h2>
            <p>控制元素的进出动画。</p>
            <div className="detail-box">
                <Button onClick={changeFade}>Toggle</Button>
            </div>
            <Row gutter={16}>
                <Col span={5} className={'transition-demo-box'}>
                    <FadeTransition visible={fade}>
                        {useMemo(() => <div className="transition-demo" >fade-base</div>, [])}
                    </FadeTransition>
                </Col>
                <Col span={5} className={'transition-demo-box'}>
                    <FadeTransition visible={fade} unmountOnExit>
                        {useMemo(() => <div className="transition-demo" >fade-unmount</div>, [])}
                    </FadeTransition>
                </Col>
                <Col span={5} className={'transition-demo-box'}>
                    <FadeTransition visible={fade} appear>
                        {useMemo(() => <div className="transition-demo" >fade-appear</div>, [])}
                    </FadeTransition>
                </Col>
            </Row>
            <HighLight code={CodeFade} />

            {/* Collapse 展开折叠 */}
            <h2>Collapse 展开折叠</h2>
            <p>实现折叠展开效果。</p>
            <div className="detail-box">
                <Button onClick={changeCollapse}>Toggle</Button>
            </div>
            <Row gutter={16}>
                <Col span={5} className={'transition-demo-box'}>
                    <CollapseTransition visible={collapse}>
                        {useMemo(() => <div className="transition-demo" >collapse-base</div>, [])}
                    </CollapseTransition>
                </Col>
                <Col span={5} className={'transition-demo-box'}>
                    <CollapseTransition visible={collapse} unmountOnExit>
                        {useMemo(() => <div className="transition-demo" >collapse-unmount</div>, [])}
                    </CollapseTransition>
                </Col>
                <Col span={5} className={'transition-demo-box'}>
                    <CollapseTransition visible={collapse} appear>
                        {useMemo(() => <div className="transition-demo" >collapse-appear</div>, [])}
                    </CollapseTransition>
                </Col>
            </Row>
            <HighLight code={CodeCollapse} />

            {/* Zoom 缩放 */}
            <h2>Zoom 缩放</h2>
            <p>元素的缩放动画。</p>
            <div className="detail-box">
                <Button onClick={changeZoom}>Toggle</Button>
            </div>
            <Row gutter={16}>
                <Col span={5} className={'transition-demo-box'}>
                    <ZoomTransition visible={zoom}>
                        {useMemo(() => <div className="transition-demo" >zoom-center</div>, [])}
                    </ZoomTransition>
                </Col>
                <Col span={5} className={'transition-demo-box'}>
                    <ZoomTransition visible={zoom} position={'top'}>
                        {useMemo(() => <div className="transition-demo" >zoom-top</div>, [])}
                    </ZoomTransition>
                </Col>
                <Col span={5} className={'transition-demo-box'}>
                    <ZoomTransition visible={zoom} position={'bottom'}>
                        {useMemo(() => <div className="transition-demo" >zoom-bottom</div>, [])}
                    </ZoomTransition>
                </Col>
                <Col span={5} className={'transition-demo-box'}>
                    <ZoomTransition visible={zoom} position={'left'}>
                        {useMemo(() => <div className="transition-demo" >zoom-left</div>, [])}
                    </ZoomTransition>
                </Col>
                <Col span={5} className={'transition-demo-box'}>
                    <ZoomTransition visible={zoom} position={'right'}>
                        {useMemo(() => <div className="transition-demo" >zoom-right</div>, [])}
                    </ZoomTransition>
                </Col>
            </Row>
            <HighLight code={CodeZoom} />

            {/* API */}
            {useMemo(() => <ApiTable title='Common' propsList={commonProps} eventsList={commonEvents} />, [])}
            {useMemo(() => <ApiTable title='Fade Transition' propsList={fadeTransitionProps} />, [])}
            {useMemo(() => <ApiTable title='Zoom Transition' propsList={zoomTransitionProps} />, [])}
        </div>
    )
}

export default TransitionDoc;