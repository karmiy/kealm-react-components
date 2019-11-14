/* 基本用法 */
export const CodeBasic =
`    import { Steps, Row, Col } from "@kealm/react-components";
    
    const Step = Steps.Step;
    
    ReactDom.render(
        <Row>
            <Col span={22}>
                <Steps current={1}>
                    <Step title={'Finished'} description={'This is a description.'}></Step>
                    <Step title={'In Progress'} subTitle={'Left 00:00:08'} description={'This is a description.'}></Step>
                    <Step title={'Waiting'} description={'This is a description.'}></Step>
                </Steps>
            </Col>
        </Row>,
        mountNode
    );`

/* 带图标的步骤条 */
export const CodeIcon =
`    import { Steps, Row, Col, Icon } from "@kealm/react-components";
    
    const Step = Steps.Step;
    
    const user = <Icon type={'user'}></Icon>,
        solution = <Icon type={'solution'}></Icon>,
        loading = <Icon type={'loading'}></Icon>,
        smile = <Icon type={'smile'}></Icon>;
    
    ReactDom.render(
        <Row>
            <Col span={22}>
                <Steps current={2}>
                    <Step icon={user} title={'Login'} description={'This is a description.'}></Step>
                    <Step icon={solution} title={'Verification'} description={'This is a description.'}></Step>
                    <Step icon={loading} title={'Pay'} description={'This is a description.'}></Step>
                    <Step icon={smile} title={'Done'} description={'This is a description.'}></Step>
                </Steps>
            </Col>
        </Row>,
        mountNode
    );`

/* 迷你版 */
export const CodeMini =
`    import { Steps, Row, Col, Icon } from "@kealm/react-components";
    
    const Step = Steps.Step;
    
    const user = <Icon type={'user'}></Icon>,
        solution = <Icon type={'solution'}></Icon>,
        loading = <Icon type={'loading'}></Icon>,
        smile = <Icon type={'smile'}></Icon>;
    
    ReactDom.render(
        <div className="detail-box">
            <Row>
                <Col span={22}>
                    <Steps current={1} size={'small'}>
                        <Step title={'Finished'} description={'This is a description.'}></Step>
                        <Step title={'In Progress'} subTitle={'Left 00:00:08'} description={'This is a description.'}></Step>
                        <Step title={'Waiting'} description={'This is a description.'}></Step>
                    </Steps>
                </Col>
            </Row>
            <Row>
                <Col span={22}>
                    <Steps current={2} size={'small'}>
                        <Step icon={user} title={'Login'} description={'This is a description.'}></Step>
                        <Step icon={solution} title={'Verification'} description={'This is a description.'}></Step>
                        <Step icon={loading} title={'Pay'} description={'This is a description.'}></Step>
                        <Step icon={smile} title={'Done'} description={'This is a description.'}></Step>
                    </Steps>
                </Col>
            </Row>
        </div>,
        mountNode
    );`

/* 步骤切换 */
export const CodeToggle =
`    import { useState } from 'react';
    import { Steps, Row, Col, Icon, Button } from "@kealm/react-components";
    
    const Step = Steps.Step;
    
    const user = <Icon type={'user'}></Icon>,
        solution = <Icon type={'solution'}></Icon>,
        loading = <Icon type={'loading'}></Icon>,
        smile = <Icon type={'smile'}></Icon>;
    
    function Demo() {
        const [current, setCurrent] = useState(1);
        
        return (
            <div className="detail-box">
                <Row>
                    <Col span={22}>
                        <Steps current={current}>
                            <Step title={'First'} description={'This is a description.'}></Step>
                            <Step title={'Second'} subTitle={'Left 00:00:08'} description={'This is a description.'}></Step>
                            <Step title={'Third'} description={'This is a description.'}></Step>
                            <Step title={'Last'} description={'This is a description.'}></Step>
                        </Steps>
                    </Col>
                </Row>
                <Row style={{marginTop: '40px'}}>
                    <Col span={22}>
                        <Steps current={current}>
                            <Step icon={user} title={'Login'} description={'This is a description.'}></Step>
                            <Step icon={solution} title={'Verification'} description={'This is a description.'}></Step>
                            <Step icon={loading} title={'Pay'} description={'This is a description.'}></Step>
                            <Step icon={smile} title={'Done'} description={'This is a description.'}></Step>
                        </Steps>
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col><Button disabled={current === 0} onClick={() => setCurrent(v => --v)}>Previous</Button></Col>
                    <Col><Button type={'primary'} disabled={current === 3} onClick={() => setCurrent(v => ++v)}>Next</Button></Col>
                </Row>
            </div>
        )
    }`

