import React, { useState, useMemo } from 'react';
import { Steps, Row, Col, Icon, Button } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

const Step = Steps.Step;

function StepsDoc() {
    const [current, setCurrent] = useState(0);
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
                    </div>
                )
            }, [])}

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
            }, [current, setCurrent])}

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
                }, [current, setCurrent])
            }

            {/* 垂直方向的步骤条 */}
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
                                    <Steps current={1} direction={'vertical'}>
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

            {/* 步骤运行错误 */}
            <h2>步骤运行错误</h2>
            <p>使用 Steps 的 status 属性来指定当前步骤的状态。</p>
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

            {/* API */}
            {/*<ApiTable title='Breadcrumb' propsList={breadcrumbProps} />*/}
        </div>
    )
}

export default StepsDoc;