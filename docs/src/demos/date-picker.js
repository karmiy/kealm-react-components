/* 基本用法 */
import {Col, Row} from "../../packages/components/cores/grid";
import {DatePicker} from "@kealm/react-components";

export const CodeBasic =
`    import { DatePicker } from "@kealm/react-components";
    
    ReactDom.render(
        <DatePicker onChange={(date, dateString) => console.log(date, dateString)}></DatePicker>,
        mountNode
    );`

/* 可清空 */
export const CodeAllowClear =
`    import { DatePicker } from "@kealm/react-components";
    
    ReactDom.render(
        <DatePicker allowClear onChange={(date, dateString) => console.log(date, dateString)}></DatePicker>,
        mountNode
    );`

/* 其他单位 */
export const CodeOtherPicker =
`    import { DatePicker, Row, Col } from "@kealm/react-components";
    
    const { MonthPicker, WeekPicker } = DatePicker;
    
    ReactDom.render(
        <Row gutter={16}>
            <Col>
                <MonthPicker allowClear onChange={(date, dateString) => console.log(date, dateString)}></MonthPicker>
            </Col>
            <Col>
                <WeekPicker allowClear onChange={(date, dateString) => console.log(date, dateString)}></WeekPicker>
            </Col>
        </Row>,
        mountNode
    );`

/* 选择日期范围 */
export const CodeRange =
`    import { DatePicker } from "@kealm/react-components";
    
    const { RangePicker } = DatePicker;
    
    ReactDom.render(
        <RangePicker allowClear onChange={(date, dateString) => console.log(date, dateString)}></RangePicker>,
        mountNode
    );`

/* 日期格式 */
export const CodeFormat =
`    import { DatePicker, Row, Col } from "@kealm/react-components";
    
    const { MonthPicker, RangePicker } = DatePicker;
    
    ReactDom.render(
        <div>
            <div className="detail-box">
                <Row gutter={16}>
                    <Col>
                        <DatePicker
                            defaultValue={new Date(2020, 0)}
                            allowClear
                            format={'yyyy/MM/dd'}
                            onChange={(date, dateString) => console.log(date, dateString)}
                        ></DatePicker>
                    </Col>
                    <Col>
                        <DatePicker
                            defaultValue={new Date(2020, 0)}
                            allowClear
                            format={'MM/dd/yyyy'}
                            onChange={(date, dateString) => console.log(date, dateString)}
                        ></DatePicker>
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
                        ></MonthPicker>
                    </Col>
                    <Col>
                        <RangePicker
                            defaultValue={[new Date(2020, 0), new Date(2020, 1)]}
                            allowClear
                            format={'yyyy/MM/dd'}
                            onChange={(date, dateString) => console.log(date, dateString)}
                        ></RangePicker>
                    </Col>
                </Row>
            </div>
        </div>,
        mountNode
    );`

/* 按钮尺寸 */
export const CodeSize =
`    import { useState, useCallback } from 'react';
    import { DatePicker, Radio, Row, Col } from "@kealm/react-components";
    
    const { MonthPicker, WeekPicker, RangePicker } = DatePicker;
    
    function Demo() {
        const [size, setSize] = useState('');
        const onSizeChange = useCallback(v => setSize(v), []);
        
        return (
            <div>
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
                            <DatePicker allowClear size={size || undefined} onChange={(date, dateString) => console.log(date, dateString)}></DatePicker>
                        </Col>
                        <Col>
                            <WeekPicker allowClear size={size || undefined} onChange={(date, dateString) => console.log(date, dateString)}></WeekPicker>
                        </Col>
                    </Row>
                </div>
                <div className="detail-box">
                    <Row gutter={16}>
                        <Col>
                            <MonthPicker allowClear size={size || undefined} onChange={(date, dateString) => console.log(date, dateString)}></MonthPicker>
                        </Col>
                        <Col>
                            <RangePicker allowClear size={size || undefined} onChange={(date, dateString) => console.log(date, dateString)}></RangePicker>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }`

