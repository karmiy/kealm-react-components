import React, { useState, useMemo } from 'react';
import { Alert } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

function AlertDoc() {
    const [size, setSize] = useState();
    const [loading, setLoading] = useState(true);

    return (
        <div className='page-box'>
            <h1>Alert 警告提示</h1>
            <p>用于页面中展示重要的提示信息。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>页面中的非浮层元素，不会自动消失。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Alert />
                    </div>
                )
            }, [])}

            {/* API */}
            {/*<ApiTable title='Button' propsList={buttonProps} eventsList={buttonEvents} />*/}
        </div>
    )
}

export default AlertDoc;