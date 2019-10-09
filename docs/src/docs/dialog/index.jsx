import React, { useState, useMemo, useCallback } from 'react';
import { Dialog, Button } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

function DialogDoc() {
    const [visible, setVisible] = useState(false);

    const [visibleAsync, setVisibleAsync] = useState(false);
    const [loading, setLoading] = useState(false);

    const [visibleFooter, setVisibleFooter] = useState(false);

    const [visibleBtnProps, setVisibleBtnProps] = useState(false);

    const handleOk = useCallback(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setVisibleAsync(false);
        }, 2000)
    }, [setLoading, setVisibleAsync]);

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
            footer: [
                <Button key={'cancel'} onClick={() => destroy()}>Cancel</Button>,
                <Button key={'ok'} type='success'>Delete</Button>
            ]
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

    const showCloseTimeout = useCallback(() => {
        let seconds = 5;
        const { destroy, update } = Dialog.success({
            title: 'This is a notification message',
            content: `It will be destroyed after ${seconds} second.`,
            onOk: () => {
                clearInterval(timer);
                destroy();
            }
        });
        const timer = setInterval(() => {
            seconds--;
            update({
                content: `It will be destroyed after ${seconds} second.`,
            })
            if(seconds === 0) {
                clearInterval(timer);
                destroy();
            }
        }, 1000);
    }, [])

    const showDestroyAll = useCallback(() => {
        for(let i = 0; i < 3; i++) {
            setTimeout(() => {
                Dialog.confirm({
                    title: 'This is a notification message',
                    content: <Button plain onClick={Dialog.destroyAll}>Click to destroy all</Button>,
                });
            }, i * 500);
        }
    }, [])

    return (
        <div className='page-box'>
            <h1>Dialog 对话框</h1>
            <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>Dialog 弹出一个对话框，适合需要定制性更大的场景。</p>
            <Button type={'primary'} onClick={() => setVisible(v => !v)}>Open Dialog</Button>
            {
                useMemo(() => {
                    return (
                        <Dialog title={'Basic'} visible={visible} onCancel={() => setVisible(false)}>
                            <p>This is a paragraph</p>
                            <p>This is a paragraph</p>
                            <p>This is a paragraph</p>
                        </Dialog>
                    )
                }, [visible, setVisible])
            }

            {/* 异步关闭 */}
            <h2>异步关闭</h2>
            <p>点击确定后异步关闭对话框，例如提交表单。</p>
            <Button type={'primary'} onClick={() => setVisibleAsync(v => !v)}>Async logic</Button>
            {
                useMemo(() => {
                    return (
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
                    )
                }, [visibleAsync, setVisibleAsync, loading, handleOk])
            }

            {/* 自定义页脚 */}
            <h2>自定义页脚</h2>
            <p>通过配置 footer 自定义页脚的按钮。</p>
            <p>当不需要页脚时，可以将 footer 设为 null。</p>
            <Button type={'primary'} onClick={() => setVisibleFooter(v => !v)}>Customized footer</Button>
            {
                useMemo(() => {
                    return (
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
                    )
                }, [visibleFooter, setVisibleFooter])
            }

            {/* 页脚按钮属性 */}
            <h2>页脚按钮属性</h2>
            <p>传入 okButtonProps 和 cancelButtonProps 可分别自定义确定按钮和取消按钮的 props。</p>
            <Button type={'primary'} onClick={() => setVisibleBtnProps(v => !v)}>Customized button props</Button>
            {
                useMemo(() => {
                    return (
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
                    )
                }, [visibleBtnProps, setVisibleBtnProps])
            }

            {/* 确认对话框 */}
            <h2>确认对话框</h2>
            <p>使用 confirm() 可以快捷地弹出确认框。</p>
            {useMemo(() => {
                return (
                    <>
                        <Button plain onClick={showConfirm}>Confirm</Button>
                        <Button plain onClick={showDeleteConfirm}>Delete</Button>
                        <Button plain onClick={showFooterConfirm}>Customized footer</Button>
                        <Button plain onClick={showAsyncLogic}>Async logic</Button>
                    </>
                )
            }, [showConfirm, showDeleteConfirm, showFooterConfirm])}

            {/* 信息提示 */}
            <h2>信息提示</h2>
            <p>各种类型的信息提示，只提供一个按钮用于关闭。</p>
            {useMemo(() => {
                return (
                    <>
                        <Button type={'primary'} plain onClick={info}>Info</Button>
                        <Button type={'success'} plain onClick={success}>Success</Button>
                        <Button type={'danger'} plain onClick={error}>Error</Button>
                        <Button type={'warning'} plain onClick={warning}>Warning</Button>
                    </>
                )
            }, [info, success, error, warning])}

            {/* 手动更新和移除 */}
            <h2>手动更新和移除</h2>
            <p>手动更新和关闭 Dialog.method 方式创建的对话框。</p>
            {useMemo(() => {
                return (
                    <>
                        <Button plain onClick={showCloseTimeout}>Close in 5s</Button>
                    </>
                )
            }, [info, success, error, warning])}

            {/* 销毁确认对话框 */}
            <h2>销毁确认对话框</h2>
            <p>使用 Dialog.destroyAll() 可以销毁弹出的确认窗。通常用于路由监听当中，处理路由前进、后退不能销毁确认对话框的问题。</p>
            {useMemo(() => {
                return (
                    <>
                        <Button plain onClick={showDestroyAll}>Destroy all</Button>
                    </>
                )
            }, [info, success, error, warning])}

            {/* API */}
            {/*{useMemo(() => <ApiTable title='Button' propsList={buttonProps} eventsList={buttonEvents} />, [])}*/}
        </div>
    )
}

export default DialogDoc;