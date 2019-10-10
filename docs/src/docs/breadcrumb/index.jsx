import React from 'react';
import { Button } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

function BreadcrumbDoc() {
    return (
        <div className='page-box'>
            <h1>Breadcrumb 面包屑</h1>
            <p>显示当前页面的路径，快速返回之前的任意页面。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>适用广泛的基础用法。</p>

            {/* API */}
            {/*{useMemo(() => <ApiTable title='Button' propsList={buttonProps} eventsList={buttonEvents} />, [])}*/}
        </div>
    )
}

export default BreadcrumbDoc;