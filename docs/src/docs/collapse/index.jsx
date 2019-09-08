import React from 'react';
import { Collapse } from '@kealm/react-components';

const Item = Collapse.Item;

function CollapseDoc() {
    return <div className='page-box'>
        <h1>Collapse 折叠面板</h1>
        <p>通过折叠面板收纳内容区域。</p>

        {/* 基本用法 */}
        <h2>基本用法</h2>
        <p>可同时展开多个面板，面板之间不影响。</p>
        <div className="detail-box">
            <Collapse>
                <Item key={'1'} title={'一致性 Consistency'}>
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </Item>
                <Item key={'2'} title={'反馈 Feedback'}>
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </Item>
            </Collapse>
        </div>
    </div>
}

export default CollapseDoc;