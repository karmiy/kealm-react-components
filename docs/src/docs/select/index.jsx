import React, { useState, useMemo } from 'react';
import { Select } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

const { Option } = Select;

function SelectDoc() {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState('');

    return (
        <div className='page-box'>
            <h1>Select 选择器</h1>
            <p>当选项过多时，使用下拉菜单展示并选择内容。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>适用广泛的基础单选。</p>
            <div className="detail-box">
                <Select>
                    <Option value={'1'}>Karmiy</Option>
                    <Option value={'2'}>Karloy</Option>
                    <Option value={'3'}>Peppa</Option>
                    <Option value={'4'}>George</Option>
                    <Option value={'5'}>Hawk</Option>
                </Select>
            </div>

            {/* 禁用选项 */}
            <h2>禁用选项</h2>
            <p>在 Option 上设定 disabled 值为 true，即可禁用该选项。</p>
            <div className="detail-box">
                <Select>
                    <Option value={'1'}>Karmiy</Option>
                    <Option value={'2'}>Karloy</Option>
                    <Option value={'3'} disabled>Peppa</Option>
                    <Option value={'4'} disabled>George</Option>
                    <Option value={'5'}>Hawk</Option>
                </Select>
            </div>

            {/* 禁用状态 */}
            <h2>禁用状态</h2>
            <p>选择器不可用状态。</p>
            <div className="detail-box">
                <Select disabled>
                    <Option value={'1'}>Karmiy</Option>
                    <Option value={'2'}>Karloy</Option>
                    <Option value={'3'}>Peppa</Option>
                    <Option value={'4'}>George</Option>
                    <Option value={'5'}>Hawk</Option>
                </Select>
            </div>

            {/* 可清空单选 */}
            <h2>可清空单选</h2>
            <p>包含清空按钮，可将选择器清空为初始状态。</p>
            <div className="detail-box">
                <Select clearable>
                    <Option value={'1'}>Karmiy</Option>
                    <Option value={'2'}>Karloy</Option>
                    <Option value={'3'}>Peppa</Option>
                    <Option value={'4'}>George</Option>
                    <Option value={'5'}>Hawk</Option>
                </Select>
            </div>

            {/* 基础多选 */}
            <h2>基础多选</h2>
            <p>适用性较广的基础多选，用 Tag 展示已选项。</p>
            <div className="detail-box">
                <Select multiple>
                    <Option value={'1'}>Karmiy</Option>
                    <Option value={'2'}>Karloy</Option>
                    <Option value={'3'}>Peppa</Option>
                    <Option value={'4'}>George</Option>
                    <Option value={'5'}>Hawk</Option>
                </Select>
            </div>

            {/* API */}
            {/*{useMemo(() => <ApiTable title='Button' propsList={buttonProps} eventsList={buttonEvents} />, [])}*/}
        </div>
    )
}

export default SelectDoc;