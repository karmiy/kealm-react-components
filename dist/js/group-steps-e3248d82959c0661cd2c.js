(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{656:function(e,t,n){var i,o,s,l=n(0);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n(14),n(2),n(161),n(22),n(713),n(714)],void 0===(s="function"==typeof(i=function(e,t,i,o,s,r,a){"use strict";var c=n(3),p=n(1);l(e,"__esModule",{value:!0}),e.default=void 0,t=p(t),i=c(i);var d=o.Steps.Step,u=function(){var e=(0,i.useState)(1),n=(0,t.default)(e,2),l=n[0],c=n[1],p=(0,i.useCallback)((function(e){c(e)}),[]),u=(0,i.useCallback)((function(e,t){var n=t.step,s=t.status;return i.default.createElement(o.Tooltip,{content:i.default.createElement(i.default.Fragment,null,i.default.createElement("p",null,"Step：",n),i.default.createElement("p",null,"Status：",s))},e)}),[]);return i.default.createElement("div",{className:"page-box"},i.default.createElement("h1",null,"Steps 步骤条"),i.default.createElement("p",null,"引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。"),i.default.createElement("h2",null,"基本用法"),i.default.createElement("p",null,"简单的步骤条。"),(0,i.useMemo)((function(){return i.default.createElement("div",{className:"detail-box"},i.default.createElement(o.Row,null,i.default.createElement(o.Col,{span:22},i.default.createElement(o.Steps,{current:1},i.default.createElement(d,{title:"Finished",description:"This is a description."}),i.default.createElement(d,{title:"In Progress",subTitle:"Left 00:00:08",description:"This is a description."}),i.default.createElement(d,{title:"Waiting",description:"This is a description."})))))}),[]),i.default.createElement(s.HighLight,{code:a.CodeBasic}),i.default.createElement("h2",null,"带图标的步骤条"),i.default.createElement("p",null,"通过设置 Steps.Step 的 icon 属性，可以启用自定义图标。"),(0,i.useMemo)((function(){return i.default.createElement("div",{className:"detail-box"},i.default.createElement(o.Row,null,i.default.createElement(o.Col,{span:22},i.default.createElement(o.Steps,{current:2},i.default.createElement(d,{icon:i.default.createElement(o.Icon,{type:"user"}),title:"Login",description:"This is a description."}),i.default.createElement(d,{icon:i.default.createElement(o.Icon,{type:"solution"}),title:"Verification",description:"This is a description."}),i.default.createElement(d,{icon:i.default.createElement(o.Icon,{type:"loading"}),title:"Pay",description:"This is a description."}),i.default.createElement(d,{icon:i.default.createElement(o.Icon,{type:"smile"}),title:"Done",description:"This is a description."})))))}),[]),i.default.createElement(s.HighLight,{code:a.CodeIcon}),i.default.createElement("h2",null,"迷你版"),i.default.createElement("p",null,'迷你版的步骤条，通过设置 size="small" 启用。'),(0,i.useMemo)((function(){return i.default.createElement("div",{className:"detail-box"},i.default.createElement(o.Row,null,i.default.createElement(o.Col,{span:22},i.default.createElement(o.Steps,{current:1,size:"small"},i.default.createElement(d,{title:"Finished",description:"This is a description."}),i.default.createElement(d,{title:"In Progress",subTitle:"Left 00:00:08",description:"This is a description."}),i.default.createElement(d,{title:"Waiting",description:"This is a description."})))),i.default.createElement(o.Row,null,i.default.createElement(o.Col,{span:22},i.default.createElement(o.Steps,{current:2,size:"small"},i.default.createElement(d,{icon:i.default.createElement(o.Icon,{type:"user"}),title:"Login",description:"This is a description."}),i.default.createElement(d,{icon:i.default.createElement(o.Icon,{type:"solution"}),title:"Verification",description:"This is a description."}),i.default.createElement(d,{icon:i.default.createElement(o.Icon,{type:"loading"}),title:"Pay",description:"This is a description."}),i.default.createElement(d,{icon:i.default.createElement(o.Icon,{type:"smile"}),title:"Done",description:"This is a description."})))))}),[]),i.default.createElement(s.HighLight,{code:a.CodeMini}),i.default.createElement("h2",null,"步骤切换"),i.default.createElement("p",null,"通常配合内容及按钮使用，表示一个流程的处理进度。"),(0,i.useMemo)((function(){return i.default.createElement("div",{className:"detail-box"},i.default.createElement(o.Row,null,i.default.createElement(o.Col,{span:22},i.default.createElement(o.Steps,{current:l},i.default.createElement(d,{title:"First",description:"This is a description."}),i.default.createElement(d,{title:"Second",subTitle:"Left 00:00:08",description:"This is a description."}),i.default.createElement(d,{title:"Third",description:"This is a description."}),i.default.createElement(d,{title:"Last",description:"This is a description."})))),i.default.createElement(o.Row,{style:{marginTop:"40px"}},i.default.createElement(o.Col,{span:22},i.default.createElement(o.Steps,{current:l},i.default.createElement(d,{icon:i.default.createElement(o.Icon,{type:"user"}),title:"Login",description:"This is a description."}),i.default.createElement(d,{icon:i.default.createElement(o.Icon,{type:"solution"}),title:"Verification",description:"This is a description."}),i.default.createElement(d,{icon:i.default.createElement(o.Icon,{type:"loading"}),title:"Pay",description:"This is a description."}),i.default.createElement(d,{icon:i.default.createElement(o.Icon,{type:"smile"}),title:"Done",description:"This is a description."})))),i.default.createElement(o.Row,{gutter:8},i.default.createElement(o.Col,null,i.default.createElement(o.Button,{disabled:0===l,onClick:function(){return c((function(e){return--e}))}},"Previous")),i.default.createElement(o.Col,null,i.default.createElement(o.Button,{type:"primary",disabled:3===l,onClick:function(){return c((function(e){return++e}))}},"Next"))))}),[l]),i.default.createElement(s.HighLight,{code:a.CodeToggle}),i.default.createElement("h2",null,"垂直方向的步骤条"),i.default.createElement("p",null,"简单的竖直方向的步骤条。"),(0,i.useMemo)((function(){return i.default.createElement("div",{className:"detail-box"},i.default.createElement(o.Row,{gutter:16},i.default.createElement(o.Col,{span:10},i.default.createElement(o.Steps,{current:l,direction:"vertical"},i.default.createElement(d,{title:"First",description:"This is a description."}),i.default.createElement(d,{title:"Second",subTitle:"Left 00:00:08",description:"This is a description."}),i.default.createElement(d,{title:"Third",description:"This is a description."}),i.default.createElement(d,{title:"Last",description:"This is a description."}))),i.default.createElement(o.Col,{span:10},i.default.createElement(o.Steps,{current:l,direction:"vertical"},i.default.createElement(d,{icon:i.default.createElement(o.Icon,{type:"user"}),title:"Login",description:"This is a description."}),i.default.createElement(d,{icon:i.default.createElement(o.Icon,{type:"solution"}),title:"Verification",description:"This is a description."}),i.default.createElement(d,{icon:i.default.createElement(o.Icon,{type:"loading"}),title:"Pay",description:"This is a description."}),i.default.createElement(d,{icon:i.default.createElement(o.Icon,{type:"smile"}),title:"Done",description:"This is a description."})))),i.default.createElement(o.Row,{gutter:8},i.default.createElement(o.Col,null,i.default.createElement(o.Button,{disabled:0===l,onClick:function(){return c((function(e){return--e}))}},"Previous")),i.default.createElement(o.Col,null,i.default.createElement(o.Button,{type:"primary",disabled:3===l,onClick:function(){return c((function(e){return++e}))}},"Next"))))}),[l]),i.default.createElement(s.HighLight,{code:a.CodeVertical}),i.default.createElement("h2",null,"垂直方向的小型步骤条"),i.default.createElement("p",null,"简单的竖直方向的小型步骤条。"),(0,i.useMemo)((function(){return i.default.createElement("div",{className:"detail-box"},i.default.createElement(o.Row,{gutter:16},i.default.createElement(o.Col,{span:10},i.default.createElement(o.Steps,{current:1,direction:"vertical",size:"small"},i.default.createElement(d,{title:"First",description:"This is a description."}),i.default.createElement(d,{title:"Second",subTitle:"Left 00:00:08",description:"This is a description."}),i.default.createElement(d,{title:"Third",description:"This is a description."}),i.default.createElement(d,{title:"Last",description:"This is a description."}))),i.default.createElement(o.Col,{span:10},i.default.createElement(o.Steps,{current:1,direction:"vertical",size:"small"},i.default.createElement(d,{icon:i.default.createElement(o.Icon,{type:"user"}),title:"Login",description:"This is a description."}),i.default.createElement(d,{icon:i.default.createElement(o.Icon,{type:"solution"}),title:"Verification",description:"This is a description."}),i.default.createElement(d,{icon:i.default.createElement(o.Icon,{type:"loading"}),title:"Pay",description:"This is a description."}),i.default.createElement(d,{icon:i.default.createElement(o.Icon,{type:"smile"}),title:"Done",description:"This is a description."})))))}),[]),i.default.createElement(s.HighLight,{code:a.CodeMiniVertical}),i.default.createElement("h2",null,"步骤运行错误"),i.default.createElement("p",null,"使用 Steps 的 status 属性来指定当前步骤的状态。"),(0,i.useMemo)((function(){return i.default.createElement("div",{className:"detail-box"},i.default.createElement(o.Row,null,i.default.createElement(o.Col,{span:22},i.default.createElement(o.Steps,{current:l,status:"error"},i.default.createElement(d,{title:"First",description:"This is a description."}),i.default.createElement(d,{title:"Second",subTitle:"Left 00:00:08",description:"This is a description."}),i.default.createElement(d,{title:"Third",description:"This is a description."}),i.default.createElement(d,{title:"Last",description:"This is a description."})))),i.default.createElement(o.Row,{style:{marginTop:"40px"}},i.default.createElement(o.Col,{span:22},i.default.createElement(o.Steps,{current:l,status:"error"},i.default.createElement(d,{icon:i.default.createElement(o.Icon,{type:"user"}),title:"Login",description:"This is a description."}),i.default.createElement(d,{icon:i.default.createElement(o.Icon,{type:"solution"}),title:"Verification",description:"This is a description."}),i.default.createElement(d,{icon:i.default.createElement(o.Icon,{type:"loading"}),title:"Pay",description:"This is a description."}),i.default.createElement(d,{icon:i.default.createElement(o.Icon,{type:"smile"}),title:"Done",description:"This is a description."})))),i.default.createElement(o.Row,{gutter:8},i.default.createElement(o.Col,null,i.default.createElement(o.Button,{disabled:0===l,onClick:function(){return c((function(e){return--e}))}},"Previous")),i.default.createElement(o.Col,null,i.default.createElement(o.Button,{type:"primary",disabled:3===l,onClick:function(){return c((function(e){return++e}))}},"Next"))))}),[l]),i.default.createElement(s.HighLight,{code:a.CodeError}),i.default.createElement("h2",null,"点状步骤条"),i.default.createElement("p",null,"包含步骤点的进度条。"),(0,i.useMemo)((function(){return i.default.createElement("div",{className:"detail-box"},i.default.createElement(o.Row,null,i.default.createElement(o.Col,{span:22},i.default.createElement(o.Steps,{current:l,progressDot:!0},i.default.createElement(d,{title:"First",description:"This is a description."}),i.default.createElement(d,{title:"Second",subTitle:"Left 00:00:08",description:"This is a description."}),i.default.createElement(d,{title:"Third",description:"This is a description."}),i.default.createElement(d,{title:"Last",description:"This is a description."})))),i.default.createElement(o.Row,{style:{marginTop:"40px"}},i.default.createElement(o.Col,{span:22},i.default.createElement(o.Steps,{current:l,progressDot:!0,direction:"vertical"},i.default.createElement(d,{title:"First",description:"This is a description."}),i.default.createElement(d,{title:"Second",subTitle:"Left 00:00:08",description:"This is a description."}),i.default.createElement(d,{title:"Third",description:"This is a description."}),i.default.createElement(d,{title:"Last",description:"This is a description."})))),i.default.createElement(o.Row,{gutter:8},i.default.createElement(o.Col,null,i.default.createElement(o.Button,{disabled:0===l,onClick:function(){return c((function(e){return--e}))}},"Previous")),i.default.createElement(o.Col,null,i.default.createElement(o.Button,{type:"primary",disabled:3===l,onClick:function(){return c((function(e){return++e}))}},"Next"))))}),[l]),i.default.createElement(s.HighLight,{code:a.CodeDot}),i.default.createElement("h2",null,"自定义点状步骤条"),i.default.createElement("p",null,"为点状步骤条增加自定义展示。"),(0,i.useMemo)((function(){return i.default.createElement("div",{className:"detail-box"},i.default.createElement(o.Row,null,i.default.createElement(o.Col,{span:22},i.default.createElement(o.Steps,{current:l,progressDot:u},i.default.createElement(d,{title:"First",description:"This is a description."}),i.default.createElement(d,{title:"Second",subTitle:"Left 00:00:08",description:"This is a description."}),i.default.createElement(d,{title:"Third",description:"This is a description."}),i.default.createElement(d,{title:"Last",description:"This is a description."})))),i.default.createElement(o.Row,{gutter:8},i.default.createElement(o.Col,null,i.default.createElement(o.Button,{disabled:0===l,onClick:function(){return c((function(e){return--e}))}},"Previous")),i.default.createElement(o.Col,null,i.default.createElement(o.Button,{type:"primary",disabled:3===l,onClick:function(){return c((function(e){return++e}))}},"Next"))))}),[l]),i.default.createElement(s.HighLight,{code:a.CodeCustomDot}),i.default.createElement("h2",null,"可点击"),i.default.createElement("p",null,"设置 onChange 后，Steps 变为可点击状态。"),(0,i.useMemo)((function(){return i.default.createElement("div",{className:"detail-box"},i.default.createElement(o.Row,null,i.default.createElement(o.Col,{span:22},i.default.createElement(o.Steps,{current:l,onChange:p},i.default.createElement(d,{title:"First",description:"This is a description."}),i.default.createElement(d,{title:"Second",subTitle:"Left 00:00:08",description:"This is a description."}),i.default.createElement(d,{title:"Third",description:"This is a description."}),i.default.createElement(d,{title:"Last",description:"This is a description."})))),i.default.createElement(o.Row,{style:{marginTop:"40px"}},i.default.createElement(o.Col,{span:22},i.default.createElement(o.Steps,{current:l,direction:"vertical",onChange:p},i.default.createElement(d,{title:"First",description:"This is a description."}),i.default.createElement(d,{title:"Second",subTitle:"Left 00:00:08",description:"This is a description."}),i.default.createElement(d,{title:"Third",description:"This is a description."}),i.default.createElement(d,{title:"Last",description:"This is a description."})))))}),[l]),i.default.createElement(s.HighLight,{code:a.CodeClick}),i.default.createElement(s.ApiTable,{title:"Steps",propsList:r.stepsProps,eventsList:r.stepsEvents}),i.default.createElement(s.ApiTable,{title:"Step",propsList:r.stepProps}))};e.default=u})?i.apply(t,o):i)||(e.exports=s)},713:function(e,t,n){var i,o,s,l=n(0);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(s="function"==typeof(i=function(e){"use strict";l(e,"__esModule",{value:!0}),e.stepProps=e.stepsEvents=e.stepsProps=void 0,e.stepsProps=[{param:"current",des:"指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态",type:"number",option:"--",default:"0"},{param:"direction",des:"指定步骤条方向",type:"string",option:"horizontal / vertical",default:"horizontal"},{param:"size",des:"指定大小",type:"string",option:"default / small",default:"default"},{param:"status",des:"指定当前步骤的状态",type:"string",option:"wait / process / finish / error",default:"--"},{param:"progressDot",des:"点状步骤条",type:"boolean / (dot, { step, status, title, subTitle, description }) => ReactNode",option:"--",default:"false"}],e.stepsEvents=[{name:"onChange",des:"点击切换步骤时触发",callback:"(current)"}],e.stepProps=[{param:"title",des:"标题",type:"string / ReactNode",option:"--",default:"--"},{param:"subTitle",des:"子标题",type:"string / ReactNode",option:"--",default:"--"},{param:"description",des:"步骤的详情描述",type:"string / ReactNode",option:"--",default:"--"},{param:"status",des:"指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态",type:"string",option:"wait / process / finish / error",default:"--"},{param:"icon",des:"步骤图标的类型",type:"ReactNode",option:{link:"/component/icon",info:"Icon组件"},default:"--"}]})?i.apply(t,o):i)||(e.exports=s)},714:function(e,t,n){var i,o,s,l=n(0);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(s="function"==typeof(i=function(e){"use strict";l(e,"__esModule",{value:!0}),e.CodeClick=e.CodeCustomDot=e.CodeDot=e.CodeError=e.CodeMiniVertical=e.CodeVertical=e.CodeToggle=e.CodeMini=e.CodeIcon=e.CodeBasic=void 0,e.CodeBasic="    import { Steps, Row, Col } from \"@kealm/react-components\";\n    \n    const Step = Steps.Step;\n    \n    ReactDom.render(\n        <Row>\n            <Col span={22}>\n                <Steps current={1}>\n                    <Step title={'Finished'} description={'This is a description.'}></Step>\n                    <Step title={'In Progress'} subTitle={'Left 00:00:08'} description={'This is a description.'}></Step>\n                    <Step title={'Waiting'} description={'This is a description.'}></Step>\n                </Steps>\n            </Col>\n        </Row>,\n        mountNode\n    );",e.CodeIcon="    import { Steps, Row, Col, Icon } from \"@kealm/react-components\";\n    \n    const Step = Steps.Step;\n    \n    const user = <Icon type={'user'}></Icon>,\n        solution = <Icon type={'solution'}></Icon>,\n        loading = <Icon type={'loading'}></Icon>,\n        smile = <Icon type={'smile'}></Icon>;\n    \n    ReactDom.render(\n        <Row>\n            <Col span={22}>\n                <Steps current={2}>\n                    <Step icon={user} title={'Login'} description={'This is a description.'}></Step>\n                    <Step icon={solution} title={'Verification'} description={'This is a description.'}></Step>\n                    <Step icon={loading} title={'Pay'} description={'This is a description.'}></Step>\n                    <Step icon={smile} title={'Done'} description={'This is a description.'}></Step>\n                </Steps>\n            </Col>\n        </Row>,\n        mountNode\n    );",e.CodeMini="    import { Steps, Row, Col, Icon } from \"@kealm/react-components\";\n    \n    const Step = Steps.Step;\n    \n    const user = <Icon type={'user'}></Icon>,\n        solution = <Icon type={'solution'}></Icon>,\n        loading = <Icon type={'loading'}></Icon>,\n        smile = <Icon type={'smile'}></Icon>;\n    \n    ReactDom.render(\n        <div className=\"detail-box\">\n            <Row>\n                <Col span={22}>\n                    <Steps current={1} size={'small'}>\n                        <Step title={'Finished'} description={'This is a description.'}></Step>\n                        <Step title={'In Progress'} subTitle={'Left 00:00:08'} description={'This is a description.'}></Step>\n                        <Step title={'Waiting'} description={'This is a description.'}></Step>\n                    </Steps>\n                </Col>\n            </Row>\n            <Row>\n                <Col span={22}>\n                    <Steps current={2} size={'small'}>\n                        <Step icon={user} title={'Login'} description={'This is a description.'}></Step>\n                        <Step icon={solution} title={'Verification'} description={'This is a description.'}></Step>\n                        <Step icon={loading} title={'Pay'} description={'This is a description.'}></Step>\n                        <Step icon={smile} title={'Done'} description={'This is a description.'}></Step>\n                    </Steps>\n                </Col>\n            </Row>\n        </div>,\n        mountNode\n    );",e.CodeToggle="    import { useState } from 'react';\n    import { Steps, Row, Col, Icon, Button } from \"@kealm/react-components\";\n    \n    const Step = Steps.Step;\n    \n    const user = <Icon type={'user'}></Icon>,\n        solution = <Icon type={'solution'}></Icon>,\n        loading = <Icon type={'loading'}></Icon>,\n        smile = <Icon type={'smile'}></Icon>;\n    \n    function Demo() {\n        const [current, setCurrent] = useState(1);\n        \n        return (\n            <div className=\"detail-box\">\n                <Row>\n                    <Col span={22}>\n                        <Steps current={current}>\n                            <Step title={'First'} description={'This is a description.'}></Step>\n                            <Step title={'Second'} subTitle={'Left 00:00:08'} description={'This is a description.'}></Step>\n                            <Step title={'Third'} description={'This is a description.'}></Step>\n                            <Step title={'Last'} description={'This is a description.'}></Step>\n                        </Steps>\n                    </Col>\n                </Row>\n                <Row style={{marginTop: '40px'}}>\n                    <Col span={22}>\n                        <Steps current={current}>\n                            <Step icon={user} title={'Login'} description={'This is a description.'}></Step>\n                            <Step icon={solution} title={'Verification'} description={'This is a description.'}></Step>\n                            <Step icon={loading} title={'Pay'} description={'This is a description.'}></Step>\n                            <Step icon={smile} title={'Done'} description={'This is a description.'}></Step>\n                        </Steps>\n                    </Col>\n                </Row>\n                <Row gutter={8}>\n                    <Col><Button disabled={current === 0} onClick={() => setCurrent(v => --v)}>Previous</Button></Col>\n                    <Col><Button type={'primary'} disabled={current === 3} onClick={() => setCurrent(v => ++v)}>Next</Button></Col>\n                </Row>\n            </div>\n        )\n    }",e.CodeVertical="    import { useState } from 'react';\n    import { Steps, Row, Col, Icon, Button } from \"@kealm/react-components\";\n    \n    const Step = Steps.Step;\n    \n    const user = <Icon type={'user'}></Icon>,\n        solution = <Icon type={'solution'}></Icon>,\n        loading = <Icon type={'loading'}></Icon>,\n        smile = <Icon type={'smile'}></Icon>;\n    \n    function Demo() {\n        const [current, setCurrent] = useState(1);\n        \n        return (\n            <div className=\"detail-box\">\n                <Row gutter={16}>\n                    <Col span={10}>\n                        <Steps current={current} direction={'vertical'}>\n                            <Step title={'First'} description={'This is a description.'}></Step>\n                            <Step title={'Second'} subTitle={'Left 00:00:08'} description={'This is a description.'}></Step>\n                            <Step title={'Third'} description={'This is a description.'}></Step>\n                            <Step title={'Last'} description={'This is a description.'}></Step>\n                        </Steps>\n                    </Col>\n                    <Col span={10}>\n                        <Steps current={current} direction={'vertical'}>\n                            <Step icon={user} title={'Login'} description={'This is a description.'}></Step>\n                            <Step icon={solution} title={'Verification'} description={'This is a description.'}></Step>\n                            <Step icon={loading} title={'Pay'} description={'This is a description.'}></Step>\n                            <Step icon={smile} title={'Done'} description={'This is a description.'}></Step>\n                        </Steps>\n                    </Col>\n                </Row>\n                <Row gutter={8}>\n                    <Col><Button disabled={current === 0} onClick={() => setCurrent(v => --v)}>Previous</Button></Col>\n                    <Col><Button type={'primary'} disabled={current === 3} onClick={() => setCurrent(v => ++v)}>Next</Button></Col>\n                </Row>\n            </div>\n        )\n    }",e.CodeMiniVertical="    import { Steps, Row, Col, Icon } from \"@kealm/react-components\";\n    \n    const Step = Steps.Step;\n    \n    const user = <Icon type={'user'}></Icon>,\n        solution = <Icon type={'solution'}></Icon>,\n        loading = <Icon type={'loading'}></Icon>,\n        smile = <Icon type={'smile'}></Icon>;\n    \n    ReactDom.render(\n        <div className=\"detail-box\">\n            <Row gutter={16}>\n                <Col span={10}>\n                    <Steps current={1} direction={'vertical'} size={'small'}>\n                        <Step title={'First'} description={'This is a description.'}></Step>\n                        <Step title={'Second'} subTitle={'Left 00:00:08'} description={'This is a description.'}></Step>\n                        <Step title={'Third'} description={'This is a description.'}></Step>\n                        <Step title={'Last'} description={'This is a description.'}></Step>\n                    </Steps>\n                </Col>\n                <Col span={10}>\n                    <Steps current={1} direction={'vertical'} size={'small'}>\n                        <Step icon={user} title={'Login'} description={'This is a description.'}></Step>\n                        <Step icon={solution} title={'Verification'} description={'This is a description.'}></Step>\n                        <Step icon={loading} title={'Pay'} description={'This is a description.'}></Step>\n                        <Step icon={smile} title={'Done'} description={'This is a description.'}></Step>\n                    </Steps>\n                </Col>\n            </Row>\n        </div>,\n        mountNode\n    );",e.CodeError="    import { useState } from 'react';\n    import { Steps, Row, Col, Icon, Button } from \"@kealm/react-components\";\n    \n    const Step = Steps.Step;\n    \n    const user = <Icon type={'user'}></Icon>,\n        solution = <Icon type={'solution'}></Icon>,\n        loading = <Icon type={'loading'}></Icon>,\n        smile = <Icon type={'smile'}></Icon>;\n    \n    function Demo() {\n        const [current, setCurrent] = useState(1);\n        \n        return (\n            <div className=\"detail-box\">\n                <Row>\n                    <Col span={22}>\n                        <Steps current={current} status={'error'}>\n                            <Step title={'First'} description={'This is a description.'}></Step>\n                            <Step title={'Second'} subTitle={'Left 00:00:08'} description={'This is a description.'}></Step>\n                            <Step title={'Third'} description={'This is a description.'}></Step>\n                            <Step title={'Last'} description={'This is a description.'}></Step>\n                        </Steps>\n                    </Col>\n                </Row>\n                <Row style={{marginTop: '40px'}}>\n                    <Col span={22}>\n                        <Steps current={current} status={'error'}>\n                            <Step icon={user} title={'Login'} description={'This is a description.'}></Step>\n                            <Step icon={solution} title={'Verification'} description={'This is a description.'}></Step>\n                            <Step icon={loading} title={'Pay'} description={'This is a description.'}></Step>\n                            <Step icon={smile} title={'Done'} description={'This is a description.'}></Step>\n                        </Steps>\n                    </Col>\n                </Row>\n                <Row gutter={8}>\n                    <Col><Button disabled={current === 0} onClick={() => setCurrent(v => --v)}>Previous</Button></Col>\n                    <Col><Button type={'primary'} disabled={current === 3} onClick={() => setCurrent(v => ++v)}>Next</Button></Col>\n                </Row>\n            </div>\n        )\n    }",e.CodeDot="    import { useState } from 'react';\n    import { Steps, Row, Col, Icon, Button } from \"@kealm/react-components\";\n    \n    const Step = Steps.Step;\n    \n    function Demo() {\n        const [current, setCurrent] = useState(1);\n        \n        return (\n            <div className=\"detail-box\">\n                <Row>\n                    <Col span={22}>\n                        <Steps current={current} progressDot>\n                            <Step title={'First'} description={'This is a description.'}></Step>\n                            <Step title={'Second'} subTitle={'Left 00:00:08'} description={'This is a description.'}></Step>\n                            <Step title={'Third'} description={'This is a description.'}></Step>\n                            <Step title={'Last'} description={'This is a description.'}></Step>\n                        </Steps>\n                    </Col>\n                </Row>\n                <Row style={{marginTop: '40px'}}>\n                    <Col span={22}>\n                        <Steps current={current} progressDot direction={'vertical'}>\n                            <Step title={'First'} description={'This is a description.'}></Step>\n                            <Step title={'Second'} subTitle={'Left 00:00:08'} description={'This is a description.'}></Step>\n                            <Step title={'Third'} description={'This is a description.'}></Step>\n                            <Step title={'Last'} description={'This is a description.'}></Step>\n                        </Steps>\n                    </Col>\n                </Row>\n                <Row gutter={8}>\n                    <Col><Button disabled={current === 0} onClick={() => setCurrent(v => --v)}>Previous</Button></Col>\n                    <Col><Button type={'primary'} disabled={current === 3} onClick={() => setCurrent(v => ++v)}>Next</Button></Col>\n                </Row>\n            </div>\n        )\n    }",e.CodeCustomDot="    import { useState, useCallback } from 'react';\n    import { Steps, Row, Col, Icon, Button, Tooltip } from \"@kealm/react-components\";\n    \n    const Step = Steps.Step;\n    \n    function Demo() {\n        const [current, setCurrent] = useState(1);\n        \n        const progressDot = useCallback((dot, {step, status}) => {\n            return (\n                <Tooltip content={\n                    <>\n                        <p>Step：{step}</p>\n                        <p>Status：{status}</p>\n                    </>\n                }>\n                    {dot}\n                </Tooltip>\n            )\n        }, []);\n        \n        return (\n            <div className=\"detail-box\">\n                <Row>\n                    <Col span={22}>\n                        <Steps current={current} progressDot={progressDot}>\n                            <Step title={'First'} description={'This is a description.'}></Step>\n                            <Step title={'Second'} subTitle={'Left 00:00:08'} description={'This is a description.'}></Step>\n                            <Step title={'Third'} description={'This is a description.'}></Step>\n                            <Step title={'Last'} description={'This is a description.'}></Step>\n                        </Steps>\n                    </Col>\n                </Row>\n                <Row gutter={8}>\n                    <Col><Button disabled={current === 0} onClick={() => setCurrent(v => --v)}>Previous</Button></Col>\n                    <Col><Button type={'primary'} disabled={current === 3} onClick={() => setCurrent(v => ++v)}>Next</Button></Col>\n                </Row>\n            </div>\n        )\n    }",e.CodeClick="    import { useState, useCallback } from 'react';\n    import { Steps, Row, Col, Icon, Button } from \"@kealm/react-components\";\n    \n    const Step = Steps.Step;\n    \n    function Demo() {\n        const [current, setCurrent] = useState(1);\n        \n        const change = useCallback(cur => {\n            setCurrent(cur);\n        }, []);\n        \n        return (\n            <div className=\"detail-box\">\n                <Row>\n                    <Col span={22}>\n                        <Steps current={current} onChange={change}>\n                            <Step title={'First'} description={'This is a description.'}></Step>\n                            <Step title={'Second'} subTitle={'Left 00:00:08'} description={'This is a description.'}></Step>\n                            <Step title={'Third'} description={'This is a description.'}></Step>\n                            <Step title={'Last'} description={'This is a description.'}></Step>\n                        </Steps>\n                    </Col>\n                </Row>\n                <Row style={{marginTop: '40px'}}>\n                    <Col span={22}>\n                        <Steps current={current} direction={'vertical'} onChange={change}>\n                            <Step title={'First'} description={'This is a description.'}></Step>\n                            <Step title={'Second'} subTitle={'Left 00:00:08'} description={'This is a description.'}></Step>\n                            <Step title={'Third'} description={'This is a description.'}></Step>\n                            <Step title={'Last'} description={'This is a description.'}></Step>\n                        </Steps>\n                    </Col>\n                </Row>\n            </div>\n        )\n    }"})?i.apply(t,o):i)||(e.exports=s)}}]);
//# sourceMappingURL=group-steps-e3248d82959c0661cd2c.js.map