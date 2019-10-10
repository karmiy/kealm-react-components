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

/* 异步关闭 */
export const CodeAsync =
`    import { useState, useCallback } from 'react';
    import { Dialog, Button } from "@kealm/react-components";
    
    
    function Demo() {
        const [visibleAsync, setVisibleAsync] = useState(false);
        const [loading, setLoading] = useState(false);
        
        const handleOk = useCallback(() => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setVisibleAsync(false);
            }, 2000)
        }, [setLoading, setVisibleAsync]);
        
        return (
            <div>
                <Button type={'primary'} onClick={() => setVisibleAsync(v => !v)}>Async logic</Button>
                <Dialog
                    visible={visibleAsync}
                    title={'Async Logic'}
                    confirmLoading={loading}
                    onCancel={() => setVisibleAsync(false)}
                    onOk={handleOk}
                >
                    <p>This is a paragraph</p>
                    <p>This is a paragraph</p>
                    <p>This is a paragraph</p>
                </Dialog>
            </div>
        )
    }`

/* 自定义页脚 */
export const CodeFooter =
`    import { useState } from 'react';
    import { Dialog, Button } from "@kealm/react-components";
    
    
    function Demo() {
        const [visibleFooter, setVisibleFooter] = useState(false);
        
        return (
            <div>
                <Button type={'primary'} onClick={() => setVisibleFooter(v => !v)}>Customized footer</Button>
                <Dialog
                    visible={visibleFooter}
                    title={'Custom Footer'}
                    onCancel={() => setVisibleFooter(false)}
                    footer={[
                        <Button key={'cancel'} onClick={() => setVisibleFooter(false)}>关闭</Button>,
                        <Button key={'submit'} type='success' onClick={() => setVisibleFooter(false)}>提交</Button>
                    ]}
                >
                    <p>This is a paragraph</p>
                    <p>This is a paragraph</p>
                    <p>This is a paragraph</p>
                </Dialog>
            </div>
        )
    }`

/* 页脚按钮属性 */
export const CodeButtonProps =
`    import { useState } from 'react';
    import { Dialog, Button } from "@kealm/react-components";
    
    
    function Demo() {
        const [visibleBtnProps, setVisibleBtnProps] = useState(false);
        
        return (
            <div>
                <Button type={'primary'} onClick={() => setVisibleBtnProps(v => !v)}>Customized button props</Button>
                <Dialog
                    visible={visibleBtnProps}
                    title={'Customized Button Props'}
                    onCancel={() => setVisibleBtnProps(false)}
                    okButtonProps={{disabled: true}}
                    cancelButtonProps={{disabled: true}}
                >
                    <p>This is a paragraph</p>
                    <p>This is a paragraph</p>
                    <p>This is a paragraph</p>
                </Dialog>
            </div>
        )
    }`

/* 自定义位置 */
export const CodeCustomPosition =
`    import { useState } from 'react';
    import { Dialog, Button } from "@kealm/react-components";
    
    
    function Demo() {
        const [visibleCustomTop, setVisibleCustomTop] = useState(false);
        const [visibleCenter, setVisibleCenter] = useState(false);
        
        return (
            <div>
                <Button type={'primary'} onClick={() => setVisibleCustomTop(v => !v)}>Dialog at 20px to Top</Button>
                <Button type={'primary'} onClick={() => setVisibleCenter(v => !v)}>Vertically centered dialog</Button>
                <Dialog
                    visible={visibleCustomTop}
                    title={'20px to Top'}
                    style={{top: '20px'}}
                    onCancel={() => setVisibleCustomTop(false)}
                >
                    <p>This is a paragraph</p>
                    <p>This is a paragraph</p>
                    <p>This is a paragraph</p>
                </Dialog>
                <Dialog
                    visible={visibleCenter}
                    title={'Vertically centered dialog'}
                    center
                    onCancel={() => setVisibleCenter(false)}
                >
                    <p>This is a paragraph</p>
                    <p>This is a paragraph</p>
                    <p>This is a paragraph</p>
                </Dialog>
            </div>
        )
    }`

