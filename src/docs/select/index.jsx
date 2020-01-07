import React, { useState, useMemo, useCallback } from 'react';
import { Select, Row, Col, Button } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';
import { remoteOptions } from './data';
import { useDebounce } from 'hooks';
import { selectProps, selectEvents, groupProps, optionProps } from 'api/select';
import {
    CodeBasic,
    CodeControlled,
    CodeDisabledOption,
    CodeDisabledStatus,
    CodeMultiple,
    CodeClearable,
    CodeCustomTemp,
    CodeLabelInValue,
    CodeGroup,
    CodeFilterable,
    CodeRemote,
    CodeVirtualScroll,
} from 'demos/select';

const { Option, Group } = Select;

function SelectDoc() {
    // const [visible, setVisible] = useState(false);
    const [value, setValue] = useState('1');
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);

    const onChange = useCallback(v => setValue(v), []);

    const onRemote = useDebounce((value) => {
        if(value) {
            setLoading(true);
            setTimeout(() => {
                setOptions(remoteOptions.filter(option => {
                    return option.includes(value);
                }));
                setLoading(false);
            }, 500);
        }else {
            setOptions([]);
        }
    }, 500, {leading: false});

    return (
        <div className='page-box'>
            <h1>Select 选择器</h1>
            <p>当选项过多时，使用下拉菜单展示并选择内容。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>适用广泛的基础单选。</p>
            {
                useMemo(() => {
                    return (
                        <div className="detail-box">
                            <Select>
                                <Option value={'1'} label={'Karmiy'}>Karmiy</Option>
                                <Option value={'2'} label={'Karloy'}>Karloy</Option>
                                <Option value={'3'} label={'Peppa'}>Peppa</Option>
                                <Option value={'4'} label={'George'}>George</Option>
                                <Option value={'5'} label={'Hawk'}>Hawk</Option>
                            </Select>
                        </div>
                    )
                }, [])
            }
            <HighLight code={CodeBasic} />

            {/* 受控选择器 */}
            <h2>受控选择器</h2>
            <p>通过 value 与 onChange 配合，手动控制选择行为。</p>
            {
                useMemo(() => {
                    return (
                        <div className="detail-box">
                            <Select value={value} onChange={onChange}>
                                <Option value={'1'} label={'Karmiy'}>Karmiy</Option>
                                <Option value={'2'} label={'Karloy'}>Karloy</Option>
                                <Option value={'3'} label={'Peppa'}>Peppa</Option>
                                <Option value={'4'} label={'George'}>George</Option>
                                <Option value={'5'} label={'Hawk'}>Hawk</Option>
                            </Select>
                        </div>
                    )
                }, [value])
            }
            <HighLight code={CodeControlled} />

            {/* 禁用选项 */}
            <h2>禁用选项</h2>
            <p>在 Option 上设定 disabled 值为 true，即可禁用该选项。</p>
            {
                useMemo(() => {
                    return (
                        <div className="detail-box">
                            <Select>
                                <Option value={'1'} label={'Karmiy'}>Karmiy</Option>
                                <Option value={'2'} label={'Karloy'}>Karloy</Option>
                                <Option value={'3'} label={'Peppa'} disabled>Peppa</Option>
                                <Option value={'4'} label={'George'} disabled>George</Option>
                                <Option value={'5'} label={'Hawk'}>Hawk</Option>
                            </Select>
                        </div>
                    )
                }, [])
            }
            <HighLight code={CodeDisabledOption} />

            {/* 禁用状态 */}
            <h2>禁用状态</h2>
            <p>选择器不可用状态。</p>
            {
                useMemo(() => {
                    return (
                        <div className="detail-box">
                            <Select defaultValue={'1'} disabled allowClear>
                                <Option value={'1'} label={'Karmiy'}>Karmiy</Option>
                                <Option value={'2'} label={'Karloy'}>Karloy</Option>
                                <Option value={'3'} label={'Peppa'}>Peppa</Option>
                                <Option value={'4'} label={'George'}>George</Option>
                                <Option value={'5'} label={'Hawk'}>Hawk</Option>
                            </Select>
                        </div>
                    )
                }, [])
            }
            <HighLight code={CodeDisabledStatus} />

            {/* 基础多选 */}
            <h2>基础多选</h2>
            <p>适用性较广的基础多选，用 Tag 展示已选项。</p>
            {
                useMemo(() => {
                    return (
                        <div className="detail-box">
                            <Row gutter={16}>
                                <Col>
                                    <Select multiple>
                                        <Option value={'1'} label={'Karmiy'}>Karmiy</Option>
                                        <Option value={'2'} label={'Karloy'}>Karloy</Option>
                                        <Option value={'3'} label={'Peppa'}>Peppa</Option>
                                        <Option value={'4'} label={'George'}>George</Option>
                                        <Option value={'5'} label={'Hawk'}>Hawk</Option>
                                    </Select>
                                </Col>
                                <Col>
                                    <Select multiple collapseTags>
                                        <Option value={'1'} label={'Karmiy'}>Karmiy</Option>
                                        <Option value={'2'} label={'Karloy'}>Karloy</Option>
                                        <Option value={'3'} label={'Peppa'}>Peppa</Option>
                                        <Option value={'4'} label={'George'}>George</Option>
                                        <Option value={'5'} label={'Hawk'}>Hawk</Option>
                                    </Select>
                                </Col>
                            </Row>
                        </div>
                    )
                }, [])
            }
            <HighLight code={CodeMultiple} />

            {/* 可清空 */}
            <h2>可清空</h2>
            <p>包含清空按钮，可将选择器清空为初始状态。</p>
            {
                useMemo(() => {
                    return (
                        <div className="detail-box">
                            <Row gutter={16}>
                                <Col>
                                    <Select allowClear>
                                        <Option value={'1'} label={'Karmiy'}>Karmiy</Option>
                                        <Option value={'2'} label={'Karloy'}>Karloy</Option>
                                        <Option value={'3'} label={'Peppa'}>Peppa</Option>
                                        <Option value={'4'} label={'George'}>George</Option>
                                        <Option value={'5'} label={'Hawk'}>Hawk</Option>
                                    </Select>
                                </Col>
                                <Col>
                                    <Select allowClear multiple>
                                        <Option value={'1'} label={'Karmiy'}>Karmiy</Option>
                                        <Option value={'2'} label={'Karloy'}>Karloy</Option>
                                        <Option value={'3'} label={'Peppa'}>Peppa</Option>
                                        <Option value={'4'} label={'George'}>George</Option>
                                        <Option value={'5'} label={'Hawk'}>Hawk</Option>
                                    </Select>
                                </Col>
                            </Row>
                        </div>
                    )
                }, [])
            }
            <HighLight code={CodeClearable} />

            {/* 自定义模板 */}
            <h2>自定义模板</h2>
            <p>自定义下拉显示文本。</p>
            {
                useMemo(() => {
                    return (
                        <div className="detail-box">
                            <Select>
                                <Option value={'1'} label={'Karmiy'}>
                                    <span style={{float: 'left'}}>Karmiy</span>
                                    <span style={{float: 'right'}}>未知</span>
                                </Option>
                                <Option value={'2'} label={'Karloy'}>
                                    <span style={{float: 'left'}}>Karloy</span>
                                    <span style={{float: 'right'}}>未知</span>
                                </Option>
                                <Option value={'3'} label={'Peppa'}>
                                    <span style={{float: 'left'}}>Peppa</span>
                                    <span style={{float: 'right'}}>佩奇</span>
                                </Option>
                                <Option value={'4'} label={'George'}>
                                    <span style={{float: 'left'}}>George</span>
                                    <span style={{float: 'right'}}>乔治</span>
                                </Option>
                                <Option value={'5'} label={'Hawk'}>
                                    <span style={{float: 'left'}}>Hawk</span>
                                    <span style={{float: 'right'}}>霍克</span>
                                </Option>
                            </Select>
                        </div>
                    )
                }, [])
            }
            <HighLight code={CodeCustomTemp} />

            {/* 获得选项文本 */}
            <h2>获得选项文本</h2>
            <p>默认情况下 onChange 里只能拿到 value，如果需要拿到选中的节点文本 label，可以使用 labelInValue 属性。</p>
            <p>选中项的 label 会被包装到 value 中传递给 onChange 等函数，此时 value 是一个对象。</p>
            {
                useMemo(() => {
                    return (
                        <div className="detail-box">
                            <Select defaultValue={{value: '1', label: 'Karmiy'}} labelInValue onChange={option => console.log(option)}>
                                <Option value={'1'} label={'Karmiy'}>Karmiy</Option>
                                <Option value={'2'} label={'Karloy'}>Karloy</Option>
                                <Option value={'3'} label={'Peppa'}>Peppa</Option>
                                <Option value={'4'} label={'George'}>George</Option>
                                <Option value={'5'} label={'Hawk'}>Hawk</Option>
                            </Select>
                        </div>
                    )
                }, [])
            }
            <HighLight code={CodeLabelInValue} />

            {/* 分组 */}
            <h2>分组</h2>
            <p>备选项进行分组展示。</p>
            {
                useMemo(() => {
                    return (
                        <div className="detail-box">
                            <Select>
                                <Group label={'Manager'}>
                                    <Option value={'1'} label={'Karmiy'}>Karmiy</Option>
                                    <Option value={'2'} label={'Karloy'}>Karloy</Option>
                                </Group>
                                <Group label={'Engineer'}>
                                    <Option value={'3'} label={'Peppa'}>Peppa</Option>
                                    <Option value={'4'} label={'George'}>George</Option>
                                    <Option value={'5'} label={'Hawk'}>Hawk</Option>
                                    <Option value={'6'} label={'QiuQ'}>QiuQ</Option>
                                    <Option value={'7'} label={'DingD'}>DingD</Option>
                                </Group>
                            </Select>
                        </div>
                    )
                }, [])
            }
            <HighLight code={CodeGroup} />

            {/* 可搜索 */}
            <h2>可搜索</h2>
            <p>可以利用 filterable 开启搜索功能快速查找选项。</p>
            {
                useMemo(() => {
                    return (
                        <div className="detail-box">
                            <Row gutter={16}>
                                <Col>
                                    <Select filterable>
                                        <Option value={'1'} label={'Karmiy'}>Karmiy</Option>
                                        <Option value={'2'} label={'Karloy'}>Karloy</Option>
                                        <Option value={'3'} label={'Peppa'}>Peppa</Option>
                                        <Option value={'4'} label={'George'}>George</Option>
                                        <Option value={'5'} label={'Hawk'}>Hawk</Option>
                                    </Select>
                                </Col>
                                <Col>
                                    <Select multiple filterable>
                                        <Option value={'1'} label={'Karmiy'}>Karmiy</Option>
                                        <Option value={'2'} label={'Karloy'}>Karloy</Option>
                                        <Option value={'3'} label={'Peppa'}>Peppa</Option>
                                        <Option value={'4'} label={'George'}>George</Option>
                                        <Option value={'5'} label={'Hawk'}>Hawk</Option>
                                    </Select>
                                </Col>
                            </Row>
                        </div>
                    )
                }, [])
            }
            <HighLight code={CodeFilterable} />

            {/* 远程搜索 */}
            <h2>远程搜索</h2>
            <p>从服务器搜索数据，输入关键字进行查找。</p>
            {
                useMemo(() => {
                    return (
                        <div className="detail-box">
                            <Select multiple loading={loading} remote onRemote={onRemote}>
                                {options.map(option => {
                                    return <Option key={option} value={option} label={option}>{option}</Option>
                                })}
                            </Select>
                        </div>
                    )
                }, [loading, options])
            }
            <HighLight code={CodeRemote} />

            {/* 选择器性能优化 */}
            <h2>选择器性能优化</h2>
            <p>当 Select 的列表项过多时，会出现加载速度缓慢、卡顿等行为，造成不良的体验。</p>
            <p>通过配置 virtualScroll，可以在长列表时进行性能优化。</p>
            <p>不支持分组展示的情况。</p>
            {
                useMemo(() => {
                    return (
                        <div className="detail-box">
                            <Select virtualScroll>
                                {Array(10000).fill('').map((item, index) => {
                                    return <Option key={index} value={index + 1} label={`Item-${index + 1}`}>Item-{index + 1}</Option>
                                })}
                            </Select>
                        </div>
                    )
                }, [])
            }
            <HighLight code={CodeVirtualScroll} />

            {/* API */}
            <ApiTable title='Select' propsList={selectProps} eventsList={selectEvents} />
            <ApiTable title='Group' propsList={groupProps} />
            <ApiTable title='Option' propsList={optionProps} />
        </div>
    )
}

export default SelectDoc;