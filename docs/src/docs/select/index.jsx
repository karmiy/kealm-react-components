import React, { useState, useMemo } from 'react';
import { Select, Row, Col } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';
import { remoteOptions } from './data';

const { Option, Group } = Select;

function SelectDoc() {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState(['1']);
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);

    const onRemote = (value) => {
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
    }

    return (
        <div className='page-box'>
            <h1>Select 选择器</h1>
            <p>当选项过多时，使用下拉菜单展示并选择内容。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>适用广泛的基础单选。</p>
            <div className="detail-box">
                <Select>
                    <Option value={'1'} label={'Karmiy'}>Karmiy</Option>
                    <Option value={'2'} label={'Karloy'}>Karloy</Option>
                    <Option value={'3'} label={'Peppa'}>Peppa</Option>
                    <Option value={'4'} label={'George'}>George</Option>
                    <Option value={'5'} label={'Hawk'}>Hawk</Option>
                    {/*{Array(1000).fill('').map((item, index) => {
                        return <Option key={index} value={index + 6} label={'Hawk'}>Hawk</Option>
                    })}*/}
                </Select>
            </div>

            {/* 禁用选项 */}
            <h2>禁用选项</h2>
            <p>在 Option 上设定 disabled 值为 true，即可禁用该选项。</p>
            <div className="detail-box">
                <Select>
                    <Option value={'1'} label={'Karmiy'}>Karmiy</Option>
                    <Option value={'2'} label={'Karloy'}>Karloy</Option>
                    <Option value={'3'} label={'Peppa'} disabled>Peppa</Option>
                    <Option value={'4'} label={'George'} disabled>George</Option>
                    <Option value={'5'} label={'Hawk'}>Hawk</Option>
                </Select>
            </div>

            {/* 禁用状态 */}
            <h2>禁用状态</h2>
            <p>选择器不可用状态。</p>
            <div className="detail-box">
                <Select disabled>
                    <Option value={'1'} label={'Karmiy'}>Karmiy</Option>
                    <Option value={'2'} label={'Karloy'}>Karloy</Option>
                    <Option value={'3'} label={'Peppa'}>Peppa</Option>
                    <Option value={'4'} label={'George'}>George</Option>
                    <Option value={'5'} label={'Hawk'}>Hawk</Option>
                </Select>
            </div>

            {/* 基础多选 */}
            <h2>基础多选</h2>
            <p>适用性较广的基础多选，用 Tag 展示已选项。</p>
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

            {/* 可清空 */}
            <h2>可清空</h2>
            <p>包含清空按钮，可将选择器清空为初始状态。</p>
            <div className="detail-box">
                <Row gutter={16}>
                    <Col>
                        <Select clearable>
                            <Option value={'1'} label={'Karmiy'}>Karmiy</Option>
                            <Option value={'2'} label={'Karloy'}>Karloy</Option>
                            <Option value={'3'} label={'Peppa'}>Peppa</Option>
                            <Option value={'4'} label={'George'}>George</Option>
                            <Option value={'5'} label={'Hawk'}>Hawk</Option>
                        </Select>
                    </Col>
                    <Col>
                        <Select clearable multiple>
                            <Option value={'1'} label={'Karmiy'}>Karmiy</Option>
                            <Option value={'2'} label={'Karloy'}>Karloy</Option>
                            <Option value={'3'} label={'Peppa'}>Peppa</Option>
                            <Option value={'4'} label={'George'}>George</Option>
                            <Option value={'5'} label={'Hawk'}>Hawk</Option>
                        </Select>
                    </Col>
                </Row>
            </div>

            {/* 自定义模板 */}
            <h2>自定义模板</h2>
            <p>自定义下拉显示文本。</p>
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

            {/* 分组 */}
            <h2>分组</h2>
            <p>备选项进行分组展示。</p>
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

            {/* 可搜索 */}
            <h2>可搜索</h2>
            <p>可以利用 filterable 开启搜索功能快速查找选项。</p>
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

            {/* 远程搜索 */}
            <h2>远程搜索</h2>
            <p>从服务器搜索数据，输入关键字进行查找。</p>
            <div className="detail-box">
                <Select multiple loading={loading} remote onRemote={onRemote}>
                    {options.map(option => {
                        return <Option key={option} value={option} label={option}>{option}</Option>
                    })}
                </Select>
            </div>

            {/* API */}
            {/*{useMemo(() => <ApiTable title='Button' propsList={buttonProps} eventsList={buttonEvents} />, [])}*/}
        </div>
    )
}

export default SelectDoc;