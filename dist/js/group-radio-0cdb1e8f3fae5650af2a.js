(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{496:function(e,a,t){"use strict";t.r(a);var n,o,l=t(8),u=t.n(l),d=t(0),i=t.n(d),c=t(147),r=t(24),m=t(7),s=t.n(m),p=[{param:"autoFocus",des:"是否默认聚焦",type:"boolean",option:"--",default:"false"},{param:"defaultChecked",des:"初始是否选中",type:"boolean",option:"--",default:"false"},{param:"checked",des:"指定当前是否选中",type:"boolean",option:"--",default:"false"},{param:"value",des:"根据 value 进行比较，判断是否选中",type:"any",option:"--",default:"--"},{param:"disabled",des:"是否禁用",type:"boolean",option:"--",default:"false"},{param:"name",des:'input [ type = "radio" ] 的 name属性',type:"string",option:"--",default:"--"}],v=[{name:"onChange",des:"选项变化时的回调函数",callback:"(e: Event, value)"}],R=[{param:"defaultValue",des:"默认选中的值",type:"string / number",option:"--",default:"--"},{param:"value",des:"用于设置当前选中的值",type:"any",option:"--",default:"--"},{param:"disabled",des:"子单选框是否禁用",type:"boolean",option:"--",default:"false"},{param:"name",des:'子单选框中 input [ type = "radio" ] 的 name属性',type:"string",option:"--",default:"--"},{param:"size",des:"子单选框大小，只对按钮样式生效",type:"string",option:"large / small",default:"--"},{param:"solid",des:"子单选框填色风格，只对按钮样式生效",type:"boolean",option:"--",default:"false"}],E=s()(n=[]).call(n,v),B=[{param:"autoFocus",des:"是否默认聚焦",type:"boolean",option:"--",default:"false"},{param:"defaultChecked",des:"初始是否选中",type:"boolean",option:"--",default:"false"},{param:"checked",des:"指定当前是否选中",type:"boolean",option:"--",default:"false"},{param:"value",des:"根据 value 进行比较，判断是否选中",type:"any",option:"--",default:"--"},{param:"disabled",des:"是否禁用",type:"boolean",option:"--",default:"false"},{param:"name",des:'input [ type = "radio" ] 的 name属性',type:"string",option:"--",default:"--"},{param:"size",des:"按钮大小",type:"string",option:"large / small",default:"--"},{param:"solid",des:"是否填色风格",type:"boolean",option:"--",default:"false"}],h=s()(o=[]).call(o,v);a.default=function(){var e=Object(d.useState)("a"),a=u()(e,2),t=a[0],n=a[1],o=Object(d.useState)(!0),l=u()(o,2),m=l[0],s=l[1],b=Object(d.useState)("a"),g=u()(b,2),f=g[0],q=g[1],C=Object(d.useCallback)((function(e){return n(e.target.value)}),[]),k=Object(d.useCallback)((function(e){return q(e.target.value)}),[]);return i.a.createElement("div",{className:"page-box"},i.a.createElement("h1",null,"Radio 单选框"),i.a.createElement("p",null,"在一组备选项中进行单选。"),i.a.createElement("h2",null,"基本用法"),i.a.createElement("p",null,"由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。"),i.a.createElement("div",{className:"detail-box"},Object(d.useMemo)((function(){return i.a.createElement(c.q,null,"Radio")}),[])),i.a.createElement(r.d,{code:'    import { Radio } from "@kealm/react-components";\n    \n    ReactDom.render(\n        <Radio>Radio</Radio>,\n        mountNode\n    );'}),i.a.createElement("h2",null,"受控用法"),i.a.createElement("p",null,"通过 checked 与 onChange 控制单选框的选中状态。"),Object(d.useMemo)((function(){return i.a.createElement("div",{className:"detail-box"},i.a.createElement(c.q,{checked:"a"===t,value:"a",onChange:C},"A"),i.a.createElement(c.q,{checked:"b"===t,value:"b",onChange:C},"B"),i.a.createElement(c.q,{checked:"c"===t,value:"c",onChange:C},"C"),i.a.createElement(c.q,{checked:"d"===t,value:"d",onChange:C},"D"))}),[t]),i.a.createElement(r.d,{code:"    import { useState, useCallback } from 'react';\n    import { Radio } from \"@kealm/react-components\";\n    \n    function Demo() {\n        const [checkedValue, setCheckedValue] = useState('a');\n        \n        const change = useCallback(e => setCheckedValue(e.target.value), []);\n        \n        return (\n            <div>\n                <Radio checked={checkedValue === 'a'} value={'a'} onChange={change}>A</Radio>\n                <Radio checked={checkedValue === 'b'} value={'b'} onChange={change}>B</Radio>\n                <Radio checked={checkedValue === 'c'} value={'c'} onChange={change}>C</Radio>\n                <Radio checked={checkedValue === 'd'} value={'d'} onChange={change}>D</Radio>\n            </div>\n        )\n    }"}),i.a.createElement("h2",null,"禁用状态"),i.a.createElement("p",null,"单选框不可用的状态。"),Object(d.useMemo)((function(){return i.a.createElement("div",{className:"detail-box"},i.a.createElement(c.q,{disabled:m},"Disabled"),i.a.createElement("br",null),i.a.createElement(c.q,{disabled:m,defaultChecked:!0},"Disabled"),i.a.createElement("br",null),i.a.createElement(c.c,{type:"primary",style:{marginTop:"20px"},onClick:function(){return s((function(e){return!e}))}},"Toggle disabled"))}),[m]),i.a.createElement(r.d,{code:"    import { useState } from 'react';\n    import { Radio, Button } from \"@kealm/react-components\";\n    \n    function Demo() {\n        const [disabled, setDisabled] = useState(true);\n        \n        return (\n            <div>\n                <Radio disabled={disabled}>Disabled</Radio>\n                <br/>\n                <Radio disabled={disabled} defaultChecked>Disabled</Radio>\n                <br/>\n                <Button type={'primary'} style={{marginTop: '20px'}} onClick={() => setDisabled(status => !status)}>Toggle disabled</Button>\n            </div>\n        )\n    }"}),i.a.createElement("h2",null,"单选框组"),i.a.createElement("p",null,"适用于在多个互斥的选项中选择的场景。"),Object(d.useMemo)((function(){return i.a.createElement("div",{className:"detail-box"},i.a.createElement(c.q.Group,null,i.a.createElement(c.q,{value:"a"},"A"),i.a.createElement(c.q,{value:"b"},"B"),i.a.createElement(c.q,{value:"c"},"C"),i.a.createElement(c.q,{value:"d"},"D")))}),[]),i.a.createElement(r.d,{code:"    import { Radio } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <Radio.Group>\n            <Radio value={'a'}>A</Radio>\n            <Radio value={'b'}>B</Radio>\n            <Radio value={'c'}>C</Radio>\n            <Radio value={'d'}>D</Radio>\n        </Radio.Group>,\n        mountNode\n    );"}),i.a.createElement("h2",null,"受控组"),i.a.createElement("p",null,"通过 value 与 onChange 控制单选框组的选中状态。"),Object(d.useMemo)((function(){return i.a.createElement("div",{className:"detail-box"},i.a.createElement(c.q.Group,{value:f,onChange:k},i.a.createElement(c.q,{value:"a"},"A"),i.a.createElement(c.q,{value:"b"},"B"),i.a.createElement(c.q,{value:"c"},"C"),i.a.createElement(c.q,{value:"d"},"D")))}),[f]),i.a.createElement(r.d,{code:"    import { useState, useCallback } from 'react';\n    import { Radio } from \"@kealm/react-components\";\n    \n    function Demo() {\n        const [groupValue, setGroupValue] = useState('a');\n\n        const groupChange = useCallback(e => setGroupValue(e.target.value), []);\n        \n        return (\n            <Radio.Group value={groupValue} onChange={groupChange}>\n                <Radio value={'a'}>A</Radio>\n                <Radio value={'b'}>B</Radio>\n                <Radio value={'c'}>C</Radio>\n                <Radio value={'d'}>D</Radio>\n            </Radio.Group>\n        )\n    }"}),i.a.createElement("h2",null,"单选组合 - 配合name"),i.a.createElement("p",null,"为组合内的 input 元素赋予相同的 name 属性，"),i.a.createElement("p",null,"使浏览器把 Radio.Group 下的 Radio 真正看作是一组（例如可以通过方向键始终在同一组内更改选项）。"),Object(d.useMemo)((function(){return i.a.createElement("div",{className:"detail-box"},i.a.createElement(c.q.Group,{defaultValue:"a",name:"kealm"},i.a.createElement(c.q,{value:"a"},"A"),i.a.createElement(c.q,{value:"b"},"B"),i.a.createElement(c.q,{value:"c"},"C"),i.a.createElement(c.q,{value:"d"},"D")))}),[]),i.a.createElement(r.d,{code:"    import { Radio } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <Radio.Group defaultValue={'a'} name={'kealm'}>\n            <Radio value={'a'}>A</Radio>\n            <Radio value={'b'}>B</Radio>\n            <Radio value={'c'}>C</Radio>\n            <Radio value={'d'}>D</Radio>\n        </Radio.Group>,\n        mountNode\n    );"}),i.a.createElement("h2",null,"布局"),i.a.createElement("p",null,"Radio.Group 内嵌 Radio 并与 Grid 组件一起使用，可以实现灵活的布局。"),i.a.createElement("div",{className:"detail-box"},Object(d.useMemo)((function(){return i.a.createElement(c.q.Group,{style:{width:"100%"}},i.a.createElement(c.r,null,i.a.createElement(c.f,{span:6},i.a.createElement(c.q,{value:"a"},"A")),i.a.createElement(c.f,{span:6},i.a.createElement(c.q,{value:"b"},"B")),i.a.createElement(c.f,{span:6},i.a.createElement(c.q,{value:"c"},"C")),i.a.createElement(c.f,{span:6},i.a.createElement(c.q,{value:"d"},"D"))))}),[])),i.a.createElement(r.d,{code:"    import { Radio, Row, Col } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <Radio.Group style={{width: '100%'}}>\n            <Row>\n                <Col span={6}><Radio value={'a'}>A</Radio></Col>\n                <Col span={6}><Radio value={'b'}>B</Radio></Col>\n                <Col span={6}><Radio value={'c'}>C</Radio></Col>\n                <Col span={6}><Radio value={'d'}>D</Radio></Col>\n            </Row>\n        </Radio.Group>,\n        mountNode\n    );"}),i.a.createElement("h2",null,"按钮样式"),i.a.createElement("p",null,"按钮样式的单选组合。"),Object(d.useMemo)((function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"detail-box"},i.a.createElement(c.q.Group,{defaultValue:"a"},i.a.createElement(c.q.Button,{value:"a"},"Hangzhou"),i.a.createElement(c.q.Button,{value:"b"},"Shanghai"),i.a.createElement(c.q.Button,{value:"c"},"Beijing"),i.a.createElement(c.q.Button,{value:"d"},"Chengdu"))),i.a.createElement("div",{className:"detail-box"},i.a.createElement(c.q.Group,{defaultValue:"a"},i.a.createElement(c.q.Button,{value:"a"},"Hangzhou"),i.a.createElement(c.q.Button,{value:"b",disabled:!0},"Shanghai"),i.a.createElement(c.q.Button,{value:"c"},"Beijing"),i.a.createElement(c.q.Button,{value:"d"},"Chengdu"))),i.a.createElement("div",{className:"detail-box"},i.a.createElement(c.q.Group,{defaultValue:"a",disabled:!0},i.a.createElement(c.q.Button,{value:"a"},"Hangzhou"),i.a.createElement(c.q.Button,{value:"b"},"Shanghai"),i.a.createElement(c.q.Button,{value:"c"},"Beijing"),i.a.createElement(c.q.Button,{value:"d"},"Chengdu"))),i.a.createElement("div",{className:"detail-box"},i.a.createElement(c.q.Group,{defaultValue:"a",solid:!0},i.a.createElement(c.q.Button,{value:"a"},"Hangzhou"),i.a.createElement(c.q.Button,{value:"b"},"Shanghai"),i.a.createElement(c.q.Button,{value:"c"},"Beijing"),i.a.createElement(c.q.Button,{value:"d"},"Chengdu"))),i.a.createElement("div",{className:"detail-box"},i.a.createElement(c.q.Group,{defaultValue:"a",solid:!0},i.a.createElement(c.q.Button,{value:"a"},"Hangzhou"),i.a.createElement(c.q.Button,{value:"b",disabled:!0},"Shanghai"),i.a.createElement(c.q.Button,{value:"c"},"Beijing"),i.a.createElement(c.q.Button,{value:"d"},"Chengdu"))))}),[]),i.a.createElement(r.d,{code:"    import { Radio } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <div>\n            <div className=\"detail-box\">\n                <Radio.Group defaultValue={'a'}>\n                    <Radio.Button value={'a'}>Hangzhou</Radio.Button>\n                    <Radio.Button value={'b'}>Shanghai</Radio.Button>\n                    <Radio.Button value={'c'}>Beijing</Radio.Button>\n                    <Radio.Button value={'d'}>Chengdu</Radio.Button>\n                </Radio.Group>\n            </div>\n            <div className=\"detail-box\">\n                <Radio.Group defaultValue={'a'}>\n                    <Radio.Button value={'a'}>Hangzhou</Radio.Button>\n                    <Radio.Button value={'b'} disabled>Shanghai</Radio.Button>\n                    <Radio.Button value={'c'}>Beijing</Radio.Button>\n                    <Radio.Button value={'d'}>Chengdu</Radio.Button>\n                </Radio.Group>\n            </div>\n            <div className=\"detail-box\">\n                <Radio.Group defaultValue={'a'} disabled>\n                    <Radio.Button value={'a'}>Hangzhou</Radio.Button>\n                    <Radio.Button value={'b'}>Shanghai</Radio.Button>\n                    <Radio.Button value={'c'}>Beijing</Radio.Button>\n                    <Radio.Button value={'d'}>Chengdu</Radio.Button>\n                </Radio.Group>\n            </div>\n            <div className=\"detail-box\">\n                <Radio.Group defaultValue={'a'} solid>\n                    <Radio.Button value={'a'}>Hangzhou</Radio.Button>\n                    <Radio.Button value={'b'}>Shanghai</Radio.Button>\n                    <Radio.Button value={'c'}>Beijing</Radio.Button>\n                    <Radio.Button value={'d'}>Chengdu</Radio.Button>\n                </Radio.Group>\n            </div>\n            <div className=\"detail-box\">\n                <Radio.Group defaultValue={'a'} solid>\n                    <Radio.Button value={'a'}>Hangzhou</Radio.Button>\n                    <Radio.Button value={'b'} disabled>Shanghai</Radio.Button>\n                    <Radio.Button value={'c'}>Beijing</Radio.Button>\n                    <Radio.Button value={'d'}>Chengdu</Radio.Button>\n                </Radio.Group>\n            </div>\n        </div>,\n        mountNode\n    );"}),i.a.createElement("h2",null,"大小"),i.a.createElement("p",null,"大中小三种组合，可以和表单输入框进行对应配合。"),Object(d.useMemo)((function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"detail-box"},i.a.createElement(c.q.Group,{defaultValue:"a",size:"large"},i.a.createElement(c.q.Button,{value:"a"},"Hangzhou"),i.a.createElement(c.q.Button,{value:"b"},"Shanghai"),i.a.createElement(c.q.Button,{value:"c"},"Beijing"),i.a.createElement(c.q.Button,{value:"d"},"Chengdu"))),i.a.createElement("div",{className:"detail-box"},i.a.createElement(c.q.Group,{defaultValue:"a",solid:!0},i.a.createElement(c.q.Button,{value:"a"},"Hangzhou"),i.a.createElement(c.q.Button,{value:"b"},"Shanghai"),i.a.createElement(c.q.Button,{value:"c"},"Beijing"),i.a.createElement(c.q.Button,{value:"d"},"Chengdu"))),i.a.createElement("div",{className:"detail-box"},i.a.createElement(c.q.Group,{defaultValue:"a",size:"small"},i.a.createElement(c.q.Button,{value:"a"},"Hangzhou"),i.a.createElement(c.q.Button,{value:"b",disabled:!0},"Shanghai"),i.a.createElement(c.q.Button,{value:"c"},"Beijing"),i.a.createElement(c.q.Button,{value:"d"},"Chengdu"))))}),[]),i.a.createElement(r.d,{code:"    import { Radio } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <div>\n            <div className=\"detail-box\">\n                <Radio.Group defaultValue={'a'} size={'large'}>\n                    <Radio.Button value={'a'}>Hangzhou</Radio.Button>\n                    <Radio.Button value={'b'}>Shanghai</Radio.Button>\n                    <Radio.Button value={'c'}>Beijing</Radio.Button>\n                    <Radio.Button value={'d'}>Chengdu</Radio.Button>\n                </Radio.Group>\n            </div>\n            <div className=\"detail-box\">\n                <Radio.Group defaultValue={'a'} solid>\n                    <Radio.Button value={'a'}>Hangzhou</Radio.Button>\n                    <Radio.Button value={'b'}>Shanghai</Radio.Button>\n                    <Radio.Button value={'c'}>Beijing</Radio.Button>\n                    <Radio.Button value={'d'}>Chengdu</Radio.Button>\n                </Radio.Group>\n            </div>\n            <div className=\"detail-box\">\n                <Radio.Group defaultValue={'a'} size={'small'}>\n                    <Radio.Button value={'a'}>Hangzhou</Radio.Button>\n                    <Radio.Button value={'b'} disabled>Shanghai</Radio.Button>\n                    <Radio.Button value={'c'}>Beijing</Radio.Button>\n                    <Radio.Button value={'d'}>Chengdu</Radio.Button>\n                </Radio.Group>\n            </div>\n        </div>,\n        mountNode\n    );"}),i.a.createElement(r.a,{title:"Radio",propsList:p,eventsList:v}),i.a.createElement(r.a,{title:"RadioGroup",propsList:R,eventsList:E}),i.a.createElement(r.a,{title:"RadioButton",propsList:B,eventsList:h}))}}}]);
//# sourceMappingURL=group-radio-0cdb1e8f3fae5650af2a.js.map