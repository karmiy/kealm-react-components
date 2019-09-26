import React, { useState, useMemo } from 'react';
import { Button } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

function DialogDoc() {
    return (
        <div className='page-box'>
            <h1>Dialog 对话框</h1>
            <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>Dialog 弹出一个对话框，适合需要定制性更大的场景。</p>

            {/* API */}
            {/*{useMemo(() => <ApiTable title='Button' propsList={buttonProps} eventsList={buttonEvents} />, [])}*/}
        </div>
    )
}

export default DialogDoc;