import React, { useState, useMemo } from 'react';
import { TimePicker } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

function TimePickerDoc() {
    const [size, setSize] = useState();
    const [loading, setLoading] = useState(true);

    return (
        <div className='page-box'>
            <h1>TimePicker 时间选择器</h1>
            <p>当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>点击 TimePicker，然后可以在浮层中选择或者输入某一时间。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <TimePicker defaultValue={new Date('2019-12-01 9:23:45')} />
                    </div>
                )
            }, [])}

            {/* API */}
            {/*<ApiTable title='Button' propsList={buttonProps} eventsList={buttonEvents} />*/}
        </div>
    )
}

export default TimePickerDoc;