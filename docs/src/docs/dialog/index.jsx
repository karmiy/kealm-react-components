import React, { useState, useMemo, useCallback } from 'react';
import { Dialog, Button } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

function DialogDoc() {
    const [visible, setVisible] = useState(false);

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
            <p>Dialog 弹出一个对话框，适合需要定制性更大的场景。</p>
            <Button type={'primary'} onClick={() => setVisibleAsync(v => !v)}>弹出对话框</Button>
            {
                useMemo(() => {
                    return (
                        <Dialog
                            visible={visibleAsync}
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

            {/* API */}
            {/*{useMemo(() => <ApiTable title='Button' propsList={buttonProps} eventsList={buttonEvents} />, [])}*/}
        </div>
    )
}

export default DialogDoc;