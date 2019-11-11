/* 基本用法 */
export const CodeBasic =
`    import { Radio } from "@kealm/react-components";
    
    ReactDom.render(
        <Radio>Radio</Radio>,
        mountNode
    );`

/* 受控用法 */
export const CodeControlled =
`    import { useState, useCallback } from 'react';
    import { Radio } from "@kealm/react-components";
    
    function Demo() {
        const [checkedValue, setCheckedValue] = useState('a');
        
        const change = useCallback((e) => setCheckedValue(e.target.value), []);
        
        return (
            <div>
                <Radio checked={checkedValue === 'a'} value={'a'} onChange={change}>A</Radio>
                <Radio checked={checkedValue === 'b'} value={'b'} onChange={change}>B</Radio>
                <Radio checked={checkedValue === 'c'} value={'c'} onChange={change}>C</Radio>
                <Radio checked={checkedValue === 'd'} value={'d'} onChange={change}>D</Radio>
            </div>
        )
    }`

/* 禁用状态 */
export const CodeDisabled =
`    import { useState } from 'react';
    import { Radio, Button } from "@kealm/react-components";
    
    function Demo() {
        const [disabled, setDisabled] = useState(true);
        
        return (
            <div>
                <Radio disabled={disabled}>Disabled</Radio>
                <br/>
                <Radio disabled={disabled} defaultChecked>Disabled</Radio>
                <br/>
                <Button type={'primary'} style={{marginTop: '20px'}} onClick={() => setDisabled(status => !status)}>Toggle disabled</Button>
            </div>
        )
    }`

/* 单选框组 */
export const CodeGroup =
`    import { Radio } from "@kealm/react-components";
    
    ReactDom.render(
        <Radio.Group>
            <Radio value={'a'}>A</Radio>
            <Radio value={'b'}>B</Radio>
            <Radio value={'c'}>C</Radio>
            <Radio value={'d'}>D</Radio>
        </Radio.Group>,
        mountNode
    );`

/* 受控组 */
export const CodeGroupControlled =
`    import { useState, useCallback } from 'react';
    import { Radio } from "@kealm/react-components";
    
    function Demo() {
        const [groupValue, setGroupValue] = useState('a');

        const groupChange = useCallback((e) => setGroupValue(e.target.value), []);
        
        return (
            <Radio.Group value={groupValue} onChange={groupChange}>
                <Radio value={'a'}>A</Radio>
                <Radio value={'b'}>B</Radio>
                <Radio value={'c'}>C</Radio>
                <Radio value={'d'}>D</Radio>
            </Radio.Group>
        )
    }`

/* 单选框组 */
export const CodeGroupName =
`    import { Radio } from "@kealm/react-components";
    
    ReactDom.render(
        <Radio.Group defaultValue={'a'} name={'kealm'}>
            <Radio value={'a'}>A</Radio>
            <Radio value={'b'}>B</Radio>
            <Radio value={'c'}>C</Radio>
            <Radio value={'d'}>D</Radio>
        </Radio.Group>,
        mountNode
    );`

/* 布局 */
export const CodeGroupLayout =
`    import { Radio, Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <Radio.Group style={{width: '100%'}}>
            <Row>
                <Col span={6}><Radio value={'a'}>A</Radio></Col>
                <Col span={6}><Radio value={'b'}>B</Radio></Col>
                <Col span={6}><Radio value={'c'}>C</Radio></Col>
                <Col span={6}><Radio value={'d'}>D</Radio></Col>
            </Row>
        </Radio.Group>,
        mountNode
    );`

/* 按钮样式 */
export const CodeButton =
`    import { Radio } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <div className="detail-box">
                <Radio.Group defaultValue={'a'}>
                    <Radio.Button value={'a'}>Hangzhou</Radio.Button>
                    <Radio.Button value={'b'}>Shanghai</Radio.Button>
                    <Radio.Button value={'c'}>Beijing</Radio.Button>
                    <Radio.Button value={'d'}>Chengdu</Radio.Button>
                </Radio.Group>
            </div>
            <div className="detail-box">
                <Radio.Group defaultValue={'a'}>
                    <Radio.Button value={'a'}>Hangzhou</Radio.Button>
                    <Radio.Button value={'b'} disabled>Shanghai</Radio.Button>
                    <Radio.Button value={'c'}>Beijing</Radio.Button>
                    <Radio.Button value={'d'}>Chengdu</Radio.Button>
                </Radio.Group>
            </div>
            <div className="detail-box">
                <Radio.Group defaultValue={'a'} disabled>
                    <Radio.Button value={'a'}>Hangzhou</Radio.Button>
                    <Radio.Button value={'b'}>Shanghai</Radio.Button>
                    <Radio.Button value={'c'}>Beijing</Radio.Button>
                    <Radio.Button value={'d'}>Chengdu</Radio.Button>
                </Radio.Group>
            </div>
            <div className="detail-box">
                <Radio.Group defaultValue={'a'} solid>
                    <Radio.Button value={'a'}>Hangzhou</Radio.Button>
                    <Radio.Button value={'b'}>Shanghai</Radio.Button>
                    <Radio.Button value={'c'}>Beijing</Radio.Button>
                    <Radio.Button value={'d'}>Chengdu</Radio.Button>
                </Radio.Group>
            </div>
            <div className="detail-box">
                <Radio.Group defaultValue={'a'} solid>
                    <Radio.Button value={'a'}>Hangzhou</Radio.Button>
                    <Radio.Button value={'b'} disabled>Shanghai</Radio.Button>
                    <Radio.Button value={'c'}>Beijing</Radio.Button>
                    <Radio.Button value={'d'}>Chengdu</Radio.Button>
                </Radio.Group>
            </div>
        </div>,
        mountNode
    );`

/* 大小 */
export const CodeSize =
`    import { Radio } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <div className="detail-box">
                <Radio.Group defaultValue={'a'} size={'large'}>
                    <Radio.Button value={'a'}>Hangzhou</Radio.Button>
                    <Radio.Button value={'b'}>Shanghai</Radio.Button>
                    <Radio.Button value={'c'}>Beijing</Radio.Button>
                    <Radio.Button value={'d'}>Chengdu</Radio.Button>
                </Radio.Group>
            </div>
            <div className="detail-box">
                <Radio.Group defaultValue={'a'} solid>
                    <Radio.Button value={'a'}>Hangzhou</Radio.Button>
                    <Radio.Button value={'b'}>Shanghai</Radio.Button>
                    <Radio.Button value={'c'}>Beijing</Radio.Button>
                    <Radio.Button value={'d'}>Chengdu</Radio.Button>
                </Radio.Group>
            </div>
            <div className="detail-box">
                <Radio.Group defaultValue={'a'} size={'small'}>
                    <Radio.Button value={'a'}>Hangzhou</Radio.Button>
                    <Radio.Button value={'b'} disabled>Shanghai</Radio.Button>
                    <Radio.Button value={'c'}>Beijing</Radio.Button>
                    <Radio.Button value={'d'}>Chengdu</Radio.Button>
                </Radio.Group>
            </div>
        </div>,
        mountNode
    );`