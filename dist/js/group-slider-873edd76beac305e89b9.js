(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{653:function(e,l,t){var a,n,o,d=t(0);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,n=[l,t(14),t(2),t(161),t(22),t(708),t(709)],void 0===(o="function"==typeof(a=function(e,l,a,n,o,r,i){"use strict";var u=t(3),m=t(1);d(e,"__esModule",{value:!0}),e.default=void 0,l=m(l),a=u(a);var s=function(){var e=(0,a.useState)(10),t=(0,l.default)(e,2),d=t[0],u=t[1],m=(0,a.useState)([-10,10]),s=(0,l.default)(m,2),c=(s[0],s[1],(0,a.useState)(!1)),f=(0,l.default)(c,2),p=f[0],C=f[1],v=(0,a.useCallback)((function(e){return u(e)}),[]),E={0:"0°C",26:"26°C",37:"37°C",100:{style:{fontWeight:"bold",color:"rgb(255, 85, 0)"},label:"100°C"}};return a.default.createElement("div",{className:"page-box"},a.default.createElement("h1",null,"Slider 滑块"),a.default.createElement("p",null,"通过拖动滑块在一个固定区间内进行选择。"),a.default.createElement("h2",null,"基本用法"),a.default.createElement("p",null,"在拖动滑块时，显示当前值。"),(0,a.useMemo)((function(){return a.default.createElement("div",{className:"detail-box"},a.default.createElement(n.Row,null,a.default.createElement(n.Col,{span:14},a.default.createElement(n.Slider,{defaultValue:20}))))}),[]),a.default.createElement(o.HighLight,{code:i.CodeBasic}),a.default.createElement("h2",null,"受控用法"),a.default.createElement("p",null,"配合 value 与 onChange 手动控制滑块。"),(0,a.useMemo)((function(){return a.default.createElement("div",{className:"detail-box"},a.default.createElement(n.Row,{type:"flex",align:"middle",gutter:20},a.default.createElement(n.Col,{span:14},a.default.createElement(n.Slider,{value:d,onChange:v})),a.default.createElement(n.Col,{span:14},a.default.createElement(n.InputNumber,{value:d,onChange:v,min:0,max:100}))))}),[d]),a.default.createElement(o.HighLight,{code:i.CodeControlled}),a.default.createElement("h2",null,"隐藏与格式化Tooltip"),a.default.createElement("p",null,"配置 openTooltip 开启与隐藏 Tooltip，默认开启。"),a.default.createElement("p",null,"tipFormatter 可以格式化 Tooltip 显示的文本信息。"),(0,a.useMemo)((function(){return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"detail-box"},a.default.createElement(n.Row,{type:"flex",align:"middle",gutter:20},a.default.createElement(n.Col,{span:14},a.default.createElement(n.Slider,{defaultValue:20,defaultTooltipVisible:!0})),a.default.createElement(n.Col,{className:"font-bold"},"默认开启 Tooltip"))),a.default.createElement("div",{className:"detail-box"},a.default.createElement(n.Row,{type:"flex",align:"middle",gutter:20},a.default.createElement(n.Col,{span:14},a.default.createElement(n.Slider,{defaultValue:40,openTooltip:!1})),a.default.createElement(n.Col,{className:"font-bold"},"隐藏 Tooltip"))),a.default.createElement("div",{className:"detail-box"},a.default.createElement(n.Row,{type:"flex",align:"middle",gutter:20},a.default.createElement(n.Col,{span:14},a.default.createElement(n.Slider,{defaultValue:60,tipFormatter:function(e){return"￥".concat(e/100)}})),a.default.createElement(n.Col,{className:"font-bold"},"格式化 Tooltip"))))}),[]),a.default.createElement(o.HighLight,{code:i.CodeTooltip}),a.default.createElement("h2",null,"禁用"),a.default.createElement("p",null,"禁用滑块。"),(0,a.useMemo)((function(){return a.default.createElement("div",{className:"detail-box"},a.default.createElement(n.Row,null,a.default.createElement(n.Col,{span:14},a.default.createElement(n.Slider,{defaultValue:20,disabled:!0}))))}),[]),a.default.createElement(o.HighLight,{code:i.CodeDisabled}),a.default.createElement("h2",null,"数值区间"),a.default.createElement("p",null,"可以通过 max 和 min 配置滑动块的数值区间。"),a.default.createElement("p",null,"下方将数值区间配置在 -50 ~ 100"),(0,a.useMemo)((function(){return a.default.createElement("div",{className:"detail-box"},a.default.createElement(n.Row,null,a.default.createElement(n.Col,{span:14},a.default.createElement(n.Slider,{defaultValue:0,max:100,min:-50}))))}),[]),a.default.createElement(o.HighLight,{code:i.CodeSection}),a.default.createElement("h2",null,"自定义步数"),a.default.createElement("p",null,"通过 step 配置每次可拖动的步数，还可以配置 showStops 开启离散点。"),(0,a.useMemo)((function(){return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"detail-box"},a.default.createElement(n.Row,null,a.default.createElement(n.Col,{span:14},a.default.createElement(n.Slider,{defaultValue:20,step:10,min:0,max:100})))),a.default.createElement("div",{className:"detail-box"},a.default.createElement(n.Row,null,a.default.createElement(n.Col,{span:14},a.default.createElement(n.Slider,{defaultValue:-20,showStops:!0,step:10,min:-50,max:50})))),a.default.createElement("div",{className:"detail-box"},a.default.createElement(n.Row,null,a.default.createElement(n.Col,{span:14},a.default.createElement(n.Slider,{defaultValue:-20,completeStops:!0,showStops:!0,step:10,min:-50,max:45})))))}),[]),a.default.createElement(o.HighLight,{code:i.CodeSteps}),a.default.createElement("h2",null,"范围选择"),a.default.createElement("p",null,"支持选择某一数值范围。"),(0,a.useMemo)((function(){return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"detail-box"},a.default.createElement(n.Row,null,a.default.createElement(n.Col,{span:14},a.default.createElement(n.Slider,{range:!0,defaultValue:[0,50]})))),a.default.createElement("div",{className:"detail-box"},a.default.createElement(n.Row,null,a.default.createElement(n.Col,{span:14},a.default.createElement(n.Slider,{range:!0,defaultValue:[-20,20],min:-50,max:50,showStops:!0,step:10})))))}),[]),a.default.createElement(o.HighLight,{code:i.CodeRange}),a.default.createElement("h2",null,"竖向模式"),a.default.createElement("p",null,"设置 vertical 可使 Slider 变成竖向模式，此时必须设置高度height属性。"),(0,a.useMemo)((function(){return a.default.createElement("div",{className:"detail-box"},a.default.createElement(n.Row,null,a.default.createElement(n.Col,{span:2},a.default.createElement(n.Slider,{defaultValue:20,vertical:!0,height:300})),a.default.createElement(n.Col,{span:2},a.default.createElement(n.Slider,{defaultValue:100,vertical:!0,height:300,max:1e3,min:-500})),a.default.createElement(n.Col,{span:2},a.default.createElement(n.Slider,{defaultValue:20,vertical:!0,height:300,showStops:!0,step:10,min:0,max:50})),a.default.createElement(n.Col,{span:2},a.default.createElement(n.Slider,{defaultValue:[10,50],vertical:!0,height:300,range:!0})),a.default.createElement(n.Col,{span:2},a.default.createElement(n.Slider,{defaultValue:[-30,30],vertical:!0,height:300,range:!0,showStops:!0,step:20,min:-50,max:50}))))}),[]),a.default.createElement(o.HighLight,{code:i.CodeVertical}),a.default.createElement("h2",null,"展示标记"),a.default.createElement("p",null,"设置 marks 属性可以展示标记。"),(0,a.useMemo)((function(){return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"detail-box"},a.default.createElement(n.Radio.Group,{value:p,onChange:function(e,l){C(l)}},a.default.createElement(n.Radio,{value:!1},"Horizontal"),a.default.createElement(n.Radio,{value:!0},"Vertical"))),a.default.createElement("div",{className:"detail-box"},a.default.createElement(n.Row,null,a.default.createElement(n.Col,{span:p?2:14},a.default.createElement(n.Slider,{defaultValue:20,vertical:p,height:p?300:null,marks:E})))))}),[p]),a.default.createElement(o.HighLight,{code:i.CodeMarks}),a.default.createElement(o.ApiTable,{title:"Slider",propsList:r.sliderProps,eventsList:r.sliderEvents}))};e.default=s})?a.apply(l,n):a)||(e.exports=o)},708:function(e,l,t){var a,n,o,d=t(0);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,n=[l],void 0===(o="function"==typeof(a=function(e){"use strict";d(e,"__esModule",{value:!0}),e.sliderEvents=e.sliderProps=void 0,e.sliderProps=[{param:"defaultValue",des:"设置初始取值。当 range 为 false 时，使用 number，否则用 [number, number]",type:"number / number[]",option:"--",default:"--"},{param:"value",des:"设置当前取值。当 range 为 false 时，使用 number，否则用 [number, number]",type:"number / number[]",option:"--",default:"--"},{param:"defaultTooltipVisible",des:"默认打开 Tooltip",type:"boolean",option:"--",default:"false"},{param:"openTooltip",des:"是否开启 Tooltip",type:"boolean",option:"--",default:"true"},{param:"tipFormatter",des:"格式化 Tooltip 提示信息",type:"function",option:"--",default:"--"},{param:"disabled",des:"是否禁用",type:"boolean",option:"--",default:"false"},{param:"max",des:"最大值",type:"number",option:"--",default:"0"},{param:"min",des:"最小值",type:"number",option:"--",default:"0"},{param:"step",des:"步长",type:"number",option:"--",default:"1"},{param:"showStops",des:"是否显示间断点",type:"boolean",option:"--",default:"false"},{param:"completeStops",des:"间断点是否完整显示，默认已划过的区域不显示出间断点",type:"boolean",option:"--",default:"false"},{param:"range",des:"是否为范围选择",type:"boolean",option:"--",default:"false"},{param:"vertical",des:"是否竖向模式",type:"boolean",option:"--",default:"false"},{param:"height",des:"Slider 高度，竖向模式时必填",type:"number",option:"--",default:"--"},{param:"marks",des:"刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式",type:"{ number: string / ReactNode } or { number: { style: object, label: string / ReactNode } }",option:"--",default:"--"}],e.sliderEvents=[{name:"onChange",des:"当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入",callback:"(value)"}]})?a.apply(l,n):a)||(e.exports=o)},709:function(e,l,t){var a,n,o,d=t(0);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,n=[l],void 0===(o="function"==typeof(a=function(e){"use strict";d(e,"__esModule",{value:!0}),e.CodeMarks=e.CodeVertical=e.CodeRange=e.CodeSteps=e.CodeSection=e.CodeDisabled=e.CodeTooltip=e.CodeControlled=e.CodeBasic=void 0,e.CodeBasic='    import { Slider, Row, Col } from "@kealm/react-components";\n    \n    ReactDom.render(\n        <div className="detail-box">\n            <Row>\n                <Col span={14}>\n                    <Slider defaultValue={20}></Slider>\n                </Col>\n            </Row>\n        </div>,\n        mountNode\n    );',e.CodeControlled="    import { useState, useCallback } from 'react';\n    import { Slider, Row, Col, InputNumber } from \"@kealm/react-components\";\n    \n    function Demo() {\n        const [value, setValue] = useState(10);\n        const onChange = useCallback(v => setValue(v), []);\n        \n        return (\n            <div className=\"detail-box\">\n                <Row type={'flex'} align={'middle'} gutter={20}>\n                    <Col span={14}>\n                        <Slider value={value} onChange={onChange}></Slider>\n                    </Col>\n                    <Col span={14}>\n                        <InputNumber value={value} onChange={onChange} min={0} max={100}></InputNumber>\n                    </Col>\n                </Row>\n            </div>\n        )\n    }",e.CodeTooltip="    import { Slider, Row, Col } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <div>\n            <div className=\"detail-box\">\n                <Row type={'flex'} align={'middle'} gutter={20}>\n                    <Col span={14}>\n                        <Slider defaultValue={20} defaultTooltipVisible={true}></Slider>\n                    </Col>\n                    <Col className={'font-bold'}>\n                        默认开启 Tooltip\n                    </Col>\n                </Row>\n            </div>\n            <div className=\"detail-box\">\n                <Row type={'flex'} align={'middle'} gutter={20}>\n                    <Col span={14}>\n                        <Slider defaultValue={40} openTooltip={false}></Slider>\n                    </Col>\n                    <Col className={'font-bold'}>\n                        隐藏 Tooltip\n                    </Col>\n                </Row>\n            </div>\n            <div className=\"detail-box\">\n                <Row type={'flex'} align={'middle'} gutter={20}>\n                    <Col span={14}>\n                        <Slider defaultValue={60} tipFormatter={v => `￥${v / 100}`}></Slider>\n                    </Col>\n                    <Col className={'font-bold'}>\n                        格式化 Tooltip\n                    </Col>\n                </Row>\n            </div>\n        </div>,\n        mountNode\n    );",e.CodeDisabled='    import { Slider, Row, Col } from "@kealm/react-components";\n    \n    ReactDom.render(\n        <div className="detail-box">\n            <Row>\n                <Col span={14}>\n                    <Slider defaultValue={20} disabled></Slider>\n                </Col>\n            </Row>\n        </div>,\n        mountNode\n    );',e.CodeSection='    import { Slider, Row, Col } from "@kealm/react-components";\n    \n    ReactDom.render(\n        <div className="detail-box">\n            <Row>\n                <Col span={14}>\n                    <Slider defaultValue={0} max={100} min={-50}></Slider>\n                </Col>\n            </Row>\n        </div>,\n        mountNode\n    );',e.CodeSteps='    import { Slider, Row, Col } from "@kealm/react-components";\n    \n    ReactDom.render(\n        <div>\n            <div className="detail-box">\n                    <Row>\n                        <Col span={14}>\n                            <Slider defaultValue={20} step={10} min={0} max={100}></Slider>\n                        </Col>\n                    </Row>\n                </div>\n                <div className="detail-box">\n                    <Row>\n                        <Col span={14}>\n                            <Slider defaultValue={-20} showStops step={10} min={-50} max={50}></Slider>\n                        </Col>\n                    </Row>\n                </div>\n                <div className="detail-box">\n                    <Row>\n                        <Col span={14}>\n                            <Slider defaultValue={-20} completeStops showStops step={10} min={-50} max={45}></Slider>\n                        </Col>\n                    </Row>\n                </div>\n        </div>,\n        mountNode\n    );',e.CodeRange='    import { Slider, Row, Col } from "@kealm/react-components";\n    \n    ReactDom.render(\n        <div>\n            <div className="detail-box">\n                <Row>\n                    <Col span={14}>\n                        <Slider range defaultValue={[0, 50]}></Slider>\n                    </Col>\n                </Row>\n            </div>\n            <div className="detail-box">\n                <Row>\n                    <Col span={14}>\n                        <Slider range defaultValue={[-20, 20]} min={-50} max={50} showStops step={10}></Slider>\n                    </Col>\n                </Row>\n            </div>\n        </div>,\n        mountNode\n    );',e.CodeVertical='    import { Slider, Row, Col } from "@kealm/react-components";\n    \n    ReactDom.render(\n        <div className="detail-box">\n            <Row>\n                <Col span={2}>\n                    <Slider defaultValue={20} vertical height={300}></Slider>\n                </Col>\n                <Col span={2}>\n                    <Slider defaultValue={100} vertical height={300} max={1000} min={-500}></Slider>\n                </Col>\n                <Col span={2}>\n                    <Slider defaultValue={20} vertical height={300} showStops step={10} min={0} max={50}></Slider>\n                </Col>\n                <Col span={2}>\n                    <Slider defaultValue={[10, 50]} vertical height={300} range></Slider>\n                </Col>\n                <Col span={2}>\n                    <Slider defaultValue={[-30, 30]} vertical height={300} range showStops step={20} min={-50} max={50}></Slider>\n                </Col>\n            </Row>\n        </div>,\n        mountNode\n    );',e.CodeMarks="    import { useState } from 'react';\n    import { Slider, Row, Col, Radio } from \"@kealm/react-components\";\n    \n    function Demo() {\n        const [vertical, setVertical] = useState(false);\n        \n        const marks = {\n            0: '0°C',\n            26: '26°C',\n            37: '37°C',\n            100: {\n                style: {\n                    fontWeight: 'bold',\n                    color: 'rgb(255, 85, 0)',\n                },\n                label: '100°C',\n            },\n        }\n        \n        return (\n            <div>\n                <div className=\"detail-box\">\n                    <Radio.Group value={vertical} onChange={(e, v) => {setVertical(v)}}>\n                        <Radio value={false}>Horizontal</Radio>\n                        <Radio value={true}>Vertical</Radio>\n                    </Radio.Group>\n                </div>\n                <div className=\"detail-box\">\n                    <Row>\n                        <Col span={vertical ? 2 : 14}>\n                            <Slider\n                                defaultValue={20}\n                                vertical={vertical}\n                                height={vertical ? 300 : null}\n                                marks={marks}>\n                            </Slider>\n                        </Col>\n                    </Row>\n                </div>\n            </div>\n        )\n    }"})?a.apply(l,n):a)||(e.exports=o)}}]);
//# sourceMappingURL=group-slider-873edd76beac305e89b9.js.map