import React from 'react';
import { Tabs } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

const TabPane = Tabs.TabPane;

function TabsDoc() {
    return (
        <div className='page-box'>
            <h1>Tabs 标签页</h1>
            <p>分隔内容上有关联但属于不同类别的数据集合。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>基础的、简洁的标签页。</p>
            <div className="detail-box">
                <Tabs>
                    <TabPane name={'1'} label={'Tab1'}>Content of Tab Pane 1</TabPane>
                    <TabPane name={'2'} label={'Tab2'}>Content of Tab Pane 2</TabPane>
                    <TabPane name={'3'} label={'Tab3'}>Content of Tab Pane 3</TabPane>
                </Tabs>
            </div>
            {/* API */}
            {/*<ApiTable title='Breadcrumb' propsList={breadcrumbProps} />*/}
        </div>
    )
}

export default TabsDoc;