/* 垂直方向的步骤条 */
export const CodeVertical =
`    import { useState } from 'react';
    import { Steps, Row, Col, Icon, Button } from "@kealm/react-components";
    
    const Step = Steps.Step;
    
    const user = <Icon type={'user'}></Icon>,
        solution = <Icon type={'solution'}></Icon>,
        loading = <Icon type={'loading'}></Icon>,
        smile = <Icon type={'smile'}></Icon>;
    
    function Demo() {
        const [current, setCurrent] = useState(1);
        
        return (
            <div className="detail-box">
                <Row gutter={16}>
                    <Col span={10}>
                        <Steps current={current} direction={'vertical'}>
                            <Step title={'First'} description={'This is a description.'}></Step>
                            <Step title={'Second'} subTitle={'Left 00:00:08'} description={'This is a description.'}></Step>
                            <Step title={'Third'} description={'This is a description.'}></Step>
                            <Step title={'Last'} description={'This is a description.'}></Step>
                        </Steps>
                    </Col>
                    <Col span={10}>
                        <Steps current={current} direction={'vertical'}>
                            <Step icon={user} title={'Login'} description={'This is a description.'}></Step>
                            <Step icon={solution} title={'Verification'} description={'This is a description.'}></Step>
                            <Step icon={loading} title={'Pay'} description={'This is a description.'}></Step>
                            <Step icon={smile} title={'Done'} description={'This is a description.'}></Step>
                        </Steps>
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col><Button disabled={current === 0} onClick={() => setCurrent(v => --v)}>Previous</Button></Col>
                    <Col><Button type={'primary'} disabled={current === 3} onClick={() => setCurrent(v => ++v)}>Next</Button></Col>
                </Row>
            </div>
        )
    }`

/* 垂直方向的小型步骤条 */
export const CodeMiniVertical =
`    import { Steps, Row, Col, Icon } from "@kealm/react-components";
    
    const Step = Steps.Step;
    
    const user = <Icon type={'user'}></Icon>,
        solution = <Icon type={'solution'}></Icon>,
        loading = <Icon type={'loading'}></Icon>,
        smile = <Icon type={'smile'}></Icon>;
    
    ReactDom.render(
        <div className="detail-box">
            <Row gutter={16}>
                <Col span={10}>
                    <Steps current={1} direction={'vertical'} size={'small'}>
                        <Step title={'First'} description={'This is a description.'}></Step>
                        <Step title={'Second'} subTitle={'Left 00:00:08'} description={'This is a description.'}></Step>
                        <Step title={'Third'} description={'This is a description.'}></Step>
                        <Step title={'Last'} description={'This is a description.'}></Step>
                    </Steps>
                </Col>
                <Col span={10}>
                    <Steps current={1} direction={'vertical'} size={'small'}>
                        <Step icon={user} title={'Login'} description={'This is a description.'}></Step>
                        <Step icon={solution} title={'Verification'} description={'This is a description.'}></Step>
                        <Step icon={loading} title={'Pay'} description={'This is a description.'}></Step>
                        <Step icon={smile} title={'Done'} description={'This is a description.'}></Step>
                    </Steps>
                </Col>
            </Row>
        </div>,
        mountNode
    );`

/* 步骤运行错误 */
export const CodeError =
`    import { useState } from 'react';
    import { Steps, Row, Col, Icon, Button } from "@kealm/react-components";
    
    const Step = Steps.Step;
    
    const user = <Icon type={'user'}></Icon>,
        solution = <Icon type={'solution'}></Icon>,
        loading = <Icon type={'loading'}></Icon>,
        smile = <Icon type={'smile'}></Icon>;
    
    function Demo() {
        const [current, setCurrent] = useState(1);
        
        return (
            <div className="detail-box">
                <Row>
                    <Col span={22}>
                        <Steps current={current} status={'error'}>
                            <Step title={'First'} description={'This is a description.'}></Step>
                            <Step title={'Second'} subTitle={'Left 00:00:08'} description={'This is a description.'}></Step>
                            <Step title={'Third'} description={'This is a description.'}></Step>
                            <Step title={'Last'} description={'This is a description.'}></Step>
                        </Steps>
                    </Col>
                </Row>
                <Row style={{marginTop: '40px'}}>
                    <Col span={22}>
                        <Steps current={current} status={'error'}>
                            <Step icon={user} title={'Login'} description={'This is a description.'}></Step>
                            <Step icon={solution} title={'Verification'} description={'This is a description.'}></Step>
                            <Step icon={loading} title={'Pay'} description={'This is a description.'}></Step>
                            <Step icon={smile} title={'Done'} description={'This is a description.'}></Step>
                        </Steps>
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col><Button disabled={current === 0} onClick={() => setCurrent(v => --v)}>Previous</Button></Col>
                    <Col><Button type={'primary'} disabled={current === 3} onClick={() => setCurrent(v => ++v)}>Next</Button></Col>
                </Row>
            </div>
        )
    }`

