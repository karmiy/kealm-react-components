import React from 'react';
import { Collapse } from '@kealm/react-components';

function CollapseDoc() {
    return (
        <div className='page-box'>
            <h1>Collapse 折叠面板</h1>
            <p>通过折叠面板收纳内容区域。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>可同时展开多个面板，面板之间不影响。</p>
            <div className="detail-box">
                <Collapse>
                    <p style={{backgroundColor: 'pink'}}>123</p>
                </Collapse>
            </div>
        </div>
    )
}

export default CollapseDoc;