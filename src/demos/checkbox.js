/* 基本用法 */
export const CodeBasic =
`    import { Checkbox } from "@kealm/react-components";
    
    ReactDom.render(
        <Checkbox>Checkbox</Checkbox>,
        mountNode
    );`

/* 禁用状态 */
export const CodeDisabled =
`    import { Checkbox } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <Checkbox disabled>A</Checkbox>
            <br/>
            <Checkbox defaultChecked disabled>B</Checkbox>
        </div>,
        mountNode
    );`

/* 受控的复选框 */
export const CodeControlled =
`    import { useState, useCallback } from 'react';
    import { Checkbox, Button } from "@kealm/react-components";
    
    function Demo() {
        const [checked, setChecked] = useState(true);
        const [disabled, setDisabled] = useState(false);
        
        const change = useCallback(e => setChecked(e.target.checked), [setChecked])
        
        return (
            <div>
                <div className="detail-box">
                    <Checkbox checked={checked} disabled={disabled} onChange={change}>A</Checkbox>
                </div>
                <div className="detail-box">
                    <Button type={'primary'} onClick={()=> setChecked(c => !c)}>toggle checked</Button>
                    <Button type={'primary'} onClick={() => setDisabled(d => !d)}>toggle disabled</Button>
                </div>
            </div>
        )
    }`

/* 复选框组 */
export const CodeGroup =
`    import { Checkbox } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <Checkbox.Group>
                <Checkbox value={'a'}>A</Checkbox>
                <Checkbox value={'b'}>B</Checkbox>
                <Checkbox value={'c'}>C</Checkbox>
                <Checkbox value={'d'}>D</Checkbox>
            </Checkbox.Group>
            <br/>
            <br/>
            <Checkbox.Group defaultValue={['a']}>
                <Checkbox value={'a'}>A</Checkbox>
                <Checkbox value={'b'}>B</Checkbox>
                <Checkbox value={'c'}>C</Checkbox>
                <Checkbox value={'d'}>D</Checkbox>
            </Checkbox.Group>
            <br/>
            <br/>
            <Checkbox.Group defaultValue={['b']}>
                <Checkbox value={'a'}>A</Checkbox>
                <Checkbox value={'b'}>B</Checkbox>
                <Checkbox value={'c'} disabled>C</Checkbox>
                <Checkbox value={'d'}>D</Checkbox>
            </Checkbox.Group>
            <br/>
            <br/>
            <Checkbox.Group defaultValue={['b']} disabled>
                <Checkbox value={'a'}>A</Checkbox>
                <Checkbox value={'b'}>B</Checkbox>
                <Checkbox value={'c'}>C</Checkbox>
                <Checkbox value={'d'}>D</Checkbox>
            </Checkbox.Group>
        </div>,
        mountNode
    );`

/* 受控的复选框组 */
export const CodeGroupControlled =
`    import { useState, useCallback } from 'react';
    import { Checkbox } from "@kealm/react-components";
    
    function Demo() {
        const [groupValue, setGroupValue] = useState(['a']);
        const groupChange = useCallback(value => setGroupValue(value), [setGroupValue]);
        
        return (
            <Checkbox.Group value={groupValue} onChange={groupChange}>
                <Checkbox value={'a'}>A</Checkbox>
                <Checkbox value={'b'}>B</Checkbox>
                <Checkbox value={'c'}>C</Checkbox>
                <Checkbox value={'d'}>D</Checkbox>
            </Checkbox.Group>
        )
    }`


/* indeterminate 状态 */
export const CodeIndeterminate =
`    import { useState, useCallback } from 'react';
    import { Checkbox } from "@kealm/react-components";
    
    function Demo() {
        const plainOptions = useMemo(() => ['a', 'b', 'c', 'd'], []);
        const [indeterminate, setIndeterminate] = useState(true);
        const [checkAll, setCheckAll] = useState(false);
        const [checkedList, setCheckedList] = useState(['a']);
    
        const checkAllChange = useCallback(e => {
            setCheckAll(e.target.checked);
            setIndeterminate(false);
            setCheckedList(e.target.checked ? plainOptions : []);
        }, [setCheckAll, setIndeterminate, setCheckedList]);
    
        const checkedChange = useCallback(list => {
            setCheckedList(list);
            setIndeterminate(!!list.length && list.length < plainOptions.length);
            setCheckAll(list.length === plainOptions.length);
        }, [setCheckAll, setIndeterminate, setCheckedList]);
        
        return (
            <div>
                <Checkbox indeterminate={indeterminate} checked={checkAll} onChange={checkAllChange}>全选</Checkbox>
                <br/>
                <br/>
                <Checkbox.Group value={checkedList} onChange={checkedChange}>
                    <Checkbox value={'a'}>A</Checkbox>
                    <Checkbox value={'b'}>B</Checkbox>
                    <Checkbox value={'c'}>C</Checkbox>
                    <Checkbox value={'d'}>D</Checkbox>
                </Checkbox.Group>
            </div>
        )
    }`

