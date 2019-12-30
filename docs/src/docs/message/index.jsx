import React, { useState, useMemo } from 'react';
import { Button, message, Message } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

function MessageDoc() {
    const [size, setSize] = useState();
    const [loading, setLoading] = useState(true);

    return (
        <div className='page-box'>
            <h1>Message 消息提示</h1>
            <p>全局展示操作反馈信息。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>从顶部出现，3 秒后自动消失。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Button type={'primary'} onClick={() => {
                            message.info(1);
                        }}>Display normal message</Button>
                        {/*<Message />*/}
                    </div>
                )
            }, [])}

            {/* API */}
            {/*<ApiTable title='Button' propsList={buttonProps} eventsList={buttonEvents} />*/}
        </div>
    )
}

export default MessageDoc;