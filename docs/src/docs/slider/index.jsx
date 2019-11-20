import React, { useState, useMemo, useCallback } from 'react';
import { Slider, Row, Col } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

function ButtonDoc() {
    const [value, setValue] = useState(10);
    const [loading, setLoading] = useState(true);

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
                            <Col span={10}>
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
                            <Col span={10}>
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
                                <Col span={10}>
                                    <Slider defaultValue={20} openTooltip={false} />
                                </Col>
                                <Col className={'font-bold'}>
                                    隐藏 Tooltip
                                </Col>
                            </Row>
                        </div>
                        <div className="detail-box">
                            <Row type={'flex'} align={'middle'} gutter={20}>
                                <Col span={10}>
                                    <Slider defaultValue={50} tipFormatter={v => `￥${v / 100}`} />
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
                            <Col span={10}>
                                <Slider defaultValue={20} disabled />
                            </Col>
                        </Row>
                    </div>
                )
            }, [])}

            {/* 数值区间 */}
            <h2>数值区间</h2>
            <p>可以通过 max 和 min 配置滑动块的数值区间。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Row>
                            <Col span={10}>
                                <Slider defaultValue={0} max={1000} min={-500} />
                            </Col>
                        </Row>
                    </div>
                )
            }, [])}

            {/* 离散值 */}
            <h2>离散值</h2>
            <p>选项可以是离散的。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Row>
                            <Col span={10}>
                                <Slider defaultValue={15} showStops step={10} min={-20} max={50} />
                            </Col>
                        </Row>
                    </div>
                )
            }, [])}

            {/* API */}
            {/*<ApiTable title='Button' propsList={buttonProps} eventsList={buttonEvents} />*/}
        </div>
    )
}

export default ButtonDoc;