import React, {useMemo, useState, useCallback} from 'react';
import {Checkbox, Button, Row, Col} from '@kealm/react-components';
import {ApiTable, HighLight} from '@/components';

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
                {useMemo(() => <Checkbox>Checkbox</Checkbox>, [])}
            </div>

            {/* 禁用状态 */}
            <h2>禁用状态</h2>
            <p>多选框不可用状态。</p>
            <div className="detail-box">
                {useMemo(() => {
                    return (
                        <>
                            <Checkbox disabled>A</Checkbox>
                            <br/>
                            <Checkbox defaultChecked disabled>B</Checkbox>
                        </>
                    )
                }, [])}
            </div>

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

            {/* 复选框组 */}
            <h2>复选框组</h2>
            <p>适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</p>
            <div className="detail-box">
                {useMemo(() => {
                    return (
                        <>
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
                        </>
                    )
                }, [])}
            </div>

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

            {/* t */}
            <h2>t</h2>
            <p>通过value与onChange联动checkbox-group。</p>
            <div className="detail-box">
                {useMemo(() => {
                    return (
                        <Checkbox.Group style={{width: '100%'}} value={['a', 'c']} onChange={value => console.log(value)}>
                            <Row>
                                <Col span={6}><Checkbox value={'a'}>A</Checkbox></Col>
                                <Col span={6}><Checkbox value={'b'}>B</Checkbox></Col>
                                <Col span={6}><Checkbox value={'c'}>C</Checkbox></Col>
                                <Col span={6}><Checkbox value={'d'}>D</Checkbox></Col>
                            </Row>
                        </Checkbox.Group>
                    )
                }, [])}
            </div>
        </div>
    )
}

export default CheckboxDoc;