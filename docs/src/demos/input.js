/* 基本用法 */
export const CodeBasic =
`    import { Input } from "@kealm/react-components";
    
    ReactDom.render(
        <Input placeholder={'请输入内容'} />,
        mountNode
    );`

/* 受控输入框 */
export const CodeControlled =
`    import { useState } from 'react';
    import { Button } from "@kealm/react-components";
    
    function Demo() {
        const [value, setValue] = useState('beauty');
        const change = useCallback((e) => setValue(e.target.value), []);
        
        return (
            <div>
                {useMemo(() => {
                    return <Input value={value} onChange={change} placeholder={'请输入内容'} />
                }, [value, change])}
            </div>
        )
    }`

/* 禁用状态 */
export const CodeDisabled =
`    import { Input } from "@kealm/react-components";
    
    ReactDom.render(
        <Input placeholder={'请输入内容'} disabled />,
        mountNode
    );`

/* 可清空 */
export const CodeClear =
    `    import { Input } from "@kealm/react-components";
    
    ReactDom.render(
        <Input placeholder={'请输入内容'} allowClear />,
        mountNode
    );`

/* 密码框 */
export const CodePassword =
`    import { Input } from "@kealm/react-components";
    
    ReactDom.render(
        <Input.Password size={'large'} placeholder={'请输入内容'} />,
        mountNode
    );`

/* 搜索框 */
export const CodeSearch =
`    import { Input } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <div className="detail-box">
                <Input.Search placeholder={'请输入内容'} onSearch={(value, event) => console.log(value, event)} ></Input.Search>
            </div>
            <div className="detail-box">
                <Input.Search style={{width: '300px'}} placeholder={'请输入内容'} enterButton onSearch={(value, event) => console.log(value, event)} ></Input.Search>
            </div>
            <div className="detail-box">
                <Input.Search style={{width: '400px'}} placeholder={'请输入内容'} enterButton={'search'} size={'large'} onSearch={(value, event) => console.log(value, event)} ></Input.Search>
            </div>
        </div>,
        mountNode
    );`

/* 带 icon 的输入框 */
export const CodeIcon =
`    import { Input, Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <Row gutter={20}>
                <Col><Input placeholder={'请输入内容'} suffix={'star-full'} ></Input></Col>
                <Col><Input placeholder={'请输入内容'} prefix={'phone'} ></Input></Col>
            </Row>
            <Row gutter={20}>
                <Col><Input placeholder={'请输入内容'} suffix={<Icon type={'star-full'}></Icon>} ></Input></Col>
                <Col><Input placeholder={'请输入内容'} prefix={<Icon type={'phone'}></Icon>} ></Input></Col>
            </Row>
        </div>,
        mountNode
    );`

/* 带 icon 的输入框 */
export const CodeTextarea =
`    import { Input } from "@kealm/react-components";
    
    ReactDom.render(
        <Input.TextArea placeholder={'请输入内容'} rows={4} onChange={(e ) => console.log(e.target.value)} />,
        mountNode
    );`

/* 可自适应文本高度的文本域 */
export const CodeAutosize =
`    import { Input } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <div className="detail-box">
                <Input.TextArea placeholder={'请输入内容'} autosize ></Input.TextArea>
            </div>
            <div className="detail-box">
                <Input.TextArea placeholder={'请输入内容'} autosize={{minRows: 2, maxRows: 6}} ></Input.TextArea>
            </div>
            <div className="detail-box">
                <Input.TextArea value={textareaValue} placeholder={'请输入内容'} autosize={{minRows: 3, maxRows: 5}} onChange={(e )=> setTextareaValue(e.target.value)} ></Input.TextArea>
            </div>
        </div>,
        mountNode
    );`

/* 尺寸 */
export const CodeSize =
`    import { Input, Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <Row gutter={20} type={'flex'} align={'middle'}>
            <Col><Input placeholder={'请输入内容'} size={'large'} suffix={'star-full'} ></Input></Col>
            <Col><Input placeholder={'请输入内容'} suffix={'star-full'} ></Input></Col>
            <Col><Input placeholder={'请输入内容'} size={'small'} suffix={'star-full'} ></Input></Col>
        </Row>,
        mountNode
    );`

/* 复合型输入框 */
export const CodeMixins =
`    import { Input } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <div className="detail-box">
                <Input placeholder={'请输入内容'} prepend={'Http://'} ></Input>
            </div>
            <div className="detail-box">
                <Input placeholder={'请输入内容'} append={'.com'} ></Input>
            </div>
            <div className="detail-box">
                <Input placeholder={'请输入内容'} size={'large'} append={<Button type={'primary'} icon='search' ></Button>} ></Input>
            </div>
        </div>,
        mountNode
    );`

/* 输入长度限制 */
export const CodeLimitCount =
`    import { Input } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <div className="detail-box">
                <Input placeholder={'请输入内容'} maxLength={10} showLimitCount ></Input>
            </div>
            <div className="detail-box">
                <Input.TextArea placeholder={'请输入内容'} maxLength={30} showLimitCount ></Input.TextArea>
            </div>
        </div>,
        mountNode
    );`