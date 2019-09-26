import React, { useState, useCallback, useMemo } from 'react';
import {Radio, Button, Row, Col} from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';
import { radioProps, radioEvents, radioGroupProps, radioGroupEvents, radioButtonProps, radioButtonEvents } from 'api/radio';
import { CodeBasic, CodeControlled, CodeDisabled, CodeGroup, CodeGroupControlled, CodeGroupName, CodeGroupLayout, CodeButton, CodeSize } from 'demos/radio'

function RadioDoc() {
    const [checkedValue, setCheckedValue] = useState('a');
    const [disabled, setDisabled] = useState(true);
    const [groupValue, setGroupValue] = useState('a');

    const change = useCallback((e) => setCheckedValue(e.target.value), [setCheckedValue]);
    const groupChange = useCallback((e) => setGroupValue(e.target.value), [setGroupValue]);
    return (
        <div className='page-box'>
            <h1>Radio 单选框</h1>
            <p>在一组备选项中进行单选。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>
            <div className="detail-box">
                {useMemo(() => <Radio>Radio</Radio>, [])}
            </div>
            <HighLight code={CodeBasic} />

            {/* 受控用法 */}
            <h2>受控用法</h2>
            <p>通过 checked 与 onChange 控制单选框的选中状态。</p>
            {
                useMemo(() => {
                    return (
                        <div className="detail-box">
                            <Radio checked={checkedValue === 'a'} value={'a'} onChange={change}>A</Radio>
                            <Radio checked={checkedValue === 'b'} value={'b'} onChange={change}>B</Radio>
                            <Radio checked={checkedValue === 'c'} value={'c'} onChange={change}>C</Radio>
                            <Radio checked={checkedValue === 'd'} value={'d'} onChange={change}>D</Radio>
                        </div>
                    )
                }, [checkedValue, change])
            }
            <HighLight code={CodeControlled} />

            {/* 禁用状态 */}
            <h2>禁用状态</h2>
            <p>单选框不可用的状态。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Radio disabled={disabled}>Disabled</Radio>
                        <br/>
                        <Radio disabled={disabled} defaultChecked>Disabled</Radio>
                        <br/>
                        <Button type={'primary'} style={{marginTop: '20px'}} onClick={() => setDisabled(status => !status)}>Toggle disabled</Button>
                    </div>
                )
            }, [disabled, setDisabled])}
            <HighLight code={CodeDisabled} />

            {/* 单选框组 */}
            <h2>单选框组</h2>
            <p>适用于在多个互斥的选项中选择的场景。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Radio.Group>
                            <Radio value={'a'}>A</Radio>
                            <Radio value={'b'}>B</Radio>
                            <Radio value={'c'}>C</Radio>
                            <Radio value={'d'}>D</Radio>
                        </Radio.Group>
                    </div>
                )
            }, [])}
            <HighLight code={CodeGroup} />

            {/* 受控组 */}
            <h2>受控组</h2>
            <p>通过 value 与 onChange 控制单选框组的选中状态。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Radio.Group value={groupValue} onChange={groupChange}>
                            <Radio value={'a'}>A</Radio>
                            <Radio value={'b'}>B</Radio>
                            <Radio value={'c'}>C</Radio>
                            <Radio value={'d'}>D</Radio>
                        </Radio.Group>
                    </div>
                )
            }, [groupValue, groupChange])}
            <HighLight code={CodeGroupControlled} />

            {/* 单选组合 - 配合name */}
            <h2>单选组合 - 配合name</h2>
            <p>为组合内的 input 元素赋予相同的 name 属性，</p>
            <p>使浏览器把 Radio.Group 下的 Radio 真正看作是一组（例如可以通过方向键始终在同一组内更改选项）。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Radio.Group defaultValue={'a'} name={'kealm'}>
                            <Radio value={'a'}>A</Radio>
                            <Radio value={'b'}>B</Radio>
                            <Radio value={'c'}>C</Radio>
                            <Radio value={'d'}>D</Radio>
                        </Radio.Group>
                    </div>
                )
            }, [])}
            <HighLight code={CodeGroupName} />

            {/* 布局 */}
            <h2>布局</h2>
            <p>Radio.Group 内嵌 Radio 并与 Grid 组件一起使用，可以实现灵活的布局。</p>
            <div className="detail-box">
                {useMemo(() => {
                    return (
                        <Radio.Group style={{width: '100%'}}>
                            <Row>
                                <Col span={6}><Radio value={'a'}>A</Radio></Col>
                                <Col span={6}><Radio value={'b'}>B</Radio></Col>
                                <Col span={6}><Radio value={'c'}>C</Radio></Col>
                                <Col span={6}><Radio value={'d'}>D</Radio></Col>
                            </Row>
                        </Radio.Group>
                    )
                }, [])}
            </div>
            <HighLight code={CodeGroupLayout} />

            {/* 按钮样式 */}
            <h2>按钮样式</h2>
            <p>按钮样式的单选组合。</p>
            {useMemo(() => {
                return (
                    <>
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
                    </>
                )
            }, [])}
            <HighLight code={CodeButton} />

            {/* 大小 */}
            <h2>大小</h2>
            <p>大中小三种组合，可以和表单输入框进行对应配合。</p>
            {useMemo(() => {
                return (
                    <>
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
                    </>
                )
            }, [])}
            <HighLight code={CodeSize} />

            {/* API */}
            {useMemo(() => {
                return (
                    <>
                        <ApiTable title='Radio' propsList={radioProps} eventsList={radioEvents} />
                        <ApiTable title='RadioGroup' propsList={radioGroupProps} eventsList={radioGroupEvents} />
                        <ApiTable title='RadioButton' propsList={radioButtonProps} eventsList={radioButtonEvents} />
                    </>
                )
            }, [])}
        </div>
    )
}

export default RadioDoc;