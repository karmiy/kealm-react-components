import React, { useMemo, useState, useCallback } from 'react';
import { Checkbox, Button, Row, Col } from '@kealm/react-components';
import { ApiTable, HighLight} from '@/components';
import { checkboxProps, checkboxEvents, checkboxGroupProps, checkboxGroupEvents, checkboxButtonProps, checkboxButtonEvents } from 'api/checkbox';
import { CodeBasic, CodeDisabled, CodeControlled, CodeGroup, CodeGroupControlled, CodeIndeterminate, CodeLayout, CodeButton, CodeSize } from 'demos/checkbox';

function CheckboxDoc() {
    const [checked, setChecked] = useState(true);
    const [disabled, setDisabled] = useState(false);
    const change = useCallback(e => setChecked(e.target.checked), [setChecked])

    const [groupValue, setGroupValue] = useState(['a']);
    const groupChange = useCallback(value => setGroupValue(value), [setGroupValue]);

    const plainOptions = useMemo(() => ['a', 'b', 'c', 'd'], []); // 全部选项
    const [indeterminate, setIndeterminate] = useState(true); // 是否半选
    const [checkAll, setCheckAll] = useState(false); // 是否全选
    const [checkedList, setCheckedList] = useState(['a']); // 当前选中

    const checkAllChange = useCallback(e => { // 全选change
        setCheckAll(e.target.checked);
        setIndeterminate(false);
        setCheckedList(e.target.checked ? plainOptions : []);
    }, [setCheckAll, setIndeterminate, setCheckedList]);

    const checkedChange = useCallback(list => { // 组change
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    }, [setCheckAll, setIndeterminate, setCheckedList]);

    return (
        <div className='page-box'>
            <h1>Checkbox 复选框</h1>
            <p>在一组备选项中进行单选。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>
            <div className="detail-box">
                <Checkbox>Checkbox</Checkbox>
            </div>
            <HighLight code={CodeBasic} />

            {/* 禁用状态 */}
            <h2>禁用状态</h2>
            <p>多选框不可用状态。</p>
            <div className="detail-box">
                <Checkbox disabled>A</Checkbox>
                <br/>
                <Checkbox defaultChecked disabled>B</Checkbox>
            </div>
            <HighLight code={CodeDisabled} />

            {/* 受控的复选框 */}
            <h2>受控的复选框</h2>
            <p>联动 checkbox。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Checkbox checked={checked} disabled={disabled} onChange={change}>A</Checkbox>
                        </div>
                        <div className="detail-box">
                            <Button type={'primary'} onClick={() => setChecked(c => !c)}>toggle checked</Button>
                            <Button type={'primary'} onClick={() => setDisabled(d => !d)}>toggle disabled</Button>
                        </div>
                    </>
                )
            }, [checked, disabled, change, setChecked, setDisabled])}
            <HighLight code={CodeControlled} />

            {/* 复选框组 */}
            <h2>复选框组</h2>
            <p>适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</p>
            <div className="detail-box">
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
            </div>
            <HighLight code={CodeGroup} />

            {/* 受控的复选框组 */}
            <h2>受控的复选框组</h2>
            <p>通过value与onChange联动checkbox-group。</p>
            <div className="detail-box">
                {useMemo(() => {
                    return (
                        <Checkbox.Group value={groupValue} onChange={groupChange}>
                            <Checkbox value={'a'}>A</Checkbox>
                            <Checkbox value={'b'}>B</Checkbox>
                            <Checkbox value={'c'}>C</Checkbox>
                            <Checkbox value={'d'}>D</Checkbox>
                        </Checkbox.Group>
                    )
                }, [groupValue, groupChange])}
            </div>
            <HighLight code={CodeGroupControlled} />

            {/* indeterminate 状态 */}
            <h2>indeterminate 状态</h2>
            <p>indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果。</p>
            <div className="detail-box">
                {useMemo(() => {
                    return (
                        <>
                            <Checkbox indeterminate={indeterminate} checked={checkAll} onChange={checkAllChange}>全选</Checkbox>
                            <br/>
                            <br/>
                            <Checkbox.Group value={checkedList} onChange={checkedChange}>
                                <Checkbox value={'a'}>A</Checkbox>
                                <Checkbox value={'b'}>B</Checkbox>
                                <Checkbox value={'c'}>C</Checkbox>
                                <Checkbox value={'d'}>D</Checkbox>
                            </Checkbox.Group>
                        </>
                    )
                }, [indeterminate, checkAll, checkAllChange, checkedList, checkedChange])}
            </div>
            <HighLight code={CodeIndeterminate} />

            {/* 布局 */}
            <h2>布局</h2>
            <p>Checkbox.Group 内嵌 Checkbox 并与 Grid 组件一起使用，可以实现灵活的布局。</p>
            <div className="detail-box">
                <Checkbox.Group style={{width: '100%'}}>
                    <Row>
                        <Col span={6}><Checkbox value={'a'}>A</Checkbox></Col>
                        <Col span={6}><Checkbox value={'b'}>B</Checkbox></Col>
                        <Col span={6}><Checkbox value={'c'}>C</Checkbox></Col>
                        <Col span={6}><Checkbox value={'d'}>D</Checkbox></Col>
                    </Row>
                </Checkbox.Group>
            </div>
            <HighLight code={CodeLayout} />

            {/* 按钮样式 */}
            <h2>按钮样式</h2>
            <p>按钮样式的多选组合。</p>
            <div className="detail-box">
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
            </div>
            <HighLight code={CodeButton} />

            {/* 大小 */}
            <h2>大小</h2>
            <p>大中小三种组合，可以和表单输入框进行对应配合。</p>
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
            <HighLight code={CodeSize} />

            {/* API */}
            <ApiTable title='Checkbox' propsList={checkboxProps} eventsList={checkboxEvents} />
            <ApiTable title='CheckboxGroup' propsList={checkboxGroupProps} eventsList={checkboxGroupEvents} />
            <ApiTable title='CheckboxButton' propsList={checkboxButtonProps} eventsList={checkboxButtonEvents} />
        </div>
    )
}

export default CheckboxDoc;