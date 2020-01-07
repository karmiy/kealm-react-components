/* 基本用法 */
export const CodeBasic =
`    import { Tag, Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <Row gutter={16}>
            <Col><Tag>Tag1</Tag></Col>
            <Col><Tag type={'success'}>Tag2</Tag></Col>
            <Col><Tag type={'info'}>Tag3</Tag></Col>
            <Col><Tag type={'warning'}>Tag4</Tag></Col>
            <Col><Tag type={'danger'}>Tag5</Tag></Col>
        </Row>,
        mountNode
    );`

/* 不同主题 */
export const CodeEffect =
`    import { Tag, Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <Row gutter={16}>
                <Col><Tag effect={'dark'}>Tag1</Tag></Col>
                <Col><Tag effect={'dark'} type={'success'}>Tag2</Tag></Col>
                <Col><Tag effect={'dark'} type={'info'}>Tag3</Tag></Col>
                <Col><Tag effect={'dark'} type={'warning'}>Tag4</Tag></Col>
                <Col><Tag effect={'dark'} type={'danger'}>Tag5</Tag></Col>
            </Row>
            <Row gutter={16}>
                <Col><Tag effect={'plain'}>Tag1</Tag></Col>
                <Col><Tag effect={'plain'} type={'success'}>Tag2</Tag></Col>
                <Col><Tag effect={'plain'} type={'info'}>Tag3</Tag></Col>
                <Col><Tag effect={'plain'} type={'warning'}>Tag4</Tag></Col>
                <Col><Tag effect={'plain'} type={'danger'}>Tag5</Tag></Col>
            </Row>
        </div>,
        mountNode
    );`

/* 不同尺寸 */
export const CodeSize =
`    import { useState } from 'react';
    import { Tag, Row, Col, Radio } from "@kealm/react-components";
    
    function Demo() {
        const [size, setSize] = useState('');
        
        return (
            <div>
                <div className="detail-box">
                    <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
                        <Radio value={'large'}>Large</Radio>
                        <Radio value={''}>Default</Radio>
                        <Radio value={'small'}>Small</Radio>
                    </Radio.Group>
                </div>
                <div className="detail-box">
                    <Row gutter={16}>
                        <Col><Tag size={size || undefined} effect={'plain'}>Tag Size</Tag></Col>
                        <Col><Tag size={size || undefined}>Tag Size</Tag></Col>
                        <Col><Tag size={size || undefined} effect={'dark'}>Tag Size</Tag></Col>
                    </Row>
                </div>
            </div>
        )
    }`

/* 自定义背景色 */
export const CodeCustom =
`    import { Tag, Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <Row gutter={16}>
            <Col><Tag color={'#ff5b09'} font={'#fff'}>Tag</Tag></Col>
            <Col><Tag color={'#13c2c2'} font={'#fff'}>Tag</Tag></Col>
            <Col><Tag color={'#30Ba40'} font={'#fff'}>Tag</Tag></Col>
            <Col><Tag color={'#722ed1'} font={'#fff'}>Tag</Tag></Col>
            <Col><Tag color={'#eb2f96'} font={'#fff'}>Tag</Tag></Col>
        </Row>,
        mountNode
    );`

/* 可移除标签 */
export const CodeClosable =
`    import { Tag, Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <Row gutter={16}>
                <Col><Tag closable>Tag1</Tag></Col>
                <Col><Tag type={'success'} closable>Tag2</Tag></Col>
                <Col><Tag type={'info'} closable>Tag3</Tag></Col>
                <Col><Tag type={'warning'} closable>Tag4</Tag></Col>
                <Col><Tag type={'danger'} closable>Tag5</Tag></Col>
            </Row>
            <Row gutter={16}>
                <Col><Tag effect={'dark'} closable>Tag1</Tag></Col>
                <Col><Tag effect={'dark'} type={'success'} closable>Tag2</Tag></Col>
                <Col><Tag effect={'dark'} type={'info'} closable>Tag3</Tag></Col>
                <Col><Tag effect={'dark'} type={'warning'} closable>Tag4</Tag></Col>
                <Col><Tag effect={'dark'} type={'danger'} closable>Tag5</Tag></Col>
            </Row>
            <Row gutter={16}>
                <Col><Tag effect={'plain'} closable>Tag1</Tag></Col>
                <Col><Tag effect={'plain'} type={'success'} closable>Tag2</Tag></Col>
                <Col><Tag effect={'plain'} type={'info'} closable>Tag3</Tag></Col>
                <Col><Tag effect={'plain'} type={'warning'} closable>Tag4</Tag></Col>
                <Col><Tag effect={'plain'} type={'danger'} closable>Tag5</Tag></Col>
            </Row>
        </div>,
        mountNode
    );`

/* 动态编辑标签 */
export const CodeEdit =
`    import { useState, useCallback } from 'react';
    import { Tag, Row, Col, Button, Input } from "@kealm/react-components";
    import { Motion } from '@kealm/react-components-utils';
    
    const [tags, setTags] = useState(['Tag1']);
    const [inputVisible, setInputVisible] = useState(false);

    const onClose = useCallback((_, tag) => {
        setTags(tags.filter(t => tag !== t));
    }, [tags]);

    const addTag = useCallback((value) => {
        setTags([...tags, value]);
    }, [tags]);

    const onPressEnter = useCallback(value => {
        const tag = tags.find(tag => tag === value);
        if(tag) {
            setInputVisible(false);
            return;
        }
        setInputVisible(false);
        addTag(value);
    }, [tags, addTag]);
    
    function Demo() {
        const [size, setSize] = useState('');
        
        return (
            <div>
                <Row>
                    <Col>
                        {
                            inputVisible ?
                                <Input style={{width: '150px'}} onPressEnter={onPressEnter} autoFocus />
                                :
                                <Button plain icon='plus' onClick={() => setInputVisible(true)}>New Tag</Button>
                        }
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Motion transitionName={'km-zoom-center'}>
                        {tags.map(tag => <Col key={tag}><Tag closable onClose={onClose}>{tag}</Tag></Col>)}
                    </Motion>
                </Row>
            </div>
        )
    }`