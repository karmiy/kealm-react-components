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

/* Dialog.method */
export const CodeMethod =
`    import { Dialog } from "@kealm/react-components"

    const { update, destroy } = Dialog.success({
        title: '原本的标题',
        content: '原本的内容',
    });

    update({
      title: '修改的标题',
      content: '修改的内容',
    });
    
    destroy(); // 销毁对话框
    
    Dialog.error({
        title: '错误的标题',
        content: '错误的内容',
    });
    
    Dialog.destroyAll(); // 销毁全部对话框`