import React, { useState, useMemo, useCallback } from 'react';
import { Switch, Row, Col, Icon } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';
import { switchProps, switchEvents } from 'api/switch';
import { CodeBasic, CodeControlled, CodeDisabled, CodeCustomColor, CodeContent, CodeLoading } from 'demos/switch';

function SwitchDoc() {
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(true);

    const onChange = useCallback(c => {
        setChecked(c);
    }, []);

    return (
        <div className='page-box'>
            <h1>Switch 开关</h1>
            <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>基础的按钮用法。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Switch defaultChecked={true} />
                    </div>
                )
            }, [])}
            <HighLight code={CodeBasic} />

            {/* 受控开关 */}
            <h2>受控开关</h2>
            <p>配合 checked 与 onChange 控制开启与关闭。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Switch checked={checked} onChange={onChange} />
                    </div>
                )
            }, [checked])}
            <HighLight code={CodeControlled} />

            {/* 禁用 */}
            <h2>禁用</h2>
            <p>禁用状态的开关。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Row gutter={30}>
                            <Col><Switch disabled /></Col>
                            <Col><Switch defaultChecked={true} disabled /></Col>
                        </Row>
                    </div>
                )
            }, [])}
            <HighLight code={CodeDisabled} />

            {/* 自定义颜色 */}
            <h2>自定义颜色</h2>
            <p>自定义在开启和关闭时开关的色彩。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Switch defaultChecked={true} activeColor={'#13ce66'} inActiveColor={'#ff4949'} />
                    </div>
                )
            }, [])}
            <HighLight code={CodeCustomColor} />

            {/* 文字和图标 */}
            <h2>文字和图标</h2>
            <p>带有文字和图标。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Row gutter={30}>
                            <Col>
                                <Switch
                                    defaultChecked={true}
                                    activeContent={'开'}
                                    inActiveContent={'关'} />
                            </Col>
                            <Col>
                                <Switch
                                    defaultChecked={true}
                                    activeContent={1}
                                    inActiveContent={0} />
                            </Col>
                            <Col>
                                <Switch
                                    defaultChecked={true}
                                    activeContent={<Icon type={'check'} />}
                                    inActiveContent={<Icon type={'close'} />} />
                            </Col>
                        </Row>
                    </div>
                )
            }, [])}
            <HighLight code={CodeContent} />

            {/* 加载中 */}
            <h2>加载中</h2>
            <p>标识开关操作仍在执行中。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Switch defaultChecked={true} loading />
                        </div>
                        <div className="detail-box">
                            <Switch loading />
                        </div>
                    </>
                )
            }, [])}
            <HighLight code={CodeLoading} />

            {/* API */}
            <ApiTable title='Switch' propsList={switchProps} eventsList={switchEvents} />
        </div>
    )
}

export default SwitchDoc;