/* 布局 */
export const CodeLayout =
`    import { Checkbox, Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <Checkbox.Group style={{width: '100%'}}>
            <Row>
                <Col span={6}><Checkbox value={'a'}>A</Checkbox></Col>
                <Col span={6}><Checkbox value={'b'}>B</Checkbox></Col>
                <Col span={6}><Checkbox value={'c'}>C</Checkbox></Col>
                <Col span={6}><Checkbox value={'d'}>D</Checkbox></Col>
            </Row>
        </Checkbox.Group>,
        mountNode
    );`

/* 按钮样式 */
export const CodeButton =
`    import { Checkbox } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <div className="detail-box">
                <Checkbox.Group defaultValue={['a']}>
                    <Checkbox.Button value={'a'}>Hangzhou</Checkbox.Button>
                    <Checkbox.Button value={'b'}>Shanghai</Checkbox.Button>
                    <Checkbox.Button value={'c'}>Beijing</Checkbox.Button>
                    <Checkbox.Button value={'d'}>Chengdu</Checkbox.Button>
                </Checkbox.Group>
            </div>
            <div className="detail-box">
                <Checkbox.Group defaultValue={['a']}>
                    <Checkbox.Button value={'a'}>Hangzhou</Checkbox.Button>
                    <Checkbox.Button value={'b'} disabled>Shanghai</Checkbox.Button>
                    <Checkbox.Button value={'c'}>Beijing</Checkbox.Button>
                    <Checkbox.Button value={'d'}>Chengdu</Checkbox.Button>
                </Checkbox.Group>
            </div>
            <div className="detail-box">
                <Checkbox.Group defaultValue={['a']} disabled>
                    <Checkbox.Button value={'a'}>Hangzhou</Checkbox.Button>
                    <Checkbox.Button value={'b'}>Shanghai</Checkbox.Button>
                    <Checkbox.Button value={'c'}>Beijing</Checkbox.Button>
                    <Checkbox.Button value={'d'}>Chengdu</Checkbox.Button>
                </Checkbox.Group>
            </div>
            <div className="detail-box">
                <Checkbox.Group defaultValue={['a', 'b']} solid>
                    <Checkbox.Button value={'a'}>Hangzhou</Checkbox.Button>
                    <Checkbox.Button value={'b'}>Shanghai</Checkbox.Button>
                    <Checkbox.Button value={'c'}>Beijing</Checkbox.Button>
                    <Checkbox.Button value={'d'}>Chengdu</Checkbox.Button>
                </Checkbox.Group>
            </div>
            <div className="detail-box">
                <Checkbox.Group defaultValue={['a']} solid>
                    <Checkbox.Button value={'a'}>Hangzhou</Checkbox.Button>
                    <Checkbox.Button value={'b'} disabled>Shanghai</Checkbox.Button>
                    <Checkbox.Button value={'c'}>Beijing</Checkbox.Button>
                    <Checkbox.Button value={'d'}>Chengdu</Checkbox.Button>
                </Checkbox.Group>
            </div>
        </div>,
        mountNode
    );`

/* 大小 */
export const CodeSize =
`    import { Checkbox } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <div className="detail-box">
                <Checkbox.Group defaultValue={['a']} size={'large'}>
                    <Checkbox.Button value={'a'}>Hangzhou</Checkbox.Button>
                    <Checkbox.Button value={'b'}>Shanghai</Checkbox.Button>
                    <Checkbox.Button value={'c'}>Beijing</Checkbox.Button>
                    <Checkbox.Button value={'d'}>Chengdu</Checkbox.Button>
                </Checkbox.Group>
            </div>
            <div className="detail-box">
                <Checkbox.Group defaultValue={['a']} solid>
                    <Checkbox.Button value={'a'}>Hangzhou</Checkbox.Button>
                    <Checkbox.Button value={'b'}>Shanghai</Checkbox.Button>
                    <Checkbox.Button value={'c'}>Beijing</Checkbox.Button>
                    <Checkbox.Button value={'d'}>Chengdu</Checkbox.Button>
                </Checkbox.Group>
            </div>
            <div className="detail-box">
                <Checkbox.Group defaultValue={['a']} size={'small'}>
                    <Checkbox.Button value={'a'}>Hangzhou</Checkbox.Button>
                    <Checkbox.Button value={'b'} disabled>Shanghai</Checkbox.Button>
                    <Checkbox.Button value={'c'}>Beijing</Checkbox.Button>
                    <Checkbox.Button value={'d'}>Chengdu</Checkbox.Button>
                </Checkbox.Group>
            </div>
        </div>,
        mountNode
    );`