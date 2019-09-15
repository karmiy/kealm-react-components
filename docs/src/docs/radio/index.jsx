import React from 'react';
import { Radio } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

function GridDoc() {
    return (
        <div className='page-box'>
            <h1>Radio 单选框</h1>
            <p>在一组备选项中进行单选。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>
            <div className="detail-box">
                <Radio />
            </div>

        </div>
    )
}

export default GridDoc;