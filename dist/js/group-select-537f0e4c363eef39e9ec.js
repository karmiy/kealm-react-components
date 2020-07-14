(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{481:function(e,a,l){"use strict";l.r(a);var t=l(516),n=l.n(t),o=l(22),r=l.n(o),i=l(26),p=l.n(i),c=l(13),u=l.n(c),m=l(41),s=l.n(m),b=l(8),v=l.n(b),d=l(0),O=l.n(d),y=l(147),E=l(24),f=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],g=l(4),K=[{param:"defaultValue",des:"指定默认选中的条目",type:"string / string[] / number / number[] / labeledValue / labeledValue[]",option:"--",default:"--"},{param:"value",des:"选中值",type:"string / string[] / number / number[] / labeledValue / labeledValue[]",option:"--",default:"--"},{param:"defaultVisible",des:"默认是否显示",type:"boolean",option:"--",default:"false"},{param:"visible",des:"用于手动控制浮层显示隐藏",type:"boolean",option:"--",default:"false"},{param:"placeholder",des:"选择框默认文字",type:"string",option:"--",default:"请选择"},{param:"allowClear",des:"是否可清除选项",type:"boolean",option:"--",default:"false"},{param:"disabled",des:"是否禁用",type:"boolean",option:"--",default:"false"},{param:"multiple",des:"是否开启多选模式",type:"boolean",option:"--",default:"false"},{param:"collapseTags",des:"多选时是否将选中值按文字的形式展示",type:"boolean",option:"--",default:"false"},{param:"emptyFilterContent",des:"当过滤后的列表数据为空时显示的文本",type:"string / ReactNode",option:"--",default:"无匹配内容"},{param:"emptyContent",des:"下拉选择器可用选项为空时显示的文本",type:"string / ReactNode",option:"--",default:"无数据"},{param:"filterable",des:"是否可搜索",type:"boolean",option:"--",default:"false"},{param:"filterMethod",des:"搜索过滤方法",type:"(value, label, inputValue) => boolean",option:"--",default:"(value, label, inputValue) => label.includes(inputValue)"},{param:"loading",des:"是否正在从远程获取数据",type:"boolean",option:"--",default:"false"},{param:"loadingContent",des:"加载时显示的文本",type:"string / ReactNode",option:"--",default:"<Icon type={'loading'} /> 加载中"},{param:"remote",des:"是否为远程搜索",type:"boolean",option:"--",default:"false"},{param:"labelInValue",des:"是否把每个选项的 label 包装到 value 中，将会在 onChange 中获得 labeledValue 对象",type:"boolean",option:"--",default:"false"},{param:"pickerClassName",des:"选择器类名，作用于触发框，若需要给弹出框添加类名可用 className",type:"string",option:"--",default:"--"},{param:"pickerStyle",des:"选择器样式，作用于触发框，若需要给弹出框添加样式可用 style",type:"object",option:"--",default:"--"},{param:"maxRows",des:"最大显示的列表条数",type:"number",option:"--",default:"6"},{param:"virtualScroll",des:"是否开启列表性能优化，通常在列表数据量过多影响性能时开启，不支持分组",type:"boolean",option:"--",default:"false"}],k=[{name:"onChange",des:"选中 option 时触发",callback:"(value / value[] / option / options[])"},{name:"onVisibleChange",des:"显示隐藏的回调",callback:"(visible) => void"},{name:"onRemote",des:"远程搜索方法，开启 remote 配置后，在输入框编辑时触发",callback:"(inputValue) => void"}],w=[{param:"value",des:"选中值",type:"string / number",option:"--",default:"--"},{param:"label",des:"选项绑定文本，用于在选择时呈现于输入框中",type:"string",option:"--",default:"--"},{param:"disabled",des:"是否禁用",type:"boolean",option:"--",default:"false"}],S=[{param:"label",des:"分组的组名",type:"string",option:"--",default:"--"}],G=y.s.Option,h=y.s.Group;a.default=function(){var e=Object(d.useState)("1"),a=v()(e,2),l=a[0],t=a[1],o=Object(d.useState)([]),i=v()(o,2),c=i[0],m=i[1],b=Object(d.useState)(!1),H=v()(b,2),P=H[0],C=H[1],N=Object(d.useCallback)((function(e){return t(e)}),[]),R=Object(g.h)((function(e){e?(C(!0),s()((function(){m(u()(f).call(f,(function(a){return p()(a).call(a,e)}))),C(!1)}),500)):m([])}),500,{leading:!1});return O.a.createElement("div",{className:"page-box"},O.a.createElement("h1",null,"Select 选择器"),O.a.createElement("p",null,"当选项过多时，使用下拉菜单展示并选择内容。"),O.a.createElement("h2",null,"基本用法"),O.a.createElement("p",null,"适用广泛的基础单选。"),Object(d.useMemo)((function(){return O.a.createElement("div",{className:"detail-box"},O.a.createElement(y.s,null,O.a.createElement(G,{value:"1",label:"Karmiy"},"Karmiy"),O.a.createElement(G,{value:"2",label:"Karloy"},"Karloy"),O.a.createElement(G,{value:"3",label:"Peppa"},"Peppa"),O.a.createElement(G,{value:"4",label:"George"},"George"),O.a.createElement(G,{value:"5",label:"Hawk"},"Hawk")))}),[]),O.a.createElement(E.d,{code:"    import { Select } from \"@kealm/react-components\";\n    \n    const { Option } = Select;\n    \n    ReactDom.render(\n        <Select>\n            <Option value={'1'} label={'Karmiy'}>Karmiy</Option>\n            <Option value={'2'} label={'Karloy'}>Karloy</Option>\n            <Option value={'3'} label={'Peppa'}>Peppa</Option>\n            <Option value={'4'} label={'George'}>George</Option>\n            <Option value={'5'} label={'Hawk'}>Hawk</Option>\n        </Select>,\n        mountNode\n    );"}),O.a.createElement("h2",null,"受控选择器"),O.a.createElement("p",null,"通过 value 与 onChange 配合，手动控制选择行为。"),Object(d.useMemo)((function(){return O.a.createElement("div",{className:"detail-box"},O.a.createElement(y.s,{value:l,onChange:N},O.a.createElement(G,{value:"1",label:"Karmiy"},"Karmiy"),O.a.createElement(G,{value:"2",label:"Karloy"},"Karloy"),O.a.createElement(G,{value:"3",label:"Peppa"},"Peppa"),O.a.createElement(G,{value:"4",label:"George"},"George"),O.a.createElement(G,{value:"5",label:"Hawk"},"Hawk")))}),[l]),O.a.createElement(E.d,{code:"    import { useState, useCallback } from 'react';\n    import { Select } from \"@kealm/react-components\";\n    \n    const { Option } = Select;\n    \n    function Demo() {\n        const [value, setValue] = useState('1');\n        const onChange = useCallback(v => setValue(v), []);\n        \n        return (\n            <Select value={value} onChange={onChange}>\n                <Option value={'1'} label={'Karmiy'}>Karmiy</Option>\n                <Option value={'2'} label={'Karloy'}>Karloy</Option>\n                <Option value={'3'} label={'Peppa'}>Peppa</Option>\n                <Option value={'4'} label={'George'}>George</Option>\n                <Option value={'5'} label={'Hawk'}>Hawk</Option>\n            </Select>\n        )\n    }"}),O.a.createElement("h2",null,"禁用选项"),O.a.createElement("p",null,"在 Option 上设定 disabled 值为 true，即可禁用该选项。"),Object(d.useMemo)((function(){return O.a.createElement("div",{className:"detail-box"},O.a.createElement(y.s,null,O.a.createElement(G,{value:"1",label:"Karmiy"},"Karmiy"),O.a.createElement(G,{value:"2",label:"Karloy"},"Karloy"),O.a.createElement(G,{value:"3",label:"Peppa",disabled:!0},"Peppa"),O.a.createElement(G,{value:"4",label:"George",disabled:!0},"George"),O.a.createElement(G,{value:"5",label:"Hawk"},"Hawk")))}),[]),O.a.createElement(E.d,{code:"    import { Select } from \"@kealm/react-components\";\n    \n    const { Option } = Select;\n    \n    ReactDom.render(\n        <Select>\n            <Option value={'1'} label={'Karmiy'}>Karmiy</Option>\n            <Option value={'2'} label={'Karloy'}>Karloy</Option>\n            <Option value={'3'} label={'Peppa'} disabled>Peppa</Option>\n            <Option value={'4'} label={'George'} disabled>George</Option>\n            <Option value={'5'} label={'Hawk'}>Hawk</Option>\n        </Select>,\n        mountNode\n    );"}),O.a.createElement("h2",null,"禁用状态"),O.a.createElement("p",null,"选择器不可用状态。"),Object(d.useMemo)((function(){return O.a.createElement("div",{className:"detail-box"},O.a.createElement(y.s,{defaultValue:"1",disabled:!0,allowClear:!0},O.a.createElement(G,{value:"1",label:"Karmiy"},"Karmiy"),O.a.createElement(G,{value:"2",label:"Karloy"},"Karloy"),O.a.createElement(G,{value:"3",label:"Peppa"},"Peppa"),O.a.createElement(G,{value:"4",label:"George"},"George"),O.a.createElement(G,{value:"5",label:"Hawk"},"Hawk")))}),[]),O.a.createElement(E.d,{code:"    import { Select } from \"@kealm/react-components\";\n    \n    const { Option } = Select;\n    \n    ReactDom.render(\n        <Select disabled>\n            <Option value={'1'} label={'Karmiy'}>Karmiy</Option>\n            <Option value={'2'} label={'Karloy'}>Karloy</Option>\n            <Option value={'3'} label={'Peppa'}>Peppa</Option>\n            <Option value={'4'} label={'George'}>George</Option>\n            <Option value={'5'} label={'Hawk'}>Hawk</Option>\n        </Select>,\n        mountNode\n    );"}),O.a.createElement("h2",null,"基础多选"),O.a.createElement("p",null,"适用性较广的基础多选，用 Tag 展示已选项。"),Object(d.useMemo)((function(){return O.a.createElement("div",{className:"detail-box"},O.a.createElement(y.r,{gutter:16},O.a.createElement(y.f,null,O.a.createElement(y.s,{multiple:!0},O.a.createElement(G,{value:"1",label:"Karmiy"},"Karmiy"),O.a.createElement(G,{value:"2",label:"Karloy"},"Karloy"),O.a.createElement(G,{value:"3",label:"Peppa"},"Peppa"),O.a.createElement(G,{value:"4",label:"George"},"George"),O.a.createElement(G,{value:"5",label:"Hawk"},"Hawk"))),O.a.createElement(y.f,null,O.a.createElement(y.s,{multiple:!0,collapseTags:!0},O.a.createElement(G,{value:"1",label:"Karmiy"},"Karmiy"),O.a.createElement(G,{value:"2",label:"Karloy"},"Karloy"),O.a.createElement(G,{value:"3",label:"Peppa"},"Peppa"),O.a.createElement(G,{value:"4",label:"George"},"George"),O.a.createElement(G,{value:"5",label:"Hawk"},"Hawk")))))}),[]),O.a.createElement(E.d,{code:"    import { Select, Row, Col } from \"@kealm/react-components\";\n    \n    const { Option } = Select;\n    \n    ReactDom.render(\n        <Row gutter={16}>\n            <Col>\n                <Select multiple>\n                    <Option value={'1'} label={'Karmiy'}>Karmiy</Option>\n                    <Option value={'2'} label={'Karloy'}>Karloy</Option>\n                    <Option value={'3'} label={'Peppa'}>Peppa</Option>\n                    <Option value={'4'} label={'George'}>George</Option>\n                    <Option value={'5'} label={'Hawk'}>Hawk</Option>\n                </Select>\n            </Col>\n            <Col>\n                <Select multiple collapseTags>\n                    <Option value={'1'} label={'Karmiy'}>Karmiy</Option>\n                    <Option value={'2'} label={'Karloy'}>Karloy</Option>\n                    <Option value={'3'} label={'Peppa'}>Peppa</Option>\n                    <Option value={'4'} label={'George'}>George</Option>\n                    <Option value={'5'} label={'Hawk'}>Hawk</Option>\n                </Select>\n            </Col>\n        </Row>,\n        mountNode\n    );"}),O.a.createElement("h2",null,"可清空"),O.a.createElement("p",null,"包含清空按钮，可将选择器清空为初始状态。"),Object(d.useMemo)((function(){return O.a.createElement("div",{className:"detail-box"},O.a.createElement(y.r,{gutter:16},O.a.createElement(y.f,null,O.a.createElement(y.s,{allowClear:!0},O.a.createElement(G,{value:"1",label:"Karmiy"},"Karmiy"),O.a.createElement(G,{value:"2",label:"Karloy"},"Karloy"),O.a.createElement(G,{value:"3",label:"Peppa"},"Peppa"),O.a.createElement(G,{value:"4",label:"George"},"George"),O.a.createElement(G,{value:"5",label:"Hawk"},"Hawk"))),O.a.createElement(y.f,null,O.a.createElement(y.s,{allowClear:!0,multiple:!0},O.a.createElement(G,{value:"1",label:"Karmiy"},"Karmiy"),O.a.createElement(G,{value:"2",label:"Karloy"},"Karloy"),O.a.createElement(G,{value:"3",label:"Peppa"},"Peppa"),O.a.createElement(G,{value:"4",label:"George"},"George"),O.a.createElement(G,{value:"5",label:"Hawk"},"Hawk")))))}),[]),O.a.createElement(E.d,{code:"    import { Select, Row, Col } from \"@kealm/react-components\";\n    \n    const { Option } = Select;\n    \n    ReactDom.render(\n        <Row gutter={16}>\n            <Col>\n                <Select allowClear>\n                    <Option value={'1'} label={'Karmiy'}>Karmiy</Option>\n                    <Option value={'2'} label={'Karloy'}>Karloy</Option>\n                    <Option value={'3'} label={'Peppa'}>Peppa</Option>\n                    <Option value={'4'} label={'George'}>George</Option>\n                    <Option value={'5'} label={'Hawk'}>Hawk</Option>\n                </Select>\n            </Col>\n            <Col>\n                <Select allowClear multiple>\n                    <Option value={'1'} label={'Karmiy'}>Karmiy</Option>\n                    <Option value={'2'} label={'Karloy'}>Karloy</Option>\n                    <Option value={'3'} label={'Peppa'}>Peppa</Option>\n                    <Option value={'4'} label={'George'}>George</Option>\n                    <Option value={'5'} label={'Hawk'}>Hawk</Option>\n                </Select>\n            </Col>\n        </Row>,\n        mountNode\n    );"}),O.a.createElement("h2",null,"自定义模板"),O.a.createElement("p",null,"自定义下拉显示文本。"),Object(d.useMemo)((function(){return O.a.createElement("div",{className:"detail-box"},O.a.createElement(y.s,null,O.a.createElement(G,{value:"1",label:"Karmiy"},O.a.createElement("span",{style:{float:"left"}},"Karmiy"),O.a.createElement("span",{style:{float:"right"}},"未知")),O.a.createElement(G,{value:"2",label:"Karloy"},O.a.createElement("span",{style:{float:"left"}},"Karloy"),O.a.createElement("span",{style:{float:"right"}},"未知")),O.a.createElement(G,{value:"3",label:"Peppa"},O.a.createElement("span",{style:{float:"left"}},"Peppa"),O.a.createElement("span",{style:{float:"right"}},"佩奇")),O.a.createElement(G,{value:"4",label:"George"},O.a.createElement("span",{style:{float:"left"}},"George"),O.a.createElement("span",{style:{float:"right"}},"乔治")),O.a.createElement(G,{value:"5",label:"Hawk"},O.a.createElement("span",{style:{float:"left"}},"Hawk"),O.a.createElement("span",{style:{float:"right"}},"霍克"))))}),[]),O.a.createElement(E.d,{code:"    import { Select } from \"@kealm/react-components\";\n    \n    const { Option } = Select;\n    \n    ReactDom.render(\n        <Select>\n            <Option value={'1'} label={'Karmiy'}>\n                <span style={{float: 'left'}}>Karmiy</span>\n                <span style={{float: 'right'}}>未知</span>\n            </Option>\n            <Option value={'2'} label={'Karloy'}>\n                <span style={{float: 'left'}}>Karloy</span>\n                <span style={{float: 'right'}}>未知</span>\n            </Option>\n            <Option value={'3'} label={'Peppa'}>\n                <span style={{float: 'left'}}>Peppa</span>\n                <span style={{float: 'right'}}>佩奇</span>\n            </Option>\n            <Option value={'4'} label={'George'}>\n                <span style={{float: 'left'}}>George</span>\n                <span style={{float: 'right'}}>乔治</span>\n            </Option>\n            <Option value={'5'} label={'Hawk'}>\n                <span style={{float: 'left'}}>Hawk</span>\n                <span style={{float: 'right'}}>霍克</span>\n            </Option>\n        </Select>,\n        mountNode\n    );"}),O.a.createElement("h2",null,"获得选项文本"),O.a.createElement("p",null,"默认情况下 onChange 里只能拿到 value，如果需要拿到选中的节点文本 label，可以使用 labelInValue 属性。"),O.a.createElement("p",null,"选中项的 label 会被包装到 value 中传递给 onChange 等函数，此时 value 是一个对象。"),Object(d.useMemo)((function(){return O.a.createElement("div",{className:"detail-box"},O.a.createElement(y.s,{defaultValue:{value:"1",label:"Karmiy"},labelInValue:!0,onChange:function(e){return console.log(e)}},O.a.createElement(G,{value:"1",label:"Karmiy"},"Karmiy"),O.a.createElement(G,{value:"2",label:"Karloy"},"Karloy"),O.a.createElement(G,{value:"3",label:"Peppa"},"Peppa"),O.a.createElement(G,{value:"4",label:"George"},"George"),O.a.createElement(G,{value:"5",label:"Hawk"},"Hawk")))}),[]),O.a.createElement(E.d,{code:"    import { Select } from \"@kealm/react-components\";\n    \n    const { Option } = Select;\n    \n    ReactDom.render(\n        <Select defaultValue={{value: '1', label: 'Karmiy'}} labelInValue onChange={option => console.log(option)}>\n            <Option value={'1'} label={'Karmiy'}>Karmiy</Option>\n            <Option value={'2'} label={'Karloy'}>Karloy</Option>\n            <Option value={'3'} label={'Peppa'}>Peppa</Option>\n            <Option value={'4'} label={'George'}>George</Option>\n            <Option value={'5'} label={'Hawk'}>Hawk</Option>\n        </Select>,\n        mountNode\n    );"}),O.a.createElement("h2",null,"分组"),O.a.createElement("p",null,"备选项进行分组展示。"),Object(d.useMemo)((function(){return O.a.createElement("div",{className:"detail-box"},O.a.createElement(y.s,null,O.a.createElement(h,{label:"Manager"},O.a.createElement(G,{value:"1",label:"Karmiy"},"Karmiy"),O.a.createElement(G,{value:"2",label:"Karloy"},"Karloy")),O.a.createElement(h,{label:"Engineer"},O.a.createElement(G,{value:"3",label:"Peppa"},"Peppa"),O.a.createElement(G,{value:"4",label:"George"},"George"),O.a.createElement(G,{value:"5",label:"Hawk"},"Hawk"),O.a.createElement(G,{value:"6",label:"QiuQ"},"QiuQ"),O.a.createElement(G,{value:"7",label:"DingD"},"DingD"))))}),[]),O.a.createElement(E.d,{code:"    import { Select } from \"@kealm/react-components\";\n    \n    const { Option, Group } = Select;\n    \n    ReactDom.render(\n        <Select>\n            <Group label={'Manager'}>\n                <Option value={'1'} label={'Karmiy'}>Karmiy</Option>\n                <Option value={'2'} label={'Karloy'}>Karloy</Option>\n            </Group>\n            <Group label={'Engineer'}>\n                <Option value={'3'} label={'Peppa'}>Peppa</Option>\n                <Option value={'4'} label={'George'}>George</Option>\n                <Option value={'5'} label={'Hawk'}>Hawk</Option>\n                <Option value={'6'} label={'QiuQ'}>QiuQ</Option>\n                <Option value={'7'} label={'DingD'}>DingD</Option>\n            </Group>\n        </Select>,\n        mountNode\n    );"}),O.a.createElement("h2",null,"可搜索"),O.a.createElement("p",null,"可以利用 filterable 开启搜索功能快速查找选项。"),Object(d.useMemo)((function(){return O.a.createElement("div",{className:"detail-box"},O.a.createElement(y.r,{gutter:16},O.a.createElement(y.f,null,O.a.createElement(y.s,{filterable:!0},O.a.createElement(G,{value:"1",label:"Karmiy"},"Karmiy"),O.a.createElement(G,{value:"2",label:"Karloy"},"Karloy"),O.a.createElement(G,{value:"3",label:"Peppa"},"Peppa"),O.a.createElement(G,{value:"4",label:"George"},"George"),O.a.createElement(G,{value:"5",label:"Hawk"},"Hawk"))),O.a.createElement(y.f,null,O.a.createElement(y.s,{multiple:!0,filterable:!0},O.a.createElement(G,{value:"1",label:"Karmiy"},"Karmiy"),O.a.createElement(G,{value:"2",label:"Karloy"},"Karloy"),O.a.createElement(G,{value:"3",label:"Peppa"},"Peppa"),O.a.createElement(G,{value:"4",label:"George"},"George"),O.a.createElement(G,{value:"5",label:"Hawk"},"Hawk")))))}),[]),O.a.createElement(E.d,{code:"    import { Select, Row, Col } from \"@kealm/react-components\";\n    \n    const { Option } = Select;\n    \n    ReactDom.render(\n        <Row gutter={16}>\n            <Col>\n                <Select filterable>\n                    <Option value={'1'} label={'Karmiy'}>Karmiy</Option>\n                    <Option value={'2'} label={'Karloy'}>Karloy</Option>\n                    <Option value={'3'} label={'Peppa'}>Peppa</Option>\n                    <Option value={'4'} label={'George'}>George</Option>\n                    <Option value={'5'} label={'Hawk'}>Hawk</Option>\n                </Select>\n            </Col>\n            <Col>\n                <Select multiple filterable>\n                    <Option value={'1'} label={'Karmiy'}>Karmiy</Option>\n                    <Option value={'2'} label={'Karloy'}>Karloy</Option>\n                    <Option value={'3'} label={'Peppa'}>Peppa</Option>\n                    <Option value={'4'} label={'George'}>George</Option>\n                    <Option value={'5'} label={'Hawk'}>Hawk</Option>\n                </Select>\n            </Col>\n        </Row>,\n        mountNode\n    );"}),O.a.createElement("h2",null,"远程搜索"),O.a.createElement("p",null,"从服务器搜索数据，输入关键字进行查找。"),Object(d.useMemo)((function(){return O.a.createElement("div",{className:"detail-box"},O.a.createElement(y.s,{multiple:!0,loading:P,remote:!0,onRemote:R},r()(c).call(c,(function(e){return O.a.createElement(G,{key:e,value:e,label:e},e)}))))}),[P,c]),O.a.createElement(E.d,{code:"    import { useState, useCallback } from 'react';\n    import { Select } from \"@kealm/react-components\";\n    import { remoteOptions } from './data';\n    \n    const { Option } = Select;\n    \n    function Demo() {\n        const [options, setOptions] = useState([]);\n        const [loading, setLoading] = useState(false);\n        \n        const onRemote = useCallback(value => {\n            if(value) {\n                setLoading(true);\n                setTimeout(() => {\n                    setOptions(remoteOptions.filter(option => {\n                        return option.includes(value);\n                    }));\n                    setLoading(false);\n                }, 500);\n            }else {\n                setOptions([]);\n            }\n        }, []);\n        \n        return (\n            <Select multiple loading={loading} remote onRemote={onRemote}>\n                {options.map(option => {\n                    return <Option key={option} value={option} label={option}>{option}</Option>\n                })}\n            </Select>\n        )\n    }"}),O.a.createElement("h2",null,"选择器性能优化"),O.a.createElement("p",null,"当 Select 的列表项过多时，会出现加载速度缓慢、卡顿等行为，造成不良的体验。"),O.a.createElement("p",null,"通过配置 virtualScroll，可以在长列表时进行性能优化。"),O.a.createElement("p",null,"不支持分组展示的情况。"),Object(d.useMemo)((function(){var e,a;return O.a.createElement("div",{className:"detail-box"},O.a.createElement(y.s,{virtualScroll:!0},r()(e=n()(a=Array(1e4)).call(a,"")).call(e,(function(e,a){return O.a.createElement(G,{key:a,value:a+1,label:"Item-".concat(a+1)},"Item-",a+1)}))))}),[]),O.a.createElement(E.d,{code:"    import { Select } from \"@kealm/react-components\";\n    \n    const { Option } = Select;\n    \n    ReactDom.render(\n        <Select virtualScroll>\n            {Array(10000).fill('').map((item, index) => {\n                return <Option key={index} value={index + 1} label={`Item-${index + 1}`}>Item-{index + 1}</Option>\n            })}\n        </Select>,\n        mountNode\n    );"}),O.a.createElement(E.a,{title:"Select",propsList:K,eventsList:k}),O.a.createElement(E.a,{title:"Group",propsList:S}),O.a.createElement(E.a,{title:"Option",propsList:w}))}},516:function(e,a,l){e.exports=l(517)},517:function(e,a,l){var t=l(518);e.exports=t},518:function(e,a,l){var t=l(519),n=Array.prototype;e.exports=function(e){var a=e.fill;return e===n||e instanceof Array&&a===n.fill?t:a}},519:function(e,a,l){l(520);var t=l(46);e.exports=t("Array").fill},520:function(e,a,l){var t=l(28),n=l(521),o=l(120);t({target:"Array",proto:!0},{fill:n}),o("fill")},521:function(e,a,l){"use strict";var t=l(60),n=l(148),o=l(75);e.exports=function(e){for(var a=t(this),l=o(a.length),r=arguments.length,i=n(r>1?arguments[1]:void 0,l),p=r>2?arguments[2]:void 0,c=void 0===p?l:n(p,l);c>i;)a[i++]=e;return a}}}]);
//# sourceMappingURL=group-select-537f0e4c363eef39e9ec.js.map