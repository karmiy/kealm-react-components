import React, { useState, useMemo, useCallback } from 'react';
import { Input } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

function InputDoc() {
    const [value, setValue] = useState('beauty');
    const change = useCallback((e) => setValue(e.target.value), [setValue])
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

        </div>
    )
}

export default InputDoc;