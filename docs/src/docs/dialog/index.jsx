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

        });
    }, [])
    return (
        <div className='page-box'>
            <h1>Dialog 对话框</h1>
            <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>Dialog 弹出一个对话框，适合需要定制性更大的场景。</p>
            <Button type={'primary'} onClick={() => setVisible(v => !v)}>弹出对话框</Button>
            {
                useMemo(() => {
                    return (
                        <Dialog visible={visible} onCancel={() => setVisible(false)}>
                            <p>这是一段话</p>
                            <p>这是一段话</p>
                            <p>这是一段话</p>
                        </Dialog>
                    )
                }, [visible, setVisible])
            }

            {/* 异步关闭 */}
            <h2>异步关闭</h2>
            <p>点击确定后异步关闭对话框，例如提交表单。</p>
            <Button type={'primary'} onClick={() => setVisibleAsync(v => !v)}>异步关闭</Button>
            {
                useMemo(() => {
                    return (
                        <Dialog
                            visible={visibleAsync}
                            title={'异步关闭'}
                            confirmLoading={loading}
                            onCancel={() => setVisibleAsync(false)}
                            onOk={handleOk}
                        >
                            <p>这是一段话</p>
                            <p>这是一段话</p>
                            <p>这是一段话</p>
                        </Dialog>
                    )
                }, [visibleAsync, setVisibleAsync, loading, handleOk])
            }

            {/* 自定义页脚 */}
            <h2>自定义页脚</h2>
            <p>通过配置 footer 自定义页脚的按钮。</p>
            <p>当不需要页脚时，可以将 footer 设为 null。</p>
            <Button type={'primary'} onClick={() => setVisibleFooter(v => !v)}>自定义页脚</Button>
            {
                useMemo(() => {
                    return (
                        <Dialog
                            visible={visibleFooter}
                            title={'自定义页脚'}
                            onCancel={() => setVisibleFooter(false)}
                            footer={[
                                <Button key={'cancel'} onClick={() => setVisibleFooter(false)}>关闭</Button>,
                                <Button key={'submit'} type='success' onClick={() => setVisibleFooter(false)}>提交</Button>
                            ]}
                        >
                            <p>这是一段话</p>
                            <p>这是一段话</p>
                            <p>这是一段话</p>
                        </Dialog>
                    )
                }, [visibleFooter, setVisibleFooter])
            }

            {/* 页脚按钮属性 */}
            <h2>页脚按钮属性</h2>
            <p>传入 okButtonProps 和 cancelButtonProps 可分别自定义确定按钮和取消按钮的 props。</p>
            <Button type={'primary'} onClick={() => setVisibleBtnProps(v => !v)}>页脚按钮属性</Button>
            {
                useMemo(() => {
                    return (
                        <Dialog
                            visible={visibleBtnProps}
                            title={'页脚按钮属性'}
                            onCancel={() => setVisibleBtnProps(false)}
                            okButtonProps={{disabled: true}}
                            cancelButtonProps={{disabled: true}}
                        >
                            <p>这是一段话</p>
                            <p>这是一段话</p>
                            <p>这是一段话</p>
                        </Dialog>
                    )
                }, [visibleBtnProps, setVisibleBtnProps])
            }

            {/* 确认对话框 */}
            <h2>确认对话框</h2>
            <p>使用 confirm() 可以快捷地弹出确认框。</p>
            <Button onClick={showConfirm}>Confirm</Button>

            {/* API */}
            {/*{useMemo(() => <ApiTable title='Button' propsList={buttonProps} eventsList={buttonEvents} />, [])}*/}
        </div>
    )
}

export default DialogDoc;