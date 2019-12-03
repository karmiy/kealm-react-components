/* 基本用法 */
export const CodeBasic =
`    import { TimePicker } from "@kealm/react-components";
    
    ReactDom.render(
        <TimePicker></TimePicker>,
        mountNode
    );`

/* 受控组件 */
export const CodeControlled =
`    import { useState, useCallback } from 'react';
    import { TimePicker } from "@kealm/react-components";
    
    function Demo() {
        const [value, setValue] = useState(null);
        const onChange = useCallback(v => setValue(v), []);
        
        return <TimePicker value={value} onChange={onChange}></TimePicker>
    }`

/* 可清空 */
export const CodeClear =
`    import { TimePicker } from "@kealm/react-components";
    
    ReactDom.render(
        <TimePicker allowClear></TimePicker>,
        mountNode
    );`

/* 三种大小 */
export const CodeSize =
`    import { TimePicker, Row, Col } from "@kealm/react-components";

    ReactDom.render(
        <Row type={'flex'} align={'middle'} gutter={20}>
            <Col><TimePicker defaultValue={new Date()} size={'large'}></TimePicker></Col>
            <Col><TimePicker defaultValue={new Date()}></TimePicker></Col>
            <Col><TimePicker defaultValue={new Date()} size={'small'}></TimePicker></Col>
        </Row>,
        mountNode
    );`

/* 禁用 */
export const CodeDisabled =
`    import { TimePicker } from "@kealm/react-components";
    
    ReactDom.render(
        <TimePicker disabled></TimePicker>,
        mountNode
    );`

/* 自定义格式 */
export const CodeFormat =
`    import { TimePicker, Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <div className="detail-box">
                <Row type={'flex'} align={'middle'} gutter={20}>
                    <Col>
                        <TimePicker defaultValue={new Date('2019-12-31 09:23:45')} onChange={v => console.log(v)}></TimePicker>
                    </Col>
                    <Col className={'font-bold'}>
                        HH:mm:ss
                    </Col>
                </Row>
            </div>
            <div className="detail-box">
                <Row type={'flex'} align={'middle'} gutter={20}>
                    <Col>
                        <TimePicker defaultValue={new Date('2019-12-31 09:23:45')} format={'HH:mm'} onChange={v => console.log(v)}></TimePicker>
                    </Col>
                    <Col className={'font-bold'}>
                        HH:mm
                    </Col>
                </Row>
            </div>
            <div className="detail-box">
                <Row type={'flex'} align={'middle'} gutter={20}>
                    <Col>
                        <TimePicker defaultValue={new Date('2019-12-31 09:23:45')} format={'mm:ss'} onChange={v => console.log(v)}></TimePicker>
                    </Col>
                    <Col className={'font-bold'}>
                        mm:ss
                    </Col>
                </Row>
            </div>
            <div className="detail-box">
                <Row type={'flex'} align={'middle'} gutter={20}>
                    <Col>
                        <TimePicker defaultValue={new Date('2019-12-31 09:23:45')} format={'HH~ss'} onChange={v => console.log(v)}></TimePicker>
                    </Col>
                    <Col className={'font-bold'}>
                        HH~ss
                    </Col>
                </Row>
            </div>
        </div>,
        mountNode
    );`

/* 12 小时制 */
export const Code12Hours =
`    import { TimePicker } from "@kealm/react-components";
    
    ReactDom.render(
       <TimePicker 
            defaultOpenValue={new Date('2019-12-31 08:23:45')} 
            format={'hh:mm:ss'} 
            onChange={v => console.log(v)}
        ></TimePicker>,
        mountNode
    );`

/* 步长选项 */
export const CodeStep =
`    import { TimePicker } from "@kealm/react-components";
    
    ReactDom.render(
       <TimePicker 
            hourStep={2} 
            minuteStep={15} 
            secondStep={10} 
            format={'hh:mm:ss'} 
            onChange={v => console.log(v)}
        ></TimePicker>,
        mountNode
    );`

/* 禁用部分选项 */
export const CodeDisabledOptions =
`    import { TimePicker, Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
       <Row gutter={20}>
            <Col>
                <TimePicker
                    disabledHours={() => [1, 2, 3]}
                    disabledMinutes={() => [4, 5, 6]}
                    disabledSeconds={() => [7, 8, 9]}
                    onChange={v => console.log(v)}
                ></TimePicker>
            </Col>
            <Col>
                <TimePicker
                    hideDisabledOptions
                    disabledHours={() => [1, 2, 3]}
                    disabledMinutes={() => [4, 5, 6]}
                    disabledSeconds={() => [7, 8, 9]}
                    onChange={v => console.log(v)}
                ></TimePicker>
            </Col>
        </Row>,
        mountNode
    );`

/* 附加内容 */
export const CodeAddon =
`    import { useState, useCallback } from 'react';
    import { TimePicker } from "@kealm/react-components";
    
    function Demo() {
        const [visible, setVisible] = useState(false);
        const onVisibleChange = useCallback(v => setVisible(v), []);
        
        return (
            <TimePicker visible={visible} onVisibleChange={onVisibleChange} addon={(value, setValue) => {
                return (
                    <Row type={'flex'} justify={'end'} gutter={8}>
                        <Col>
                            <Button type={'primary'} size={'small'} onClick={() => setValue(new Date())}>此刻</Button>
                        </Col>
                        <Col>
                            <Button size={'small'} onClick={() => setVisible(false)}>关闭</Button>
                        </Col>
                    </Row>
                )
            }} ></TimePicker>
        )
    }`