import React, { useState, useMemo, useCallback } from 'react';
import { DatePicker, Row, Col } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

const { MonthPicker, WeekPicker, RangePicker } = DatePicker;

function DatePickerDoc() {
    const [value, setValue] = useState(null);
    const [visible, setVisible] = useState(false);

    const onChange = useCallback(v => setValue(v), []);
    const onVisibleChange = useCallback(v => setVisible(v), []);

    return (
        <div className='page-box'>
            <h1>DatePicker 日期选择器</h1>
            <p>输入或选择日期的控件。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>在浮层中可以选择或者输入日期。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        {/*<DatePicker defaultValue={new Date('2009-01-02 12:11:10')} onChange={v => console.log(v)} />*/}
                        <DatePicker onChange={(date, dateString) => console.log(date, dateString)} />
                    </div>
                )
            }, [])}

            {/* 可清空 */}
            <h2>可清空</h2>
            <p>配置 allowClear 可使日期选择器允许清空选中的值。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <DatePicker allowClear onChange={(date, dateString) => console.log(date, dateString)} />
                    </div>
                )
            }, [])}

            {/* 其他单位 */}
            <h2>其他单位</h2>
            <p>更多的日期选择单位，可以选择月、周。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Row gutter={16}>
                            <Col>
                                <MonthPicker allowClear onChange={(date, dateString) => console.log(date, dateString)} />
                            </Col>
                            <Col>
                                <WeekPicker allowClear onChange={(date, dateString) => console.log(date, dateString)} />
                            </Col>
                        </Row>
                    </div>
                )
            }, [])}

            {/* 选择日期范围 */}
            <h2>选择日期范围</h2>
            <p>可在一个选择器中便捷地选择一个日期范围。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <RangePicker defaultValue={[new Date('2019-02-02'), new Date('2019-02-12')]} onChange={(date, dateString) => console.log(date, dateString)} />
                        {/*<RangePicker onChange={(date, dateString) => console.log(date, dateString)} />*/}
                    </div>
                )
            }, [])}

            {/* API */}
            {/*<ApiTable title='TimePicker' propsList={timePickerProps} eventsList={timePickerEvents} />*/}
        </div>
    )
}

export default DatePickerDoc;