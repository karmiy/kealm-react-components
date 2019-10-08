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
        const { close } = Dialog.confirm({
            title: 'Are you sure delete this task?',
            content: 'This is a paragraph',
            footer: [
                <Button key={'cancel'} onClick={() => close()}>Cancel</Button>,
                <Button key={'ok'} type='success'>Delete</Button>
            ]
        });
    }, []);

    const showAsyncLogic = useCallback(() => {
        const { close } = Dialog.confirm({
            title: 'Are you sure delete this task?',
            content: 'This is a paragraph',
            onOk: () => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                    }, 2000);
                })
            },
            onCancel: () => {
                close();
            }
        });
    }, []);

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
                        <Button onClick={showConfirm}>Confirm</Button>
                        <Button type='danger' plain onClick={showDeleteConfirm}>Delete</Button>
                        <Button type='primary' plain onClick={showFooterConfirm}>Customized footer</Button>
                        <Button plain onClick={showAsyncLogic}>Async logic</Button>
                    </>
                )
            }, [showConfirm, showDeleteConfirm, showFooterConfirm])}

            {/* API */}
            {/*{useMemo(() => <ApiTable title='Button' propsList={buttonProps} eventsList={buttonEvents} />, [])}*/}
        </div>
    )
}

export default DialogDoc;