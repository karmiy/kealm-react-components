import React, { useState, useCallback, useMemo } from 'react';
import { Radio, Button } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

function GridDoc() {
    const [checkedValue, setCheckedValue] = useState('a');
    const [disabled, setDisabled] = useState(true);
    const [groupValue, setGroupValue] = useState('a');

    const change = useCallback((value) => setCheckedValue(value), []);
    const groupChange = useCallback((value) => setGroupValue(value), [])
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

            {/* 按钮样式 */}
            <h2>按钮样式</h2>
            <p>按钮样式的单选组合。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Radio.Group>
                            <Radio.Button>Radio Button</Radio.Button>
                            <Radio.Button>Radio Button</Radio.Button>
                        </Radio.Group>
                    </div>
                )
            }, [])}

        </div>
    )
}

export default GridDoc;