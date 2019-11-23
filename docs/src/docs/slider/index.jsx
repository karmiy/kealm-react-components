import React, { useState, useMemo, useCallback } from 'react';
import { Slider, Row, Col, Radio } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

function ButtonDoc() {
    const [value, setValue] = useState(10);
    const [values, setValues] = useState([-10, 10]);

    const onChange = useCallback(v => setValue(v), []);

    return (
        <div className='page-box'>
            <h1>Slider 滑块</h1>
            <p>通过拖动滑块在一个固定区间内进行选择。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>在拖动滑块时，显示当前值。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Row>
                            <Col span={14}>
                                <Slider defaultValue={20} />
                            </Col>
                        </Row>
                    </div>
                )
            }, [])}

            {/* 受控用法 */}
            <h2>受控用法</h2>
            <p>配合 value 与 onChange 手动控制滑块。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Row>
                            <Col span={14}>
                                <Slider value={value} onChange={onChange} />
                            </Col>
                        </Row>
                    </div>
                )
            }, [value])}

            {/* 隐藏与格式化Tooltip */}
            <h2>隐藏与格式化Tooltip</h2>
            <p>配置 openTooltip 开启与隐藏 Tooltip，默认开启。</p>
            <p>tipFormatter 可以格式化 Tooltip 显示的文本信息。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Row type={'flex'} align={'middle'} gutter={20}>
                                <Col span={14}>
                                    <Slider defaultValue={20} defaultTooltipVisible={true} />
                                </Col>
                                <Col className={'font-bold'}>
                                    默认开启 Tooltip
                                </Col>
                            </Row>
                        </div>
                        <div className="detail-box">
                            <Row type={'flex'} align={'middle'} gutter={20}>
                                <Col span={14}>
                                    <Slider defaultValue={40} openTooltip={false} />
                                </Col>
                                <Col className={'font-bold'}>
                                    隐藏 Tooltip
                                </Col>
                            </Row>
                        </div>
                        <div className="detail-box">
                            <Row type={'flex'} align={'middle'} gutter={20}>
                                <Col span={14}>
                                    <Slider defaultValue={60} tipFormatter={v => `￥${v / 100}`} />
                                </Col>
                                <Col className={'font-bold'}>
                                    格式化 Tooltip
                                </Col>
                            </Row>
                        </div>
                    </>
                )
            }, [])}

            {/* 禁用 */}
            <h2>禁用</h2>
            <p>禁用滑块。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Row>
                            <Col span={14}>
                                <Slider defaultValue={20} disabled />
                            </Col>
                        </Row>
                    </div>
                )
            }, [])}

            {/* 数值区间 */}
            <h2>数值区间</h2>
            <p>可以通过 max 和 min 配置滑动块的数值区间。</p>
            <p>下方将数值区间配置在 -500 ~ 1000</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Row>
                            <Col span={14}>
                                <Slider defaultValue={0} max={1000} min={-500} />
                            </Col>
                        </Row>
                    </div>
                )
            }, [])}

            {/* 自定义步数 */}
            <h2>自定义步数</h2>
            <p>通过 step 配置每次可拖动的步数，还可以配置 showStops 开启离散点。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Row>
                                <Col span={14}>
                                    <Slider defaultValue={20} step={10} min={0} max={100} />
                                </Col>
                            </Row>
                        </div>
                        <div className="detail-box">
                            <Row>
                                <Col span={14}>
                                    <Slider defaultValue={-20} showStops step={10} min={-50} max={50} />
                                </Col>
                            </Row>
                        </div>
                        <div className="detail-box">
                            <Row>
                                <Col span={14}>
                                    <Slider defaultValue={-20} completeStops showStops step={10} min={-50} max={45} />
                                </Col>
                            </Row>
                        </div>
                    </>
                )
            }, [])}

            {/* 范围选择 */}
            <h2>范围选择</h2>
            <p>支持选择某一数值范围。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Row>
                                <Col span={14}>
                                    <Slider range defaultValue={[0, 50]} />
                                </Col>
                            </Row>
                        </div>
                        <div className="detail-box">
                            <Row>
                                <Col span={14}>
                                    <Slider range defaultValue={[-20, 20]} min={-50} max={50} showStops step={10} />
                                </Col>
                            </Row>
                        </div>
                    </>
                )
            }, [])}

            {/* 竖向模式 */}
            <h2>竖向模式</h2>
            <p>设置 vertical 可使 Slider 变成竖向模式，此时必须设置高度height属性。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Row>
                            <Col span={2}>
                                <Slider defaultValue={20} vertical height={300} />
                            </Col>
                            <Col span={2}>
                                <Slider defaultValue={100} vertical height={300} max={1000} min={-500} />
                            </Col>
                            <Col span={2}>
                                <Slider defaultValue={20} vertical height={300} showStops step={10} min={0} max={50} />
                            </Col>
                            <Col span={2}>
                                <Slider defaultValue={[10, 50]} vertical height={300} range />
                            </Col>
                            <Col span={2}>
                                <Slider defaultValue={[-30, 30]} vertical height={300} range showStops step={20} min={-50} max={50} />
                            </Col>
                        </Row>
                    </div>
                )
            }, [])}

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>在拖动滑块时，显示当前值。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Radio.Group defaultValue={0} name={'direction'}>
                                <Radio value={0}>Horizontal</Radio>
                                <Radio value={1}>Vertical</Radio>
                            </Radio.Group>
                            {/*<Radio.Group defaultValue={'a'} name={'kealm'}>
                                <Radio value={'a'}>A</Radio>
                                <Radio value={'b'}>B</Radio>
                                <Radio value={'c'}>C</Radio>
                                <Radio value={'d'}>D</Radio>
                            </Radio.Group>*/}
                        </div>
                        <div className="detail-box">
                            <Row>
                                <Col span={14}>
                                    <Slider defaultValue={20} showStops step={10} marks={{
                                        0: '0%',
                                        10: '10%',
                                        55: {
                                            style: {
                                                fontWeight: 'bold',
                                                color: 'rgb(255, 85, 0)',
                                            },
                                            label: '55%',
                                        },
                                    }} />
                                </Col>
                            </Row>
                        </div>
                    </>
                )
            }, [])}

            {/* API */}
            {/*<ApiTable title='Button' propsList={buttonProps} eventsList={buttonEvents} />*/}
        </div>
    )
}

export default ButtonDoc;