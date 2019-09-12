import React from 'react';
import { Row } from '@kealm/react-components';

function GridDoc() {
    return (
        <div className='page-box'>
            <h1>Grid 栅格</h1>
            <p>通过基础的 24 栅格，迅速简便地创建布局。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>基础的按钮用法。</p>
            <div className="detail-box">
                <Row></Row>
            </div>
        </div>
    )
}

export default GridDoc;