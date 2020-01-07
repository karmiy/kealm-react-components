(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{639:function(e,t,a){var d,n,l,r=a(0);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,n=[t,a(2),a(161),a(674),a(675),a(676),a(22),a(677),a(678)],void 0===(l="function"==typeof(d=function(e,t,d,n,l,i,o,c,m){"use strict";var C=a(1);r(e,"__esModule",{value:!0}),e.default=void 0,t=C(t),n=C(n),l=C(l),i=C(i);var s=function(){return t.default.createElement("div",{className:"page-box"},t.default.createElement("h1",null,"Card 卡片"),t.default.createElement("p",null,"将信息聚合在卡片容器中展示。"),t.default.createElement("h2",null,"基本用法"),t.default.createElement("p",null,"包含标题，内容和操作。"),t.default.createElement("div",{className:"detail-box"},t.default.createElement(d.Card,{title:"Default size card",extra:t.default.createElement("a",{href:"#"},"More")},t.default.createElement("div",null,"Card content"),t.default.createElement("div",null,"Card content"),t.default.createElement("div",null,"Card content"))),t.default.createElement("div",{className:"detail-box"},t.default.createElement(d.Card,{title:"Small size card",extra:t.default.createElement("a",{href:"#"},"More"),size:"small"},t.default.createElement("div",null,"Card content"),t.default.createElement("div",null,"Card content"),t.default.createElement("div",null,"Card content"))),t.default.createElement(o.HighLight,{code:m.CodeBasic}),t.default.createElement("h2",null,"无边框"),t.default.createElement("p",null,"在灰色背景上使用无边框的卡片。"),t.default.createElement("div",{className:"detail-box"},t.default.createElement("div",{style:{background:"#ECECEC",padding:"30px"}},t.default.createElement(d.Card,{title:"Card Title",bordered:!1},t.default.createElement("div",null,"Card content"),t.default.createElement("div",null,"Card content"),t.default.createElement("div",null,"Card content")))),t.default.createElement(o.HighLight,{code:m.CodeBordered}),t.default.createElement("h2",null,"简洁卡片"),t.default.createElement("p",null,"只包含内容区域。"),t.default.createElement("div",{className:"detail-box"},t.default.createElement(d.Card,null,t.default.createElement("div",null,"Card content"),t.default.createElement("div",null,"Card content"),t.default.createElement("div",null,"Card content"))),t.default.createElement(o.HighLight,{code:m.CodeSimple}),t.default.createElement("h2",null,"带图片"),t.default.createElement("p",null,"可以利用 Card.Meta 支持更灵活的内容。"),t.default.createElement("div",{className:"detail-box"},t.default.createElement(d.Card,{cover:t.default.createElement("img",{src:n.default,alt:"pig"}),shadow:"hover"},t.default.createElement(d.Card.Meta,{title:"Hawk",desc:"This is an unusual pig"}))),t.default.createElement(o.HighLight,{code:m.CodeImg}),t.default.createElement("h2",null,"卡片阴影"),t.default.createElement("p",null,"可对阴影的显示进行配置。"),t.default.createElement("div",{className:"detail-box"},t.default.createElement(d.Row,{gutter:16},t.default.createElement(d.Col,null,t.default.createElement(d.Card,{title:"Card Title",extra:t.default.createElement("a",{href:"#"},"More")},t.default.createElement("div",null,"Card content"),t.default.createElement("div",null,"Card content"),t.default.createElement("div",null,"Card content"))),t.default.createElement(d.Col,null,t.default.createElement(d.Card,{shadow:"hover",title:"Card Title",extra:t.default.createElement("a",{href:"#"},"More")},t.default.createElement("div",null,"Card content"),t.default.createElement("div",null,"Card content"),t.default.createElement("div",null,"Card content"))),t.default.createElement(d.Col,null,t.default.createElement(d.Card,{shadow:"always",title:"Card Title",extra:t.default.createElement("a",{href:"#"},"More")},t.default.createElement("div",null,"Card content"),t.default.createElement("div",null,"Card content"),t.default.createElement("div",null,"Card content"))))),t.default.createElement(o.HighLight,{code:m.CodeShadow}),t.default.createElement("h2",null,"栅格卡片"),t.default.createElement("p",null,"在系统概览页面常常和栅格进行配合。"),t.default.createElement("div",{className:"detail-box"},t.default.createElement("div",{style:{background:"#ECECEC",padding:"30px"}},t.default.createElement(d.Row,{gutter:16},t.default.createElement(d.Col,{span:8},t.default.createElement(d.Card,{title:"Card Title",bordered:!1},t.default.createElement("div",null,"Card content"))),t.default.createElement(d.Col,{span:8},t.default.createElement(d.Card,{title:"Card Title",bordered:!1},t.default.createElement("div",null,"Card content"))),t.default.createElement(d.Col,{span:8},t.default.createElement(d.Card,{title:"Card Title",bordered:!1},t.default.createElement("div",null,"Card content")))))),t.default.createElement(o.HighLight,{code:m.CodeRow}),t.default.createElement("h2",null,"网格型内嵌卡片"),t.default.createElement("p",null,"一种常见的卡片内容区隔模式。"),t.default.createElement("div",{className:"detail-box"},t.default.createElement(d.Card,{title:"Card Title",style:{width:"800px"}},t.default.createElement(d.Card.Grid,{style:{width:"25%"}},"Content"),t.default.createElement(d.Card.Grid,{style:{width:"25%"},hoverable:!1},"Content"),t.default.createElement(d.Card.Grid,{style:{width:"25%"}},"Content"),t.default.createElement(d.Card.Grid,{style:{width:"25%"}},"Content"),t.default.createElement(d.Card.Grid,{style:{width:"25%"}},"Content"),t.default.createElement(d.Card.Grid,{style:{width:"25%"}},"Content"),t.default.createElement(d.Card.Grid,{style:{width:"25%"}},"Content"))),t.default.createElement(o.HighLight,{code:m.CodeGrid}),t.default.createElement("h2",null,"内部卡片"),t.default.createElement("p",null,"可以放在普通卡片内部，展示多层级结构的信息。"),t.default.createElement("div",{className:"detail-box"},t.default.createElement(d.Card,{title:"Card Title",style:{width:"800px"}},t.default.createElement("p",{style:{fontSize:14,color:"rgba(0, 0, 0, 0.85)",marginBottom:16,fontWeight:500}},"Group title"),t.default.createElement(d.Card,{type:"inner",title:"Inner Card title",extra:t.default.createElement("a",{href:"#"},"More")},"Inner Card content"),t.default.createElement(d.Card,{style:{marginTop:16},type:"inner",title:"Inner Card title",extra:t.default.createElement("a",{href:"#"},"More")},"Inner Card content"))),t.default.createElement(o.HighLight,{code:m.CodeInner}),t.default.createElement("h2",null,"支持更多配置内容"),t.default.createElement("p",null,"一种支持封面、头像、标题和描述信息的卡片。"),t.default.createElement("div",{className:"detail-box"},t.default.createElement(d.Card,{cover:t.default.createElement("img",{src:l.default,alt:"pig"}),actions:[t.default.createElement(d.Icon,{type:"config",key:"config"}),t.default.createElement(d.Icon,{type:"edit",key:"edit"}),t.default.createElement(d.Icon,{type:"ellipsis",key:"ellipsis"})]},t.default.createElement(d.Card.Meta,{avatar:t.default.createElement("div",{className:"card-avatar"},t.default.createElement("img",{src:i.default,alt:"pig"})),title:"Card title",desc:"This is the description"}))),t.default.createElement(o.HighLight,{code:m.CodeActions}),t.default.createElement(o.ApiTable,{title:"Card",propsList:c.cardProps}),t.default.createElement(o.ApiTable,{title:"Meta",propsList:c.cardMetaProps}),t.default.createElement(o.ApiTable,{title:"Grid",propsList:c.cardGridProps}))};e.default=s})?d.apply(t,n):d)||(e.exports=l)},674:function(e,t,a){e.exports=a.p+"images/hawk.png"},675:function(e,t){e.exports="data:image/png;base64,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"},676:function(e,t,a){e.exports=a.p+"images/qiaozhi.png"},677:function(e,t,a){var d,n,l,r=a(0);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,n=[t],void 0===(l="function"==typeof(d=function(e){"use strict";r(e,"__esModule",{value:!0}),e.cardGridProps=e.cardMetaProps=e.cardProps=void 0,e.cardProps=[{param:"size",des:"card 的尺寸",type:"string",option:"default / small",default:"default"},{param:"title",des:"卡片标题",type:"string / ReactNode",option:"--",default:"--"},{param:"extra",des:"卡片右上角的操作区域",type:"string / ReactNode",option:"--",default:"--"},{param:"cover",des:"卡片封面",type:"ReactNode",option:"--",default:"--"},{param:"bordered",des:"是否有边框",type:"boolean",option:"--",default:"true"},{param:"shadow",des:"设置阴影显示时机",type:"string",option:"always / hover / never",default:"never"},{param:"type",des:"卡片类型，可设置为 inner 或 不设置",type:"string",option:"--",default:"--"},{param:"actions",des:"卡片操作组，位置在卡片底部",type:"Array<ReactNode>",option:"--",default:"--"}],e.cardMetaProps=[{param:"title",des:"标题内容",type:"string / ReactNode",option:"--",default:"--"},{param:"desc",des:"描述内容",type:"string / ReactNode",option:"--",default:"--"},{param:"avatar",des:"头像/图标",type:"string / ReactNode",option:"--",default:"--"}],e.cardGridProps=[{param:"hoverable",des:"鼠标移过时可浮起",type:"boolean",option:"--",default:"true"},{param:"desc",des:"描述内容",type:"string / ReactNode",option:"--",default:"--"},{param:"avatar",des:"头像/图标",type:"string / ReactNode",option:"--",default:"--"}]})?d.apply(t,n):d)||(e.exports=l)},678:function(e,t,a){var d,n,l,r=a(0);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,n=[t],void 0===(l="function"==typeof(d=function(e){"use strict";r(e,"__esModule",{value:!0}),e.CodeActions=e.CodeInner=e.CodeGrid=e.CodeRow=e.CodeShadow=e.CodeImg=e.CodeSimple=e.CodeBordered=e.CodeBasic=void 0,e.CodeBasic="    import { Card } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <div>\n            <div className='detail-box'>\n                <Card title={'Default size card'} extra={<a href=\"#\">More</a>}>\n                    <div>Card content</div>\n                    <div>Card content</div>\n                    <div>Card content</div>\n                </Card>\n            </div>\n            <div className='detail-box'>\n                <Card title={'Small size card'} extra={<a href=\"#\">More</a>} size={'small'}>\n                    <div>Card content</div>\n                    <div>Card content</div>\n                    <div>Card content</div>\n                </Card>\n            </div>\n        <div/>,\n        mountNode\n    );",e.CodeBordered="    import { Card } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <div style={{ background: '#ECECEC', padding: '30px' }}>\n            <Card title={'Card Title'} bordered={false}>\n                <div>Card content</div>\n                <div>Card content</div>\n                <div>Card content</div>\n            </Card>\n        </div>,\n        mountNode\n    );",e.CodeSimple='    import { Card } from "@kealm/react-components";\n    \n    ReactDom.render(\n        <Card>\n            <div>Card content</div>\n            <div>Card content</div>\n            <div>Card content</div>\n        </Card>,\n        mountNode\n    );',e.CodeImg="    import { Card } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <Card cover={<img src={Hawk} alt=\"pig\"></img>} shadow={'hover'}>\n            <Card.Meta title={'Hawk'} desc={'This is an unusual pig'} />\n        </Card>,\n        mountNode\n    );",e.CodeShadow="    import { Card, Row, Col } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <Row gutter={16}>\n            <Col>\n                <Card title={'Card Title'} extra={<a href=\"#\">More</a>}>\n                    <div>Card content</div>\n                    <div>Card content</div>\n                    <div>Card content</div>\n                </Card>\n            </Col>\n            <Col>\n                <Card shadow={'hover'} title={'Card Title'} extra={<a href=\"#\">More</a>}>\n                    <div>Card content</div>\n                    <div>Card content</div>\n                    <div>Card content</div>\n                </Card>\n            </Col>\n            <Col>\n                <Card shadow={'always'}  title={'Card Title'} extra={<a href=\"#\">More</a>}>\n                    <div>Card content</div>\n                    <div>Card content</div>\n                    <div>Card content</div>\n                </Card>\n            </Col>\n        </Row>,\n        mountNode\n    );",e.CodeRow="    import { Card, Row, Col } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <div style={{ background: '#ECECEC', padding: '30px' }}>\n            <Row gutter={16}>\n                <Col span={8}>\n                    <Card title={'Card Title'} bordered={false}>\n                        <div>Card content</div>\n                    </Card>\n                </Col>\n                <Col span={8}>\n                    <Card title={'Card Title'} bordered={false}>\n                        <div>Card content</div>\n                    </Card>\n                </Col>\n                <Col span={8}>\n                    <Card title={'Card Title'} bordered={false}>\n                        <div>Card content</div>\n                    </Card>\n                </Col>\n            </Row>\n        </div>,\n        mountNode\n    );",e.CodeGrid="    import { Card } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <Card title={'Card Title'} style={{width:'800px'}}>\n            <Card.Grid style={{width: '25%'}}>Content</Card.Grid>\n            <Card.Grid style={{width: '25%'}} hoverable={false}>Content</Card.Grid>\n            <Card.Grid style={{width: '25%'}}>Content</Card.Grid>\n            <Card.Grid style={{width: '25%'}}>Content</Card.Grid>\n            <Card.Grid style={{width: '25%'}}>Content</Card.Grid>\n            <Card.Grid style={{width: '25%'}}>Content</Card.Grid>\n            <Card.Grid style={{width: '25%'}}>Content</Card.Grid>\n        </Card>,\n        mountNode\n    );",e.CodeInner='    import { Card } from "@kealm/react-components";\n    \n    ReactDom.render(\n        <Card title={\'Card Title\'} style={{width:\'800px\'}}>\n            <p style={{\n                    fontSize: 14,\n                    color: \'rgba(0, 0, 0, 0.85)\',\n                    marginBottom: 16,\n                    fontWeight: 500,\n                }}\n            >\n                Group title\n            </p>\n            <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>\n                Inner Card content\n            </Card>\n            <Card\n                style={{ marginTop: 16 }}\n                type="inner"\n                title="Inner Card title"\n                extra={<a href="#">More</a>}\n            >\n                Inner Card content\n            </Card>\n        </Card>,\n        mountNode\n    );',e.CodeActions="    import { Card } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <Card\n            cover={<img src={PeiQi} alt=\"pig\" /></img>}\n            actions={[\n                <Icon type={'config'} key={'config'} ></Icon>,\n                <Icon type={'edit'} key={'edit'} ></Icon>,\n                <Icon type={'ellipsis'} key={'ellipsis'} ></Icon>,\n            ]}\n        >\n            <Card.Meta\n                avatar={<div className={'card-avatar'}><img src={QiaoZhi} alt=\"pig\"></img></div>}\n                title=\"Card title\"\n                desc=\"This is the description\"\n            />\n        </Card>,\n        mountNode\n    );"})?d.apply(t,n):d)||(e.exports=l)}}]);
//# sourceMappingURL=group-card-132fc7f9b5266af09dfc.js.map