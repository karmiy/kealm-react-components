(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{501:function(e,a,t){"use strict";t.r(a);var n=t(22),l=t.n(n),o=t(54),c=t.n(o),r=t(7),g=t.n(r),f=t(27),s=t.n(f),m=t(13),u=t.n(m),i=t(8),T=t.n(i),p=t(0),d=t.n(p),E=t(147),C=t(15),b=t(24),y=[{param:"type",des:"类型",type:"string",option:"success / info / warning / danger",default:"--"},{param:"color",des:"背景色",type:"string",option:"--",default:"--"},{param:"font",des:"字体色",type:"string",option:"--",default:"--"},{param:"closable",des:"是否可关闭",type:"boolean",option:"--",default:"false"},{param:"effect",des:"主题",type:"string",option:"dark / light / plain",default:"light"},{param:"size",des:"标签尺寸",type:"string",option:"large / small",default:"--"}],x=[{name:"onClose",des:"关闭 Tag 时触发的事件",callback:"(e: Event, tag) => void"}];a.default=function(){var e=Object(p.useState)(""),a=T()(e,2),t=a[0],n=a[1],o=Object(p.useState)(["Tag1"]),r=T()(o,2),f=r[0],m=r[1],i=Object(p.useState)(!1),w=T()(i,2),k=w[0],v=w[1],R=Object(p.useCallback)((function(e,a){m(u()(f).call(f,(function(e){return a!==e})))}),[f]),z=Object(p.useCallback)((function(e){var a;m(g()(a=[]).call(a,s()(f),[e]))}),[f]),S=Object(p.useCallback)((function(e){c()(f).call(f,(function(a){return a===e}))?v(!1):(v(!1),z(e))}),[f,z]);return d.a.createElement("div",{className:"page-box"},d.a.createElement("h1",null,"Tag 标签"),d.a.createElement("p",null,"用于标记和选择。"),d.a.createElement("h2",null,"基本用法"),d.a.createElement("p",null,"由 type 属性来选择 Tag 的类型。"),Object(p.useMemo)((function(){return d.a.createElement("div",{className:"detail-box"},d.a.createElement(E.r,{gutter:16},d.a.createElement(E.f,null,d.a.createElement(E.x,null,"Tag1")),d.a.createElement(E.f,null,d.a.createElement(E.x,{type:"success"},"Tag2")),d.a.createElement(E.f,null,d.a.createElement(E.x,{type:"info"},"Tag3")),d.a.createElement(E.f,null,d.a.createElement(E.x,{type:"warning"},"Tag4")),d.a.createElement(E.f,null,d.a.createElement(E.x,{type:"danger"},"Tag5"))))}),[]),d.a.createElement(b.d,{code:"    import { Tag, Row, Col } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <Row gutter={16}>\n            <Col><Tag>Tag1</Tag></Col>\n            <Col><Tag type={'success'}>Tag2</Tag></Col>\n            <Col><Tag type={'info'}>Tag3</Tag></Col>\n            <Col><Tag type={'warning'}>Tag4</Tag></Col>\n            <Col><Tag type={'danger'}>Tag5</Tag></Col>\n        </Row>,\n        mountNode\n    );"}),d.a.createElement("h2",null,"不同主题"),d.a.createElement("p",null,"由 type 属性来选择 Tag 的类型。"),Object(p.useMemo)((function(){return d.a.createElement("div",{className:"detail-box"},d.a.createElement(E.r,{gutter:16},d.a.createElement(E.f,null,d.a.createElement(E.x,{effect:"dark"},"Tag1")),d.a.createElement(E.f,null,d.a.createElement(E.x,{effect:"dark",type:"success"},"Tag2")),d.a.createElement(E.f,null,d.a.createElement(E.x,{effect:"dark",type:"info"},"Tag3")),d.a.createElement(E.f,null,d.a.createElement(E.x,{effect:"dark",type:"warning"},"Tag4")),d.a.createElement(E.f,null,d.a.createElement(E.x,{effect:"dark",type:"danger"},"Tag5"))),d.a.createElement(E.r,{gutter:16},d.a.createElement(E.f,null,d.a.createElement(E.x,{effect:"plain"},"Tag1")),d.a.createElement(E.f,null,d.a.createElement(E.x,{effect:"plain",type:"success"},"Tag2")),d.a.createElement(E.f,null,d.a.createElement(E.x,{effect:"plain",type:"info"},"Tag3")),d.a.createElement(E.f,null,d.a.createElement(E.x,{effect:"plain",type:"warning"},"Tag4")),d.a.createElement(E.f,null,d.a.createElement(E.x,{effect:"plain",type:"danger"},"Tag5"))))}),[]),d.a.createElement(b.d,{code:"    import { Tag, Row, Col } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <div>\n            <Row gutter={16}>\n                <Col><Tag effect={'dark'}>Tag1</Tag></Col>\n                <Col><Tag effect={'dark'} type={'success'}>Tag2</Tag></Col>\n                <Col><Tag effect={'dark'} type={'info'}>Tag3</Tag></Col>\n                <Col><Tag effect={'dark'} type={'warning'}>Tag4</Tag></Col>\n                <Col><Tag effect={'dark'} type={'danger'}>Tag5</Tag></Col>\n            </Row>\n            <Row gutter={16}>\n                <Col><Tag effect={'plain'}>Tag1</Tag></Col>\n                <Col><Tag effect={'plain'} type={'success'}>Tag2</Tag></Col>\n                <Col><Tag effect={'plain'} type={'info'}>Tag3</Tag></Col>\n                <Col><Tag effect={'plain'} type={'warning'}>Tag4</Tag></Col>\n                <Col><Tag effect={'plain'} type={'danger'}>Tag5</Tag></Col>\n            </Row>\n        </div>,\n        mountNode\n    );"}),d.a.createElement("h2",null,"不同尺寸"),d.a.createElement("p",null,"Tag 组件提供除了三种尺寸，可以在不同场景下选择合适的按钮尺寸。"),Object(p.useMemo)((function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"detail-box"},d.a.createElement(E.q.Group,{value:t,onChange:function(e){return n(e.target.value)}},d.a.createElement(E.q,{value:"large"},"Large"),d.a.createElement(E.q,{value:""},"Default"),d.a.createElement(E.q,{value:"small"},"Small"))),d.a.createElement("div",{className:"detail-box"},d.a.createElement(E.r,{gutter:16},d.a.createElement(E.f,null,d.a.createElement(E.x,{size:t||void 0,effect:"plain"},"Tag Size")),d.a.createElement(E.f,null,d.a.createElement(E.x,{size:t||void 0},"Tag Size")),d.a.createElement(E.f,null,d.a.createElement(E.x,{size:t||void 0,effect:"dark"},"Tag Size")))))}),[t]),d.a.createElement(b.d,{code:"    import { useState } from 'react';\n    import { Tag, Row, Col, Radio } from \"@kealm/react-components\";\n    \n    function Demo() {\n        const [size, setSize] = useState('');\n        \n        return (\n            <div>\n                <div className=\"detail-box\">\n                    <Radio.Group value={size} onChange={e => setSize(e.target.value)}>\n                        <Radio value={'large'}>Large</Radio>\n                        <Radio value={''}>Default</Radio>\n                        <Radio value={'small'}>Small</Radio>\n                    </Radio.Group>\n                </div>\n                <div className=\"detail-box\">\n                    <Row gutter={16}>\n                        <Col><Tag size={size || undefined} effect={'plain'}>Tag Size</Tag></Col>\n                        <Col><Tag size={size || undefined}>Tag Size</Tag></Col>\n                        <Col><Tag size={size || undefined} effect={'dark'}>Tag Size</Tag></Col>\n                    </Row>\n                </div>\n            </div>\n        )\n    }"}),d.a.createElement("h2",null,"自定义背景色"),d.a.createElement("p",null,"可以通过 color 属性来自定义背景色，font 属性自定义字体色。"),Object(p.useMemo)((function(){return d.a.createElement("div",{className:"detail-box"},d.a.createElement(E.r,{gutter:16},d.a.createElement(E.f,null,d.a.createElement(E.x,{color:"#ff5b09",font:"#fff"},"Tag")),d.a.createElement(E.f,null,d.a.createElement(E.x,{color:"#13c2c2",font:"#fff"},"Tag")),d.a.createElement(E.f,null,d.a.createElement(E.x,{color:"#30Ba40",font:"#fff"},"Tag")),d.a.createElement(E.f,null,d.a.createElement(E.x,{color:"#722ed1",font:"#fff"},"Tag")),d.a.createElement(E.f,null,d.a.createElement(E.x,{color:"#eb2f96",font:"#fff"},"Tag"))))}),[]),d.a.createElement(b.d,{code:"    import { Tag, Row, Col } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <Row gutter={16}>\n            <Col><Tag color={'#ff5b09'} font={'#fff'}>Tag</Tag></Col>\n            <Col><Tag color={'#13c2c2'} font={'#fff'}>Tag</Tag></Col>\n            <Col><Tag color={'#30Ba40'} font={'#fff'}>Tag</Tag></Col>\n            <Col><Tag color={'#722ed1'} font={'#fff'}>Tag</Tag></Col>\n            <Col><Tag color={'#eb2f96'} font={'#fff'}>Tag</Tag></Col>\n        </Row>,\n        mountNode\n    );"}),d.a.createElement("h2",null,"可移除标签"),d.a.createElement("p",null,"设置 closable 属性可以定义一个标签是否可移除。"),Object(p.useMemo)((function(){return d.a.createElement("div",{className:"detail-box"},d.a.createElement(E.r,{gutter:16},d.a.createElement(E.f,null,d.a.createElement(E.x,{closable:!0},"Tag1")),d.a.createElement(E.f,null,d.a.createElement(E.x,{type:"success",closable:!0},"Tag2")),d.a.createElement(E.f,null,d.a.createElement(E.x,{type:"info",closable:!0},"Tag3")),d.a.createElement(E.f,null,d.a.createElement(E.x,{type:"warning",closable:!0},"Tag4")),d.a.createElement(E.f,null,d.a.createElement(E.x,{type:"danger",closable:!0},"Tag5"))),d.a.createElement(E.r,{gutter:16},d.a.createElement(E.f,null,d.a.createElement(E.x,{effect:"dark",closable:!0},"Tag1")),d.a.createElement(E.f,null,d.a.createElement(E.x,{effect:"dark",type:"success",closable:!0},"Tag2")),d.a.createElement(E.f,null,d.a.createElement(E.x,{effect:"dark",type:"info",closable:!0},"Tag3")),d.a.createElement(E.f,null,d.a.createElement(E.x,{effect:"dark",type:"warning",closable:!0},"Tag4")),d.a.createElement(E.f,null,d.a.createElement(E.x,{effect:"dark",type:"danger",closable:!0},"Tag5"))),d.a.createElement(E.r,{gutter:16},d.a.createElement(E.f,null,d.a.createElement(E.x,{effect:"plain",closable:!0},"Tag1")),d.a.createElement(E.f,null,d.a.createElement(E.x,{effect:"plain",type:"success",closable:!0},"Tag2")),d.a.createElement(E.f,null,d.a.createElement(E.x,{effect:"plain",type:"info",closable:!0},"Tag3")),d.a.createElement(E.f,null,d.a.createElement(E.x,{effect:"plain",type:"warning",closable:!0},"Tag4")),d.a.createElement(E.f,null,d.a.createElement(E.x,{effect:"plain",type:"danger",closable:!0},"Tag5"))))}),[]),d.a.createElement(b.d,{code:"    import { Tag, Row, Col } from \"@kealm/react-components\";\n    \n    ReactDom.render(\n        <div>\n            <Row gutter={16}>\n                <Col><Tag closable>Tag1</Tag></Col>\n                <Col><Tag type={'success'} closable>Tag2</Tag></Col>\n                <Col><Tag type={'info'} closable>Tag3</Tag></Col>\n                <Col><Tag type={'warning'} closable>Tag4</Tag></Col>\n                <Col><Tag type={'danger'} closable>Tag5</Tag></Col>\n            </Row>\n            <Row gutter={16}>\n                <Col><Tag effect={'dark'} closable>Tag1</Tag></Col>\n                <Col><Tag effect={'dark'} type={'success'} closable>Tag2</Tag></Col>\n                <Col><Tag effect={'dark'} type={'info'} closable>Tag3</Tag></Col>\n                <Col><Tag effect={'dark'} type={'warning'} closable>Tag4</Tag></Col>\n                <Col><Tag effect={'dark'} type={'danger'} closable>Tag5</Tag></Col>\n            </Row>\n            <Row gutter={16}>\n                <Col><Tag effect={'plain'} closable>Tag1</Tag></Col>\n                <Col><Tag effect={'plain'} type={'success'} closable>Tag2</Tag></Col>\n                <Col><Tag effect={'plain'} type={'info'} closable>Tag3</Tag></Col>\n                <Col><Tag effect={'plain'} type={'warning'} closable>Tag4</Tag></Col>\n                <Col><Tag effect={'plain'} type={'danger'} closable>Tag5</Tag></Col>\n            </Row>\n        </div>,\n        mountNode\n    );"}),d.a.createElement("h2",null,"动态编辑标签"),d.a.createElement("p",null,"动态编辑标签可以通过点击标签关闭按钮后触发的 onClose 事件来实现。"),Object(p.useMemo)((function(){return d.a.createElement("div",{className:"detail-box"},d.a.createElement(E.r,null,d.a.createElement(E.f,null,k?d.a.createElement(E.m,{style:{width:"150px"},onPressEnter:S,autoFocus:!0}):d.a.createElement(E.c,{plain:!0,icon:"plus",onClick:function(){return v(!0)}},"New Tag"))),d.a.createElement(E.r,{gutter:16},d.a.createElement(C.c,{transitionName:"km-zoom-center"},l()(f).call(f,(function(e){return d.a.createElement(E.f,{key:e},d.a.createElement(E.x,{closable:!0,onClose:R},e))})))))}),[k,S,f,R]),d.a.createElement(b.d,{code:"    import { useState, useCallback } from 'react';\n    import { Tag, Row, Col, Button, Input } from \"@kealm/react-components\";\n    import { Motion } from '@kealm/react-components-utils';\n    \n    const [tags, setTags] = useState(['Tag1']);\n    const [inputVisible, setInputVisible] = useState(false);\n\n    const onClose = useCallback((_, tag) => {\n        setTags(tags.filter(t => tag !== t));\n    }, [tags]);\n\n    const addTag = useCallback((value) => {\n        setTags([...tags, value]);\n    }, [tags]);\n\n    const onPressEnter = useCallback(value => {\n        const tag = tags.find(tag => tag === value);\n        if(tag) {\n            setInputVisible(false);\n            return;\n        }\n        setInputVisible(false);\n        addTag(value);\n    }, [tags, addTag]);\n    \n    function Demo() {\n        const [size, setSize] = useState('');\n        \n        return (\n            <div>\n                <Row>\n                    <Col>\n                        {\n                            inputVisible ?\n                                <Input style={{width: '150px'}} onPressEnter={onPressEnter} autoFocus />\n                                :\n                                <Button plain icon='plus' onClick={() => setInputVisible(true)}>New Tag</Button>\n                        }\n                    </Col>\n                </Row>\n                <Row gutter={16}>\n                    <Motion transitionName={'km-zoom-center'}>\n                        {tags.map(tag => <Col key={tag}><Tag closable onClose={onClose}>{tag}</Tag></Col>)}\n                    </Motion>\n                </Row>\n            </div>\n        )\n    }"}),d.a.createElement(b.a,{title:"Tag",propsList:y,eventsList:x}))}}}]);
//# sourceMappingURL=group-tag-1e31393d1f87387df454.js.map