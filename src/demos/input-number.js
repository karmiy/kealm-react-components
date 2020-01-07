/* 基本用法 */
export const CodeBasic =
`    import { InputNumber } from "@kealm/react-components";
    
    ReactDom.render(
        <InputNumber defaultValue={2} min={1} max={10}></InputNumber>,
        mountNode
    );`


/* 受控数字输入框 */
export const CodeControlled =
`    import { useState, useCallback } from 'react';
    import { InputNumber } from "@kealm/react-components";
    
    function Demo() {
        const [value, setValue] = useState(2);
        
        const onChange = useCallback(v => setValue(v), []);
        
        return <InputNumber value={value} min={1} max={10} onChange={onChange}></InputNumber>;
    }`

/* 禁用状态 */
export const CodeDisabled =
`    import { useState, useCallback } from 'react';
    import { InputNumber, Button } from "@kealm/react-components";
    
    function Demo() {
        const [disabled, setDisabled] = useState(true);
        
        return (
            <div>
                <div className="detail-box">
                    <Button type={'primary'} onClick={() => setDisabled(d => !d)}>Toggle Disabled</Button>
                </div>
                <div className="detail-box">
                    <InputNumber defaultValue={2} min={1} max={10} disabled={disabled}></InputNumber>
                </div>
            </div>
        );
    }`

/* 步数 */
export const CodeStep =
`    import { InputNumber, Row, col } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <div className="detail-box">
                <Row type={'flex'} align={'middle'} gutter={20}>
                    <Col>
                        <InputNumber defaultValue={2} min={0} max={10} step={2}></InputNumber>
                    </Col>
                    <Col className={'font-bold'}>
                        Step = 2
                    </Col>
                </Row>
            </div>
            <div className="detail-box">
                <Row type={'flex'} align={'middle'} gutter={20}>
                    <Col>
                        <InputNumber defaultValue={2.2} min={0} max={10} step={0.1}></InputNumber>
                    </Col>
                    <Col className={'font-bold'}>
                        Step = 0.1
                    </Col>
                </Row>
            </div>
        <div/>,
        mountNode
    );`

/* 精度 */
export const CodePrecision =
`    import { InputNumber, Row, col } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <div className="detail-box">
                <Row type={'flex'} align={'middle'} gutter={20}>
                    <Col>
                        <InputNumber defaultValue={2} min={0} max={10} precision={1}></InputNumber>
                    </Col>
                    <Col className={'font-bold'}>
                        Precision = 1
                    </Col>
                </Row>
            </div>
            <div className="detail-box">
                <Row type={'flex'} align={'middle'} gutter={20}>
                    <Col>
                        <InputNumber defaultValue={2.2} min={0} max={10} step={0.1} precision={2}></InputNumber>
                    </Col>
                    <Col className={'font-bold'}>
                        Precision = 2
                    </Col>
                </Row>
            </div>
        <div/>,
        mountNode
    );`

/* 格式化展示 */
export const CodeFormatter =
`    import { InputNumber, Row, col } from "@kealm/react-components";
    
    ReactDom.render(
        <Row type={'flex'} align={'middle'} gutter={20}>
            <Col>
                <InputNumber
                    defaultValue={1000}
                    formatter={value => \`$ \${value}\`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')}
                    parser={value => value.replace(/\\$\\s?|(,*)/g, '')}
                ></InputNumber>
            </Col>
            <Col>
                <InputNumber
                    defaultValue={1000}
                    formatter={value => \`\${value}%\`}
                    parser={value => value.replace('%', '')}
                ></InputNumber>
            </Col>
        </Row>,
        mountNode
    );`

/* 尺寸 */
export const CodeSize =
`    import { InputNumber, Row, col } from "@kealm/react-components";
    
    ReactDom.render(
        <Row type={'flex'} align={'middle'} gutter={20}>
            <Col>
                <InputNumber defaultValue={2} min={0} max={10} size={'large'}></InputNumber>
            </Col>
            <Col>
                <InputNumber defaultValue={2} min={0} max={10}></InputNumber>
            </Col>
            <Col>
                <InputNumber defaultValue={2} min={0} max={10} size={'small'}></InputNumber>
            </Col>
        </Row>,
        mountNode
    );`

/* 按钮位置 */
export const CodeControlsRight =
`    import { InputNumber, Row, col } from "@kealm/react-components";
    
    ReactDom.render(
        <Row type={'flex'} align={'middle'} gutter={20}>
            <Col>
                <InputNumber defaultValue={2} min={0} max={10} controlsRight={false} size={'large'}></InputNumber>
            </Col>
            <Col>
                <InputNumber defaultValue={2} min={0} max={10} controlsRight={false}></InputNumber>
            </Col>
            <Col>
                <InputNumber defaultValue={2} min={0} max={10} controlsRight={false} size={'small'}></InputNumber>
            </Col>
        </Row>,
        mountNode
    );`