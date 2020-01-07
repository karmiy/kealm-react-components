/* 基本用法 */
export const CodeBasic =
`    import { Slider, Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <div className="detail-box">
            <Row>
                <Col span={14}>
                    <Slider defaultValue={20}></Slider>
                </Col>
            </Row>
        </div>,
        mountNode
    );`

/* 受控用法 */
export const CodeControlled =
`    import { useState, useCallback } from 'react';
    import { Slider, Row, Col, InputNumber } from "@kealm/react-components";
    
    function Demo() {
        const [value, setValue] = useState(10);
        const onChange = useCallback(v => setValue(v), []);
        
        return (
            <div className="detail-box">
                <Row type={'flex'} align={'middle'} gutter={20}>
                    <Col span={14}>
                        <Slider value={value} onChange={onChange}></Slider>
                    </Col>
                    <Col span={14}>
                        <InputNumber value={value} onChange={onChange} min={0} max={100}></InputNumber>
                    </Col>
                </Row>
            </div>
        )
    }`

/* 隐藏与格式化Tooltip */
export const CodeTooltip =
`    import { Slider, Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <div className="detail-box">
                <Row type={'flex'} align={'middle'} gutter={20}>
                    <Col span={14}>
                        <Slider defaultValue={20} defaultTooltipVisible={true}></Slider>
                    </Col>
                    <Col className={'font-bold'}>
                        默认开启 Tooltip
                    </Col>
                </Row>
            </div>
            <div className="detail-box">
                <Row type={'flex'} align={'middle'} gutter={20}>
                    <Col span={14}>
                        <Slider defaultValue={40} openTooltip={false}></Slider>
                    </Col>
                    <Col className={'font-bold'}>
                        隐藏 Tooltip
                    </Col>
                </Row>
            </div>
            <div className="detail-box">
                <Row type={'flex'} align={'middle'} gutter={20}>
                    <Col span={14}>
                        <Slider defaultValue={60} tipFormatter={v => \`￥\${v / 100}\`}></Slider>
                    </Col>
                    <Col className={'font-bold'}>
                        格式化 Tooltip
                    </Col>
                </Row>
            </div>
        </div>,
        mountNode
    );`

/* 禁用 */
export const CodeDisabled =
`    import { Slider, Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <div className="detail-box">
            <Row>
                <Col span={14}>
                    <Slider defaultValue={20} disabled></Slider>
                </Col>
            </Row>
        </div>,
        mountNode
    );`

/* 数值区间 */
export const CodeSection =
`    import { Slider, Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <div className="detail-box">
            <Row>
                <Col span={14}>
                    <Slider defaultValue={0} max={100} min={-50}></Slider>
                </Col>
            </Row>
        </div>,
        mountNode
    );`

/* 自定义步数 */
export const CodeSteps =
`    import { Slider, Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <div className="detail-box">
                    <Row>
                        <Col span={14}>
                            <Slider defaultValue={20} step={10} min={0} max={100}></Slider>
                        </Col>
                    </Row>
                </div>
                <div className="detail-box">
                    <Row>
                        <Col span={14}>
                            <Slider defaultValue={-20} showStops step={10} min={-50} max={50}></Slider>
                        </Col>
                    </Row>
                </div>
                <div className="detail-box">
                    <Row>
                        <Col span={14}>
                            <Slider defaultValue={-20} completeStops showStops step={10} min={-50} max={45}></Slider>
                        </Col>
                    </Row>
                </div>
        </div>,
        mountNode
    );`

/* 范围选择 */
export const CodeRange =
`    import { Slider, Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <div className="detail-box">
                <Row>
                    <Col span={14}>
                        <Slider range defaultValue={[0, 50]}></Slider>
                    </Col>
                </Row>
            </div>
            <div className="detail-box">
                <Row>
                    <Col span={14}>
                        <Slider range defaultValue={[-20, 20]} min={-50} max={50} showStops step={10}></Slider>
                    </Col>
                </Row>
            </div>
        </div>,
        mountNode
    );`

/* 竖向模式 */
export const CodeVertical =
`    import { Slider, Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <div className="detail-box">
            <Row>
                <Col span={2}>
                    <Slider defaultValue={20} vertical height={300}></Slider>
                </Col>
                <Col span={2}>
                    <Slider defaultValue={100} vertical height={300} max={1000} min={-500}></Slider>
                </Col>
                <Col span={2}>
                    <Slider defaultValue={20} vertical height={300} showStops step={10} min={0} max={50}></Slider>
                </Col>
                <Col span={2}>
                    <Slider defaultValue={[10, 50]} vertical height={300} range></Slider>
                </Col>
                <Col span={2}>
                    <Slider defaultValue={[-30, 30]} vertical height={300} range showStops step={20} min={-50} max={50}></Slider>
                </Col>
            </Row>
        </div>,
        mountNode
    );`

/* 展示标记 */
export const CodeMarks =
`    import { useState } from 'react';
    import { Slider, Row, Col, Radio } from "@kealm/react-components";
    
    function Demo() {
        const [vertical, setVertical] = useState(false);
        
        const marks = {
            0: '0°C',
            26: '26°C',
            37: '37°C',
            100: {
                style: {
                    fontWeight: 'bold',
                    color: 'rgb(255, 85, 0)',
                },
                label: '100°C',
            },
        }
        
        return (
            <div>
                <div className="detail-box">
                    <Radio.Group value={vertical} onChange={(e, v) => {setVertical(v)}}>
                        <Radio value={false}>Horizontal</Radio>
                        <Radio value={true}>Vertical</Radio>
                    </Radio.Group>
                </div>
                <div className="detail-box">
                    <Row>
                        <Col span={vertical ? 2 : 14}>
                            <Slider
                                defaultValue={20}
                                vertical={vertical}
                                height={vertical ? 300 : null}
                                marks={marks}>
                            </Slider>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }`