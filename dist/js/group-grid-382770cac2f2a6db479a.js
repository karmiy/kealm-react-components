(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{489:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(147),o=a(24),s=[{param:"gutter",des:"栅格间隔",type:"string / number",option:"--",default:"--"},{param:"type",des:"布局模式，可选 flex，现代浏览器下有效",type:"string",option:"--",default:"--"},{param:"justify",des:"flex 布局下的水平排列方式",type:"string",option:"start / center / end / space-between / space-around",default:"--"},{param:"align",des:"flex 布局下的垂直排列方式",type:"string",option:"top / middle / bottom",default:"--"}],r=[{param:"span",des:"栅格占据的列数",type:"string / number",option:"--",default:"--"},{param:"offset",des:"栅格左侧的间隔格数",type:"string / number",option:"--",default:"--"},{param:"pull",des:"栅格向左移动格数",type:"string / number",option:"--",default:"--"},{param:"push",des:"栅格向右移动格数",type:"string / number",option:"--",default:"--"},{param:"order",des:"栅格顺序，flex 布局模式下有效",type:"string / number",option:"--",default:"--"},{param:"xs",des:"<768px 响应式栅格数或者栅格属性对象",type:"string / number / object(例如： {span: 4, offset: 4})",option:"--",default:"--"},{param:"sm",des:"≥768px 响应式栅格数或者栅格属性对象",type:"string / number / object(例如： {span: 4, offset: 4})",option:"--",default:"--"},{param:"md",des:"≥992px 响应式栅格数或者栅格属性对象",type:"string / number / object(例如： {span: 4, offset: 4})",option:"--",default:"--"},{param:"lg",des:"≥1200px 响应式栅格数或者栅格属性对象",type:"string / number / object(例如： {span: 4, offset: 4})",option:"--",default:"--"},{param:"xl",des:"≥1920px 响应式栅格数或者栅格属性对象",type:"string / number / object(例如： {span: 4, offset: 4})",option:"--",default:"--"}];t.default=function(){return l.a.createElement("div",{className:"page-box"},l.a.createElement("h1",null,"Grid 栅格"),l.a.createElement("p",null,"通过基础的 24 栅格，迅速简便地创建布局。"),l.a.createElement("h2",null,"基本用法"),l.a.createElement("p",null,"基础的按钮用法。"),l.a.createElement("div",{className:"detail-box"},l.a.createElement(c.r,null,l.a.createElement(c.f,{className:"grid-content light",span:24},"col-24")),l.a.createElement(c.r,null,l.a.createElement(c.f,{className:"grid-content light",span:12},"col-12"),l.a.createElement(c.f,{className:"grid-content dark",span:12},"col-12")),l.a.createElement(c.r,null,l.a.createElement(c.f,{className:"grid-content light",span:8},"col-8"),l.a.createElement(c.f,{className:"grid-content dark",span:8},"col-8"),l.a.createElement(c.f,{className:"grid-content light",span:8},"col-8")),l.a.createElement(c.r,null,l.a.createElement(c.f,{className:"grid-content light",span:6},"col-6"),l.a.createElement(c.f,{className:"grid-content dark",span:6},"col-6"),l.a.createElement(c.f,{className:"grid-content light",span:6},"col-6"),l.a.createElement(c.f,{className:"grid-content dark",span:6},"col-6")),l.a.createElement(c.r,null,l.a.createElement(c.f,{className:"grid-content light",span:4},"col-4"),l.a.createElement(c.f,{className:"grid-content dark",span:4},"col-4"),l.a.createElement(c.f,{className:"grid-content light",span:4},"col-4"),l.a.createElement(c.f,{className:"grid-content dark",span:4},"col-4"),l.a.createElement(c.f,{className:"grid-content light",span:4},"col-4"),l.a.createElement(c.f,{className:"grid-content dark",span:4},"col-4"))),l.a.createElement(o.d,{code:"    import { Row, Col } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <div>\n            <Row>\n                <Col className={'grid-content light'} span={24}>col-24</Col>\n            </Row>\n            <Row>\n                <Col className={'grid-content light'} span={12}>col-12</Col>\n                <Col className={'grid-content dark'} span={12}>col-12</Col>\n            </Row>\n            <Row>\n                <Col className={'grid-content light'} span={8}>col-8</Col>\n                <Col className={'grid-content dark'} span={8}>col-8</Col>\n                <Col className={'grid-content light'} span={8}>col-8</Col>\n            </Row>\n            <Row>\n                <Col className={'grid-content light'} span={6}>col-6</Col>\n                <Col className={'grid-content dark'} span={6}>col-6</Col>\n                <Col className={'grid-content light'} span={6}>col-6</Col>\n                <Col className={'grid-content dark'} span={6}>col-6</Col>\n            </Row>\n            <Row>\n                <Col className={'grid-content light'} span={4}>col-4</Col>\n                <Col className={'grid-content dark'} span={4}>col-4</Col>\n                <Col className={'grid-content light'} span={4}>col-4</Col>\n                <Col className={'grid-content dark'} span={4}>col-4</Col>\n                <Col className={'grid-content light'} span={4}>col-4</Col>\n                <Col className={'grid-content dark'} span={4}>col-4</Col>\n            </Row>\n        </div>,\n        mountNode\n    );"}),l.a.createElement("h2",null,"分栏间隔"),l.a.createElement("p",null,"分栏之间存在间隔。"),l.a.createElement("div",{className:"detail-box"},l.a.createElement(c.r,{gutter:20},l.a.createElement(c.f,{span:6},l.a.createElement("div",{className:"grid-content light"},"col-6")),l.a.createElement(c.f,{span:6},l.a.createElement("div",{className:"grid-content dark"},"col-6")),l.a.createElement(c.f,{span:6},l.a.createElement("div",{className:"grid-content light"},"col-6")),l.a.createElement(c.f,{span:6},l.a.createElement("div",{className:"grid-content dark"},"col-6")))),l.a.createElement(o.d,{code:"    import { Row, Col } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <Row gutter={20}>\n            <Col span={6}><div className={'grid-content light'}>col-6</div></Col>\n            <Col span={6}><div className={'grid-content dark'}>col-6</div></Col>\n            <Col span={6}><div className={'grid-content light'}>col-6</div></Col>\n            <Col span={6}><div className={'grid-content dark'}>col-6</div></Col>\n        </Row>,\n        mountNode\n);"}),l.a.createElement("h2",null,"分栏偏移"),l.a.createElement("p",null,"支持偏移指定的栏数。"),l.a.createElement("div",{className:"detail-box"},l.a.createElement(c.r,null,l.a.createElement(c.f,{span:8},l.a.createElement("div",{className:"grid-content light"},"col-8")),l.a.createElement(c.f,{span:8,offset:8},l.a.createElement("div",{className:"grid-content dark"},"col-8"))),l.a.createElement(c.r,null,l.a.createElement(c.f,{span:6,offset:6},l.a.createElement("div",{className:"grid-content light"},"col-6")),l.a.createElement(c.f,{span:6,offset:6},l.a.createElement("div",{className:"grid-content dark"},"col-6"))),l.a.createElement(c.r,null,l.a.createElement(c.f,{span:12,offset:6},l.a.createElement("div",{className:"grid-content light"},"col-12")))),l.a.createElement(o.d,{code:"    import { Row, Col } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <div>\n            <Row>\n                <Col span={8}><div className={'grid-content light'}>col-8</div></Col>\n                <Col span={8} offset={8}><div className={'grid-content dark'}>col-8</div></Col>\n            </Row>\n            <Row>\n                <Col span={6} offset={6}><div className={'grid-content light'}>col-6</div></Col>\n                <Col span={6} offset={6}><div className={'grid-content dark'}>col-6</div></Col>\n            </Row>\n            <Row>\n                <Col span={12} offset={6}><div className={'grid-content light'}>col-12</div></Col>\n            </Row>\n        </div>,\n        mountNode\n    );"}),l.a.createElement("h2",null,"分栏移动"),l.a.createElement("p",null,"通过使用 push 和 pull 可以很容易的使栅格向右或向左移动。"),l.a.createElement("div",{className:"detail-box"},l.a.createElement(c.r,{type:"flex",justify:"start"},l.a.createElement(c.f,{span:18,push:6},l.a.createElement("div",{className:"grid-content light"},"col-6")),l.a.createElement(c.f,{span:6,pull:18},l.a.createElement("div",{className:"grid-content dark"},"col-18")))),l.a.createElement(o.d,{code:"    import { Row, Col } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <Row type={'flex'} justify={'start'}>\n            <Col span={18} push={6}><div className={'grid-content light'}>col-6</div></Col>\n            <Col span={6} pull={18}><div className={'grid-content dark'}>col-18</div></Col>\n        </Row>,\n        mountNode\n    );"}),l.a.createElement("h2",null,"Flex水平布局"),l.a.createElement("p",null,"通过 flex 布局来对分栏进行灵活的水平对齐。"),l.a.createElement("div",{className:"detail-box wrap-bg"},l.a.createElement(c.r,{type:"flex",justify:"start"},l.a.createElement(c.f,{span:6},l.a.createElement("div",{className:"grid-content light"},"col-6")),l.a.createElement(c.f,{span:6},l.a.createElement("div",{className:"grid-content dark"},"col-6")),l.a.createElement(c.f,{span:6},l.a.createElement("div",{className:"grid-content light"},"col-6"))),l.a.createElement(c.r,{type:"flex",justify:"center"},l.a.createElement(c.f,{span:6},l.a.createElement("div",{className:"grid-content light"},"col-6")),l.a.createElement(c.f,{span:6},l.a.createElement("div",{className:"grid-content dark"},"col-6")),l.a.createElement(c.f,{span:6},l.a.createElement("div",{className:"grid-content light"},"col-6"))),l.a.createElement(c.r,{type:"flex",justify:"end"},l.a.createElement(c.f,{span:6},l.a.createElement("div",{className:"grid-content light"},"col-6")),l.a.createElement(c.f,{span:6},l.a.createElement("div",{className:"grid-content dark"},"col-6")),l.a.createElement(c.f,{span:6},l.a.createElement("div",{className:"grid-content light"},"col-6"))),l.a.createElement(c.r,{type:"flex",justify:"space-between"},l.a.createElement(c.f,{span:6},l.a.createElement("div",{className:"grid-content light"},"col-6")),l.a.createElement(c.f,{span:6},l.a.createElement("div",{className:"grid-content dark"},"col-6")),l.a.createElement(c.f,{span:6},l.a.createElement("div",{className:"grid-content light"},"col-6"))),l.a.createElement(c.r,{type:"flex",justify:"space-around"},l.a.createElement(c.f,{span:6},l.a.createElement("div",{className:"grid-content light"},"col-6")),l.a.createElement(c.f,{span:6},l.a.createElement("div",{className:"grid-content dark"},"col-6")),l.a.createElement(c.f,{span:6},l.a.createElement("div",{className:"grid-content light"},"col-6")))),l.a.createElement(o.d,{code:"    import { Row, Col } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <div>\n            <Row type={'flex'} justify={'start'}>\n                <Col span={6}><div className={'grid-content light'}>col-6</div></Col>\n                <Col span={6}><div className={'grid-content dark'}>col-6</div></Col>\n                <Col span={6}><div className={'grid-content light'}>col-6</div></Col>\n            </Row>\n            <Row type={'flex'} justify={'center'}>\n                <Col span={6}><div className={'grid-content light'}>col-6</div></Col>\n                <Col span={6}><div className={'grid-content dark'}>col-6</div></Col>\n                <Col span={6}><div className={'grid-content light'}>col-6</div></Col>\n            </Row>\n            <Row type={'flex'} justify={'end'}>\n                <Col span={6}><div className={'grid-content light'}>col-6</div></Col>\n                <Col span={6}><div className={'grid-content dark'}>col-6</div></Col>\n                <Col span={6}><div className={'grid-content light'}>col-6</div></Col>\n            </Row>\n            <Row type={'flex'} justify={'space-between'}>\n                <Col span={6}><div className={'grid-content light'}>col-6</div></Col>\n                <Col span={6}><div className={'grid-content dark'}>col-6</div></Col>\n                <Col span={6}><div className={'grid-content light'}>col-6</div></Col>\n            </Row>\n            <Row type={'flex'} justify={'space-around'}>\n                <Col span={6}><div className={'grid-content light'}>col-6</div></Col>\n                <Col span={6}><div className={'grid-content dark'}>col-6</div></Col>\n                <Col span={6}><div className={'grid-content light'}>col-6</div></Col>\n            </Row>\n        </div>,\n        mountNode\n    );"}),l.a.createElement("h2",null,"Flex垂直布局"),l.a.createElement("p",null,"flex子元素垂直对齐。"),l.a.createElement("div",{className:"detail-box wrap-bg"},l.a.createElement(c.r,{type:"flex",justify:"center",align:"top"},l.a.createElement(c.f,{span:4},l.a.createElement("div",{className:"grid-content light height-100"},"col-4")),l.a.createElement(c.f,{span:4},l.a.createElement("div",{className:"grid-content dark height-50"},"col-4")),l.a.createElement(c.f,{span:4},l.a.createElement("div",{className:"grid-content light height-120"},"col-4")),l.a.createElement(c.f,{span:4},l.a.createElement("div",{className:"grid-content dark height-80"},"col-4"))),l.a.createElement(c.r,{type:"flex",justify:"space-around",align:"middle"},l.a.createElement(c.f,{span:4},l.a.createElement("div",{className:"grid-content light height-100"},"col-4")),l.a.createElement(c.f,{span:4},l.a.createElement("div",{className:"grid-content dark height-50"},"col-4")),l.a.createElement(c.f,{span:4},l.a.createElement("div",{className:"grid-content light height-120"},"col-4")),l.a.createElement(c.f,{span:4},l.a.createElement("div",{className:"grid-content dark height-80"},"col-4"))),l.a.createElement(c.r,{type:"flex",justify:"center",align:"bottom"},l.a.createElement(c.f,{span:4},l.a.createElement("div",{className:"grid-content light height-100"},"col-4")),l.a.createElement(c.f,{span:4},l.a.createElement("div",{className:"grid-content dark height-50"},"col-4")),l.a.createElement(c.f,{span:4},l.a.createElement("div",{className:"grid-content light height-120"},"col-4")),l.a.createElement(c.f,{span:4},l.a.createElement("div",{className:"grid-content dark height-80"},"col-4")))),l.a.createElement(o.d,{code:"    import { Row, Col } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <div>\n            <Row type={'flex'} justify={'center'} align={'top'}>\n                <Col span={4}><div className={'grid-content light height-100'}>col-4</div></Col>\n                <Col span={4}><div className={'grid-content dark height-50'}>col-4</div></Col>\n                <Col span={4}><div className={'grid-content light height-120'}>col-4</div></Col>\n                <Col span={4}><div className={'grid-content dark height-80'}>col-4</div></Col>\n            </Row>\n            <Row type={'flex'} justify={'space-around'} align={'middle'}>\n                <Col span={4}><div className={'grid-content light height-100'}>col-4</div></Col>\n                <Col span={4}><div className={'grid-content dark height-50'}>col-4</div></Col>\n                <Col span={4}><div className={'grid-content light height-120'}>col-4</div></Col>\n                <Col span={4}><div className={'grid-content dark height-80'}>col-4</div></Col>\n            </Row>\n            <Row type={'flex'} justify={'center'} align={'bottom'}>\n                <Col span={4}><div className={'grid-content light height-100'}>col-4</div></Col>\n                <Col span={4}><div className={'grid-content dark height-50'}>col-4</div></Col>\n                <Col span={4}><div className={'grid-content light height-120'}>col-4</div></Col>\n                <Col span={4}><div className={'grid-content dark height-80'}>col-4</div></Col>\n            </Row>\n        </div>,\n        mountNode\n    );"}),l.a.createElement("h2",null,"Flex排序"),l.a.createElement("p",null,"通过 flex 布局的 order 来改变元素的排序。"),l.a.createElement("div",{className:"detail-box"},l.a.createElement(c.r,{type:"flex"},l.a.createElement(c.f,{span:6,order:4},l.a.createElement("div",{className:"grid-content light"},"1 col-order-4")),l.a.createElement(c.f,{span:6,order:3},l.a.createElement("div",{className:"grid-content light"},"2 col-order-3")),l.a.createElement(c.f,{span:6,order:2},l.a.createElement("div",{className:"grid-content light"},"3 col-order-2")),l.a.createElement(c.f,{span:6,order:1},l.a.createElement("div",{className:"grid-content light"},"4 col-order-1")))),l.a.createElement(o.d,{code:"    import { Row, Col } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <Row type={'flex'}>\n            <Col span={6} order={4}><div className={'grid-content light'}>1 col-order-4</div></Col>\n            <Col span={6} order={3}><div className={'grid-content light'}>2 col-order-3</div></Col>\n            <Col span={6} order={2}><div className={'grid-content light'}>3 col-order-2</div></Col>\n            <Col span={6} order={1}><div className={'grid-content light'}>4 col-order-1</div></Col>\n        </Row>,\n        mountNode\n    );"}),l.a.createElement("h2",null,"响应式布局"),l.a.createElement("p",null,"参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。"),l.a.createElement("div",{className:"detail-box"},l.a.createElement(c.r,{type:"flex"},l.a.createElement(c.f,{xs:8,sm:6,md:4,lg:3,xl:1},l.a.createElement("div",{className:"grid-content light"},"col")),l.a.createElement(c.f,{xs:4,sm:6,md:8,lg:9,xl:11},l.a.createElement("div",{className:"grid-content dark"},"col")),l.a.createElement(c.f,{xs:4,sm:6,md:8,lg:9,xl:11},l.a.createElement("div",{className:"grid-content light"},"col")),l.a.createElement(c.f,{xs:8,sm:6,md:4,lg:3,xl:1},l.a.createElement("div",{className:"grid-content dark"},"col")))),l.a.createElement(o.d,{code:"    import { Row, Col } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <Row type={'flex'}>\n            <Col xs={8} sm={6} md={4} lg={3} xl={1}><div className={'grid-content light'}>col</div></Col>\n            <Col xs={4} sm={6} md={8} lg={9} xl={11}><div className={'grid-content dark'}>col</div></Col>\n            <Col xs={4} sm={6} md={8} lg={9} xl={11}><div className={'grid-content light'}>col</div></Col>\n            <Col xs={8} sm={6} md={4} lg={3} xl={1}><div className={'grid-content dark'}>col</div></Col>\n        </Row>,\n        mountNode\n    );"}),l.a.createElement("h2",null,"其他属性的响应式"),l.a.createElement("p",null,"span、pull、push、offset、order 属性可以通过内嵌到 xs sm md lg xl xxl 属性中来使用。"),l.a.createElement("p",null,"其中 xs = ",6," 相当于 ","xs = {{ span: 6 }}"),l.a.createElement("div",{className:"detail-box"},l.a.createElement(c.r,{type:"flex"},l.a.createElement(c.f,{xs:{span:5,offset:1},lg:{span:6,offset:2}},l.a.createElement("div",{className:"grid-content light"},"col")),l.a.createElement(c.f,{xs:{span:11,offset:1},lg:{span:6,offset:2}},l.a.createElement("div",{className:"grid-content dark"},"col")),l.a.createElement(c.f,{xs:{span:5,offset:1},lg:{span:6,offset:2}},l.a.createElement("div",{className:"grid-content light"},"col")))),l.a.createElement(o.d,{code:"    import { Row, Col } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <Row type={'flex'}>\n            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}><div className={'grid-content light'}>col</div></Col>\n            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}><div className={'grid-content dark'}>col</div></Col>\n            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}><div className={'grid-content light'}>col</div></Col>\n        </Row>,\n        mountNode\n    );"}),l.a.createElement(o.a,{title:"Row",propsList:s}),l.a.createElement(o.a,{title:"Col",propsList:r}))}}}]);
//# sourceMappingURL=group-grid-382770cac2f2a6db479a.js.map