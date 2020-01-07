(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{653:function(e,a,t){var o,n,l,d=t(0);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,n=[a,t(14),t(2),t(161),t(22),t(706),t(707)],void 0===(l="function"==typeof(o=function(e,a,o,n,l,u,i){"use strict";var r=t(3),c=t(1);d(e,"__esModule",{value:!0}),e.default=void 0,a=c(a),o=r(o);var m=function(){var e=(0,o.useState)("a"),t=(0,a.default)(e,2),d=t[0],r=t[1],c=(0,o.useState)(!0),m=(0,a.default)(c,2),s=m[0],f=m[1],R=(0,o.useState)("a"),p=(0,a.default)(R,2),v=p[0],h=p[1],B=(0,o.useCallback)((function(e){return r(e.target.value)}),[]),E=(0,o.useCallback)((function(e){return h(e.target.value)}),[]);return o.default.createElement("div",{className:"page-box"},o.default.createElement("h1",null,"Radio 单选框"),o.default.createElement("p",null,"在一组备选项中进行单选。"),o.default.createElement("h2",null,"基本用法"),o.default.createElement("p",null,"由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。"),o.default.createElement("div",{className:"detail-box"},(0,o.useMemo)((function(){return o.default.createElement(n.Radio,null,"Radio")}),[])),o.default.createElement(l.HighLight,{code:i.CodeBasic}),o.default.createElement("h2",null,"受控用法"),o.default.createElement("p",null,"通过 checked 与 onChange 控制单选框的选中状态。"),(0,o.useMemo)((function(){return o.default.createElement("div",{className:"detail-box"},o.default.createElement(n.Radio,{checked:"a"===d,value:"a",onChange:B},"A"),o.default.createElement(n.Radio,{checked:"b"===d,value:"b",onChange:B},"B"),o.default.createElement(n.Radio,{checked:"c"===d,value:"c",onChange:B},"C"),o.default.createElement(n.Radio,{checked:"d"===d,value:"d",onChange:B},"D"))}),[d]),o.default.createElement(l.HighLight,{code:i.CodeControlled}),o.default.createElement("h2",null,"禁用状态"),o.default.createElement("p",null,"单选框不可用的状态。"),(0,o.useMemo)((function(){return o.default.createElement("div",{className:"detail-box"},o.default.createElement(n.Radio,{disabled:s},"Disabled"),o.default.createElement("br",null),o.default.createElement(n.Radio,{disabled:s,defaultChecked:!0},"Disabled"),o.default.createElement("br",null),o.default.createElement(n.Button,{type:"primary",style:{marginTop:"20px"},onClick:function(){return f((function(e){return!e}))}},"Toggle disabled"))}),[s]),o.default.createElement(l.HighLight,{code:i.CodeDisabled}),o.default.createElement("h2",null,"单选框组"),o.default.createElement("p",null,"适用于在多个互斥的选项中选择的场景。"),(0,o.useMemo)((function(){return o.default.createElement("div",{className:"detail-box"},o.default.createElement(n.Radio.Group,null,o.default.createElement(n.Radio,{value:"a"},"A"),o.default.createElement(n.Radio,{value:"b"},"B"),o.default.createElement(n.Radio,{value:"c"},"C"),o.default.createElement(n.Radio,{value:"d"},"D")))}),[]),o.default.createElement(l.HighLight,{code:i.CodeGroup}),o.default.createElement("h2",null,"受控组"),o.default.createElement("p",null,"通过 value 与 onChange 控制单选框组的选中状态。"),(0,o.useMemo)((function(){return o.default.createElement("div",{className:"detail-box"},o.default.createElement(n.Radio.Group,{value:v,onChange:E},o.default.createElement(n.Radio,{value:"a"},"A"),o.default.createElement(n.Radio,{value:"b"},"B"),o.default.createElement(n.Radio,{value:"c"},"C"),o.default.createElement(n.Radio,{value:"d"},"D")))}),[v]),o.default.createElement(l.HighLight,{code:i.CodeGroupControlled}),o.default.createElement("h2",null,"单选组合 - 配合name"),o.default.createElement("p",null,"为组合内的 input 元素赋予相同的 name 属性，"),o.default.createElement("p",null,"使浏览器把 Radio.Group 下的 Radio 真正看作是一组（例如可以通过方向键始终在同一组内更改选项）。"),(0,o.useMemo)((function(){return o.default.createElement("div",{className:"detail-box"},o.default.createElement(n.Radio.Group,{defaultValue:"a",name:"kealm"},o.default.createElement(n.Radio,{value:"a"},"A"),o.default.createElement(n.Radio,{value:"b"},"B"),o.default.createElement(n.Radio,{value:"c"},"C"),o.default.createElement(n.Radio,{value:"d"},"D")))}),[]),o.default.createElement(l.HighLight,{code:i.CodeGroupName}),o.default.createElement("h2",null,"布局"),o.default.createElement("p",null,"Radio.Group 内嵌 Radio 并与 Grid 组件一起使用，可以实现灵活的布局。"),o.default.createElement("div",{className:"detail-box"},(0,o.useMemo)((function(){return o.default.createElement(n.Radio.Group,{style:{width:"100%"}},o.default.createElement(n.Row,null,o.default.createElement(n.Col,{span:6},o.default.createElement(n.Radio,{value:"a"},"A")),o.default.createElement(n.Col,{span:6},o.default.createElement(n.Radio,{value:"b"},"B")),o.default.createElement(n.Col,{span:6},o.default.createElement(n.Radio,{value:"c"},"C")),o.default.createElement(n.Col,{span:6},o.default.createElement(n.Radio,{value:"d"},"D"))))}),[])),o.default.createElement(l.HighLight,{code:i.CodeGroupLayout}),o.default.createElement("h2",null,"按钮样式"),o.default.createElement("p",null,"按钮样式的单选组合。"),(0,o.useMemo)((function(){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"detail-box"},o.default.createElement(n.Radio.Group,{defaultValue:"a"},o.default.createElement(n.Radio.Button,{value:"a"},"Hangzhou"),o.default.createElement(n.Radio.Button,{value:"b"},"Shanghai"),o.default.createElement(n.Radio.Button,{value:"c"},"Beijing"),o.default.createElement(n.Radio.Button,{value:"d"},"Chengdu"))),o.default.createElement("div",{className:"detail-box"},o.default.createElement(n.Radio.Group,{defaultValue:"a"},o.default.createElement(n.Radio.Button,{value:"a"},"Hangzhou"),o.default.createElement(n.Radio.Button,{value:"b",disabled:!0},"Shanghai"),o.default.createElement(n.Radio.Button,{value:"c"},"Beijing"),o.default.createElement(n.Radio.Button,{value:"d"},"Chengdu"))),o.default.createElement("div",{className:"detail-box"},o.default.createElement(n.Radio.Group,{defaultValue:"a",disabled:!0},o.default.createElement(n.Radio.Button,{value:"a"},"Hangzhou"),o.default.createElement(n.Radio.Button,{value:"b"},"Shanghai"),o.default.createElement(n.Radio.Button,{value:"c"},"Beijing"),o.default.createElement(n.Radio.Button,{value:"d"},"Chengdu"))),o.default.createElement("div",{className:"detail-box"},o.default.createElement(n.Radio.Group,{defaultValue:"a",solid:!0},o.default.createElement(n.Radio.Button,{value:"a"},"Hangzhou"),o.default.createElement(n.Radio.Button,{value:"b"},"Shanghai"),o.default.createElement(n.Radio.Button,{value:"c"},"Beijing"),o.default.createElement(n.Radio.Button,{value:"d"},"Chengdu"))),o.default.createElement("div",{className:"detail-box"},o.default.createElement(n.Radio.Group,{defaultValue:"a",solid:!0},o.default.createElement(n.Radio.Button,{value:"a"},"Hangzhou"),o.default.createElement(n.Radio.Button,{value:"b",disabled:!0},"Shanghai"),o.default.createElement(n.Radio.Button,{value:"c"},"Beijing"),o.default.createElement(n.Radio.Button,{value:"d"},"Chengdu"))))}),[]),o.default.createElement(l.HighLight,{code:i.CodeButton}),o.default.createElement("h2",null,"大小"),o.default.createElement("p",null,"大中小三种组合，可以和表单输入框进行对应配合。"),(0,o.useMemo)((function(){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"detail-box"},o.default.createElement(n.Radio.Group,{defaultValue:"a",size:"large"},o.default.createElement(n.Radio.Button,{value:"a"},"Hangzhou"),o.default.createElement(n.Radio.Button,{value:"b"},"Shanghai"),o.default.createElement(n.Radio.Button,{value:"c"},"Beijing"),o.default.createElement(n.Radio.Button,{value:"d"},"Chengdu"))),o.default.createElement("div",{className:"detail-box"},o.default.createElement(n.Radio.Group,{defaultValue:"a",solid:!0},o.default.createElement(n.Radio.Button,{value:"a"},"Hangzhou"),o.default.createElement(n.Radio.Button,{value:"b"},"Shanghai"),o.default.createElement(n.Radio.Button,{value:"c"},"Beijing"),o.default.createElement(n.Radio.Button,{value:"d"},"Chengdu"))),o.default.createElement("div",{className:"detail-box"},o.default.createElement(n.Radio.Group,{defaultValue:"a",size:"small"},o.default.createElement(n.Radio.Button,{value:"a"},"Hangzhou"),o.default.createElement(n.Radio.Button,{value:"b",disabled:!0},"Shanghai"),o.default.createElement(n.Radio.Button,{value:"c"},"Beijing"),o.default.createElement(n.Radio.Button,{value:"d"},"Chengdu"))))}),[]),o.default.createElement(l.HighLight,{code:i.CodeSize}),o.default.createElement(l.ApiTable,{title:"Radio",propsList:u.radioProps,eventsList:u.radioEvents}),o.default.createElement(l.ApiTable,{title:"RadioGroup",propsList:u.radioGroupProps,eventsList:u.radioGroupEvents}),o.default.createElement(l.ApiTable,{title:"RadioButton",propsList:u.radioButtonProps,eventsList:u.radioButtonEvents}))};e.default=m})?o.apply(a,n):o)||(e.exports=l)},706:function(e,a,t){var o,n,l,d=t(0);t(4);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,n=[a,t(4)],void 0===(l="function"==typeof(o=function(e,a){"use strict";var o,n,l=t(1);d(e,"__esModule",{value:!0}),e.radioButtonEvents=e.radioButtonProps=e.radioGroupEvents=e.radioGroupProps=e.radioEvents=e.radioProps=void 0,a=l(a),e.radioProps=[{param:"autoFocus",des:"是否默认聚焦",type:"boolean",option:"--",default:"false"},{param:"defaultChecked",des:"初始是否选中",type:"boolean",option:"--",default:"false"},{param:"checked",des:"指定当前是否选中",type:"boolean",option:"--",default:"false"},{param:"value",des:"根据 value 进行比较，判断是否选中",type:"any",option:"--",default:"--"},{param:"disabled",des:"是否禁用",type:"boolean",option:"--",default:"false"},{param:"name",des:'input [ type = "radio" ] 的 name属性',type:"string",option:"--",default:"--"}];var u=[{name:"onChange",des:"选项变化时的回调函数",callback:"(e: Event, value)"}];e.radioEvents=u,e.radioGroupProps=[{param:"defaultValue",des:"默认选中的值",type:"string / number",option:"--",default:"--"},{param:"value",des:"用于设置当前选中的值",type:"any",option:"--",default:"--"},{param:"disabled",des:"子单选框是否禁用",type:"boolean",option:"--",default:"false"},{param:"name",des:'子单选框中 input [ type = "radio" ] 的 name属性',type:"string",option:"--",default:"--"},{param:"size",des:"子单选框大小，只对按钮样式生效",type:"string",option:"large / small",default:"--"},{param:"solid",des:"子单选框填色风格，只对按钮样式生效",type:"boolean",option:"--",default:"false"}];var i=(0,a.default)(o=[]).call(o,u);e.radioGroupEvents=i,e.radioButtonProps=[{param:"autoFocus",des:"是否默认聚焦",type:"boolean",option:"--",default:"false"},{param:"defaultChecked",des:"初始是否选中",type:"boolean",option:"--",default:"false"},{param:"checked",des:"指定当前是否选中",type:"boolean",option:"--",default:"false"},{param:"value",des:"根据 value 进行比较，判断是否选中",type:"any",option:"--",default:"--"},{param:"disabled",des:"是否禁用",type:"boolean",option:"--",default:"false"},{param:"name",des:'input [ type = "radio" ] 的 name属性',type:"string",option:"--",default:"--"},{param:"size",des:"按钮大小",type:"string",option:"large / small",default:"--"},{param:"solid",des:"是否填色风格",type:"boolean",option:"--",default:"false"}];var r=(0,a.default)(n=[]).call(n,u);e.radioButtonEvents=r})?o.apply(a,n):o)||(e.exports=l)},707:function(e,a,t){var o,n,l,d=t(0);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,n=[a],void 0===(l="function"==typeof(o=function(e){"use strict";d(e,"__esModule",{value:!0}),e.CodeSize=e.CodeButton=e.CodeGroupLayout=e.CodeGroupName=e.CodeGroupControlled=e.CodeGroup=e.CodeDisabled=e.CodeControlled=e.CodeBasic=void 0,e.CodeBasic='    import { Radio } from "@kealm/react-components";\n    \n    ReactDom.render(\n        <Radio>Radio</Radio>,\n        mountNode\n    );',e.CodeControlled="    import { useState, useCallback } from 'react';\n    import { Radio } from \"@kealm/react-components\";\n    \n    function Demo() {\n        const [checkedValue, setCheckedValue] = useState('a');\n        \n        const change = useCallback(e => setCheckedValue(e.target.value), []);\n        \n        return (\n            <div>\n                <Radio checked={checkedValue === 'a'} value={'a'} onChange={change}>A</Radio>\n                <Radio checked={checkedValue === 'b'} value={'b'} onChange={change}>B</Radio>\n                <Radio checked={checkedValue === 'c'} value={'c'} onChange={change}>C</Radio>\n                <Radio checked={checkedValue === 'd'} value={'d'} onChange={change}>D</Radio>\n            </div>\n        )\n    }",e.CodeDisabled="    import { useState } from 'react';\n    import { Radio, Button } from \"@kealm/react-components\";\n    \n    function Demo() {\n        const [disabled, setDisabled] = useState(true);\n        \n        return (\n            <div>\n                <Radio disabled={disabled}>Disabled</Radio>\n                <br/>\n                <Radio disabled={disabled} defaultChecked>Disabled</Radio>\n                <br/>\n                <Button type={'primary'} style={{marginTop: '20px'}} onClick={() => setDisabled(status => !status)}>Toggle disabled</Button>\n            </div>\n        )\n    }",e.CodeGroup="    import { Radio } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <Radio.Group>\n            <Radio value={'a'}>A</Radio>\n            <Radio value={'b'}>B</Radio>\n            <Radio value={'c'}>C</Radio>\n            <Radio value={'d'}>D</Radio>\n        </Radio.Group>,\n        mountNode\n    );",e.CodeGroupControlled="    import { useState, useCallback } from 'react';\n    import { Radio } from \"@kealm/react-components\";\n    \n    function Demo() {\n        const [groupValue, setGroupValue] = useState('a');\n\n        const groupChange = useCallback(e => setGroupValue(e.target.value), []);\n        \n        return (\n            <Radio.Group value={groupValue} onChange={groupChange}>\n                <Radio value={'a'}>A</Radio>\n                <Radio value={'b'}>B</Radio>\n                <Radio value={'c'}>C</Radio>\n                <Radio value={'d'}>D</Radio>\n            </Radio.Group>\n        )\n    }",e.CodeGroupName="    import { Radio } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <Radio.Group defaultValue={'a'} name={'kealm'}>\n            <Radio value={'a'}>A</Radio>\n            <Radio value={'b'}>B</Radio>\n            <Radio value={'c'}>C</Radio>\n            <Radio value={'d'}>D</Radio>\n        </Radio.Group>,\n        mountNode\n    );",e.CodeGroupLayout="    import { Radio, Row, Col } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <Radio.Group style={{width: '100%'}}>\n            <Row>\n                <Col span={6}><Radio value={'a'}>A</Radio></Col>\n                <Col span={6}><Radio value={'b'}>B</Radio></Col>\n                <Col span={6}><Radio value={'c'}>C</Radio></Col>\n                <Col span={6}><Radio value={'d'}>D</Radio></Col>\n            </Row>\n        </Radio.Group>,\n        mountNode\n    );",e.CodeButton="    import { Radio } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <div>\n            <div className=\"detail-box\">\n                <Radio.Group defaultValue={'a'}>\n                    <Radio.Button value={'a'}>Hangzhou</Radio.Button>\n                    <Radio.Button value={'b'}>Shanghai</Radio.Button>\n                    <Radio.Button value={'c'}>Beijing</Radio.Button>\n                    <Radio.Button value={'d'}>Chengdu</Radio.Button>\n                </Radio.Group>\n            </div>\n            <div className=\"detail-box\">\n                <Radio.Group defaultValue={'a'}>\n                    <Radio.Button value={'a'}>Hangzhou</Radio.Button>\n                    <Radio.Button value={'b'} disabled>Shanghai</Radio.Button>\n                    <Radio.Button value={'c'}>Beijing</Radio.Button>\n                    <Radio.Button value={'d'}>Chengdu</Radio.Button>\n                </Radio.Group>\n            </div>\n            <div className=\"detail-box\">\n                <Radio.Group defaultValue={'a'} disabled>\n                    <Radio.Button value={'a'}>Hangzhou</Radio.Button>\n                    <Radio.Button value={'b'}>Shanghai</Radio.Button>\n                    <Radio.Button value={'c'}>Beijing</Radio.Button>\n                    <Radio.Button value={'d'}>Chengdu</Radio.Button>\n                </Radio.Group>\n            </div>\n            <div className=\"detail-box\">\n                <Radio.Group defaultValue={'a'} solid>\n                    <Radio.Button value={'a'}>Hangzhou</Radio.Button>\n                    <Radio.Button value={'b'}>Shanghai</Radio.Button>\n                    <Radio.Button value={'c'}>Beijing</Radio.Button>\n                    <Radio.Button value={'d'}>Chengdu</Radio.Button>\n                </Radio.Group>\n            </div>\n            <div className=\"detail-box\">\n                <Radio.Group defaultValue={'a'} solid>\n                    <Radio.Button value={'a'}>Hangzhou</Radio.Button>\n                    <Radio.Button value={'b'} disabled>Shanghai</Radio.Button>\n                    <Radio.Button value={'c'}>Beijing</Radio.Button>\n                    <Radio.Button value={'d'}>Chengdu</Radio.Button>\n                </Radio.Group>\n            </div>\n        </div>,\n        mountNode\n    );",e.CodeSize="    import { Radio } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <div>\n            <div className=\"detail-box\">\n                <Radio.Group defaultValue={'a'} size={'large'}>\n                    <Radio.Button value={'a'}>Hangzhou</Radio.Button>\n                    <Radio.Button value={'b'}>Shanghai</Radio.Button>\n                    <Radio.Button value={'c'}>Beijing</Radio.Button>\n                    <Radio.Button value={'d'}>Chengdu</Radio.Button>\n                </Radio.Group>\n            </div>\n            <div className=\"detail-box\">\n                <Radio.Group defaultValue={'a'} solid>\n                    <Radio.Button value={'a'}>Hangzhou</Radio.Button>\n                    <Radio.Button value={'b'}>Shanghai</Radio.Button>\n                    <Radio.Button value={'c'}>Beijing</Radio.Button>\n                    <Radio.Button value={'d'}>Chengdu</Radio.Button>\n                </Radio.Group>\n            </div>\n            <div className=\"detail-box\">\n                <Radio.Group defaultValue={'a'} size={'small'}>\n                    <Radio.Button value={'a'}>Hangzhou</Radio.Button>\n                    <Radio.Button value={'b'} disabled>Shanghai</Radio.Button>\n                    <Radio.Button value={'c'}>Beijing</Radio.Button>\n                    <Radio.Button value={'d'}>Chengdu</Radio.Button>\n                </Radio.Group>\n            </div>\n        </div>,\n        mountNode\n    );"})?o.apply(a,n):o)||(e.exports=l)}}]);
//# sourceMappingURL=group-radio-6c94ac586c9bc6a02919.js.map