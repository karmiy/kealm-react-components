import React, { useState, useMemo, useCallback } from 'react';
import { InputNumber, Button, Row, Col } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';
import { inputNumberProps, inputNumberEvents } from 'api/input-number';
import { CodeBasic, CodeControlled, CodeDisabled, CodeStep, CodePrecision, CodeFormatter, CodeSize, CodeControlsRight } from 'demos/input-number';

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
            <HighLight code={CodeBasic} />

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
            <HighLight code={CodeControlled} />

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
            <HighLight code={CodeDisabled} />

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
            <HighLight code={CodeStep} />

            {/* 精度 */}
            <h2>精度</h2>
            <p>控制显示的精度，precision 的值必须是一个非负整数，并且不能小于 step 的小数位数。</p>
            <p>当 precision 的值小于 value 小数位时，以 value 精度为主</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Row type={'flex'} align={'middle'} gutter={20}>
                                <Col>
                                    <InputNumber defaultValue={2} min={0} max={10} precision={1} />
                                </Col>
                                <Col className={'font-bold'}>
                                    Precision = 1
                                </Col>
                            </Row>
                        </div>
                        <div className="detail-box">
                            <Row type={'flex'} align={'middle'} gutter={20}>
                                <Col>
                                    <InputNumber defaultValue={2.2} min={0} max={10} step={0.1} precision={2} />
                                </Col>
                                <Col className={'font-bold'}>
                                    Precision = 2
                                </Col>
                            </Row>
                        </div>
                    </>
                )
            }, [])}
            <HighLight code={CodePrecision} />

            {/* 格式化展示 */}
            <h2>格式化展示</h2>
            <p>通过 formatter 格式化数字，以展示具有具体含义的数据，需要配合 parser 一起使用。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Row type={'flex'} align={'middle'} gutter={20}>
                            <Col>
                                <InputNumber
                                    defaultValue={1000}
                                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                />
                            </Col>
                            <Col>
                                <InputNumber
                                    defaultValue={1000}
                                    formatter={value => `${value}%`}
                                    parser={value => value.replace('%', '')}
                                />
                            </Col>
                        </Row>
                    </div>
                )
            }, [])}
            <HighLight code={CodeFormatter} />

            {/* 尺寸 */}
            <h2>尺寸</h2>
            <p>三种大小的数字输入框。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Row type={'flex'} align={'middle'} gutter={20}>
                            <Col>
                                <InputNumber defaultValue={2} min={0} max={10} size={'large'} />
                            </Col>
                            <Col>
                                <InputNumber defaultValue={2} min={0} max={10} />
                            </Col>
                            <Col>
                                <InputNumber defaultValue={2} min={0} max={10} size={'small'} />
                            </Col>
                        </Row>
                    </div>
                )
            }, [])}
            <HighLight code={CodeSize} />

            {/* 按钮位置 */}
            <h2>按钮位置</h2>
            <p>传统的数字选择器中按钮默认位于右侧，可以通过配置 controlsRight 为 false 将按钮位置分布于左右方。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Row type={'flex'} align={'middle'} gutter={20}>
                            <Col>
                                <InputNumber defaultValue={2} min={0} max={10} controlsRight={false} size={'large'} />
                            </Col>
                            <Col>
                                <InputNumber defaultValue={2} min={0} max={10} controlsRight={false} />
                            </Col>
                            <Col>
                                <InputNumber defaultValue={2} min={0} max={10} controlsRight={false} size={'small'} />
                            </Col>
                        </Row>
                    </div>
                )
            }, [])}
            <HighLight code={CodeControlsRight} />

            {/* API */}
            <ApiTable title='InputNumber' propsList={inputNumberProps} eventsList={inputNumberEvents} />
        </div>
    )
}

export default InputNumberDoc;