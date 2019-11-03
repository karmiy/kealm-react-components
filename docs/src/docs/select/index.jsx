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
                <Select visible={visible} onVisibleChange={v => setVisible(v)} value={value} onChange={v => setValue(v)}>
                    <Option value={'1'}>黄金糕</Option>
                    <Option value={'2'}>双皮奶</Option>
                </Select>
            </div>

            {/* API */}
            {/*{useMemo(() => <ApiTable title='Button' propsList={buttonProps} eventsList={buttonEvents} />, [])}*/}
        </div>
    )
}

export default SelectDoc;