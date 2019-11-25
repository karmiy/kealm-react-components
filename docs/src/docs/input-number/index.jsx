import React, { useState, useMemo, useCallback } from 'react';
import { InputNumber, Button, Row, Col } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

function InputNumberDoc() {
    const [value, setValue] = useState(2);
    const [disabled, setDisabled] = useState(true);

    const onChange = useCallback(v => setValue(v), []);

    return (
        <div className='page-box'>
            <h1>InputNumber 数字输入框</h1>
            <p>仅允许输入标准的数字值，可定义范围。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>数字输入框。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        {/*<InputNumber value={3} onChange={v => console.log(v)}>默认按钮</InputNumber>*/}
                        <InputNumber defaultValue={2} min={1} max={10} />
                    </div>
                )
            }, [])}

            {/* 受控数字输入框 */}
            <h2>受控数字输入框</h2>
            <p>配合 value 与 onChange 控制 InputNumber 改变。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <InputNumber value={value} min={1} max={10} onChange={onChange} />
                    </div>
                )
            }, [value])}

            {/* 禁用状态 */}
            <h2>禁用状态</h2>
            <p>点击按钮切换可用状态。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Button type={'primary'} onClick={() => setDisabled(d => !d)}>Toggle Disabled</Button>
                        </div>
                        <div className="detail-box">
                            <InputNumber defaultValue={2} min={1} max={10} disabled={disabled} />
                        </div>
                    </>
                )
            }, [disabled])}

            {/* 步数 */}
            <h2>步数</h2>
            <p>允许定义递增递减的步数控制。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Row type={'flex'} align={'middle'} gutter={20}>
                                <Col>
                                    <InputNumber defaultValue={2} min={0} max={10} step={2} />
                                </Col>
                                <Col className={'font-bold'}>
                                    Step = 2
                                </Col>
                            </Row>
                        </div>
                        <div className="detail-box">
                            <Row type={'flex'} align={'middle'} gutter={20}>
                                <Col>
                                    <InputNumber defaultValue={2.2} min={0} max={10} step={0.1} />
                                </Col>
                                <Col className={'font-bold'}>
                                    Step = 0.1
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

export default InputNumberDoc;