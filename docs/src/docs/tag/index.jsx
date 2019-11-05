import React, { useState, useCallback } from 'react';
import { Tag, Row, Col, Radio, Button, Input } from '@kealm/react-components';
import { Motion } from '@kealm/react-components-utils';
import { ApiTable, HighLight } from '@/components';
import { tagProps, tagEvents } from 'api/tag';
import { CodeBasic, CodeEffect, CodeSize, CodeCustom, CodeClosable, CodeEdit } from 'demos/tag';

function TagDoc() {
    const [size, setSize] = useState('');
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

    return (
        <div className='page-box'>
            <h1>Tag 标签</h1>
            <p>用于标记和选择。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>由 type 属性来选择 Tag 的类型。</p>
            <div className="detail-box">
                <Row gutter={16}>
                    <Col><Tag>Tag1</Tag></Col>
                    <Col><Tag type={'success'}>Tag2</Tag></Col>
                    <Col><Tag type={'info'}>Tag3</Tag></Col>
                    <Col><Tag type={'warning'}>Tag4</Tag></Col>
                    <Col><Tag type={'danger'}>Tag5</Tag></Col>
                </Row>
            </div>
            <HighLight code={CodeBasic} />

            {/* 不同主题 */}
            <h2>不同主题</h2>
            <p>由 type 属性来选择 Tag 的类型。</p>
            <div className="detail-box">
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
            </div>
            <HighLight code={CodeEffect} />

            {/* 不同尺寸 */}
            <h2>不同尺寸</h2>
            <p>Tag 组件提供除了三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
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
            <HighLight code={CodeSize} />

            {/* 自定义背景色 */}
            <h2>自定义背景色</h2>
            <p>可以通过 color 属性来自定义背景色，font 属性自定义字体色。</p>
            <div className="detail-box">
                <Row gutter={16}>
                    <Col><Tag color={'#ff5b09'} font={'#fff'}>Tag</Tag></Col>
                    <Col><Tag color={'#13c2c2'} font={'#fff'}>Tag</Tag></Col>
                    <Col><Tag color={'#30Ba40'} font={'#fff'}>Tag</Tag></Col>
                    <Col><Tag color={'#722ed1'} font={'#fff'}>Tag</Tag></Col>
                    <Col><Tag color={'#eb2f96'} font={'#fff'}>Tag</Tag></Col>
                </Row>
            </div>
            <HighLight code={CodeCustom} />

            {/* 可移除标签 */}
            <h2>可移除标签</h2>
            <p>设置 closable 属性可以定义一个标签是否可移除。</p>
            <div className="detail-box">
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
            </div>
            <HighLight code={CodeClosable} />

            {/* 动态编辑标签 */}
            <h2>动态编辑标签</h2>
            <p>动态编辑标签可以通过点击标签关闭按钮后触发的 onClose 事件来实现。</p>
            <div className="detail-box">
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
            <HighLight code={CodeEdit} />

            {/* API */}
            <ApiTable title='Tag' propsList={tagProps} eventsList={tagEvents} />
        </div>
    )
}

export default TagDoc;