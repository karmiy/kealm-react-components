import React, { useState, useMemo } from 'react';
import { Alert, Row, Col, Icon } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

function AlertDoc() {
    const [size, setSize] = useState();
    const [loading, setLoading] = useState(true);

    return (
        <div className='page-box'>
            <h1>Alert 警告提示</h1>
            <p>用于页面中展示重要的提示信息。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>页面中的非浮层元素，不会自动消失。</p>
            {useMemo(() => {
                return (
                    <Row>
                        <Col span={9}>
                            <div className="detail-box">
                                <Alert type={'success'} title={'Success Text'} />
                            </div>
                            <div className="detail-box">
                                <Alert type={'info'} title={'Info Text'} />
                            </div>
                            <div className="detail-box">
                                <Alert type={'warning'} title={'Warning Text'} />
                            </div>
                            <div className="detail-box">
                                <Alert type={'error'} title={'Error Text'} />
                            </div>
                        </Col>
                    </Row>
                )
            }, [])}

            {/* 主题 */}
            <h2>主题</h2>
            <p>Alert 组件提供了两个不同的主题：light和dark 。</p>
            {useMemo(() => {
                return (
                    <Row>
                        <Col span={9}>
                            <div className="detail-box">
                                <Alert type={'success'} effect={'dark'} title={'Success Text'} />
                            </div>
                            <div className="detail-box">
                                <Alert type={'info'} effect={'dark'} title={'Info Text'} />
                            </div>
                            <div className="detail-box">
                                <Alert type={'warning'} effect={'dark'} title={'Warning Text'} />
                            </div>
                            <div className="detail-box">
                                <Alert type={'error'} effect={'dark'} title={'Error Text'} />
                            </div>
                        </Col>
                    </Row>
                )
            }, [])}

            {/* 可关闭的警告提示 */}
            <h2>可关闭的警告提示</h2>
            <p>显示关闭按钮，点击可关闭警告提示。</p>
            {useMemo(() => {
                return (
                    <Row>
                        <Col span={9}>
                            <div className="detail-box">
                                <Alert type={'success'} title={'Success Text'} closable />
                            </div>
                            <div className="detail-box">
                                <Alert type={'info'} title={'Info Text'} closable />
                            </div>
                            <div className="detail-box">
                                <Alert type={'warning'} title={'Warning Text'} closable />
                            </div>
                            <div className="detail-box">
                                <Alert type={'error'} title={'Error Text'} closable />
                            </div>
                        </Col>
                    </Row>
                )
            }, [])}

            {/* 自定义关闭按钮 */}
            <h2>自定义关闭按钮</h2>
            <p>自定义关闭按钮为文字或其他符号。</p>
            {useMemo(() => {
                return (
                    <Row>
                        <Col span={9}>
                            <div className="detail-box">
                                <Alert type={'success'} title={'Success Text'} closable closeText={<Icon type={'minus'} />} />
                            </div>
                            <div className="detail-box">
                                <Alert type={'info'} title={'Info Text'} closable closeText={'ok'} />
                            </div>
                        </Col>
                    </Row>
                )
            }, [])}

            {/* 带有辅助性文字介绍 */}
            <h2>带有辅助性文字介绍</h2>
            <p>包含标题和内容，解释更详细的警告。</p>
            {useMemo(() => {
                return (
                    <Row>
                        <Col span={9}>
                            <div className="detail-box">
                                <Alert
                                    type={'success'}
                                    title={'Success Text'}
                                    description={'Success Description Success Description Success Description'}
                                    closable
                                />
                            </div>
                            <div className="detail-box">
                                <Alert
                                    type={'info'}
                                    title={'Info Text'}
                                    description={'Info Description Info Description Info Description Info Description'}
                                    closable
                                />
                            </div>
                            <div className="detail-box">
                                <Alert
                                    type={'warning'}
                                    title={'Warning Text'}
                                    description={'Warning Description Warning Description Warning Description Warning Description'}
                                    closable
                                />
                            </div>
                            <div className="detail-box">
                                <Alert
                                    type={'error'}
                                    title={'Error Text'}
                                    description={'Error Description Error Description Error Description Error Description'}
                                    closable
                                />
                            </div>
                        </Col>
                    </Row>
                )
            }, [])}

            {/* 带有 icon */}
            <h2>带有 icon</h2>
            <p>表示某种状态时提升可读性。</p>
            {useMemo(() => {
                return (
                    <Row>
                        <Col span={9}>
                            <div className="detail-box">
                                <Alert
                                    type={'success'}
                                    title={'Success Text'}
                                    showIcon
                                    closable
                                />
                            </div>
                            <div className="detail-box">
                                <Alert
                                    type={'info'}
                                    title={'Info Text'}
                                    showIcon
                                    closable
                                />
                            </div>
                            <div className="detail-box">
                                <Alert
                                    type={'warning'}
                                    title={'Warning Text'}
                                    showIcon
                                    closable
                                />
                            </div>
                            <div className="detail-box">
                                <Alert
                                    type={'error'}
                                    title={'Error Text'}
                                    showIcon
                                    closable
                                />
                            </div>
                            <div className="detail-box">
                                <Alert
                                    type={'success'}
                                    title={'Success Text'}
                                    description={'Success Description Success Description Success Description'}
                                    showIcon
                                    closable
                                />
                            </div>
                            <div className="detail-box">
                                <Alert
                                    type={'info'}
                                    title={'Info Text'}
                                    description={'Info Description Info Description Info Description Info Description'}
                                    showIcon
                                    closable
                                />
                            </div>
                            <div className="detail-box">
                                <Alert
                                    type={'warning'}
                                    title={'Warning Text'}
                                    description={'Warning Description Warning Description Warning Description Warning Description'}
                                    showIcon
                                    closable
                                />
                            </div>
                            <div className="detail-box">
                                <Alert
                                    type={'error'}
                                    title={'Error Text'}
                                    description={'Error Description Error Description Error Description Error Description'}
                                    showIcon
                                    closable
                                />
                            </div>
                        </Col>
                    </Row>
                )
            }, [])}

            {/* API */}
            {/*<ApiTable title='Button' propsList={buttonProps} eventsList={buttonEvents} />*/}
        </div>
    )
}

export default AlertDoc;