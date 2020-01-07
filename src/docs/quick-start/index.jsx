import React, { useState, useMemo } from 'react';
import { HighLight } from '@/components';
import { CodeInstall, CodeStyle, CodeImport } from 'demos/quick-start';

function QuickStartDoc() {
    return (
        <div className='page-box'>
            <h1>快速上手</h1>
            <p>本节将介绍如何在项目中使用 Kealm。</p>

            {/* 安装 UI 库 */}
            <h2>安装 UI 库</h2>
            <p>可以使用 npm 或 cnpm 安装。</p>
            <HighLight collapsible={false} code={CodeInstall} />

            {/* 引入样式 */}
            <h2>引入样式</h2>
            <p>组件库样式需要在项目的入口文件里单独引入</p>
            <p>在 create-react-app 创建的工程中，可以在入口文件 index.js 中引入</p>
            <HighLight collapsible={false} code={CodeStyle} />

            {/* 按需引入 */}
            <h2>按需引入</h2>
            <p>只需要根据需求，在相应的场景进入对应的组件即可使用</p>
            <HighLight collapsible={false} code={CodeImport} />
        </div>
    )
}

export default QuickStartDoc;