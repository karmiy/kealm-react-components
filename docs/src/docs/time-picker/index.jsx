import React, { useState, useMemo, useCallback } from 'react';
import { TimePicker, Row, Col } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

function createTimes(num) {
    const times = [];
    while (num > 0) {
        times.unshift(--num);
    }
    return times;
}

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
                    <>
                        <div className="detail-box">
                            <Row type={'flex'} align={'middle'} gutter={20}>
                                <Col>
                                    <TimePicker defaultValue={new Date('2019-12-31 09:23:45')} onChange={v => console.log(v)} />
                                </Col>
                                <Col className={'font-bold'}>
                                    HH:mm:ss
                                </Col>
                            </Row>
                        </div>
                        <div className="detail-box">
                            <Row type={'flex'} align={'middle'} gutter={20}>
                                <Col>
                                    <TimePicker defaultValue={new Date('2019-12-31 09:23:45')} format={'HH:mm'} onChange={v => console.log(v)} />
                                </Col>
                                <Col className={'font-bold'}>
                                    HH:mm
                                </Col>
                            </Row>
                        </div>
                        <div className="detail-box">
                            <Row type={'flex'} align={'middle'} gutter={20}>
                                <Col>
                                    <TimePicker defaultValue={new Date('2019-12-31 09:23:45')} format={'mm:ss'} onChange={v => console.log(v)} />
                                </Col>
                                <Col className={'font-bold'}>
                                    mm:ss
                                </Col>
                            </Row>
                        </div>
                        <div className="detail-box">
                            <Row type={'flex'} align={'middle'} gutter={20}>
                                <Col>
                                    <TimePicker defaultValue={new Date('2019-12-31 09:23:45')} format={'HH~ss'} onChange={v => console.log(v)} />
                                </Col>
                                <Col className={'font-bold'}>
                                    HH~ss
                                </Col>
                            </Row>
                        </div>
                    </>
                )
            }, [])}

            {/* 12 小时制 */}
            <h2>12 小时制</h2>
            <p>12 小时制的时间选择器，在 format 设置 hh 时生效。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <TimePicker defaultOpenValue={new Date('2019-12-31 08:23:45')} format={'hh:mm:ss'} onChange={v => console.log(v)} />
                    </div>
                )
            }, [])}

            {/* 步长选项 */}
            <h2>步长选项</h2>
            <p>可以使用 hourStep minuteStep secondStep 按步长展示可选的时分秒。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <TimePicker hourStep={2} minuteStep={15} secondStep={10} format={'hh:mm:ss'} onChange={v => console.log(v)} />
                    </div>
                )
            }, [])}

            {/* 禁用部分选项 */}
            <h2>禁用部分选项</h2>
            <p>通过 disabledHours、disabledMinutes、disabledSeconds 可以自定义禁用某些时间选项。</p>
            <p>配置 hideDisabledOptions 选项可以将禁用项隐藏</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Row gutter={20}>
                            <Col>
                                <TimePicker
                                    disabledHours={() => [1, 2, 3]}
                                    disabledMinutes={() => [4, 5, 6]}
                                    disabledSeconds={() => [7, 8, 9]}
                                    onChange={v => console.log(v)}
                                />
                            </Col>
                            <Col>
                                <TimePicker
                                    hideDisabledOptions
                                    disabledHours={() => [1, 2, 3]}
                                    disabledMinutes={() => [4, 5, 6]}
                                    disabledSeconds={() => [7, 8, 9]}
                                    onChange={v => console.log(v)}
                                />
                            </Col>
                        </Row>
                    </div>
                )
            }, [])}

            {/* API */}
            {/*<ApiTable title='Button' propsList={buttonProps} eventsList={buttonEvents} />*/}
        </div>
    )
}

export default TimePickerDoc;