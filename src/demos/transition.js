/* fade transition */
export const CodeFade =
`    import { useState, useMemo, useCallback } from 'react';
    import { FadeTransition, Button, Row, Col } from "@kealm/react-components";
    
    function Demo() {
        const [fade, setFade] = useState(true);
        
        const changeFade = useCallback(() => {
            setFade(v => !v);
        }, []);
        
        return (
            <div>
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
            </div>
        )
    }`

/* fade collapse */
export const CodeCollapse =
`    import { useState, useMemo, useCallback } from 'react';
    import { CollapseTransition, Button, Row, Col } from "@kealm/react-components";
    
    function Demo() {
        const [collapse, setCollapse] = useState(true);
        
        const changeCollapse = useCallback(() => {
            setCollapse(v => !v);
        }, []);
        
        return (
            <div>
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
            </div>
        )
    }`

/* fade zoom */
export const CodeZoom =
`    import { useState, useMemo, useCallback } from 'react';
    import { ZoomTransition, Button, Row, Col } from "@kealm/react-components";
    
    function Demo() {
        const [zoom, setZoom] = useState(true);
        
        const changeZoom = useCallback(() => {
            setZoom(v => !v);
        }, []);
        
        return (
            <div>
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
            </div>
        )
    }`