(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{640:function(e,t,a){var n,l,o,u=a(0);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,l=[t,a(14),a(2),a(161),a(22),a(679),a(680)],void 0===(o="function"==typeof(n=function(e,t,n,l,o,c,d){"use strict";var h=a(3),r=a(1);u(e,"__esModule",{value:!0}),e.default=void 0,t=r(t),n=h(n);var b=function(){var e=(0,n.useState)(!0),a=(0,t.default)(e,2),u=a[0],h=a[1],r=(0,n.useState)(!1),b=(0,t.default)(r,2),C=b[0],i=b[1],k=(0,n.useCallback)((function(e){return h(e.target.checked)}),[]),s=(0,n.useState)(["a"]),x=(0,t.default)(s,2),m=x[0],f=x[1],p=(0,n.useCallback)((function(e){return f(e)}),[]),v=(0,n.useMemo)((function(){return["a","b","c","d"]}),[]),E=(0,n.useState)(!0),g=(0,t.default)(E,2),B=g[0],G=g[1],y=(0,n.useState)(!1),S=(0,t.default)(y,2),N=S[0],A=S[1],V=(0,n.useState)(["a"]),D=(0,t.default)(V,2),z=D[0],H=D[1],L=(0,n.useCallback)((function(e){A(e.target.checked),G(!1),H(e.target.checked?v:[])}),[]),j=(0,n.useCallback)((function(e){H(e),G(!!e.length&&e.length<v.length),A(e.length===v.length)}),[]);return n.default.createElement("div",{className:"page-box"},n.default.createElement("h1",null,"Checkbox 复选框"),n.default.createElement("p",null,"在一组备选项中进行单选。"),n.default.createElement("h2",null,"基本用法"),n.default.createElement("p",null,"由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。"),n.default.createElement("div",{className:"detail-box"},(0,n.useMemo)((function(){return n.default.createElement(l.Checkbox,null,"Checkbox")}),[])),n.default.createElement(o.HighLight,{code:d.CodeBasic}),n.default.createElement("h2",null,"禁用状态"),n.default.createElement("p",null,"多选框不可用状态。"),n.default.createElement("div",{className:"detail-box"},(0,n.useMemo)((function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement(l.Checkbox,{disabled:!0},"A"),n.default.createElement("br",null),n.default.createElement(l.Checkbox,{defaultChecked:!0,disabled:!0},"B"))}),[])),n.default.createElement(o.HighLight,{code:d.CodeDisabled}),n.default.createElement("h2",null,"受控的复选框"),n.default.createElement("p",null,"联动 checkbox。"),(0,n.useMemo)((function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"detail-box"},n.default.createElement(l.Checkbox,{checked:u,disabled:C,onChange:k},"A")),n.default.createElement("div",{className:"detail-box"},n.default.createElement(l.Button,{type:"primary",onClick:function(){return h((function(e){return!e}))}},"toggle checked"),n.default.createElement(l.Button,{type:"primary",onClick:function(){return i((function(e){return!e}))}},"toggle disabled")))}),[u,C,k]),n.default.createElement(o.HighLight,{code:d.CodeControlled}),n.default.createElement("h2",null,"复选框组"),n.default.createElement("p",null,"适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。"),n.default.createElement("div",{className:"detail-box"},(0,n.useMemo)((function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement(l.Checkbox.Group,null,n.default.createElement(l.Checkbox,{value:"a"},"A"),n.default.createElement(l.Checkbox,{value:"b"},"B"),n.default.createElement(l.Checkbox,{value:"c"},"C"),n.default.createElement(l.Checkbox,{value:"d"},"D")),n.default.createElement("br",null),n.default.createElement("br",null),n.default.createElement(l.Checkbox.Group,{defaultValue:["a"]},n.default.createElement(l.Checkbox,{value:"a"},"A"),n.default.createElement(l.Checkbox,{value:"b"},"B"),n.default.createElement(l.Checkbox,{value:"c"},"C"),n.default.createElement(l.Checkbox,{value:"d"},"D")),n.default.createElement("br",null),n.default.createElement("br",null),n.default.createElement(l.Checkbox.Group,{defaultValue:["b"]},n.default.createElement(l.Checkbox,{value:"a"},"A"),n.default.createElement(l.Checkbox,{value:"b"},"B"),n.default.createElement(l.Checkbox,{value:"c",disabled:!0},"C"),n.default.createElement(l.Checkbox,{value:"d"},"D")),n.default.createElement("br",null),n.default.createElement("br",null),n.default.createElement(l.Checkbox.Group,{defaultValue:["b"],disabled:!0},n.default.createElement(l.Checkbox,{value:"a"},"A"),n.default.createElement(l.Checkbox,{value:"b"},"B"),n.default.createElement(l.Checkbox,{value:"c"},"C"),n.default.createElement(l.Checkbox,{value:"d"},"D")))}),[])),n.default.createElement(o.HighLight,{code:d.CodeGroup}),n.default.createElement("h2",null,"受控的复选框组"),n.default.createElement("p",null,"通过value与onChange联动checkbox-group。"),n.default.createElement("div",{className:"detail-box"},(0,n.useMemo)((function(){return n.default.createElement(l.Checkbox.Group,{value:m,onChange:p},n.default.createElement(l.Checkbox,{value:"a"},"A"),n.default.createElement(l.Checkbox,{value:"b"},"B"),n.default.createElement(l.Checkbox,{value:"c"},"C"),n.default.createElement(l.Checkbox,{value:"d"},"D"))}),[m,p])),n.default.createElement(o.HighLight,{code:d.CodeGroupControlled}),n.default.createElement("h2",null,"indeterminate 状态"),n.default.createElement("p",null,"indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果。"),n.default.createElement("div",{className:"detail-box"},(0,n.useMemo)((function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement(l.Checkbox,{indeterminate:B,checked:N,onChange:L},"全选"),n.default.createElement("br",null),n.default.createElement("br",null),n.default.createElement(l.Checkbox.Group,{value:z,onChange:j},n.default.createElement(l.Checkbox,{value:"a"},"A"),n.default.createElement(l.Checkbox,{value:"b"},"B"),n.default.createElement(l.Checkbox,{value:"c"},"C"),n.default.createElement(l.Checkbox,{value:"d"},"D")))}),[B,N,z])),n.default.createElement(o.HighLight,{code:d.CodeIndeterminate}),n.default.createElement("h2",null,"布局"),n.default.createElement("p",null,"Checkbox.Group 内嵌 Checkbox 并与 Grid 组件一起使用，可以实现灵活的布局。"),n.default.createElement("div",{className:"detail-box"},(0,n.useMemo)((function(){return n.default.createElement(l.Checkbox.Group,{style:{width:"100%"}},n.default.createElement(l.Row,null,n.default.createElement(l.Col,{span:6},n.default.createElement(l.Checkbox,{value:"a"},"A")),n.default.createElement(l.Col,{span:6},n.default.createElement(l.Checkbox,{value:"b"},"B")),n.default.createElement(l.Col,{span:6},n.default.createElement(l.Checkbox,{value:"c"},"C")),n.default.createElement(l.Col,{span:6},n.default.createElement(l.Checkbox,{value:"d"},"D"))))}),[])),n.default.createElement(o.HighLight,{code:d.CodeLayout}),n.default.createElement("h2",null,"按钮样式"),n.default.createElement("p",null,"按钮样式的多选组合。"),n.default.createElement("div",{className:"detail-box"},(0,n.useMemo)((function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"detail-box"},n.default.createElement(l.Checkbox.Group,{defaultValue:["a"]},n.default.createElement(l.Checkbox.Button,{value:"a"},"Hangzhou"),n.default.createElement(l.Checkbox.Button,{value:"b"},"Shanghai"),n.default.createElement(l.Checkbox.Button,{value:"c"},"Beijing"),n.default.createElement(l.Checkbox.Button,{value:"d"},"Chengdu"))),n.default.createElement("div",{className:"detail-box"},n.default.createElement(l.Checkbox.Group,{defaultValue:["a"]},n.default.createElement(l.Checkbox.Button,{value:"a"},"Hangzhou"),n.default.createElement(l.Checkbox.Button,{value:"b",disabled:!0},"Shanghai"),n.default.createElement(l.Checkbox.Button,{value:"c"},"Beijing"),n.default.createElement(l.Checkbox.Button,{value:"d"},"Chengdu"))),n.default.createElement("div",{className:"detail-box"},n.default.createElement(l.Checkbox.Group,{defaultValue:["a"],disabled:!0},n.default.createElement(l.Checkbox.Button,{value:"a"},"Hangzhou"),n.default.createElement(l.Checkbox.Button,{value:"b"},"Shanghai"),n.default.createElement(l.Checkbox.Button,{value:"c"},"Beijing"),n.default.createElement(l.Checkbox.Button,{value:"d"},"Chengdu"))),n.default.createElement("div",{className:"detail-box"},n.default.createElement(l.Checkbox.Group,{defaultValue:["a","b"],solid:!0},n.default.createElement(l.Checkbox.Button,{value:"a"},"Hangzhou"),n.default.createElement(l.Checkbox.Button,{value:"b"},"Shanghai"),n.default.createElement(l.Checkbox.Button,{value:"c"},"Beijing"),n.default.createElement(l.Checkbox.Button,{value:"d"},"Chengdu"))),n.default.createElement("div",{className:"detail-box"},n.default.createElement(l.Checkbox.Group,{defaultValue:["a"],solid:!0},n.default.createElement(l.Checkbox.Button,{value:"a"},"Hangzhou"),n.default.createElement(l.Checkbox.Button,{value:"b",disabled:!0},"Shanghai"),n.default.createElement(l.Checkbox.Button,{value:"c"},"Beijing"),n.default.createElement(l.Checkbox.Button,{value:"d"},"Chengdu"))))}),[])),n.default.createElement(o.HighLight,{code:d.CodeButton}),n.default.createElement("h2",null,"大小"),n.default.createElement("p",null,"大中小三种组合，可以和表单输入框进行对应配合。"),(0,n.useMemo)((function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"detail-box"},n.default.createElement(l.Checkbox.Group,{defaultValue:["a"],size:"large"},n.default.createElement(l.Checkbox.Button,{value:"a"},"Hangzhou"),n.default.createElement(l.Checkbox.Button,{value:"b"},"Shanghai"),n.default.createElement(l.Checkbox.Button,{value:"c"},"Beijing"),n.default.createElement(l.Checkbox.Button,{value:"d"},"Chengdu"))),n.default.createElement("div",{className:"detail-box"},n.default.createElement(l.Checkbox.Group,{defaultValue:["a"],solid:!0},n.default.createElement(l.Checkbox.Button,{value:"a"},"Hangzhou"),n.default.createElement(l.Checkbox.Button,{value:"b"},"Shanghai"),n.default.createElement(l.Checkbox.Button,{value:"c"},"Beijing"),n.default.createElement(l.Checkbox.Button,{value:"d"},"Chengdu"))),n.default.createElement("div",{className:"detail-box"},n.default.createElement(l.Checkbox.Group,{defaultValue:["a"],size:"small"},n.default.createElement(l.Checkbox.Button,{value:"a"},"Hangzhou"),n.default.createElement(l.Checkbox.Button,{value:"b",disabled:!0},"Shanghai"),n.default.createElement(l.Checkbox.Button,{value:"c"},"Beijing"),n.default.createElement(l.Checkbox.Button,{value:"d"},"Chengdu"))))}),[]),n.default.createElement(o.HighLight,{code:d.CodeSize}),n.default.createElement(o.ApiTable,{title:"Checkbox",propsList:c.checkboxProps,eventsList:c.checkboxEvents}),n.default.createElement(o.ApiTable,{title:"CheckboxGroup",propsList:c.checkboxGroupProps,eventsList:c.checkboxGroupEvents}),n.default.createElement(o.ApiTable,{title:"CheckboxButton",propsList:c.checkboxButtonProps,eventsList:c.checkboxButtonEvents}))};e.default=b})?n.apply(t,l):n)||(e.exports=o)},679:function(e,t,a){var n,l,o,u=a(0);a(4);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,l=[t,a(4)],void 0===(o="function"==typeof(n=function(e,t){"use strict";var n,l=a(1);u(e,"__esModule",{value:!0}),e.checkboxButtonEvents=e.checkboxButtonProps=e.checkboxGroupEvents=e.checkboxGroupProps=e.checkboxEvents=e.checkboxProps=void 0,t=l(t),e.checkboxProps=[{param:"autoFocus",des:"是否默认聚焦",type:"boolean",option:"--",default:"false"},{param:"defaultChecked",des:"初始是否选中",type:"boolean",option:"--",default:"false"},{param:"checked",des:"指定当前是否选中",type:"boolean",option:"--",default:"false"},{param:"value",des:"根据 value 进行比较，判断是否选中",type:"any",option:"--",default:"--"},{param:"disabled",des:"是否禁用",type:"boolean",option:"--",default:"false"},{param:"name",des:'input [ type = "checkbox" ] 的 name属性',type:"string",option:"--",default:"--"},{param:"indeterminate",des:"设置 indeterminate 状态，只负责样式控制",type:"boolean",option:"--",default:"false"}];var o=[{name:"onChange",des:"选项变化时的回调函数",callback:"(e: Event, value)"}];e.checkboxEvents=o,e.checkboxGroupProps=[{param:"defaultValue",des:"默认选中的值",type:"array",option:"--",default:"--"},{param:"value",des:"用于设置当前选中的值",type:"array",option:"--",default:"--"},{param:"disabled",des:"子单选框是否禁用",type:"boolean",option:"--",default:"false"},{param:"name",des:'子单选框中 input [ type = "checkbox" ] 的 name属性',type:"string",option:"--",default:"--"},{param:"size",des:"子单选框大小，只对按钮样式生效",type:"string",option:"large / small",default:"--"},{param:"solid",des:"子单选框填色风格，只对按钮样式生效",type:"boolean",option:"--",default:"false"}],e.checkboxGroupEvents=[{name:"onChange",des:"选项变化时的回调函数",callback:"(checkedValue: array)"}],e.checkboxButtonProps=[{param:"autoFocus",des:"是否默认聚焦",type:"boolean",option:"--",default:"false"},{param:"defaultChecked",des:"初始是否选中",type:"boolean",option:"--",default:"false"},{param:"checked",des:"指定当前是否选中",type:"boolean",option:"--",default:"false"},{param:"value",des:"根据 value 进行比较，判断是否选中",type:"any",option:"--",default:"--"},{param:"disabled",des:"是否禁用",type:"boolean",option:"--",default:"false"},{param:"name",des:'input [ type = "checkbox" ] 的 name属性',type:"string",option:"--",default:"--"},{param:"size",des:"按钮大小",type:"string",option:"large / small",default:"--"},{param:"solid",des:"是否填色风格",type:"boolean",option:"--",default:"false"}];var c=(0,t.default)(n=[]).call(n,o);e.checkboxButtonEvents=c})?n.apply(t,l):n)||(e.exports=o)},680:function(e,t,a){var n,l,o,u=a(0);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,l=[t],void 0===(o="function"==typeof(n=function(e){"use strict";u(e,"__esModule",{value:!0}),e.CodeSize=e.CodeButton=e.CodeLayout=e.CodeIndeterminate=e.CodeGroupControlled=e.CodeGroup=e.CodeControlled=e.CodeDisabled=e.CodeBasic=void 0,e.CodeBasic='    import { Checkbox } from "@kealm/react-components";\n    \n    ReactDom.render(\n        <Checkbox>Checkbox</Checkbox>,\n        mountNode\n    );',e.CodeDisabled='    import { Checkbox } from "@kealm/react-components";\n    \n    ReactDom.render(\n        <div>\n            <Checkbox disabled>A</Checkbox>\n            <br/>\n            <Checkbox defaultChecked disabled>B</Checkbox>\n        </div>,\n        mountNode\n    );',e.CodeControlled="    import { useState, useCallback } from 'react';\n    import { Checkbox, Button } from \"@kealm/react-components\";\n    \n    function Demo() {\n        const [checked, setChecked] = useState(true);\n        const [disabled, setDisabled] = useState(false);\n        \n        const change = useCallback(e => setChecked(e.target.checked), [setChecked])\n        \n        return (\n            <div>\n                <div className=\"detail-box\">\n                    <Checkbox checked={checked} disabled={disabled} onChange={change}>A</Checkbox>\n                </div>\n                <div className=\"detail-box\">\n                    <Button type={'primary'} onClick={()=> setChecked(c => !c)}>toggle checked</Button>\n                    <Button type={'primary'} onClick={() => setDisabled(d => !d)}>toggle disabled</Button>\n                </div>\n            </div>\n        )\n    }",e.CodeGroup="    import { Checkbox } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <div>\n            <Checkbox.Group>\n                <Checkbox value={'a'}>A</Checkbox>\n                <Checkbox value={'b'}>B</Checkbox>\n                <Checkbox value={'c'}>C</Checkbox>\n                <Checkbox value={'d'}>D</Checkbox>\n            </Checkbox.Group>\n            <br/>\n            <br/>\n            <Checkbox.Group defaultValue={['a']}>\n                <Checkbox value={'a'}>A</Checkbox>\n                <Checkbox value={'b'}>B</Checkbox>\n                <Checkbox value={'c'}>C</Checkbox>\n                <Checkbox value={'d'}>D</Checkbox>\n            </Checkbox.Group>\n            <br/>\n            <br/>\n            <Checkbox.Group defaultValue={['b']}>\n                <Checkbox value={'a'}>A</Checkbox>\n                <Checkbox value={'b'}>B</Checkbox>\n                <Checkbox value={'c'} disabled>C</Checkbox>\n                <Checkbox value={'d'}>D</Checkbox>\n            </Checkbox.Group>\n            <br/>\n            <br/>\n            <Checkbox.Group defaultValue={['b']} disabled>\n                <Checkbox value={'a'}>A</Checkbox>\n                <Checkbox value={'b'}>B</Checkbox>\n                <Checkbox value={'c'}>C</Checkbox>\n                <Checkbox value={'d'}>D</Checkbox>\n            </Checkbox.Group>\n        </div>,\n        mountNode\n    );",e.CodeGroupControlled="    import { useState, useCallback } from 'react';\n    import { Checkbox } from \"@kealm/react-components\";\n    \n    function Demo() {\n        const [groupValue, setGroupValue] = useState(['a']);\n        const groupChange = useCallback(value => setGroupValue(value), [setGroupValue]);\n        \n        return (\n            <Checkbox.Group value={groupValue} onChange={groupChange}>\n                <Checkbox value={'a'}>A</Checkbox>\n                <Checkbox value={'b'}>B</Checkbox>\n                <Checkbox value={'c'}>C</Checkbox>\n                <Checkbox value={'d'}>D</Checkbox>\n            </Checkbox.Group>\n        )\n    }",e.CodeIndeterminate="    import { useState, useCallback } from 'react';\n    import { Checkbox } from \"@kealm/react-components\";\n    \n    function Demo() {\n        const plainOptions = useMemo(() => ['a', 'b', 'c', 'd'], []);\n        const [indeterminate, setIndeterminate] = useState(true);\n        const [checkAll, setCheckAll] = useState(false);\n        const [checkedList, setCheckedList] = useState(['a']);\n    \n        const checkAllChange = useCallback(e => {\n            setCheckAll(e.target.checked);\n            setIndeterminate(false);\n            setCheckedList(e.target.checked ? plainOptions : []);\n        }, [setCheckAll, setIndeterminate, setCheckedList]);\n    \n        const checkedChange = useCallback(list => {\n            setCheckedList(list);\n            setIndeterminate(!!list.length && list.length < plainOptions.length);\n            setCheckAll(list.length === plainOptions.length);\n        }, [setCheckAll, setIndeterminate, setCheckedList]);\n        \n        return (\n            <div>\n                <Checkbox indeterminate={indeterminate} checked={checkAll} onChange={checkAllChange}>全选</Checkbox>\n                <br/>\n                <br/>\n                <Checkbox.Group value={checkedList} onChange={checkedChange}>\n                    <Checkbox value={'a'}>A</Checkbox>\n                    <Checkbox value={'b'}>B</Checkbox>\n                    <Checkbox value={'c'}>C</Checkbox>\n                    <Checkbox value={'d'}>D</Checkbox>\n                </Checkbox.Group>\n            </div>\n        )\n    }",e.CodeLayout="    import { Checkbox, Row, Col } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <Checkbox.Group style={{width: '100%'}}>\n            <Row>\n                <Col span={6}><Checkbox value={'a'}>A</Checkbox></Col>\n                <Col span={6}><Checkbox value={'b'}>B</Checkbox></Col>\n                <Col span={6}><Checkbox value={'c'}>C</Checkbox></Col>\n                <Col span={6}><Checkbox value={'d'}>D</Checkbox></Col>\n            </Row>\n        </Checkbox.Group>,\n        mountNode\n    );",e.CodeButton="    import { Checkbox } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <div>\n            <div className=\"detail-box\">\n                <Checkbox.Group defaultValue={['a']}>\n                    <Checkbox.Button value={'a'}>Hangzhou</Checkbox.Button>\n                    <Checkbox.Button value={'b'}>Shanghai</Checkbox.Button>\n                    <Checkbox.Button value={'c'}>Beijing</Checkbox.Button>\n                    <Checkbox.Button value={'d'}>Chengdu</Checkbox.Button>\n                </Checkbox.Group>\n            </div>\n            <div className=\"detail-box\">\n                <Checkbox.Group defaultValue={['a']}>\n                    <Checkbox.Button value={'a'}>Hangzhou</Checkbox.Button>\n                    <Checkbox.Button value={'b'} disabled>Shanghai</Checkbox.Button>\n                    <Checkbox.Button value={'c'}>Beijing</Checkbox.Button>\n                    <Checkbox.Button value={'d'}>Chengdu</Checkbox.Button>\n                </Checkbox.Group>\n            </div>\n            <div className=\"detail-box\">\n                <Checkbox.Group defaultValue={['a']} disabled>\n                    <Checkbox.Button value={'a'}>Hangzhou</Checkbox.Button>\n                    <Checkbox.Button value={'b'}>Shanghai</Checkbox.Button>\n                    <Checkbox.Button value={'c'}>Beijing</Checkbox.Button>\n                    <Checkbox.Button value={'d'}>Chengdu</Checkbox.Button>\n                </Checkbox.Group>\n            </div>\n            <div className=\"detail-box\">\n                <Checkbox.Group defaultValue={['a', 'b']} solid>\n                    <Checkbox.Button value={'a'}>Hangzhou</Checkbox.Button>\n                    <Checkbox.Button value={'b'}>Shanghai</Checkbox.Button>\n                    <Checkbox.Button value={'c'}>Beijing</Checkbox.Button>\n                    <Checkbox.Button value={'d'}>Chengdu</Checkbox.Button>\n                </Checkbox.Group>\n            </div>\n            <div className=\"detail-box\">\n                <Checkbox.Group defaultValue={['a']} solid>\n                    <Checkbox.Button value={'a'}>Hangzhou</Checkbox.Button>\n                    <Checkbox.Button value={'b'} disabled>Shanghai</Checkbox.Button>\n                    <Checkbox.Button value={'c'}>Beijing</Checkbox.Button>\n                    <Checkbox.Button value={'d'}>Chengdu</Checkbox.Button>\n                </Checkbox.Group>\n            </div>\n        </div>,\n        mountNode\n    );",e.CodeSize="    import { Checkbox } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <div>\n            <div className=\"detail-box\">\n                <Checkbox.Group defaultValue={['a']} size={'large'}>\n                    <Checkbox.Button value={'a'}>Hangzhou</Checkbox.Button>\n                    <Checkbox.Button value={'b'}>Shanghai</Checkbox.Button>\n                    <Checkbox.Button value={'c'}>Beijing</Checkbox.Button>\n                    <Checkbox.Button value={'d'}>Chengdu</Checkbox.Button>\n                </Checkbox.Group>\n            </div>\n            <div className=\"detail-box\">\n                <Checkbox.Group defaultValue={['a']} solid>\n                    <Checkbox.Button value={'a'}>Hangzhou</Checkbox.Button>\n                    <Checkbox.Button value={'b'}>Shanghai</Checkbox.Button>\n                    <Checkbox.Button value={'c'}>Beijing</Checkbox.Button>\n                    <Checkbox.Button value={'d'}>Chengdu</Checkbox.Button>\n                </Checkbox.Group>\n            </div>\n            <div className=\"detail-box\">\n                <Checkbox.Group defaultValue={['a']} size={'small'}>\n                    <Checkbox.Button value={'a'}>Hangzhou</Checkbox.Button>\n                    <Checkbox.Button value={'b'} disabled>Shanghai</Checkbox.Button>\n                    <Checkbox.Button value={'c'}>Beijing</Checkbox.Button>\n                    <Checkbox.Button value={'d'}>Chengdu</Checkbox.Button>\n                </Checkbox.Group>\n            </div>\n        </div>,\n        mountNode\n    );"})?n.apply(t,l):n)||(e.exports=o)}}]);
//# sourceMappingURL=group-checkbox-115355bbcb808dfc6b7a.js.map