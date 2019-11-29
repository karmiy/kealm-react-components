import React, { useState, useMemo, useCallback } from 'react';
import { TimePicker, Row, Col } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

function TimePickerDoc() {
    const [value, setValue] = useState(null);
    const [loading, setLoading] = useState(true);

    const onChange = useCallback(v => setValue(v), []);

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
                        {/*<TimePicker defaultValue={new Date('2019-12-01 9:23:45')} onChange={d => console.log(d)} />*/}
                        {/*<TimePicker defaultOpenValue={new Date('2019-12-01 9:23:45')} onChange={d => console.log(d)} />*/}
                        {/*<TimePicker defaultValue={new Date('2019-12-01 19:20:15')} defaultOpenValue={new Date('2019-12-01 9:23:45')} onChange={d => console.log(d)} />*/}
                        <TimePicker />
                    </div>
                )
            }, [])}

            {/* 受控组件 */}
            <h2>受控组件</h2>
            <p>value 和 onChange 需要配合使用。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <TimePicker value={value} onChange={onChange} />
                    </div>
                )
            }, [value])}

            {/* 可清空 */}
            <h2>可清空</h2>
            <p>配置 allowClear 可以让时间选择器允许清空。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <TimePicker allowClear />
                    </div>
                )
            }, [])}

            {/* <Row type={'flex'} align={'middle'} gutter={20}> */}

            {/* 三种大小 */}
            <h2>三种大小</h2>
            <p>三种大小的输入框。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Row type={'flex'} align={'middle'} gutter={20}>
                            <Col><TimePicker defaultValue={new Date()} size={'large'} /></Col>
                            <Col><TimePicker defaultValue={new Date()} /></Col>
                            <Col><TimePicker defaultValue={new Date()} size={'small'} /></Col>
                        </Row>
                    </div>
                )
            }, [])}

            {/* 禁用 */}
            <h2>禁用</h2>
            <p>禁用时间选择。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <TimePicker disabled />
                    </div>
                )
            }, [])}

            {/* 自定义格式 */}
            <h2>自定义格式</h2>
            <p>TimePicker 浮层中的列会随着 format 变化，当略去 format 中的某部分时，浮层中对应的列也会消失。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <TimePicker format={'HH:mm'} />
                    </div>
                )
            }, [])}

            {/* API */}
            {/*<ApiTable title='Button' propsList={buttonProps} eventsList={buttonEvents} />*/}
        </div>
    )
}

export default TimePickerDoc;