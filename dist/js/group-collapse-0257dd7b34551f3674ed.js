(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{487:function(e,t,n){"use strict";n.r(t);var a=n(8),l=n.n(a),i=n(0),m=n.n(i),o=n(147),c=n(24),d=[{param:"value",des:"当前激活的面板",type:"string / number / array",option:"--",default:"--"},{param:"defaultValue",des:"默认激活的面板",type:"string / number / array",option:"--",default:"--"},{param:"accordion",des:"是否手风琴模式",type:"boolean",option:"--",default:"false"},{param:"iconLeft",des:"是否箭头置左",type:"boolean",option:"--",default:"false"},{param:"unmountOnExit",des:"隐藏后是否销毁DOM",type:"boolean",option:"--",default:"false"},{param:"showArrow",des:"是否显示箭头",type:"boolean",option:"--",default:"true"}],r=[{name:"onChange",des:"当前激活面板改变时触发，返回数组",callback:"(activeNames: array)"}],s=[{param:"title",des:"面板标题",type:"string",option:"--",default:"--"},{param:"name",des:"唯一标志符",type:"string / number",option:"--",default:"--"},{param:"disabled",des:"是否禁用",type:"boolean",option:"--",default:"false"},{param:"expandIcon",des:"自定义切换图标",type:"ReactNode",option:"--",default:"<Icon type={'right'} />"},{param:"extra",des:"面板右上角内容",type:"ReactNode",option:"--",default:"--"},{param:"headerClass",des:"自定义头部块的类名",type:"string",option:"--",default:"--"},{param:"wrapClass",des:"自定义内容块的类名",type:"string",option:"--",default:"--"}],u=o.g.Item;t.default=function(){var e=Object(i.useState)([1]),t=l()(e,2),n=t[0],a=t[1],v=Object(i.useCallback)((function(e){a(e)}),[]),p=Object(i.useMemo)((function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(u,{name:1,title:"一致性 Consistency"},m.a.createElement("div",null,"与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；"),m.a.createElement("div",null,"在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")),m.a.createElement(u,{name:2,title:"反馈 Feedback"},m.a.createElement("div",null,"控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；"),m.a.createElement("div",null,"页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。")),m.a.createElement(u,{name:3,title:"效率 Efficiency"},m.a.createElement("div",null,"简化流程：设计简洁直观的操作流程；"),m.a.createElement("div",null,"清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；"),m.a.createElement("div",null,"帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。")),m.a.createElement(u,{name:4,title:"可控 Controllability"},m.a.createElement("div",null,"用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；"),m.a.createElement("div",null,"结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。")))}),[]),E=Object(i.useMemo)((function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(u,{name:1,title:"一致性 Consistency"},m.a.createElement(o.g,null,m.a.createElement(u,{title:"一致性 Consistency"},m.a.createElement("div",null,"与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；"),m.a.createElement("div",null,"在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")),m.a.createElement(u,{title:"反馈 Feedback"},m.a.createElement("div",null,"控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；"),m.a.createElement("div",null,"页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。")))),m.a.createElement(u,{title:"反馈 Feedback"},m.a.createElement(o.g,null,m.a.createElement(u,{title:"效率 Efficiency"},m.a.createElement("div",null,"简化流程：设计简洁直观的操作流程；"),m.a.createElement("div",null,"清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；"),m.a.createElement("div",null,"帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。")),m.a.createElement(u,{title:"可控 Controllability"},m.a.createElement("div",null,"用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；"),m.a.createElement("div",null,"结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。")))))}),[]),I=Object(i.useMemo)((function(){return m.a.createElement(o.g,{defaultValue:1},p)}),[p]),f=Object(i.useMemo)((function(){return m.a.createElement(o.g,{value:n,onChange:v},p)}),[n,p]),C=Object(i.useMemo)((function(){return m.a.createElement(o.g,{defaultValue:1,accordion:!0},p)}),[p]),b=Object(i.useMemo)((function(){return m.a.createElement(o.g,{defaultValue:1},E)}),[E]),y=Object(i.useMemo)((function(){return m.a.createElement(o.g,null,m.a.createElement(u,{name:1,title:"一致性 Consistency",expandIcon:m.a.createElement(o.l,{type:"star-full"})},m.a.createElement("div",null,"与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；"),m.a.createElement("div",null,"在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")),m.a.createElement(u,{name:2,title:"反馈 Feedback",expandIcon:m.a.createElement(o.l,{type:"star-full"})},m.a.createElement("div",null,"控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；"),m.a.createElement("div",null,"页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。")))}),[]),g=Object(i.useMemo)((function(){return m.a.createElement(o.g,{iconLeft:!0},m.a.createElement(u,{name:1,title:"一致性 Consistency",extra:m.a.createElement(o.l,{type:"config"})},m.a.createElement("div",null,"与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；"),m.a.createElement("div",null,"在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")),m.a.createElement(u,{name:2,title:"反馈 Feedback",extra:m.a.createElement(o.l,{type:"config"})},m.a.createElement("div",null,"控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；"),m.a.createElement("div",null,"页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。")))}),[]);return m.a.createElement("div",{className:"page-box"},m.a.createElement("h1",null,"Collapse 折叠面板"),m.a.createElement("p",null,"通过折叠面板收纳内容区域。"),m.a.createElement("h2",null,"基本用法"),m.a.createElement("p",null,"可同时展开多个面板，面板之间不影响。"),m.a.createElement("div",{className:"detail-box"},I),m.a.createElement(c.d,{code:"    import { Collapse } from \"@kealm/react-components\";\n    \n    const Item = Collapse.Item;\n    \n    ReactDom.render(\n        <Collapse defaultValue={1}>\n            <Item name={1} title={'一致性 Consistency'}>\n                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>\n                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>\n            </Item>\n            <Item name={2} title={'反馈 Feedback'}>\n                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>\n                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>\n            </Item>\n            <Item name={3} title={'效率 Efficiency'}>\n                <div>简化流程：设计简洁直观的操作流程；</div>\n                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>\n                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>\n            </Item>\n            <Item name={4} title={'可控 Controllability'}>\n                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>\n                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>\n            </Item>\n        </Collapse>,\n        mountNode\n    );"}),m.a.createElement("h2",null,"手动切换"),m.a.createElement("p",null,"通过value与onChange手动进行面板切换。"),m.a.createElement("div",{className:"detail-box"},f),m.a.createElement(c.d,{code:"    import { useState, useCallback, useMemo } from \"react\";\n    import { Collapse } from \"@kealm/react-components\";\n    \n    const Item = Collapse.Item;\n    \n    function Demo() {\n        const [value, setValue] = useState([1]);\n        \n        const onChange = useCallback(nextValue => {\n            setValue(nextValue);\n        }, []);\n        \n        const itemContents = useMemo(() => {\n            return (\n                <>\n                    <Item name={1} title={'一致性 Consistency'}>\n                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>\n                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>\n                    </Item>\n                    <Item name={2} title={'反馈 Feedback'}>\n                        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>\n                        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>\n                    </Item>\n                    <Item name={3} title={'效率 Efficiency'}>\n                        <div>简化流程：设计简洁直观的操作流程；</div>\n                        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>\n                        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>\n                    </Item>\n                    <Item name={4} title={'可控 Controllability'}>\n                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>\n                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>\n                    </Item>\n                </>\n            )\n        }, []);\n        \n        return (\n            <Collapse value={value} onChange={onChange}>\n                {itemContents}\n            </Collapse>\n        )\n    }"}),m.a.createElement("h2",null,"手风琴效果"),m.a.createElement("p",null,"每次只能展开一个面板。"),m.a.createElement("div",{className:"detail-box"},C),m.a.createElement(c.d,{code:"    import { Collapse } from \"@kealm/react-components\";\n    \n    const Item = Collapse.Item;\n    \n    ReactDom.render(\n        <Collapse defaultValue={1} accordion>\n            <Item name={1} title={'一致性 Consistency'}>\n                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>\n                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>\n            </Item>\n            <Item name={2} title={'反馈 Feedback'}>\n                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>\n                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>\n            </Item>\n            <Item name={3} title={'效率 Efficiency'}>\n                <div>简化流程：设计简洁直观的操作流程；</div>\n                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>\n                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>\n            </Item>\n            <Item name={4} title={'可控 Controllability'}>\n                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>\n                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>\n            </Item>\n        </Collapse>,\n        mountNode\n    );"}),m.a.createElement("h2",null,"面板嵌套"),m.a.createElement("p",null,"嵌套折叠面板。"),m.a.createElement("div",{className:"detail-box"},b),m.a.createElement(c.d,{code:"    import { Collapse } from \"@kealm/react-components\";\n    \n    const Item = Collapse.Item;\n    \n    ReactDom.render(\n        <Collapse defaultValue={1}>\n            <Item name={1} title={'一致性 Consistency'}>\n                <Collapse>\n                    <Item title={'一致性 Consistency'}>\n                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>\n                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>\n                    </Item>\n                    <Item title={'反馈 Feedback'}>\n                        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>\n                        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>\n                    </Item>\n                </Collapse>\n            </Item>\n            <Item title={'反馈 Feedback'}>\n                <Collapse>\n                    <Item title={'效率 Efficiency'}>\n                        <div>简化流程：设计简洁直观的操作流程；</div>\n                        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>\n                        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>\n                    </Item>\n                    <Item title={'可控 Controllability'}>\n                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>\n                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>\n                    </Item>\n                </Collapse>\n            </Item>\n        </Collapse>,\n        mountNode\n    );"}),m.a.createElement("h2",null,"自定义箭头"),m.a.createElement("p",null,"可自定义的箭头图标。"),m.a.createElement("div",{className:"detail-box"},y),m.a.createElement(c.d,{code:"    import { Collapse } from \"@kealm/react-components\";\n    \n    const Item = Collapse.Item;\n    \n    ReactDom.render(\n        <Collapse>\n            <Item name={1} title={'一致性 Consistency'} expandIcon={<Icon type={'star-full'}></Icon>}>\n                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>\n                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>\n            </Item>\n            <Item name={2} title={'反馈 Feedback'} expandIcon={<Icon type={'star-full'}></Icon>}>\n                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>\n                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>\n            </Item>\n        </Collapse>,\n        mountNode\n    );"}),m.a.createElement("h2",null,"额外节点"),m.a.createElement("p",null,"可在面板后方添加额外节点，通常配合箭头左置。"),m.a.createElement("div",{className:"detail-box"},g),m.a.createElement(c.d,{code:"    import { Collapse } from \"@kealm/react-components\";\n    \n    const Item = Collapse.Item;\n    \n    ReactDom.render(\n        <Collapse iconLeft>\n            <Item name={1} title={'一致性 Consistency'} extra={<Icon type={'config'}></Icon>}>\n                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>\n                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>\n            </Item>\n            <Item name={2} title={'反馈 Feedback'} extra={<Icon type={'config'}></Icon>}>\n                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>\n                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>\n            </Item>\n        </Collapse>,\n        mountNode\n    );"}),m.a.createElement(c.a,{title:"Collapse",propsList:d,eventsList:r}),m.a.createElement(c.a,{title:"CollapseItem",propsList:s}))}}}]);
//# sourceMappingURL=group-collapse-0257dd7b34551f3674ed.js.map