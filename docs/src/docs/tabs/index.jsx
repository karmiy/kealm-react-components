import React, { useState } from 'react';
import { Tabs } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

const TabPane = Tabs.TabPane;

function TabsDoc() {
    const [count, setCount] = useState(6);
    return (
        <div className='page-box'>
            <h1>Tabs 标签页</h1>
            <p>分隔内容上有关联但属于不同类别的数据集合。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>基础的、简洁的标签页。</p>
            <div className="detail-box" style={{width: '400px'}}>
                <Tabs defaultValue={'6'}>
                    {
                        Array(count).fill('').map((_, index) => {
                            return <TabPane key={index} name={`${index + 1}`} label={`Tab${index + 1}`}>Content of Tab Pane {index + 1}</TabPane>
                        })
                    }
                </Tabs>
            </div>
            {/* API */}
            {/*<ApiTable title='Breadcrumb' propsList={breadcrumbProps} />*/}
        </div>
    )
}

export default TabsDoc;