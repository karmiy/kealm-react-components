(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{655:function(e,t,n){var l,a,o,c=n(0);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,a=[t,n(14),n(2),n(161),n(22),n(712),n(713)],void 0===(o="function"==typeof(l=function(e,t,l,a,o,d,i){"use strict";var u=n(3),r=n(1);c(e,"__esModule",{value:!0}),e.default=void 0,t=r(t),l=u(l);var f=function(){var e=(0,l.useState)(!1),n=(0,t.default)(e,2),c=n[0],u=n[1],r=(0,l.useState)(!0),f=(0,t.default)(r,2),s=(f[0],f[1],(0,l.useCallback)((function(e){u(e)}),[]));return l.default.createElement("div",{className:"page-box"},l.default.createElement("h1",null,"Switch 开关"),l.default.createElement("p",null,"表示两种相互对立的状态间的切换，多用于触发「开/关」。"),l.default.createElement("h2",null,"基本用法"),l.default.createElement("p",null,"基础的按钮用法。"),(0,l.useMemo)((function(){return l.default.createElement("div",{className:"detail-box"},l.default.createElement(a.Switch,{defaultChecked:!0}))}),[]),l.default.createElement(o.HighLight,{code:i.CodeBasic}),l.default.createElement("h2",null,"受控开关"),l.default.createElement("p",null,"配合 checked 与 onChange 控制开启与关闭。"),(0,l.useMemo)((function(){return l.default.createElement("div",{className:"detail-box"},l.default.createElement(a.Switch,{checked:c,onChange:s}))}),[c]),l.default.createElement(o.HighLight,{code:i.CodeControlled}),l.default.createElement("h2",null,"禁用"),l.default.createElement("p",null,"禁用状态的开关。"),(0,l.useMemo)((function(){return l.default.createElement("div",{className:"detail-box"},l.default.createElement(a.Row,{gutter:30},l.default.createElement(a.Col,null,l.default.createElement(a.Switch,{disabled:!0})),l.default.createElement(a.Col,null,l.default.createElement(a.Switch,{defaultChecked:!0,disabled:!0}))))}),[]),l.default.createElement(o.HighLight,{code:i.CodeDisabled}),l.default.createElement("h2",null,"自定义颜色"),l.default.createElement("p",null,"自定义在开启和关闭时开关的色彩。"),(0,l.useMemo)((function(){return l.default.createElement("div",{className:"detail-box"},l.default.createElement(a.Switch,{defaultChecked:!0,activeColor:"#13ce66",inActiveColor:"#ff4949"}))}),[]),l.default.createElement(o.HighLight,{code:i.CodeCustomColor}),l.default.createElement("h2",null,"文字和图标"),l.default.createElement("p",null,"带有文字和图标。"),(0,l.useMemo)((function(){return l.default.createElement("div",{className:"detail-box"},l.default.createElement(a.Row,{gutter:30},l.default.createElement(a.Col,null,l.default.createElement(a.Switch,{defaultChecked:!0,activeContent:"开",inActiveContent:"关"})),l.default.createElement(a.Col,null,l.default.createElement(a.Switch,{defaultChecked:!0,activeContent:1,inActiveContent:0})),l.default.createElement(a.Col,null,l.default.createElement(a.Switch,{defaultChecked:!0,activeContent:l.default.createElement(a.Icon,{type:"check"}),inActiveContent:l.default.createElement(a.Icon,{type:"close"})}))))}),[]),l.default.createElement(o.HighLight,{code:i.CodeContent}),l.default.createElement("h2",null,"加载中"),l.default.createElement("p",null,"标识开关操作仍在执行中。"),(0,l.useMemo)((function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"detail-box"},l.default.createElement(a.Switch,{defaultChecked:!0,loading:!0})),l.default.createElement("div",{className:"detail-box"},l.default.createElement(a.Switch,{loading:!0})))}),[]),l.default.createElement(o.HighLight,{code:i.CodeLoading}),l.default.createElement(o.ApiTable,{title:"Switch",propsList:d.switchProps,eventsList:d.switchEvents}))};e.default=f})?l.apply(t,a):l)||(e.exports=o)},712:function(e,t,n){var l,a,o,c=n(0);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,a=[t],void 0===(o="function"==typeof(l=function(e){"use strict";c(e,"__esModule",{value:!0}),e.switchEvents=e.switchProps=void 0,e.switchProps=[{param:"defaultChecked",des:"初始是否选中",type:"boolean",option:"--",default:"false"},{param:"checked",des:"指定当前是否选中",type:"boolean",option:"--",default:"false"},{param:"disabled",des:"是否禁用",type:"boolean",option:"--",default:"false"},{param:"activeColor",des:"打开时的背景色",type:"string",option:"--",default:"#1394ff"},{param:"inActiveColor",des:"关闭时的背景色",type:"string",option:"--",default:"#bfbfbf"},{param:"activeContent",des:"选中时的内容",type:"string / ReactNode",option:"--",default:"--"},{param:"inActiveContent",des:"非选中时的内容",type:"string / ReactNode",option:"--",default:"--"},{param:"loading",des:"加载中的开关",type:"boolean",option:"--",default:"false"}],e.switchEvents=[{name:"onChange",des:"变化时回调函数",callback:"(checked: boolean, e: Event) => void"}]})?l.apply(t,a):l)||(e.exports=o)},713:function(e,t,n){var l,a,o,c=n(0);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,a=[t],void 0===(o="function"==typeof(l=function(e){"use strict";c(e,"__esModule",{value:!0}),e.CodeLoading=e.CodeContent=e.CodeCustomColor=e.CodeDisabled=e.CodeControlled=e.CodeBasic=void 0,e.CodeBasic='    import { Switch } from "@kealm/react-components";\n    \n    ReactDom.render(\n        <Switch defaultChecked={true}></Switch>,\n        mountNode\n    );',e.CodeControlled="    import { useState, useCallback } from 'react';\n    import { Switch } from \"@kealm/react-components\";\n    \n    function Demo() {\n        const [checked, setChecked] = useState(false);\n        \n        const onChange = useCallback(c => {\n            setChecked(c);\n        }, []);\n        \n        return <Switch checked={checked} onChange={onChange} />\n    }",e.CodeDisabled='    import { Switch, Row, Col } from "@kealm/react-components";\n    \n    ReactDom.render(\n        <Row gutter={30}>\n            <Col><Switch disabled></Switch></Col>\n            <Col><Switch defaultChecked={true} disabled></Switch></Col>\n        </Row>,\n        mountNode\n    );',e.CodeCustomColor="    import { Switch } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <Switch defaultChecked={true} activeColor={'#13ce66'} inActiveColor={'#ff4949'}></Switch>,\n        mountNode\n    );",e.CodeContent="    import { Switch, Row, Col, Icon } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <Row gutter={30}>\n            <Col>\n                <Switch\n                    defaultChecked={true}\n                    activeContent={'开'}\n                    inActiveContent={'关'}>\n                </Switch>\n            </Col>\n            <Col>\n                <Switch\n                    defaultChecked={true}\n                    activeContent={1}\n                    inActiveContent={0}>\n                </Switch>\n            </Col>\n            <Col>\n                <Switch\n                    defaultChecked={true}\n                    activeContent={<Icon type={'check'}></Icon>}\n                    inActiveContent={<Icon type={'close'}></Icon>}>\n                </Switch>\n            </Col>\n        </Row>,\n        mountNode\n    );",e.CodeLoading='    import { Switch } from "@kealm/react-components";\n    \n    ReactDom.render(\n        <div>\n            <div className="detail-box">\n                <Switch defaultChecked={true} loading></Switch>\n            </div>\n            <div className="detail-box">\n                <Switch loading></Switch>\n            </div>\n        </div>,\n        mountNode\n    );'})?l.apply(t,a):l)||(e.exports=o)}}]);
//# sourceMappingURL=group-switch-e8515779f3cd509423f5.js.map