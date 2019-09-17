import React from 'react';
import { Checkbox } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

function CheckboxDoc() {
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

            {/* 禁用状态 */}
            <h2>禁用状态</h2>
            <p>多选框不可用状态。</p>
            <div className="detail-box">
                <Checkbox disabled>A</Checkbox>
                <br/>
                <Checkbox defaultChecked disabled>B</Checkbox>
            </div>
        </div>
    )
}

export default CheckboxDoc;