/* 点状步骤条 */
export const CodeDot =
`    import { useState } from 'react';
    import { Steps, Row, Col, Icon, Button } from "@kealm/react-components";
    
    const Step = Steps.Step;
    
    function Demo() {
        const [current, setCurrent] = useState(1);
        
        return (
            <div className="detail-box">
                <Row>
                    <Col span={22}>
                        <Steps current={current} progressDot>
                            <Step title={'First'} description={'This is a description.'}></Step>
                            <Step title={'Second'} subTitle={'Left 00:00:08'} description={'This is a description.'}></Step>
                            <Step title={'Third'} description={'This is a description.'}></Step>
                            <Step title={'Last'} description={'This is a description.'}></Step>
                        </Steps>
                    </Col>
                </Row>
                <Row style={{marginTop: '40px'}}>
                    <Col span={22}>
                        <Steps current={current} progressDot direction={'vertical'}>
                            <Step title={'First'} description={'This is a description.'}></Step>
                            <Step title={'Second'} subTitle={'Left 00:00:08'} description={'This is a description.'}></Step>
                            <Step title={'Third'} description={'This is a description.'}></Step>
                            <Step title={'Last'} description={'This is a description.'}></Step>
                        </Steps>
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col><Button disabled={current === 0} onClick={() => setCurrent(v => --v)}>Previous</Button></Col>
                    <Col><Button type={'primary'} disabled={current === 3} onClick={() => setCurrent(v => ++v)}>Next</Button></Col>
                </Row>
            </div>
        )
    }`

/* 自定义点状步骤条 */
export const CodeCustomDot =
`    import { useState, useCallback } from 'react';
    import { Steps, Row, Col, Icon, Button, Tooltip } from "@kealm/react-components";
    
    const Step = Steps.Step;
    
    function Demo() {
        const [current, setCurrent] = useState(1);
        
        const progressDot = useCallback((dot, {step, status}) => {
            return (
                <Tooltip content={
                    <>
                        <p>Step：{step}</p>
                        <p>Status：{status}</p>
                    </>
                }>
                    {dot}
                </Tooltip>
            )
        }, []);
        
        return (
            <div className="detail-box">
                <Row>
                    <Col span={22}>
                        <Steps current={current} progressDot={progressDot}>
                            <Step title={'First'} description={'This is a description.'}></Step>
                            <Step title={'Second'} subTitle={'Left 00:00:08'} description={'This is a description.'}></Step>
                            <Step title={'Third'} description={'This is a description.'}></Step>
                            <Step title={'Last'} description={'This is a description.'}></Step>
                        </Steps>
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col><Button disabled={current === 0} onClick={() => setCurrent(v => --v)}>Previous</Button></Col>
                    <Col><Button type={'primary'} disabled={current === 3} onClick={() => setCurrent(v => ++v)}>Next</Button></Col>
                </Row>
            </div>
        )
    }`

/* 可点击 */
export const CodeClick =
`    import { useState, useCallback } from 'react';
    import { Steps, Row, Col, Icon, Button } from "@kealm/react-components";
    
    const Step = Steps.Step;
    
    function Demo() {
        const [current, setCurrent] = useState(1);
        
        const change = useCallback(cur => {
            setCurrent(cur);
        }, []);
        
        return (
            <div className="detail-box">
                <Row>
                    <Col span={22}>
                        <Steps current={current} onChange={change}>
                            <Step title={'First'} description={'This is a description.'}></Step>
                            <Step title={'Second'} subTitle={'Left 00:00:08'} description={'This is a description.'}></Step>
                            <Step title={'Third'} description={'This is a description.'}></Step>
                            <Step title={'Last'} description={'This is a description.'}></Step>
                        </Steps>
                    </Col>
                </Row>
                <Row style={{marginTop: '40px'}}>
                    <Col span={22}>
                        <Steps current={current} direction={'vertical'} onChange={change}>
                            <Step title={'First'} description={'This is a description.'}></Step>
                            <Step title={'Second'} subTitle={'Left 00:00:08'} description={'This is a description.'}></Step>
                            <Step title={'Third'} description={'This is a description.'}></Step>
                            <Step title={'Last'} description={'This is a description.'}></Step>
                        </Steps>
                    </Col>
                </Row>
            </div>
        )
    }`