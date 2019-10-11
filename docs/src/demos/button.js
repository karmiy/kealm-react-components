/* 基本用法 */
export const CodeBasic =
`    import { Button } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <div className="detail-box">
                <Button>默认按钮</Button>
                <Button type='primary'>基本按钮</Button>
                <Button type='success'>成功按钮</Button>
                <Button type='info'>信息按钮</Button>
                <Button type='warning'>警告按钮</Button>
                <Button type='danger'>危险按钮</Button>
            </div>
            <div className="detail-box">
                <Button plain>默认按钮</Button>
                <Button type='primary' plain>基本按钮</Button>
                <Button type='success' plain>成功按钮</Button>
                <Button type='info' plain>信息按钮</Button>
                <Button type='warning' plain>警告按钮</Button>
                <Button type='danger' plain>危险按钮</Button>
            </div>
            <div className="detail-box">
                <Button round>默认按钮</Button>
                <Button type='primary' round>基本按钮</Button>
                <Button type='success' round>成功按钮</Button>
                <Button type='info' round>信息按钮</Button>
                <Button type='warning' round>警告按钮</Button>
                <Button type='danger' round>危险按钮</Button>
            </div>
            <div className="detail-box">
                <Button circle icon='star-full'></Button>
                <Button type='primary' circle icon='droplet'></Button>
                <Button type='success' circle icon='phone'></Button>
                <Button type='info' circle icon='alarm'></Button>
                <Button type='warning' circle icon='power'></Button>
                <Button type='danger' circle icon='heart'></Button>
            </div>
        <div/>,
        mountNode
    );`

/* 禁用按钮 */
export const CodeDisabled =
`    import { Button } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <div className="detail-box">
                <Button disabled>默认按钮</Button>
                <Button type='primary' disabled>基本按钮</Button>
                <Button type='success' disabled>成功按钮</Button>
                <Button type='info' disabled>信息按钮</Button>
                <Button type='warning' disabled>警告按钮</Button>
                <Button type='danger' disabled>危险按钮</Button>
            </div>
            <div className="detail-box">
                <Button disabled>默认按钮</Button>
                <Button type='primary' plain disabled>基本按钮</Button>
                <Button type='success' plain disabled>成功按钮</Button>
                <Button type='info' plain disabled>信息按钮</Button>
                <Button type='warning' plain disabled>警告按钮</Button>
                <Button type='danger' plain disabled>危险按钮</Button>
            </div>
        <div/>,
        mountNode
    );`

/* 文字按钮 */
export const CodeText =
`    import { Button } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <Button type='text'>文字按钮</Button>
            <Button type='text' disabled>文字按钮</Button>
        </div>,
        mountNode
    );`

/* 图标按钮 */
export const CodeIcon =
`    import { Button } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <Button icon='star-full'></Button>
            <Button type='primary' circle icon='droplet'></Button>
            <Button type='primary' plain icon='phone'>图标按钮</Button>
            <Button round icon='alarm' iconRight={true}>图标按钮</Button>
        </div>,
        mountNode
    );`

/* 按钮组 */
export const CodeGroup =
`    import { Button } from "@kealm/react-components";
    
    const Group = Button.Group;
    
    ReactDom.render(
        <div>
            <Group>
                <Button type='primary' icon='left'>上一页</Button>
                <Button type='primary' icon='right'>下一页</Button>
            </Group>
            <Group>
                <Button type='primary' icon='phone'></Button>
                <Button type='success' icon='alarm'></Button>
                <Button type='warning' icon='power'></Button>
                <Button type='danger' icon='heart'></Button>
            </Group>
            <Group>
                <Button type='primary' icon='left' circle plain></Button>
                <Button type='success' plain>1</Button>
                <Button type='info' plain>2</Button>
                <Button type='warning' plain>3</Button>
                <Button type='danger' icon='right' circle plain></Button>
            </Group>
            <Group>
                <Button type='text'>确定</Button>
                <Button type='text'>取消</Button>
            </Group>
        </div>,
        mountNode
    );`

/* 加载中 */
export const CodeLoading =
`    import { useState } from 'react';
    import { Button } from "@kealm/react-components";
    
    function Demo() {
        const [loading, setLoading] = useState(true);
        
        return (
            <div>
                <div className="detail-box">
                    <Button plain onClick={() => setLoading(v => !v)}>Toggle Loading</Button>
                </div>
                <div className="detail-box">
                    <Button type='primary' loading={loading}>加载中</Button>
                    <Button type='success' loading={loading}>加载中</Button>
                    <Button type='info' loading={loading}>加载中</Button>
                    <Button type='warning' loading={loading}>加载中</Button>
                    <Button type='danger' loading={loading}>加载中</Button>
                </div>
                <div className="detail-box">
                    <Button type='primary' plain loading={loading}>加载中</Button>
                    <Button type='success' plain loading={loading}>加载中</Button>
                    <Button type='info' plain loading={loading}>加载中</Button>
                    <Button type='warning' plain loading={loading}>加载中</Button>
                    <Button type='danger' plain loading={loading}>加载中</Button>
                </div>
            </div>
        )
    }`

/* 按钮尺寸 */
export const CodeSize =
`    import { useState } from 'react';
    import { Button } from "@kealm/react-components";
    
    const Group = Button.Group;
    
    function Demo() {
        const [size, setSize] = useState('large');
        
        return (
            <div>
                <div className="detail-box">
                    <Group>
                        <Button plain active={size === 'large'} onClick={() => setSize('large')}>Large</Button>
                        <Button plain active={size === ''} onClick={() => setSize('')}>Default</Button>
                        <Button plain active={size === 'small'} onClick={() => setSize('small')}>Small</Button>
                    </Group>
                </div>
                <div className="detail-box">
                    <Button type='primary' size={size}>基本按钮</Button>
                    <Button type='success' size={size}>成功按钮</Button>
                    <Button type='warning' size={size}>警告按钮</Button>
                </div>
                <div className="detail-box">
                    <Button type='primary' plain round size={size}>基本按钮</Button>
                    <Button type='success' plain round size={size}>成功按钮</Button>
                    <Button type='warning' plain round size={size}>警告按钮</Button>
                </div>
            </div>
        )
    }`