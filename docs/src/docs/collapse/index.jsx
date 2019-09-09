import React, { useState, useCallback } from 'react';
import { Collapse, Icon } from '@kealm/react-components';

const Item = Collapse.Item;

function CollapseDoc() {
    const [value, setValue] = useState([1]);
    const onChange = useCallback((nextValue) => {
        setValue(nextValue);
    })
    return <div className='page-box'>
        <h1>Collapse 折叠面板</h1>
        <p>通过折叠面板收纳内容区域。</p>

        {/* 基本用法 */}
        <h2>基本用法</h2>
        <p>可同时展开多个面板，面板之间不影响。</p>
        <div className="detail-box">
            <Collapse defaultValue={1}>
                <Item name={1} title={'一致性 Consistency'}>
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </Item>
                <Item name={2} title={'反馈 Feedback'}>
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </Item>
                <Item name={3} title={'效率 Efficiency'}>
                    <div>简化流程：设计简洁直观的操作流程；</div>
                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                </Item>
                <Item name={4} title={'可控 Controllability'}>
                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                </Item>
            </Collapse>
        </div>

        {/* 手动切换 */}
        <h2>手动切换</h2>
        <p>通过value与onChange手动进行面板切换。</p>
        <div className="detail-box">
            <Collapse value={value} onChange={onChange}>
                <Item name={1} title={'一致性 Consistency'}>
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </Item>
                <Item name={2} title={'反馈 Feedback'}>
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </Item>
                <Item name={3} title={'效率 Efficiency'}>
                    <div>简化流程：设计简洁直观的操作流程；</div>
                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                </Item>
                <Item name={4} title={'可控 Controllability'}>
                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                </Item>
            </Collapse>
        </div>

        {/* 手风琴效果 */}
        <h2>手风琴效果</h2>
        <p>每次只能展开一个面板。</p>
        <div className="detail-box">
            <Collapse defaultValue={1} accordion>
                <Item name={1} title={'一致性 Consistency'}>
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </Item>
                <Item name={2} title={'反馈 Feedback'}>
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </Item>
                <Item name={3} title={'效率 Efficiency'}>
                    <div>简化流程：设计简洁直观的操作流程；</div>
                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                </Item>
                <Item name={4} title={'可控 Controllability'}>
                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                </Item>
            </Collapse>
        </div>

        {/*
            <Item title={<>一致性 Consistency<Icon type='info-circle' style={{margin: '0 5px -2px'}} /></>}>
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </Item>
        */}
    </div>
}

export default CollapseDoc;