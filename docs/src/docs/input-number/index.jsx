import React, { useState, useMemo, useCallback } from 'react';
import { InputNumber } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';
import Input from "../../../packages/components/cores/input/input";

function InputNumberDoc() {
    const [value, setValue] = useState(2);
    const [loading, setLoading] = useState(true);

    const onChange = useCallback(v => {
        setValue(v === null ? undefined : v);
    }, []);

    return (
        <div className='page-box'>
            <h1>InputNumber 数字输入框</h1>
            <p>仅允许输入标准的数字值，可定义范围。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>数字输入框。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            {/*<InputNumber value={3} onChange={v => console.log(v)}>默认按钮</InputNumber>*/}
                            <InputNumber defaultValue={2} min={1} max={10} />
                        </div>
                    </>
                )
            }, [])}

            {/* 受控数字输入框 */}
            <h2>受控数字输入框</h2>
            <p>配合 value 与 onChange 控制 InputNumber 改变。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <InputNumber value={value} min={1} max={10} onChange={onChange} />
                        </div>
                    </>
                )
            }, [value])}

            {/* API */}
            {/*<ApiTable title='Button' propsList={buttonProps} eventsList={buttonEvents} />*/}
        </div>
    )
}

export default InputNumberDoc;