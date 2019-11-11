import React, { useState, useMemo, useCallback } from 'react';
import { Steps, Row, Col, Icon, Button } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';
import { stepsProps, stepsEvents, stepProps } from 'api/steps';
import { CodeBasic, CodeIcon, CodeMini, CodeToggle, CodeVertical, CodeMiniVertical, CodeError, CodeDot, CodeClick } from 'demos/steps';

const Step = Steps.Step;

function StepsDoc() {
    const [current, setCurrent] = useState(1);
    const change = useCallback(cur => {
        setCurrent(cur);
    }, []);

    return (
        <div className='page-box'>
            <h1>Steps 步骤条</h1>
            <p>引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>简单的步骤条。</p>
            {
                useMemo(() => {
                    return (
                        <div className="detail-box">
                            <Row>
                                <Col span={22}>
                                    <Steps current={1}>
                                        <Step title={'Finished'} description={'This is a description.'} />
                                        <Step title={'In Progress'} subTitle={'Left 00:00:08'} description={'This is a description.'} />
                                        <Step title={'Waiting'} description={'This is a description.'} />
                                    </Steps>
                                </Col>
                            </Row>
                        </div>
                    )
                }, [])
            }
            <HighLight code={CodeBasic} />

            {/* 带图标的步骤条 */}
            <h2>带图标的步骤条</h2>
            <p>通过设置 Steps.Step 的 icon 属性，可以启用自定义图标。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Row>
                            <Col span={22}>
                                <Steps current={2}>
                                    <Step icon={<Icon type={'user'} />} title={'Login'} description={'This is a description.'} />
                                    <Step icon={<Icon type={'solution'} />} title={'Verification'} description={'This is a description.'} />
                                    <Step icon={<Icon type={'loading'} />} title={'Pay'} description={'This is a description.'} />
                                    <Step icon={<Icon type={'smile'} />} title={'Done'} description={'This is a description.'} />
                                </Steps>
                            </Col>
                        </Row>
                    </div>
                )
            }, [])}
            <HighLight code={CodeIcon} />

            {/* 迷你版 */}
            <h2>迷你版</h2>
            <p>迷你版的步骤条，通过设置 size="small" 启用。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Row>
                            <Col span={22}>
                                <Steps current={1} size={'small'}>
                                    <Step title={'Finished'} description={'This is a description.'} />
                                    <Step title={'In Progress'} subTitle={'Left 00:00:08'} description={'This is a description.'} />
                                    <Step title={'Waiting'} description={'This is a description.'} />
                                </Steps>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={22}>
                                <Steps current={2} size={'small'}>
                                    <Step icon={<Icon type={'user'} />} title={'Login'} description={'This is a description.'} />
                                    <Step icon={<Icon type={'solution'} />} title={'Verification'} description={'This is a description.'} />
                                    <Step icon={<Icon type={'loading'} />} title={'Pay'} description={'This is a description.'} />
                                    <Step icon={<Icon type={'smile'} />} title={'Done'} description={'This is a description.'} />
                                </Steps>
                            </Col>
                        </Row>
                    </div>
                )
            }, [])}
            <HighLight code={CodeMini} />

            {/* 步骤切换 */}
            <h2>步骤切换</h2>
            <p>通常配合内容及按钮使用，表示一个流程的处理进度。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Row>
                            <Col span={22}>
                                <Steps current={current}>
                                    <Step title={'First'} description={'This is a description.'} />
                                    <Step title={'Second'} subTitle={'Left 00:00:08'} description={'This is a description.'} />
                                    <Step title={'Third'} description={'This is a description.'} />
                                    <Step title={'Last'} description={'This is a description.'} />
                                </Steps>
                            </Col>
                        </Row>
                        <Row style={{marginTop: '40px'}}>
                            <Col span={22}>
                                <Steps current={current}>
                                    <Step icon={<Icon type={'user'} />} title={'Login'} description={'This is a description.'} />
                                    <Step icon={<Icon type={'solution'} />} title={'Verification'} description={'This is a description.'} />
                                    <Step icon={<Icon type={'loading'} />} title={'Pay'} description={'This is a description.'} />
                                    <Step icon={<Icon type={'smile'} />} title={'Done'} description={'This is a description.'} />
                                </Steps>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col><Button disabled={current === 0} onClick={() => setCurrent(v => --v)}>Previous</Button></Col>
                            <Col><Button type={'primary'} disabled={current === 3} onClick={() => setCurrent(v => ++v)}>Next</Button></Col>
                        </Row>
                    </div>
                )
            }, [current])}
            <HighLight code={CodeToggle} />

            {/* 垂直方向的步骤条 */}
            <h2>垂直方向的步骤条</h2>
            <p>简单的竖直方向的步骤条。</p>
            {
                useMemo(() => {
                    return (
                        <div className="detail-box">
                            <Row gutter={16}>
                                <Col span={10}>
                                    <Steps current={current} direction={'vertical'}>
                                        <Step title={'First'} description={'This is a description.'} />
                                        <Step title={'Second'} subTitle={'Left 00:00:08'} description={'This is a description.'} />
                                        <Step title={'Third'} description={'This is a description.'} />
                                        <Step title={'Last'} description={'This is a description.'} />
                                    </Steps>
                                </Col>
                                <Col span={10}>
                                    <Steps current={current} direction={'vertical'}>
                                        <Step icon={<Icon type={'user'} />} title={'Login'} description={'This is a description.'} />
                                        <Step icon={<Icon type={'solution'} />} title={'Verification'} description={'This is a description.'} />
                                        <Step icon={<Icon type={'loading'} />} title={'Pay'} description={'This is a description.'} />
                                        <Step icon={<Icon type={'smile'} />} title={'Done'} description={'This is a description.'} />
                                    </Steps>
                                </Col>
                            </Row>
                            <Row gutter={8}>
                                <Col><Button disabled={current === 0} onClick={() => setCurrent(v => --v)}>Previous</Button></Col>
                                <Col><Button type={'primary'} disabled={current === 3} onClick={() => setCurrent(v => ++v)}>Next</Button></Col>
                            </Row>
                        </div>
                    )
                }, [current])
            }
            <HighLight code={CodeVertical} />

            {/* 垂直方向的小型步骤条 */}
            <h2>垂直方向的小型步骤条</h2>
            <p>简单的竖直方向的小型步骤条。</p>
            {
                useMemo(() => {
                    return (
                        <div className="detail-box">
                            <Row gutter={16}>
                                <Col span={10}>
                                    <Steps current={1} direction={'vertical'} size={'small'}>
                                        <Step title={'First'} description={'This is a description.'} />
                                        <Step title={'Second'} subTitle={'Left 00:00:08'} description={'This is a description.'} />
                                        <Step title={'Third'} description={'This is a description.'} />
                                        <Step title={'Last'} description={'This is a description.'} />
                                    </Steps>
                                </Col>
                                <Col span={10}>
                                    <Steps current={1} direction={'vertical'} size={'small'}>
                                        <Step icon={<Icon type={'user'} />} title={'Login'} description={'This is a description.'} />
                                        <Step icon={<Icon type={'solution'} />} title={'Verification'} description={'This is a description.'} />
                                        <Step icon={<Icon type={'loading'} />} title={'Pay'} description={'This is a description.'} />
                                        <Step icon={<Icon type={'smile'} />} title={'Done'} description={'This is a description.'} />
                                    </Steps>
                                </Col>
                            </Row>
                        </div>
                    )
                }, [])
            }
            <HighLight code={CodeMiniVertical} />

            {/* 步骤运行错误 */}
            <h2>步骤运行错误</h2>
            <p>使用 Steps 的 status 属性来指定当前步骤的状态。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Row>
                            <Col span={22}>
                                <Steps current={current} status={'error'}>
                                    <Step title={'First'} description={'This is a description.'} />
                                    <Step title={'Second'} subTitle={'Left 00:00:08'} description={'This is a description.'} />
                                    <Step title={'Third'} description={'This is a description.'} />
                                    <Step title={'Last'} description={'This is a description.'} />
                                </Steps>
                            </Col>
                        </Row>
                        <Row style={{marginTop: '40px'}}>
                            <Col span={22}>
                                <Steps current={current} status={'error'}>
                                    <Step icon={<Icon type={'user'} />} title={'Login'} description={'This is a description.'} />
                                    <Step icon={<Icon type={'solution'} />} title={'Verification'} description={'This is a description.'} />
                                    <Step icon={<Icon type={'loading'} />} title={'Pay'} description={'This is a description.'} />
                                    <Step icon={<Icon type={'smile'} />} title={'Done'} description={'This is a description.'} />
                                </Steps>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col><Button disabled={current === 0} onClick={() => setCurrent(v => --v)}>Previous</Button></Col>
                            <Col><Button type={'primary'} disabled={current === 3} onClick={() => setCurrent(v => ++v)}>Next</Button></Col>
                        </Row>
                    </div>
                )
            }, [current])}
            <HighLight code={CodeError} />

            {/* 点状步骤条 */}
            <h2>点状步骤条</h2>
            <p>包含步骤点的进度条。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Row>
                            <Col span={22}>
                                <Steps current={current} progressDot>
                                    <Step title={'First'} description={'This is a description.'} />
                                    <Step title={'Second'} subTitle={'Left 00:00:08'} description={'This is a description.'} />
                                    <Step title={'Third'} description={'This is a description.'} />
                                    <Step title={'Last'} description={'This is a description.'} />
                                </Steps>
                            </Col>
                        </Row>
                        <Row style={{marginTop: '40px'}}>
                            <Col span={22}>
                                <Steps current={current} progressDot direction={'vertical'}>
                                    <Step title={'First'} description={'This is a description.'} />
                                    <Step title={'Second'} subTitle={'Left 00:00:08'} description={'This is a description.'} />
                                    <Step title={'Third'} description={'This is a description.'} />
                                    <Step title={'Last'} description={'This is a description.'} />
                                </Steps>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col><Button disabled={current === 0} onClick={() => setCurrent(v => --v)}>Previous</Button></Col>
                            <Col><Button type={'primary'} disabled={current === 3} onClick={() => setCurrent(v => ++v)}>Next</Button></Col>
                        </Row>
                    </div>
                )
            }, [current])}
            <HighLight code={CodeDot} />

            {/* 可点击 */}
            <h2>可点击</h2>
            <p>设置 onChange 后，Steps 变为可点击状态。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Row>
                            <Col span={22}>
                                <Steps current={current} onChange={change}>
                                    <Step title={'First'} description={'This is a description.'} />
                                    <Step title={'Second'} subTitle={'Left 00:00:08'} description={'This is a description.'} />
                                    <Step title={'Third'} description={'This is a description.'} />
                                    <Step title={'Last'} description={'This is a description.'} />
                                </Steps>
                            </Col>
                        </Row>
                        <Row style={{marginTop: '40px'}}>
                            <Col span={22}>
                                <Steps current={current} direction={'vertical'} onChange={change}>
                                    <Step title={'First'} description={'This is a description.'} />
                                    <Step title={'Second'} subTitle={'Left 00:00:08'} description={'This is a description.'} />
                                    <Step title={'Third'} description={'This is a description.'} />
                                    <Step title={'Last'} description={'This is a description.'} />
                                </Steps>
                            </Col>
                        </Row>
                    </div>
                )
            }, [current])}
            <HighLight code={CodeClick} />

            {/* API */}
            <ApiTable title='Steps' propsList={stepsProps} eventsList={stepsEvents} />
            <ApiTable title='Step' propsList={stepProps} />
        </div>
    )
}

export default StepsDoc;