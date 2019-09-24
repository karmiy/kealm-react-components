import React, { useState, useMemo, useCallback } from 'react';
import { Input, Icon, Row, Col, Button } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

function InputDoc() {
    const [value, setValue] = useState('beauty');
    const change = useCallback((e) => setValue(e.target.value), [setValue]);

    const [textareaValue, setTextareaValue] = useState('');

    return (
        <div className='page-box input-doc'>
            <h1>Input 输入框</h1>
            <p>通过鼠标或键盘输入字符。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>基本使用。</p>
            {useMemo(() => <Input placeholder={'请输入内容'} />, [])}

            {/* 受控输入框 */}
            <h2>受控输入框</h2>
            <p>通过value与onChange联动input。</p>
            {useMemo(() => <Input value={value} onChange={change} placeholder={'请输入内容'} />, [value, setValue])}

            {/* 禁用状态 */}
            <h2>禁用状态</h2>
            <p>输入框的不可用状态。</p>
            {useMemo(() => <Input placeholder={'请输入内容'} disabled />, [])}

            {/* 可清空 */}
            <h2>可清空</h2>
            <p>允许清空输入值。</p>
            {useMemo(() => <Input placeholder={'请输入内容'} allowClear />, [])}

            {/* 密码框 */}
            <h2>密码框</h2>
            <p>密码框的明密文。</p>
            {useMemo(() => <Input.Password placeholder={'请输入内容'} />, [])}

            {/* 带 icon 的输入框 */}
            <h2>带 icon 的输入框</h2>
            <p>带有图标标记输入类型。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Row gutter={20}>
                            <Col><Input placeholder={'请输入内容'} suffix={'star-full'} /></Col>
                            <Col><Input placeholder={'请输入内容'} prefix={'phone'} /></Col>
                        </Row>
                        <Row gutter={20}>
                            <Col><Input placeholder={'请输入内容'} suffix={<Icon type={'star-full'} />} /></Col>
                            <Col><Input placeholder={'请输入内容'} prefix={<Icon type={'phone'} />} /></Col>
                        </Row>
                    </div>
                )
            }, [])}

            {/* 文本域 */}
            <h2>文本域</h2>
            <p>用于多行输入。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Input.TextArea placeholder={'请输入内容'} rows={4} onChange={(e) => console.log(e.target.value)} />
                    </div>
                )
            }, [])}

            {/* 可自适应文本高度的文本域 */}
            <h2>可自适应文本高度的文本域</h2>
            <p>通过设置 autosize 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 autosize 还可以设定为一个对象，指定最小行数和最大行数。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Input.TextArea placeholder={'请输入内容'} autosize />
                        </div>
                        <div className="detail-box">
                            <Input.TextArea placeholder={'请输入内容'} autosize={{minRows: 2, maxRows: 6}} />
                        </div>
                        <div className="detail-box">
                            <Input.TextArea value={textareaValue} placeholder={'请输入内容'} autosize={{minRows: 3, maxRows: 5}} onChange={(e) => setTextareaValue(e.target.value)} />
                        </div>
                    </>
                )
            }, [textareaValue, setTextareaValue])}

            {/* 复合型输入框 */}
            <h2>复合型输入框</h2>
            <p>可前置或后置元素，一般为标签或按钮。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Input placeholder={'请输入内容'} prepend={'Http://'} />
                        </div>
                        <div className="detail-box">
                            <Input placeholder={'请输入内容'} append={'.com'} />
                        </div>
                        <div className="detail-box">
                            <Input placeholder={'请输入内容'} append={<Button icon='search' />} />
                        </div>
                    </>
                )
            }, [])}
        </div>
    )
}

export default InputDoc;