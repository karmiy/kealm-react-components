/* 基本用法 */
export const CodeBasic =
`    import { Collapse } from "@kealm/react-components";
    
    const Item = Collapse.Item;
    
    ReactDom.render(
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
        </Collapse>,
        mountNode
    );`

/* 手动切换 */
export const CodeHandle =
`    import { useState, useCallback, useMemo } from "react";
    import { Collapse } from "@kealm/react-components";
    
    const Item = Collapse.Item;
    
    function Demo() {
        const [value, setValue] = useState([1]);
        
        const onChange = useCallback((nextValue) => {
            setValue(nextValue);
        });
        
        const itemContents = useMemo(() => {
            return (
                <>
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
                </>
            )
        }, []);
        
        return (
            <Collapse value={value} onChange={onChange}>
                {itemContents}
            </Collapse>
        )
    }`

/* 手风琴效果 */
export const CodeAccordion =
`    import { Collapse } from "@kealm/react-components";
    
    const Item = Collapse.Item;
    
    ReactDom.render(
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
        </Collapse>,
        mountNode
    );`

/* 面板嵌套 */
export const CodeNest =
`    import { Collapse } from "@kealm/react-components";
    
    const Item = Collapse.Item;
    
    ReactDom.render(
        <Collapse defaultValue={1}>
            <Item name={1} title={'一致性 Consistency'}>
                <Collapse>
                    <Item title={'一致性 Consistency'}>
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </Item>
                    <Item title={'反馈 Feedback'}>
                        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                    </Item>
                </Collapse>
            </Item>
            <Item title={'反馈 Feedback'}>
                <Collapse>
                    <Item title={'效率 Efficiency'}>
                        <div>简化流程：设计简洁直观的操作流程；</div>
                        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                    </Item>
                    <Item title={'可控 Controllability'}>
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </Item>
                </Collapse>
            </Item>
        </Collapse>,
        mountNode
    );`

/* 自定义箭头 */
export const CodeExpandIcon =
`    import { Collapse } from "@kealm/react-components";
    
    const Item = Collapse.Item;
    
    ReactDom.render(
        <Collapse>
            <Item name={1} title={'一致性 Consistency'} expandIcon={<Icon type={'star-full'}></Icon>}>
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </Item>
            <Item name={2} title={'反馈 Feedback'} expandIcon={<Icon type={'star-full'}></Icon>}>
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </Item>
        </Collapse>,
        mountNode
    );`

/* 额外节点 */
export const CodeExtra =
`    import { Collapse } from "@kealm/react-components";
    
    const Item = Collapse.Item;
    
    ReactDom.render(
        <Collapse iconLeft>
            <Item name={1} title={'一致性 Consistency'} extra={<Icon type={'config'}></Icon>}>
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </Item>
            <Item name={2} title={'反馈 Feedback'} extra={<Icon type={'config'}></Icon>}>
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </Item>
        </Collapse>,
        mountNode
    );`