/* 基本用法 */
export const CodeBasic =
`    import { Select } from "@kealm/react-components";
    
    const { Option } = Select;
    
    ReactDom.render(
        <Select>
            <Option value={'1'} label={'Karmiy'}>Karmiy</Option>
            <Option value={'2'} label={'Karloy'}>Karloy</Option>
            <Option value={'3'} label={'Peppa'}>Peppa</Option>
            <Option value={'4'} label={'George'}>George</Option>
            <Option value={'5'} label={'Hawk'}>Hawk</Option>
        </Select>,
        mountNode
    );`

/* 受控选择器 */
export const CodeControlled =
`    import { useState, useCallback } from 'react';
    import { Select } from "@kealm/react-components";
    
    const { Option } = Select;
    
    function Demo() {
        const [value, setValue] = useState('1');
        const onChange = useCallback(v => setValue(v), []);
        
        return (
            <Select value={value} onChange={onChange}>
                <Option value={'1'} label={'Karmiy'}>Karmiy</Option>
                <Option value={'2'} label={'Karloy'}>Karloy</Option>
                <Option value={'3'} label={'Peppa'}>Peppa</Option>
                <Option value={'4'} label={'George'}>George</Option>
                <Option value={'5'} label={'Hawk'}>Hawk</Option>
            </Select>
        )
    }`

/* 禁用选项 */
export const CodeDisabledOption =
`    import { Select } from "@kealm/react-components";
    
    const { Option } = Select;
    
    ReactDom.render(
        <Select>
            <Option value={'1'} label={'Karmiy'}>Karmiy</Option>
            <Option value={'2'} label={'Karloy'}>Karloy</Option>
            <Option value={'3'} label={'Peppa'} disabled>Peppa</Option>
            <Option value={'4'} label={'George'} disabled>George</Option>
            <Option value={'5'} label={'Hawk'}>Hawk</Option>
        </Select>,
        mountNode
    );`

/* 禁用状态 */
export const CodeDisabledStatus =
`    import { Select } from "@kealm/react-components";
    
    const { Option } = Select;
    
    ReactDom.render(
        <Select disabled>
            <Option value={'1'} label={'Karmiy'}>Karmiy</Option>
            <Option value={'2'} label={'Karloy'}>Karloy</Option>
            <Option value={'3'} label={'Peppa'}>Peppa</Option>
            <Option value={'4'} label={'George'}>George</Option>
            <Option value={'5'} label={'Hawk'}>Hawk</Option>
        </Select>,
        mountNode
    );`

/* 基础多选 */
export const CodeMultiple =
`    import { Select, Row, Col } from "@kealm/react-components";
    
    const { Option } = Select;
    
    ReactDom.render(
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
        </Row>,
        mountNode
    );`

/* 可清空 */
export const CodeClearable =
`    import { Select, Row, Col } from "@kealm/react-components";
    
    const { Option } = Select;
    
    ReactDom.render(
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
        </Row>,
        mountNode
    );`

/* 自定义模板 */
export const CodeCustomTemp =
`    import { Select } from "@kealm/react-components";
    
    const { Option } = Select;
    
    ReactDom.render(
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
        </Select>,
        mountNode
    );`

/* 获得选项文本 */
export const CodeLabelInValue =
`    import { Select } from "@kealm/react-components";
    
    const { Option } = Select;
    
    ReactDom.render(
        <Select defaultValue={{value: '1', label: 'Karmiy'}} labelInValue onChange={option => console.log(option)}>
            <Option value={'1'} label={'Karmiy'}>Karmiy</Option>
            <Option value={'2'} label={'Karloy'}>Karloy</Option>
            <Option value={'3'} label={'Peppa'}>Peppa</Option>
            <Option value={'4'} label={'George'}>George</Option>
            <Option value={'5'} label={'Hawk'}>Hawk</Option>
        </Select>,
        mountNode
    );`

/* 分组 */
export const CodeGroup =
`    import { Select } from "@kealm/react-components";
    
    const { Option, Group } = Select;
    
    ReactDom.render(
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
        </Select>,
        mountNode
    );`

/* 可搜索 */
export const CodeFilterable =
`    import { Select, Row, Col } from "@kealm/react-components";
    
    const { Option } = Select;
    
    ReactDom.render(
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
        </Row>,
        mountNode
    );`

/* 远程搜索 */
export const CodeRemote =
`    import { useState, useCallback } from 'react';
    import { Select } from "@kealm/react-components";
    import { remoteOptions } from './data';
    
    const { Option } = Select;
    
    function Demo() {
        const [options, setOptions] = useState([]);
        const [loading, setLoading] = useState(false);
        
        const onRemote = useCallback(value => {
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
        }, []);
        
        return (
            <Select multiple loading={loading} remote onRemote={onRemote}>
                {options.map(option => {
                    return <Option key={option} value={option} label={option}>{option}</Option>
                })}
            </Select>
        )
    }`

/* 选择器性能优化 */
export const CodeVirtualScroll =
`    import { Select } from "@kealm/react-components";
    
    const { Option } = Select;
    
    ReactDom.render(
        <Select virtualScroll>
            {Array(10000).fill('').map((item, index) => {
                return <Option key={index} value={index + 1} label={\`Item-\${index + 1}\`}>Item-{index + 1}</Option>
            })}
        </Select>,
        mountNode
    );`