/* 日期时间选择 */
export const CodeShowTime =
`    import { DatePicker, Row, Col } from "@kealm/react-components";
    
    const { RangePicker } = DatePicker;
    
    ReactDom.render(
        <Row gutter={16}>
            <Col>
                <DatePicker
                    allowClear
                    showTime
                    onChange={(date, dateString) => console.log(date, dateString)}
                ></DatePicker>
            </Col>
            <Col>
                <RangePicker
                    allowClear
                    showTime
                    onChange={(date, dateString) => console.log(date, dateString)}
                ></RangePicker>
            </Col>
        </Row>,
        mountNode
    );`

/* 禁用 */
export const CodeDisabled =
`    import { DatePicker, Row, Col } from "@kealm/react-components";
    
    const { MonthPicker, WeekPicker, RangePicker } = DatePicker;
    
    ReactDom.render(
        <div>
            <div className="detail-box">
                <Row gutter={16}>
                    <Col>
                        <DatePicker defaultValue={new Date('2020-01-01')} disabled></DatePicker>
                    </Col>
                    <Col>
                        <WeekPicker defaultValue={new Date('2020-01-01')} disabled></WeekPicker>
                    </Col>
                </Row>
            </div>
            <div className="detail-box">
                <Row gutter={16}>
                    <Col>
                        <MonthPicker defaultValue={new Date('2020-01-01')} disabled></MonthPicker>
                    </Col>
                    <Col>
                        <RangePicker defaultValue={[new Date('2020-01-01'), new Date('2020-02-01')]} disabled></RangePicker>
                    </Col>
                </Row>
            </div>
        </div>,
        mountNode
    );`

/* 不可选择日期和时间 */
export const CodeDisabledDate =
`    import { useState, useCallback } from 'react';
    import { DatePicker, Row, Col } from "@kealm/react-components";
    
    const { MonthPicker, WeekPicker, RangePicker } = DatePicker;
    
    function range(start, end) {
        const result = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    }
    
    function Demo() {
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
        
        return (
            <div>
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
                            ></DatePicker>
                        </Col>
                        <Col>
                            <WeekPicker
                                allowClear
                                disabledDate={disabledDate}
                                onChange={(date, dateString) => console.log(date, dateString)}
                            ></WeekPicker>
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
                            ></MonthPicker>
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
                            ></RangePicker>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }`

/* 自定义日期范围选择 */
export const CodeCustomRange =
`    import { useState, useCallback } from 'react';
    import { DatePicker, Row, Col } from "@kealm/react-components";
    
    const { MonthPicker, WeekPicker, RangePicker } = DatePicker;
    
    function Demo() {
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
                        ></DatePicker>
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
                        ></DatePicker>
                    </Col>
                </Row>
            </div>
        )
    }`

/* 额外的页脚 */
export const CodeExtraFooter =
`    import { DatePicker, Row, Col, Button } from "@kealm/react-components";
    
    const { MonthPicker, WeekPicker, RangePicker } = DatePicker;
    
    ReactDom.render(
        <div>
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
                        ></DatePicker>
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
                        ></DatePicker>
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
                        ></WeekPicker>
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
                        ></MonthPicker>
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
                        ></RangePicker>
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
                        ></RangePicker>
                    </Col>
                </Row>
            </div>
        </div>,
        mountNode
    );`

/* 定制日期单元格 */
export const CodeDateRender =
`    import { useCallback } from 'react';
    import { DatePicker, Row, Col } from "@kealm/react-components";
    
    const { RangePicker } = DatePicker;
    
    function Demo() {
        const dateRender = useCallback(current => {
            const style = {};
            if (current.getDate() === 1) {
                style.border = '1px solid #1890ff';
                style.borderRadius = '50%';
            }
            return <span className={'km-calendar__date'} style={style}>{current.getDate()}</span>
        }, []);
        
        return (
            <div className="detail-box">
                <Row gutter={16}>
                    <Col>
                        <DatePicker
                            allowClear
                            onChange={(date, dateString) => console.log(date, dateString)}
                            dateRender={dateRender}
                        ></DatePicker>
                    </Col>
                    <Col>
                        <RangePicker
                            allowClear
                            onChange={(date, dateString) => console.log(date, dateString)}
                            dateRender={dateRender}
                        ></RangePicker>
                    </Col>
                </Row>
            </div>
        )
    }`