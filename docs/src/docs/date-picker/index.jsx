import React, { useState, useMemo, useCallback } from 'react';
import { DatePicker, Row, Col, Radio, Button } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';
import {
    commonProps,
    commonEvents,
    datePickerProps,
    datePickerEvents,
    monthPickerProps,
    weekPickerProps,
    rangePickerProps,
    rangePickerEvents,
} from 'api/date-picker';

import {
    CodeBasic,
    CodeAllowClear,
    CodeOtherPicker,
    CodeRange,
    CodeFormat,
    CodeSize,
    CodeShowTime,
    CodeDisabled,
    CodeDisabledDate,
    CodeCustomRange,
    CodeExtraFooter,
    CodeDateRender,
} from 'demos/date-picker';

import {
    startOfYesterday,
    startOfDay,
    endOfDay,
    subDays,
    startOfWeek,
    addMonths,
    subMonths,
} from 'date-fns';

const { MonthPicker, WeekPicker, RangePicker } = DatePicker;

function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    return result;
}

function DatePickerDoc() {
    const [size, setSize] = useState('');
    const onSizeChange = useCallback(v => setSize(v), []);

    const disabledDate = useCallback(v => v < endOfDay(new Date()), []);

    const disabledDateTime = useCallback(() => {
        return {
            disabledHours: () => range(4, 24), // 0 ~ 3
            disabledMinutes: () => range(30, 60), // 30 ~ 59
            disabledSeconds: () => [20, 30],
        };
    }, []);

    const disabledRangeTime = useCallback((v, type) => {
        if (type === 'start') {
            return {
                disabledHours: () => range(4, 24),
                disabledMinutes: () => range(30, 60),
                disabledSeconds: () => [20, 30],
            };
        }
        return {
            disabledHours: () => [8, 12],
            disabledMinutes: () => range(5, 15),
            disabledSeconds: () => [10],
        };
    }, []);

    const [startValue, setStartValue] = useState(null);
    const [endValue, setEndValue] = useState(null);
    const [endVisible, setEndVisible] = useState(false);

    const onStartChange = useCallback(v => setStartValue(v), []);
    const onEndChange = useCallback(v => setEndValue(v), []);
    const onStartVisibleChange = useCallback(visible => !visible && setEndVisible(true), []);
    const onEndVisibleChange = useCallback(visible => setEndVisible(visible), []);

    const disabledStartDate = useCallback(date => {
        if(!date || !endValue) return false;
        return date.valueOf() > endValue.valueOf();
    }, [endValue]);
    const disabledEndDate = useCallback(date => {
        if(!date || !startValue) return false;
        return date.valueOf() <= startValue.valueOf();
    }, [startValue]);

    const dateRender = useCallback(current => {
        const style = {};
        if (current.getDate() === 1) {
            style.border = '1px solid #1890ff';
            style.borderRadius = '50%';
        }
        return <span className={'km-calendar__date'} style={style}>{current.getDate()}</span>
    }, []);

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
                        {/*<DatePicker showToday showTime onOk={() => console.log(1)} allowClear defaultPickerValue={new Date('2009-01-02 12:11:10')} onChange={v => console.log(v)} />*/}
                        <DatePicker onChange={(date, dateString) => console.log(date, dateString)} />
                    </div>
                )
            }, [])}
            <HighLight code={CodeBasic} />

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
            <HighLight code={CodeAllowClear} />

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
            <HighLight code={CodeOtherPicker} />

            {/* 选择日期范围 */}
            <h2>选择日期范围</h2>
            <p>可在一个选择器中便捷地选择一个日期范围。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        {/*<RangePicker
                            defaultPickerValue={
                                [new Date('2019-02-02 12:11:10'), new Date('2019-11-12 13:14:15')]
                            }
                            showTime
                            allowClear
                            onChange={(date, dateString) => console.log(date, dateString)}
                        />*/}
                        <RangePicker allowClear onChange={(date, dateString) => console.log(date, dateString)} />
                    </div>
                )
            }, [])}
            <HighLight code={CodeRange} />

            {/* 日期格式 */}
            <h2>日期格式</h2>
            <p>使用 format 属性，可以自定义日期显示格式。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Row gutter={16}>
                                <Col>
                                    <DatePicker
                                        defaultValue={new Date(2020, 0)}
                                        allowClear
                                        format={'yyyy/MM/dd'}
                                        onChange={(date, dateString) => console.log(date, dateString)}
                                    />
                                </Col>
                                <Col>
                                    <DatePicker
                                        defaultValue={new Date(2020, 0)}
                                        allowClear
                                        format={'MM/dd/yyyy'}
                                        onChange={(date, dateString) => console.log(date, dateString)}
                                    />
                                </Col>
                            </Row>
                        </div>
                        <div className="detail-box">
                            <Row gutter={16}>
                                <Col>
                                    <MonthPicker
                                        defaultValue={new Date(2020, 0)}
                                        allowClear
                                        format={'yyyy/MM'}
                                        onChange={(date, dateString) => console.log(date, dateString)}
                                    />
                                </Col>
                                <Col>
                                    <RangePicker
                                        defaultValue={[new Date(2020, 0), new Date(2020, 1)]}
                                        allowClear
                                        format={'yyyy/MM/dd'}
                                        onChange={(date, dateString) => console.log(date, dateString)}
                                    />
                                </Col>
                            </Row>
                        </div>
                    </>
                )
            }, [])}
            <HighLight code={CodeFormat} />

            {/* 三种大小 */}
            <h2>三种大小</h2>
            <p>三种大小的输入框。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Radio.Group value={size} onChange={e => onSizeChange(e.target.value)}>
                                <Radio.Button value={'large'}>Large</Radio.Button>
                                <Radio.Button value={''}>Default</Radio.Button>
                                <Radio.Button value={'small'}>Small</Radio.Button>
                            </Radio.Group>
                        </div>
                        <div className="detail-box">
                            <Row gutter={16}>
                                <Col>
                                    <DatePicker allowClear size={size || undefined} onChange={(date, dateString) => console.log(date, dateString)} />
                                </Col>
                                <Col>
                                    <WeekPicker allowClear size={size || undefined} onChange={(date, dateString) => console.log(date, dateString)} />
                                </Col>
                            </Row>
                        </div>
                        <div className="detail-box">
                            <Row gutter={16}>
                                <Col>
                                    <MonthPicker allowClear size={size || undefined} onChange={(date, dateString) => console.log(date, dateString)} />
                                </Col>
                                <Col>
                                    <RangePicker allowClear size={size || undefined} onChange={(date, dateString) => console.log(date, dateString)} />
                                </Col>
                            </Row>
                        </div>
                    </>
                )
            }, [size])}
            <HighLight code={CodeSize} />

            {/* 日期时间选择 */}
            <h2>日期时间选择</h2>
            <p>配置 showTime 属性，增加选择时间功能。</p>
            <p>当 showTime 为一个对象时，其属性会传递给内建的 TimePicker。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Row gutter={16}>
                            <Col>
                                <DatePicker
                                    // defaultValue={new Date('2018-12-11 13:14:15')}
                                    allowClear
                                    /*showTime={{
                                        defaultOpenValue: new Date('2018-12-10 13:12:11')
                                    }}*/
                                    showTime
                                    onChange={(date, dateString) => console.log(date, dateString)}
                                />
                            </Col>
                            <Col>
                                <RangePicker
                                    // defaultValue={[new Date('2019-12-11 13:14:15'), new Date('2018-12-22 17:24:31')]}
                                    allowClear
                                    showTime
                                    onChange={(date, dateString) => console.log(date, dateString)}
                                />
                            </Col>
                        </Row>
                    </div>
                )
            }, [])}
            <HighLight code={CodeShowTime} />

            {/* 禁用 */}
            <h2>禁用</h2>
            <p>选择框的不可用状态。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Row gutter={16}>
                                <Col>
                                    <DatePicker defaultValue={new Date('2020-01-01')} disabled />
                                </Col>
                                <Col>
                                    <WeekPicker defaultValue={new Date('2020-01-01')} disabled />
                                </Col>
                            </Row>
                        </div>
                        <div className="detail-box">
                            <Row gutter={16}>
                                <Col>
                                    <MonthPicker defaultValue={new Date('2020-01-01')} disabled />
                                </Col>
                                <Col>
                                    <RangePicker defaultValue={[new Date('2020-01-01'), new Date('2020-02-01')]} disabled />
                                </Col>
                            </Row>
                        </div>
                    </>
                )
            }, [])}
            <HighLight code={CodeDisabled} />

            {/* 不可选择日期和时间 */}
            <h2>不可选择日期和时间</h2>
            <p>可用 disabledDate 和 disabledTime 分别禁止选择部分日期和时间。</p>
            <p>其中 disabledTime 需要和 showTime 一起使用。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Row gutter={16}>
                                <Col>
                                    <DatePicker
                                        allowClear
                                        showTime={{
                                            hourStep: 2,
                                            minuteStep: 5,
                                            secondStep: 10,
                                        }}
                                        disabledDate={disabledDate}
                                        disabledTime={disabledDateTime}
                                        onChange={(date, dateString) => console.log(date, dateString)}
                                    />
                                </Col>
                                <Col>
                                    <WeekPicker
                                        allowClear
                                        disabledDate={disabledDate}
                                        onChange={(date, dateString) => console.log(date, dateString)}
                                    />
                                </Col>
                            </Row>
                        </div>
                        <div className="detail-box">
                            <Row gutter={16}>
                                <Col>
                                    <MonthPicker
                                        allowClear
                                        disabledDate={disabledDate}
                                        onChange={(date, dateString) => console.log(date, dateString)}
                                    />
                                </Col>
                                <Col>
                                    <RangePicker
                                        allowClear
                                        showTime={{
                                            defaultOpenValue: new Date('2019-12-11 02:15:40'),
                                            hourStep: 2,
                                            minuteStep: 5,
                                            secondStep: 10,
                                            hideDisabledOptions: true,
                                        }}
                                        disabledDate={disabledDate}
                                        disabledTime={disabledRangeTime}
                                        onChange={(date, dateString) => console.log(date, dateString)}
                                        // defaultValue={[new Date('2020-01-01'), new Date('2020-02-01')]}
                                    />
                                </Col>
                            </Row>
                        </div>
                    </>
                )
            }, [])}
            <HighLight code={CodeDisabledDate} />

            {/* 自定义日期范围选择 */}
            <h2>自定义日期范围选择</h2>
            <p>当 RangePicker 无法满足业务需求时，可以使用两个 DatePicker 实现类似的功能。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Row gutter={16}>
                            <Col>
                                <DatePicker
                                    value={startValue}
                                    onChange={onStartChange}
                                    onVisibleChange={onStartVisibleChange}
                                    allowClear
                                    showTime
                                    placeholder={'开始日期'}
                                    disabledDate={disabledStartDate}
                                />
                            </Col>
                            <Col>
                                <DatePicker
                                    value={endValue}
                                    onChange={onEndChange}
                                    visible={endVisible}
                                    onVisibleChange={onEndVisibleChange}
                                    allowClear
                                    showTime
                                    placeholder={'结束日期'}
                                    disabledDate={disabledEndDate}
                                />
                            </Col>
                        </Row>
                    </div>
                )
            }, [startValue, endValue, endVisible, disabledStartDate, disabledEndDate])}
            <HighLight code={CodeCustomRange} />

            {/* 额外的页脚 */}
            <h2>额外的页脚</h2>
            <p>在浮层中加入额外的页脚，以满足某些定制信息的需求。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Row gutter={16}>
                                <Col>
                                    <DatePicker
                                        allowClear
                                        renderExtraFooter={(_, setValue) => {
                                            return (
                                                <Row type={'flex'} justify={'center'}>
                                                    <Col>
                                                        <Button
                                                            type={'text'}
                                                            onClick={() => setValue(startOfYesterday())}
                                                        >
                                                            昨天
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            )
                                        }}
                                        onChange={(date, dateString) => console.log(date, dateString)}
                                    />
                                </Col>
                                <Col>
                                    <DatePicker
                                        allowClear
                                        showTime
                                        renderExtraFooter={(_, setValue) => {
                                            return (
                                                <Button
                                                    type={'text'}
                                                    onClick={() => setValue(subDays(new Date(), 1))}
                                                >
                                                    昨日
                                                </Button>
                                            )
                                        }}
                                        onChange={(date, dateString) => console.log(date, dateString)}
                                    />
                                </Col>
                                <Col>
                                    <WeekPicker
                                        allowClear
                                        renderExtraFooter={(_, setValue) => {
                                            return (
                                                <Button
                                                    type={'text'}
                                                    onClick={() => setValue(startOfWeek(new Date(), { weekStartsOn: 1 }))}
                                                >
                                                    本周
                                                </Button>
                                            )
                                        }}
                                        onChange={(date, dateString) => console.log(date, dateString)}
                                    />
                                </Col>
                            </Row>
                        </div>
                        <div className="detail-box">
                            <Row gutter={16}>
                                <Col>
                                    <MonthPicker
                                        allowClear
                                        renderExtraFooter={(_, setValue) => {
                                            return (
                                                <Row type={'flex'} justify={'space-between'}>
                                                    <Col>
                                                        <Button
                                                            type={'text'}
                                                            onClick={() => setValue(subMonths(startOfDay(new Date), 1))}
                                                        >
                                                            上个月
                                                        </Button>
                                                    </Col>
                                                    <Col>
                                                        <Button
                                                            type={'text'}
                                                            onClick={() => setValue(addMonths(startOfDay(new Date), 1))}
                                                        >
                                                            下个月
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            )
                                        }}
                                        onChange={(date, dateString) => console.log(date, dateString)}
                                    />
                                </Col>
                                <Col>
                                    <RangePicker
                                        allowClear
                                        renderExtraFooter={(_, setValue) => {
                                            return (
                                                <Button
                                                    type={'text'}
                                                    onClick={() => setValue([
                                                        startOfDay(subDays(new Date(), 14)),
                                                        endOfDay(subDays(new Date(), 1))
                                                    ])}
                                                >
                                                    近2周
                                                </Button>
                                            )
                                        }}
                                        onChange={(date, dateString) => console.log(date, dateString)}
                                    />
                                </Col>
                                <Col>
                                    <RangePicker
                                        allowClear
                                        showTime
                                        renderExtraFooter={(_, setValue) => {
                                            return (
                                                <Button
                                                    type={'text'}
                                                    onClick={() => setValue([
                                                        startOfDay(subDays(new Date(), 7)),
                                                        endOfDay(subDays(new Date(), 1))
                                                    ])}
                                                >
                                                    近7天
                                                </Button>
                                            )
                                        }}
                                        onChange={(date, dateString) => console.log(date, dateString)}
                                    />
                                </Col>
                            </Row>
                        </div>
                    </>
                )
            }, [])}
            <HighLight code={CodeExtraFooter} />

            {/* 定值日期单元格 */}
            <h2>定值日期单元格</h2>
            <p>使用 dateRender 可以自定义日期单元格的内容和样式。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Row gutter={16}>
                            <Col>
                                <DatePicker
                                    allowClear
                                    onChange={(date, dateString) => console.log(date, dateString)}
                                    dateRender={dateRender}
                                />
                            </Col>
                            <Col>
                                <RangePicker
                                    allowClear
                                    onChange={(date, dateString) => console.log(date, dateString)}
                                    dateRender={dateRender}
                                />
                            </Col>
                        </Row>
                    </div>
                )
            }, [])}
            <HighLight code={CodeDateRender} />

            {/* API */}
            <ApiTable title='Common' propsList={commonProps} eventsList={commonEvents} />
            <ApiTable title='DatePicker' propsList={datePickerProps} eventsList={datePickerEvents} />
            <ApiTable title='MonthPicker' propsList={monthPickerProps} />
            <ApiTable title='WeekPicker' propsList={weekPickerProps} />
            <ApiTable title='RangePicker' propsList={rangePickerProps} eventsList={rangePickerEvents} />
        </div>
    )
}

export default DatePickerDoc;