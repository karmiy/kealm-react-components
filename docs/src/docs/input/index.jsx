import React, { useState, useMemo, useCallback } from 'react';
import { Input, Icon, Row, Col, Button } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';
import { commonProps, commonEvents, inputProps, passwordProps, searchProps, searchEvents, textareaProps } from 'api/input';
import { CodeBasic, CodeControlled, CodeDisabled, CodeClear, CodePassword, CodeSearch, CodeIcon, CodeTextarea, CodeAutosize, CodeSize, CodeMixins, CodeLimitCount } from 'demos/input';

function InputDoc() {
    const [value, setValue] = useState('beauty');
    const change = useCallback((e) => setValue(e.target.value), []);

    const [textareaValue, setTextareaValue] = useState('');

    return (
        <div className='page-box input-doc'>
            <h1>Input 输入框</h1>
            <p>通过鼠标或键盘输入字符。</p>

            {/*<h2>事件测试</h2>
            <p>事件测试。</p>
            {useMemo(() => {
                return (
                    <Input placeholder={'请输入内容'}
                           style={{width: '100px'}}
                           onClick={() => console.log('click')}
                           onFocus={() => console.log('focus')}
                           onBlur={() => console.log('blur')}
                           onKeyPress={() => console.log('keyPress')}
                           onKeyDown={() => console.log('keyDown')}
                           onKeyUp={() => console.log('keyUp')}
                           onInput={() => console.log('input')}
                    />
                )
            }, [value, change])}*/}

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>基本使用。</p>
            <div className="detail-box">
                {useMemo(() => <Input placeholder={'请输入内容'} />, [])}
            </div>
            <HighLight code={CodeBasic} />

            {/* 受控输入框 */}
            <h2>受控输入框</h2>
            <p>通过 value 与 onChange 联动 input。</p>
            <div className="detail-box">
                {useMemo(() => <Input value={value} onChange={change} placeholder={'请输入内容'} />, [value])}
            </div>
            <HighLight code={CodeControlled} />

            {/* 禁用状态 */}
            <h2>禁用状态</h2>
            <p>输入框的不可用状态。</p>
            <div className="detail-box">
                {useMemo(() => <Input placeholder={'请输入内容'} disabled />, [])}
            </div>
            <HighLight code={CodeDisabled} />

            {/* 可清空 */}
            <h2>可清空</h2>
            <p>允许清空输入值。</p>
            <div className="detail-box">
                {useMemo(() => <Input placeholder={'请输入内容'} allowClear onClear={() => console.log('clear')} />, [])}
            </div>
            <HighLight code={CodeClear} />

            {/* 密码框 */}
            <h2>密码框</h2>
            <p>密码框的明密文。</p>
            <div className="detail-box">
                {useMemo(() => <Input.Password size={'large'} placeholder={'请输入内容'} />, [])}
            </div>
            <HighLight code={CodePassword} />

            {/* 搜索框 */}
            <h2>搜索框</h2>
            <p>带有搜索按钮的输入框。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Input.Search placeholder={'请输入内容'} onSearch={(value, event) => console.log(value, event)} />
                        </div>
                        <div className="detail-box">
                            <Input.Search style={{width: '300px'}} placeholder={'请输入内容'} enterButton onSearch={(value, event) => console.log(value, event)} />
                        </div>
                        <div className="detail-box">
                            <Input.Search style={{width: '400px'}} placeholder={'请输入内容'} enterButton={'search'} size={'large'} onSearch={(value, event) => console.log(value, event)} />
                        </div>
                    </>
                )
            }, [])}
            <HighLight code={CodeSearch} />

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
            <HighLight code={CodeIcon} />

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
            <HighLight code={CodeTextarea} />

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
            }, [textareaValue])}
            <HighLight code={CodeAutosize} />

            {/* 尺寸 */}
            <h2>尺寸</h2>
            <p>3种不同大小的输入框。</p>
            <div className="detail-box">
                {useMemo(() => {
                    return (
                        <>
                            <Row gutter={20} type={'flex'} align={'middle'}>
                                <Col><Input placeholder={'请输入内容'} size={'large'} suffix={'star-full'} /></Col>
                                <Col><Input placeholder={'请输入内容'} suffix={'star-full'} /></Col>
                                <Col><Input placeholder={'请输入内容'} size={'small'} suffix={'star-full'} /></Col>
                            </Row>
                        </>
                    )
                }, [])}
            </div>
            <HighLight code={CodeSize} />

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
                            <Input placeholder={'请输入内容'} size={'large'} append={<Button type={'primary'} icon='search' />} />
                        </div>
                    </>
                )
            }, [])}
            <HighLight code={CodeMixins} />

            {/* 输入长度限制 */}
            <h2>输入长度限制</h2>
            <p>可以通过 maxlength 限制输入框的字符长度，showLimitCount 来展示字数统计。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Input placeholder={'请输入内容'} maxLength={10} showLimitCount />
                        </div>
                        <div className="detail-box">
                            <Input.TextArea placeholder={'请输入内容'} maxLength={30} showLimitCount />
                        </div>
                    </>
                )
            }, [])}
            <HighLight code={CodeLimitCount} />

            {/* API */}
            <ApiTable title='Common' propsList={commonProps} eventsList={commonEvents} />
            <ApiTable title='Input' propsList={inputProps} />
            <ApiTable title='Password' propsList={passwordProps} />
            <ApiTable title='Textarea' propsList={textareaProps} />
            <ApiTable title='Search' propsList={searchProps} eventsList={searchEvents} />
        </div>
    )
}

export default InputDoc;