/* 确认对话框 */
export const CodeConfirm =
`    import { useState, useCallback } from 'react';
    import { Dialog, Button } from "@kealm/react-components";
    
    
    function Demo() {
        const showConfirm = useCallback(() => {
        Dialog.confirm({
                title: 'Are you sure delete this task?',
                content: 'This is a paragraph',
            });
        }, []);
    
        const showDeleteConfirm = useCallback(() => {
            Dialog.confirm({
                title: 'Are you sure delete this task?',
                content: 'This is a paragraph',
                okButtonProps: {
                    type: 'danger',
                },
            });
        }, []);
    
        const showFooterConfirm = useCallback(() => {
            const { destroy } = Dialog.confirm({
                title: 'Are you sure delete this task?',
                content: 'This is a paragraph',
                footer: (
                    <>
                        <Button key={'cancel'} onClick={() => destroy()}>Cancel</Button>
                        <Button key={'ok'} type='success'>Delete</Button>
                    </>
                ),
            });
        }, []);
    
        const showAsyncLogic = useCallback(() => {
            Dialog.confirm({
                title: 'Are you sure delete this task?',
                content: 'This is a paragraph',
                onOk: () => {
                    return new Promise(resolve => {
                        setTimeout(() => {
                            resolve('success');
                        }, 2000);
                    })
                },
                afterOk: (e, info, status) => {
                    console.log(e, info, status);
                }
            });
        }, []);
        
        return (
            <div>
                <Button plain onClick={showConfirm}>Confirm</Button>
                <Button plain onClick={showDeleteConfirm}>Delete</Button>
                <Button plain onClick={showFooterConfirm}>Customized footer</Button>
                <Button plain onClick={showAsyncLogic}>Async logic</Button>
            </div>
        )
    }`

/* 信息提示 */
export const CodeInfoTip =
`    import { useState, useCallback } from 'react';
    import { Dialog, Button } from "@kealm/react-components";
    
    
    function Demo() {
        const info = useCallback(() => {
           Dialog.info({
               title: 'This is a notification message',
               content: (
                   <>
                       <p>This is a paragraph</p>
                       <p>This is a paragraph</p>
                       <p>This is a paragraph</p>
                   </>
               ),
           });
        }, []);
    
        const success = useCallback(() => {
            Dialog.success({
                title: 'This is a notification message',
                content: (
                    <>
                        <p>This is a paragraph</p>
                        <p>This is a paragraph</p>
                        <p>This is a paragraph</p>
                    </>
                ),
            });
        }, []);
    
        const error = useCallback(() => {
            Dialog.error({
                title: 'This is a notification message',
                content: (
                    <>
                        <p>This is a paragraph</p>
                        <p>This is a paragraph</p>
                        <p>This is a paragraph</p>
                    </>
                ),
            });
        }, []);
    
        const warning = useCallback(() => {
            Dialog.warning({
                title: 'This is a notification message',
                content: (
                    <>
                        <p>This is a paragraph</p>
                        <p>This is a paragraph</p>
                        <p>This is a paragraph</p>
                    </>
                ),
            });
        }, []);
        
        return (
            <div>
                <Button type={'primary'} plain onClick={info}>Info</Button>
                <Button type={'success'} plain onClick={success}>Success</Button>
                <Button type={'danger'} plain onClick={error}>Error</Button>
                <Button type={'warning'} plain onClick={warning}>Warning</Button>
            </div>
        )
    }`

/* 手动更新和移除 */
export const CodeCloseTimeout =
`    import { useState, useCallback } from 'react';
    import { Dialog, Button } from "@kealm/react-components";
    
    
    function Demo() {
        const showCloseTimeout = useCallback(() => {
            let seconds = 5;
            const { destroy, update } = Dialog.success({
                title: 'This is a notification message',
                content: \`It will be destroyed after \${seconds\} second.\`,
                onOk: () => {
                    clearInterval(timer);
                    destroy();
                }
            });
            const timer = setInterval(() => {
                seconds--;
                update({
                    content: \`It will be destroyed after \${seconds\} second.\`,
                })
                if(seconds === 0) {
                    clearInterval(timer);
                    destroy();
                }
            }, 1000);
        }, []);
        
        return (
            <Button plain onClick={showCloseTimeout}>Close in 5s</Button>
        )
    }`

/* 销毁确认对话框 */
export const CodeDestroyAll =
`    import { useState, useCallback } from 'react';
    import { Dialog, Button } from "@kealm/react-components";
    
    
    function Demo() {
        const showDestroyAll = useCallback(() => {
            for(let i = 0; i < 3; i++) {
                setTimeout(() => {
                    Dialog.confirm({
                        title: 'This is a notification message',
                        content: <Button plain onClick={Dialog.destroyAll}>Click to destroy all</Button>,
                    });
                }, i * 500 + 100);
            }
        }, []);
        
        return (
            <Button plain onClick={showDestroyAll}>Destroy all</Button>
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