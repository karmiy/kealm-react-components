(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{480:function(e,n,t){"use strict";t.r(n);var a=t(8),l=t.n(a),r=t(0),o=t.n(r),c=t(147),i=t(24),d=[{param:"defaultValue",des:"默认日期，在 RangePicker 中为数组类型",type:"Date / Date[]",option:"--",default:"--"},{param:"defaultPickerValue",des:"默认面板日期，控制默认打开的区域，在 RangePicker 中为数组类型",type:"Date / Date[]",option:"--",default:"--"},{param:"value",des:"日期，在 RangePicker 中为数组类型",type:"Date / Date[]",option:"--",default:"--"},{param:"visible",des:"用于手动控制面板打开关闭",type:"boolean",option:"--",default:"false"},{param:"pickerClassName",des:"选择器类名，作用于触发框，若需要给弹出框添加类名可用 className",type:"string",option:"--",default:"--"},{param:"pickerStyle",des:"选择器样式，作用于触发框，若需要给弹出框添加样式可用 style",type:"object",option:"--",default:"--"},{param:"disabled",des:"禁用",type:"boolean",option:"--",default:"false"},{param:"allowClear",des:"是否显示清除按钮",type:"boolean",option:"--",default:"false"},{param:"size",des:"输入框大小，large 高度为 40px，small 为 24px，默认是 32px",type:"string",option:"large / small",default:"--"},{param:"disabledDate",des:"不可选择的日期",type:"(currentDate: Date) => boolean",option:"--",default:"--"},{param:"renderExtraFooter",des:"在面板中添加额外的页脚",type:"(value: Date, setValue) => ReactNode",option:"--",default:"--"},{param:"dateRender",des:"自定义日期单元格的内容",type:"(currentDate: Date) => ReactNode",option:"--",default:"--"},{param:"suffixIcon",des:"自定义的选择框后缀图标",type:"string / ReactNode",option:"--",default:"<Icon type={'calendar'} />"}],u=[{name:"onChange",des:"时间发生变化的回调，在 RangePicker 中参数为数组类型",callback:"(date: Date, dateStr: string) => void / (date: Date[], dateStr: string[]) => void"},{name:"onPanelChange",des:"日期面板变化时的回调，在 RangePicker 中参数为数组类型",callback:"(date: Date) => void / (date: Date[]) => void"},{name:"onVisibleChange",des:"面板打开/关闭时的回调",callback:"(visible) => void"}],s=[{param:"format",des:"设置日期格式",type:"string",option:"--",default:"yyyy-MM-dd"},{param:"placeholder",des:"输入框提示文字",type:"string",option:"--",default:"请选择日期"},{param:"showTime",des:"增加时间选择功能",type:"boolean / object",option:{link:"/component/time-picker",info:"TimePicker Options"},default:"false"},{param:"showToday",des:"是否展示“今天”与“此刻”按钮",type:"boolean",option:"--",default:"true"},{param:"disabledTime",des:"不可选择的时间",type:"(currentDate: Date) => boolean",option:"--",default:"--"}],m=[{name:"onOk",des:"点击确定按钮的回调",callback:"() => void"}],g=[{param:"format",des:"设置日期格式",type:"string",option:"--",default:"yyyy-MM"},{param:"placeholder",des:"输入框提示文字",type:"string",option:"--",default:"请选择月份"}],C=[{param:"format",des:"设置日期格式",type:"string",option:"--",default:"YYYY 第ww周"},{param:"placeholder",des:"输入框提示文字",type:"string",option:"--",default:"请选择周数"}],f=[{param:"format",des:"设置日期格式",type:"string",option:"--",default:"yyyy-MM-dd"},{param:"startPlaceholder",des:"左侧输入框提示文字",type:"string",option:"--",default:"开始日期"},{param:"endPlaceholder",des:"右侧输入框提示文字",type:"string",option:"--",default:"结束日期"},{param:"showTime",des:"增加时间选择功能",type:"boolean / object",option:{link:"/component/time-picker",info:"TimePicker Options"},default:"false"},{param:"disabledTime",des:"不可选择的时间",type:"(currentDate: Date) => boolean",option:"--",default:"--"},{param:"separator",des:"设置分隔符",type:"string / ReactNode",option:"--",default:"~"}],k=[{name:"onOk",des:"点击确定按钮的回调",callback:"() => void"}],b=(t(149),t(17)),p=t(14);function E(e){Object(p.a)(1,arguments);var n=Object(b.a)(e);return n.setHours(23,59,59,999),n}var w=t(23);function D(e,n){Object(p.a)(2,arguments);var t=Object(b.a)(e),a=Object(w.a)(n);return isNaN(a)?new Date(NaN):a?(t.setDate(t.getDate()+a),t):t}function h(e,n){Object(p.a)(2,arguments);var t=Object(w.a)(n);return D(e,-t)}var P=t(94),v=t(226);var y=t(176),R=c.i.MonthPicker,S=c.i.WeekPicker,O=c.i.RangePicker;function x(e,n){for(var t=[],a=e;a<n;a++)t.push(a);return t}n.default=function(){var e=Object(r.useState)(""),n=l()(e,2),t=n[0],a=n[1],b=Object(r.useCallback)((function(e){return a(e)}),[]),D=Object(r.useCallback)((function(e){return e<E(new Date)}),[]),M=Object(r.useCallback)((function(){return{disabledHours:function(){return x(4,24)},disabledMinutes:function(){return x(30,60)},disabledSeconds:function(){return[20,30]}}}),[]),V=Object(r.useCallback)((function(e,n){return"start"===n?{disabledHours:function(){return x(4,24)},disabledMinutes:function(){return x(30,60)},disabledSeconds:function(){return[20,30]}}:{disabledHours:function(){return[8,12]},disabledMinutes:function(){return x(5,15)},disabledSeconds:function(){return[10]}}}),[]),N=Object(r.useState)(null),j=l()(N,2),T=j[0],B=j[1],F=Object(r.useState)(null),z=l()(F,2),W=z[0],L=z[1],_=Object(r.useState)(!1),H=l()(_,2),Y=H[0],q=H[1],G=Object(r.useCallback)((function(e){return B(e)}),[]),I=Object(r.useCallback)((function(e){return L(e)}),[]),J=Object(r.useCallback)((function(e){return!e&&q(!0)}),[]),A=Object(r.useCallback)((function(e){return q(e)}),[]),K=Object(r.useCallback)((function(e){return!(!e||!W)&&e.valueOf()>W.valueOf()}),[W]),Q=Object(r.useCallback)((function(e){return!(!e||!T)&&e.valueOf()<=T.valueOf()}),[T]),U=Object(r.useCallback)((function(e){var n={};return 1===e.getDate()&&(n.border="1px solid #1890ff",n.borderRadius="50%"),o.a.createElement("span",{className:"km-calendar__date",style:n},e.getDate())}),[]);return o.a.createElement("div",{className:"page-box"},o.a.createElement("h1",null,"DatePicker 日期选择器"),o.a.createElement("p",null,"输入或选择日期的控件。"),o.a.createElement("p",null,"当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。"),o.a.createElement("h2",null,"基本用法"),o.a.createElement("p",null,"常规的日历。"),o.a.createElement("p",null,"在浮层中可以选择或者输入日期。"),Object(r.useMemo)((function(){return o.a.createElement("div",{className:"detail-box"},o.a.createElement(c.i,{onChange:function(e,n){return console.log(e,n)}}))}),[]),o.a.createElement(i.d,{code:'    import { DatePicker } from "@kealm/react-components";\n    \n    ReactDom.render(\n        <DatePicker onChange={(date, dateString) => console.log(date, dateString)}></DatePicker>,\n        mountNode\n    );'}),o.a.createElement("h2",null,"可清空"),o.a.createElement("p",null,"配置 allowClear 可使日期选择器允许清空选中的值。"),Object(r.useMemo)((function(){return o.a.createElement("div",{className:"detail-box"},o.a.createElement(c.i,{allowClear:!0,onChange:function(e,n){return console.log(e,n)}}))}),[]),o.a.createElement(i.d,{code:'    import { DatePicker } from "@kealm/react-components";\n    \n    ReactDom.render(\n        <DatePicker allowClear onChange={(date, dateString) => console.log(date, dateString)}></DatePicker>,\n        mountNode\n    );'}),o.a.createElement("h2",null,"其他单位"),o.a.createElement("p",null,"更多的日期选择单位，可以选择月、周。"),Object(r.useMemo)((function(){return o.a.createElement("div",{className:"detail-box"},o.a.createElement(c.r,{gutter:16},o.a.createElement(c.f,null,o.a.createElement(R,{allowClear:!0,onChange:function(e,n){return console.log(e,n)}})),o.a.createElement(c.f,null,o.a.createElement(S,{allowClear:!0,onChange:function(e,n){return console.log(e,n)}}))))}),[]),o.a.createElement(i.d,{code:'    import { DatePicker, Row, Col } from "@kealm/react-components";\n    \n    const { MonthPicker, WeekPicker } = DatePicker;\n    \n    ReactDom.render(\n        <Row gutter={16}>\n            <Col>\n                <MonthPicker allowClear onChange={(date, dateString) => console.log(date, dateString)}></MonthPicker>\n            </Col>\n            <Col>\n                <WeekPicker allowClear onChange={(date, dateString) => console.log(date, dateString)}></WeekPicker>\n            </Col>\n        </Row>,\n        mountNode\n    );'}),o.a.createElement("h2",null,"选择日期范围"),o.a.createElement("p",null,"可在一个选择器中便捷地选择一个日期范围。"),Object(r.useMemo)((function(){return o.a.createElement("div",{className:"detail-box"},o.a.createElement(O,{allowClear:!0,onChange:function(e,n){return console.log(e,n)}}))}),[]),o.a.createElement(i.d,{code:'    import { DatePicker } from "@kealm/react-components";\n    \n    const { RangePicker } = DatePicker;\n    \n    ReactDom.render(\n        <RangePicker allowClear onChange={(date, dateString) => console.log(date, dateString)}></RangePicker>,\n        mountNode\n    );'}),o.a.createElement("h2",null,"日期格式"),o.a.createElement("p",null,"使用 format 属性，可以自定义日期显示格式。"),Object(r.useMemo)((function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"detail-box"},o.a.createElement(c.r,{gutter:16},o.a.createElement(c.f,null,o.a.createElement(c.i,{defaultValue:new Date(2020,0),allowClear:!0,format:"yyyy/MM/dd",onChange:function(e,n){return console.log(e,n)}})),o.a.createElement(c.f,null,o.a.createElement(c.i,{defaultValue:new Date(2020,0),allowClear:!0,format:"MM/dd/yyyy",onChange:function(e,n){return console.log(e,n)}})))),o.a.createElement("div",{className:"detail-box"},o.a.createElement(c.r,{gutter:16},o.a.createElement(c.f,null,o.a.createElement(R,{defaultValue:new Date(2020,0),allowClear:!0,format:"yyyy/MM",onChange:function(e,n){return console.log(e,n)}})),o.a.createElement(c.f,null,o.a.createElement(O,{defaultValue:[new Date(2020,0),new Date(2020,1)],allowClear:!0,format:"yyyy/MM/dd",onChange:function(e,n){return console.log(e,n)}})))))}),[]),o.a.createElement(i.d,{code:"    import { DatePicker, Row, Col } from \"@kealm/react-components\";\n    \n    const { MonthPicker, RangePicker } = DatePicker;\n    \n    ReactDom.render(\n        <div>\n            <div className=\"detail-box\">\n                <Row gutter={16}>\n                    <Col>\n                        <DatePicker\n                            defaultValue={new Date(2020, 0)}\n                            allowClear\n                            format={'yyyy/MM/dd'}\n                            onChange={(date, dateString) => console.log(date, dateString)}\n                        ></DatePicker>\n                    </Col>\n                    <Col>\n                        <DatePicker\n                            defaultValue={new Date(2020, 0)}\n                            allowClear\n                            format={'MM/dd/yyyy'}\n                            onChange={(date, dateString) => console.log(date, dateString)}\n                        ></DatePicker>\n                    </Col>\n                </Row>\n            </div>\n            <div className=\"detail-box\">\n                <Row gutter={16}>\n                    <Col>\n                        <MonthPicker\n                            defaultValue={new Date(2020, 0)}\n                            allowClear\n                            format={'yyyy/MM'}\n                            onChange={(date, dateString) => console.log(date, dateString)}\n                        ></MonthPicker>\n                    </Col>\n                    <Col>\n                        <RangePicker\n                            defaultValue={[new Date(2020, 0), new Date(2020, 1)]}\n                            allowClear\n                            format={'yyyy/MM/dd'}\n                            onChange={(date, dateString) => console.log(date, dateString)}\n                        ></RangePicker>\n                    </Col>\n                </Row>\n            </div>\n        </div>,\n        mountNode\n    );"}),o.a.createElement("h2",null,"三种大小"),o.a.createElement("p",null,"三种大小的输入框。"),Object(r.useMemo)((function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"detail-box"},o.a.createElement(c.q.Group,{value:t,onChange:function(e){return b(e.target.value)}},o.a.createElement(c.q.Button,{value:"large"},"Large"),o.a.createElement(c.q.Button,{value:""},"Default"),o.a.createElement(c.q.Button,{value:"small"},"Small"))),o.a.createElement("div",{className:"detail-box"},o.a.createElement(c.r,{gutter:16},o.a.createElement(c.f,null,o.a.createElement(c.i,{allowClear:!0,size:t||void 0,onChange:function(e,n){return console.log(e,n)}})),o.a.createElement(c.f,null,o.a.createElement(S,{allowClear:!0,size:t||void 0,onChange:function(e,n){return console.log(e,n)}})))),o.a.createElement("div",{className:"detail-box"},o.a.createElement(c.r,{gutter:16},o.a.createElement(c.f,null,o.a.createElement(R,{allowClear:!0,size:t||void 0,onChange:function(e,n){return console.log(e,n)}})),o.a.createElement(c.f,null,o.a.createElement(O,{allowClear:!0,size:t||void 0,onChange:function(e,n){return console.log(e,n)}})))))}),[t]),o.a.createElement(i.d,{code:"    import { useState, useCallback } from 'react';\n    import { DatePicker, Radio, Row, Col } from \"@kealm/react-components\";\n    \n    const { MonthPicker, WeekPicker, RangePicker } = DatePicker;\n    \n    function Demo() {\n        const [size, setSize] = useState('');\n        const onSizeChange = useCallback(v => setSize(v), []);\n        \n        return (\n            <div>\n                <div className=\"detail-box\">\n                    <Radio.Group value={size} onChange={e => onSizeChange(e.target.value)}>\n                        <Radio.Button value={'large'}>Large</Radio.Button>\n                        <Radio.Button value={''}>Default</Radio.Button>\n                        <Radio.Button value={'small'}>Small</Radio.Button>\n                    </Radio.Group>\n                </div>\n                <div className=\"detail-box\">\n                    <Row gutter={16}>\n                        <Col>\n                            <DatePicker allowClear size={size || undefined} onChange={(date, dateString) => console.log(date, dateString)}></DatePicker>\n                        </Col>\n                        <Col>\n                            <WeekPicker allowClear size={size || undefined} onChange={(date, dateString) => console.log(date, dateString)}></WeekPicker>\n                        </Col>\n                    </Row>\n                </div>\n                <div className=\"detail-box\">\n                    <Row gutter={16}>\n                        <Col>\n                            <MonthPicker allowClear size={size || undefined} onChange={(date, dateString) => console.log(date, dateString)}></MonthPicker>\n                        </Col>\n                        <Col>\n                            <RangePicker allowClear size={size || undefined} onChange={(date, dateString) => console.log(date, dateString)}></RangePicker>\n                        </Col>\n                    </Row>\n                </div>\n            </div>\n        )\n    }"}),o.a.createElement("h2",null,"日期时间选择"),o.a.createElement("p",null,"配置 showTime 属性，增加选择时间功能。"),o.a.createElement("p",null,"当 showTime 为一个对象时，其属性会传递给内建的 TimePicker。"),Object(r.useMemo)((function(){return o.a.createElement("div",{className:"detail-box"},o.a.createElement(c.r,{gutter:16},o.a.createElement(c.f,null,o.a.createElement(c.i,{allowClear:!0,showTime:!0,onChange:function(e,n){return console.log(e,n)}})),o.a.createElement(c.f,null,o.a.createElement(O,{allowClear:!0,showTime:!0,onChange:function(e,n){return console.log(e,n)}}))))}),[]),o.a.createElement(i.d,{code:'    import { DatePicker, Row, Col } from "@kealm/react-components";\n    \n    const { RangePicker } = DatePicker;\n    \n    ReactDom.render(\n        <Row gutter={16}>\n            <Col>\n                <DatePicker\n                    allowClear\n                    showTime\n                    onChange={(date, dateString) => console.log(date, dateString)}\n                ></DatePicker>\n            </Col>\n            <Col>\n                <RangePicker\n                    allowClear\n                    showTime\n                    onChange={(date, dateString) => console.log(date, dateString)}\n                ></RangePicker>\n            </Col>\n        </Row>,\n        mountNode\n    );'}),o.a.createElement("h2",null,"禁用"),o.a.createElement("p",null,"选择框的不可用状态。"),Object(r.useMemo)((function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"detail-box"},o.a.createElement(c.r,{gutter:16},o.a.createElement(c.f,null,o.a.createElement(c.i,{defaultValue:new Date("2020-01-01"),disabled:!0})),o.a.createElement(c.f,null,o.a.createElement(S,{defaultValue:new Date("2020-01-01"),disabled:!0})))),o.a.createElement("div",{className:"detail-box"},o.a.createElement(c.r,{gutter:16},o.a.createElement(c.f,null,o.a.createElement(R,{defaultValue:new Date("2020-01-01"),disabled:!0})),o.a.createElement(c.f,null,o.a.createElement(O,{defaultValue:[new Date("2020-01-01"),new Date("2020-02-01")],disabled:!0})))))}),[]),o.a.createElement(i.d,{code:"    import { DatePicker, Row, Col } from \"@kealm/react-components\";\n    \n    const { MonthPicker, WeekPicker, RangePicker } = DatePicker;\n    \n    ReactDom.render(\n        <div>\n            <div className=\"detail-box\">\n                <Row gutter={16}>\n                    <Col>\n                        <DatePicker defaultValue={new Date('2020-01-01')} disabled></DatePicker>\n                    </Col>\n                    <Col>\n                        <WeekPicker defaultValue={new Date('2020-01-01')} disabled></WeekPicker>\n                    </Col>\n                </Row>\n            </div>\n            <div className=\"detail-box\">\n                <Row gutter={16}>\n                    <Col>\n                        <MonthPicker defaultValue={new Date('2020-01-01')} disabled></MonthPicker>\n                    </Col>\n                    <Col>\n                        <RangePicker defaultValue={[new Date('2020-01-01'), new Date('2020-02-01')]} disabled></RangePicker>\n                    </Col>\n                </Row>\n            </div>\n        </div>,\n        mountNode\n    );"}),o.a.createElement("h2",null,"不可选择日期和时间"),o.a.createElement("p",null,"可用 disabledDate 和 disabledTime 分别禁止选择部分日期和时间。"),o.a.createElement("p",null,"其中 disabledTime 需要和 showTime 一起使用。"),Object(r.useMemo)((function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"detail-box"},o.a.createElement(c.r,{gutter:16},o.a.createElement(c.f,null,o.a.createElement(c.i,{allowClear:!0,showTime:{hourStep:2,minuteStep:5,secondStep:10},disabledDate:D,disabledTime:M,onChange:function(e,n){return console.log(e,n)}})),o.a.createElement(c.f,null,o.a.createElement(S,{allowClear:!0,disabledDate:D,onChange:function(e,n){return console.log(e,n)}})))),o.a.createElement("div",{className:"detail-box"},o.a.createElement(c.r,{gutter:16},o.a.createElement(c.f,null,o.a.createElement(R,{allowClear:!0,disabledDate:D,onChange:function(e,n){return console.log(e,n)}})),o.a.createElement(c.f,null,o.a.createElement(O,{allowClear:!0,showTime:{defaultOpenValue:new Date("2019-12-11 02:15:40"),hourStep:2,minuteStep:5,secondStep:10,hideDisabledOptions:!0},disabledDate:D,disabledTime:V,onChange:function(e,n){return console.log(e,n)}})))))}),[]),o.a.createElement(i.d,{code:"    import { useState, useCallback } from 'react';\n    import { DatePicker, Row, Col } from \"@kealm/react-components\";\n    \n    const { MonthPicker, WeekPicker, RangePicker } = DatePicker;\n    \n    function range(start, end) {\n        const result = [];\n        for (let i = start; i < end; i++) {\n            result.push(i);\n        }\n        return result;\n    }\n    \n    function Demo() {\n        const disabledDate = useCallback(v => v < endOfDay(new Date()), []);\n        \n        const disabledDateTime = useCallback(() => {\n            return {\n                disabledHours: () => range(4, 24), // 0 ~ 3\n                disabledMinutes: () => range(30, 60), // 30 ~ 59\n                disabledSeconds: () => [20, 30],\n            };\n        }, []);\n    \n        const disabledRangeTime = useCallback((v, type) => {\n            if (type === 'start') {\n                return {\n                    disabledHours: () => range(4, 24),\n                    disabledMinutes: () => range(30, 60),\n                    disabledSeconds: () => [20, 30],\n                };\n            }\n            return {\n                disabledHours: () => [8, 12],\n                disabledMinutes: () => range(5, 15),\n                disabledSeconds: () => [10],\n            };\n        }, []);\n        \n        return (\n            <div>\n                <div className=\"detail-box\">\n                    <Row gutter={16}>\n                        <Col>\n                            <DatePicker\n                                allowClear\n                                showTime={{\n                                    hourStep: 2,\n                                    minuteStep: 5,\n                                    secondStep: 10,\n                                }}\n                                disabledDate={disabledDate}\n                                disabledTime={disabledDateTime}\n                                onChange={(date, dateString) => console.log(date, dateString)}\n                            ></DatePicker>\n                        </Col>\n                        <Col>\n                            <WeekPicker\n                                allowClear\n                                disabledDate={disabledDate}\n                                onChange={(date, dateString) => console.log(date, dateString)}\n                            ></WeekPicker>\n                        </Col>\n                    </Row>\n                </div>\n                <div className=\"detail-box\">\n                    <Row gutter={16}>\n                        <Col>\n                            <MonthPicker\n                                allowClear\n                                disabledDate={disabledDate}\n                                onChange={(date, dateString) => console.log(date, dateString)}\n                            ></MonthPicker>\n                        </Col>\n                        <Col>\n                            <RangePicker\n                                allowClear\n                                showTime={{\n                                    defaultOpenValue: new Date('2019-12-11 02:15:40'),\n                                    hourStep: 2,\n                                    minuteStep: 5,\n                                    secondStep: 10,\n                                    hideDisabledOptions: true,\n                                }}\n                                disabledDate={disabledDate}\n                                disabledTime={disabledRangeTime}\n                                onChange={(date, dateString) => console.log(date, dateString)}\n                            ></RangePicker>\n                        </Col>\n                    </Row>\n                </div>\n            </div>\n        )\n    }"}),o.a.createElement("h2",null,"自定义日期范围选择"),o.a.createElement("p",null,"当 RangePicker 无法满足业务需求时，可以使用两个 DatePicker 实现类似的功能。"),Object(r.useMemo)((function(){return o.a.createElement("div",{className:"detail-box"},o.a.createElement(c.r,{gutter:16},o.a.createElement(c.f,null,o.a.createElement(c.i,{value:T,onChange:G,onVisibleChange:J,allowClear:!0,showTime:!0,placeholder:"开始日期",disabledDate:K})),o.a.createElement(c.f,null,o.a.createElement(c.i,{value:W,onChange:I,visible:Y,onVisibleChange:A,allowClear:!0,showTime:!0,placeholder:"结束日期",disabledDate:Q}))))}),[T,W,Y,K,Q]),o.a.createElement(i.d,{code:"    import { useState, useCallback } from 'react';\n    import { DatePicker, Row, Col } from \"@kealm/react-components\";\n    \n    const { MonthPicker, WeekPicker, RangePicker } = DatePicker;\n    \n    function Demo() {\n        const [startValue, setStartValue] = useState(null);\n        const [endValue, setEndValue] = useState(null);\n        const [endVisible, setEndVisible] = useState(false);\n    \n        const onStartChange = useCallback(v => setStartValue(v), []);\n        const onEndChange = useCallback(v => setEndValue(v), []);\n        const onStartVisibleChange = useCallback(visible => !visible && setEndVisible(true), []);\n        const onEndVisibleChange = useCallback(visible => setEndVisible(visible), []);\n        \n        const disabledStartDate = useCallback(date => {\n            if(!date || !endValue) return false;\n            return date.valueOf() > endValue.valueOf();\n        }, [endValue]);\n        const disabledEndDate = useCallback(date => {\n            if(!date || !startValue) return false;\n            return date.valueOf() <= startValue.valueOf();\n        }, [startValue]);\n        \n        return (\n            <div className=\"detail-box\">\n                <Row gutter={16}>\n                    <Col>\n                        <DatePicker\n                            value={startValue}\n                            onChange={onStartChange}\n                            onVisibleChange={onStartVisibleChange}\n                            allowClear\n                            showTime\n                            placeholder={'开始日期'}\n                            disabledDate={disabledStartDate}\n                        ></DatePicker>\n                    </Col>\n                    <Col>\n                        <DatePicker\n                            value={endValue}\n                            onChange={onEndChange}\n                            visible={endVisible}\n                            onVisibleChange={onEndVisibleChange}\n                            allowClear\n                            showTime\n                            placeholder={'结束日期'}\n                            disabledDate={disabledEndDate}\n                        ></DatePicker>\n                    </Col>\n                </Row>\n            </div>\n        )\n    }"}),o.a.createElement("h2",null,"额外的页脚"),o.a.createElement("p",null,"在浮层中加入额外的页脚，以满足某些定制信息的需求。"),Object(r.useMemo)((function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"detail-box"},o.a.createElement(c.r,{gutter:16},o.a.createElement(c.f,null,o.a.createElement(c.i,{allowClear:!0,renderExtraFooter:function(e,n){return o.a.createElement(c.r,{type:"flex",justify:"center"},o.a.createElement(c.f,null,o.a.createElement(c.c,{type:"text",onClick:function(){return n((e=new Date,t=e.getFullYear(),a=e.getMonth(),l=e.getDate(),(r=new Date(0)).setFullYear(t,a,l-1),r.setHours(0,0,0,0),r));var e,t,a,l,r}},"昨天")))},onChange:function(e,n){return console.log(e,n)}})),o.a.createElement(c.f,null,o.a.createElement(c.i,{allowClear:!0,showTime:!0,renderExtraFooter:function(e,n){return o.a.createElement(c.c,{type:"text",onClick:function(){return n(h(new Date,1))}},"昨日")},onChange:function(e,n){return console.log(e,n)}})),o.a.createElement(c.f,null,o.a.createElement(S,{allowClear:!0,renderExtraFooter:function(e,n){return o.a.createElement(c.c,{type:"text",onClick:function(){return n(Object(P.a)(new Date,{weekStartsOn:1}))}},"本周")},onChange:function(e,n){return console.log(e,n)}})))),o.a.createElement("div",{className:"detail-box"},o.a.createElement(c.r,{gutter:16},o.a.createElement(c.f,null,o.a.createElement(R,{allowClear:!0,renderExtraFooter:function(e,n){return o.a.createElement(c.r,{type:"flex",justify:"space-between"},o.a.createElement(c.f,null,o.a.createElement(c.c,{type:"text",onClick:function(){return n(function(e,n){Object(p.a)(2,arguments);var t=Object(w.a)(n);return Object(v.a)(e,-t)}(Object(y.a)(new Date),1))}},"上个月")),o.a.createElement(c.f,null,o.a.createElement(c.c,{type:"text",onClick:function(){return n(Object(v.a)(Object(y.a)(new Date),1))}},"下个月")))},onChange:function(e,n){return console.log(e,n)}})),o.a.createElement(c.f,null,o.a.createElement(O,{allowClear:!0,renderExtraFooter:function(e,n){return o.a.createElement(c.c,{type:"text",onClick:function(){return n([Object(y.a)(h(new Date,14)),E(h(new Date,1))])}},"近2周")},onChange:function(e,n){return console.log(e,n)}})),o.a.createElement(c.f,null,o.a.createElement(O,{allowClear:!0,showTime:!0,renderExtraFooter:function(e,n){return o.a.createElement(c.c,{type:"text",onClick:function(){return n([Object(y.a)(h(new Date,7)),E(h(new Date,1))])}},"近7天")},onChange:function(e,n){return console.log(e,n)}})))))}),[]),o.a.createElement(i.d,{code:"    import { DatePicker, Row, Col, Button } from \"@kealm/react-components\";\n    \n    const { MonthPicker, WeekPicker, RangePicker } = DatePicker;\n    \n    ReactDom.render(\n        <div>\n            <div className=\"detail-box\">\n                <Row gutter={16}>\n                    <Col>\n                        <DatePicker\n                            allowClear\n                            renderExtraFooter={(_, setValue) => {\n                                return (\n                                    <Row type={'flex'} justify={'center'}>\n                                        <Col>\n                                            <Button\n                                                type={'text'}\n                                                onClick={() => setValue(startOfYesterday())}\n                                            >\n                                                昨天\n                                            </Button>\n                                        </Col>\n                                    </Row>\n                                )\n                            }}\n                            onChange={(date, dateString) => console.log(date, dateString)}\n                        ></DatePicker>\n                    </Col>\n                    <Col>\n                        <DatePicker\n                            allowClear\n                            showTime\n                            renderExtraFooter={(_, setValue) => {\n                                return (\n                                    <Button\n                                        type={'text'}\n                                        onClick={() => setValue(subDays(new Date(), 1))}\n                                    >\n                                        昨日\n                                    </Button>\n                                )\n                            }}\n                            onChange={(date, dateString) => console.log(date, dateString)}\n                        ></DatePicker>\n                    </Col>\n                    <Col>\n                        <WeekPicker\n                            allowClear\n                            renderExtraFooter={(_, setValue) => {\n                                return (\n                                    <Button\n                                        type={'text'}\n                                        onClick={() => setValue(startOfWeek(new Date(), { weekStartsOn: 1 }))}\n                                    >\n                                        本周\n                                    </Button>\n                                )\n                            }}\n                            onChange={(date, dateString) => console.log(date, dateString)}\n                        ></WeekPicker>\n                    </Col>\n                </Row>\n            </div>\n            <div className=\"detail-box\">\n                <Row gutter={16}>\n                    <Col>\n                        <MonthPicker\n                            allowClear\n                            renderExtraFooter={(_, setValue) => {\n                                return (\n                                    <Row type={'flex'} justify={'space-between'}>\n                                        <Col>\n                                            <Button\n                                                type={'text'}\n                                                onClick={() => setValue(subMonths(startOfDay(new Date), 1))}\n                                            >\n                                                上个月\n                                            </Button>\n                                        </Col>\n                                        <Col>\n                                            <Button\n                                                type={'text'}\n                                                onClick={() => setValue(addMonths(startOfDay(new Date), 1))}\n                                            >\n                                                下个月\n                                            </Button>\n                                        </Col>\n                                    </Row>\n                                )\n                            }}\n                            onChange={(date, dateString) => console.log(date, dateString)}\n                        ></MonthPicker>\n                    </Col>\n                    <Col>\n                        <RangePicker\n                            allowClear\n                            renderExtraFooter={(_, setValue) => {\n                                return (\n                                    <Button\n                                        type={'text'}\n                                        onClick={() => setValue([\n                                            startOfDay(subDays(new Date(), 14)),\n                                            endOfDay(subDays(new Date(), 1))\n                                        ])}\n                                    >\n                                        近2周\n                                    </Button>\n                                )\n                            }}\n                            onChange={(date, dateString) => console.log(date, dateString)}\n                        ></RangePicker>\n                    </Col>\n                    <Col>\n                        <RangePicker\n                            allowClear\n                            showTime\n                            renderExtraFooter={(_, setValue) => {\n                                return (\n                                    <Button\n                                        type={'text'}\n                                        onClick={() => setValue([\n                                            startOfDay(subDays(new Date(), 7)),\n                                            endOfDay(subDays(new Date(), 1))\n                                        ])}\n                                    >\n                                        近7天\n                                    </Button>\n                                )\n                            }}\n                            onChange={(date, dateString) => console.log(date, dateString)}\n                        ></RangePicker>\n                    </Col>\n                </Row>\n            </div>\n        </div>,\n        mountNode\n    );"}),o.a.createElement("h2",null,"定制日期单元格"),o.a.createElement("p",null,"使用 dateRender 可以自定义日期单元格的内容和样式。"),Object(r.useMemo)((function(){return o.a.createElement("div",{className:"detail-box"},o.a.createElement(c.r,{gutter:16},o.a.createElement(c.f,null,o.a.createElement(c.i,{allowClear:!0,onChange:function(e,n){return console.log(e,n)},dateRender:U})),o.a.createElement(c.f,null,o.a.createElement(O,{allowClear:!0,onChange:function(e,n){return console.log(e,n)},dateRender:U}))))}),[]),o.a.createElement(i.d,{code:"    import { useCallback } from 'react';\n    import { DatePicker, Row, Col } from \"@kealm/react-components\";\n    \n    const { RangePicker } = DatePicker;\n    \n    function Demo() {\n        const dateRender = useCallback(current => {\n            const style = {};\n            if (current.getDate() === 1) {\n                style.border = '1px solid #1890ff';\n                style.borderRadius = '50%';\n            }\n            return <span className={'km-calendar__date'} style={style}>{current.getDate()}</span>\n        }, []);\n        \n        return (\n            <div className=\"detail-box\">\n                <Row gutter={16}>\n                    <Col>\n                        <DatePicker\n                            allowClear\n                            onChange={(date, dateString) => console.log(date, dateString)}\n                            dateRender={dateRender}\n                        ></DatePicker>\n                    </Col>\n                    <Col>\n                        <RangePicker\n                            allowClear\n                            onChange={(date, dateString) => console.log(date, dateString)}\n                            dateRender={dateRender}\n                        ></RangePicker>\n                    </Col>\n                </Row>\n            </div>\n        )\n    }"}),o.a.createElement(i.a,{title:"Common",propsList:d,eventsList:u}),o.a.createElement(i.a,{title:"DatePicker",propsList:s,eventsList:m}),o.a.createElement(i.a,{title:"MonthPicker",propsList:g}),o.a.createElement(i.a,{title:"WeekPicker",propsList:C}),o.a.createElement(i.a,{title:"RangePicker",propsList:f,eventsList:k}))}}}]);
//# sourceMappingURL=group-date-picker-4982e4a243001f6e32e8.js.map