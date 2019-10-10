/* 基本用法 */
export const CodeBasic =
`    import { useState } from 'react';
    import { Dialog, Button } from "@kealm/react-components";
    
    
    function Demo() {
        const [visible, setVisible] = useState(false);
        
        return (
            <div>
                <Button type={'primary'} onClick={() => setVisible(v => !v)}>Open Dialog</Button>
                <Dialog title={'Basic'} visible={visible} onCancel={() => setVisible(false)}>
                    <p>This is a paragraph</p>
                    <p>This is a paragraph</p>
                    <p>This is a paragraph</p>
                </Dialog>
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