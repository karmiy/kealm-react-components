import React, { useState, useCallback, useEffect } from 'react';
import { Tabs, Icon, Radio } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';
import { useWatch } from 'hooks';

const TabPane = Tabs.TabPane;

function TabsDoc() {
    const [count, setCount] = useState(20);
    const [total, setTotal] = useState(100);
    const [position, setPosition] = useState('top');
    const [direction, setDirection] = useState('top');


    /*const cb = useCallback(() => {
        console.log(total, count);
    }, [total]);

    useEffect(() => {
        console.log(total, count);
    }, [count]);*/

    return (
        <div className='page-box'>
            <h1>Tabs 标签页</h1>
            <p>分隔内容上有关联但属于不同类别的数据集合。</p>
            {/*<button onClick={()=>setCount(c => ++c)}>C按钮{count}</button>
            <button onClick={()=>setTotal(t => ++t)}>T按钮{total}</button>
            <button onClick={cb}>B按钮{count}, {total}</button>*/}

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>基础的、简洁的标签页。</p>
            <div className="detail-box">
                {/*<Tabs defaultValue={'12'} position={'left'} headerStyle={{height: '200px'}}>
                    {
                        Array(count).fill('').map((_, index) => {
                            return <TabPane key={index} name={`${index + 1}`} label={`Tab${index + 1}`}>Content of Tab Pane {index + 1}</TabPane>
                        })
                    }
                </Tabs>*/}
                <Tabs defaultValue={'1'}>
                    <TabPane name={'1'} label={'Tab1'}>Content of Tab Pane 1</TabPane>
                    <TabPane name={'2'} label={'Tab2'}>Content of Tab Pane 2</TabPane>
                    <TabPane name={'3'} label={'Tab3'}>Content of Tab Pane 3</TabPane>
                </Tabs>
            </div>

            {/* 禁用 */}
            <h2>禁用</h2>
            <p>禁用某一项。</p>
            <div className="detail-box">
                <Tabs defaultValue={'1'}>
                    <TabPane name={'1'} label={'Tab1'}>Content of Tab Pane 1</TabPane>
                    <TabPane name={'2'} disabled label={'Tab2'}>Content of Tab Pane 2</TabPane>
                    <TabPane name={'3'} label={'Tab3'}>Content of Tab Pane 3</TabPane>
                </Tabs>
            </div>

            {/* 带图标 */}
            <h2>带图标</h2>
            <p>有图标的标签。</p>
            <div className="detail-box">
                <Tabs defaultValue={'1'}>
                    <TabPane name={'1'} label={<span><Icon type={'home'} /> Tab1</span>}>Content of Tab Pane 1</TabPane>
                    <TabPane name={'2'} label={'Tab2'}>Content of Tab Pane 2</TabPane>
                    <TabPane name={'3'} label={<span><Icon type={'config'} /> Tab3</span>}>Content of Tab Pane 3</TabPane>
                </Tabs>
            </div>

            {/* 选项卡样式 */}
            <h2>选项卡样式</h2>
            <p>选项卡样式的标签页。</p>
            <div className="detail-box">
                <Tabs defaultValue={'1'} type={'card'}>
                    <TabPane name={'1'} label={'Tab1'}>Content of Tab Pane 1</TabPane>
                    <TabPane name={'2'} disabled label={'Tab2'}>Content of Tab Pane 2</TabPane>
                    <TabPane name={'3'} label={'Tab3'}>Content of Tab Pane 3</TabPane>
                </Tabs>
            </div>

            {/* 卡片化 */}
            <h2>卡片化</h2>
            <p>卡片化的标签页。</p>
            <div className="detail-box">
                <Tabs defaultValue={'1'} type={'border-card'}>
                    <TabPane name={'1'} label={'Tab1'}>Content of Tab Pane 1</TabPane>
                    <TabPane name={'2'} disabled label={'Tab2'}>Content of Tab Pane 2</TabPane>
                    <TabPane name={'3'} label={'Tab3'}>Content of Tab Pane 3</TabPane>
                </Tabs>
            </div>

            {/* 位置 */}
            <h2>位置</h2>
            <p>可以通过 position 设置标签的位置。</p>
            <div className="detail-box">
                <Radio.Group value={position} onChange={e => setPosition(e.target.value)} solid>
                    <Radio.Button value={'top'}>Top</Radio.Button>
                    <Radio.Button value={'bottom'}>Bottom</Radio.Button>
                    <Radio.Button value={'left'}>Left</Radio.Button>
                    <Radio.Button value={'right'}>Right</Radio.Button>
                </Radio.Group>
            </div>
            <div className="detail-box" style={{marginTop: '45px'}}>
                <Tabs defaultValue={'1'} position={position}>
                    <TabPane name={'1'} label={'Tab1'}>Content of Tab Pane 1</TabPane>
                    <TabPane name={'2'} label={'Tab2'}>Content of Tab Pane 2</TabPane>
                    <TabPane name={'3'} label={'Tab3'}>Content of Tab Pane 3</TabPane>
                </Tabs>
            </div>

            {/* 滑动 */}
            <h2>滑动</h2>
            <p>可以左右、上下滑动，容纳更多标签。</p>
            <div className="detail-box">
                <Radio.Group value={direction} onChange={e => setDirection(e.target.value)} solid>
                    <Radio.Button value={'top'}>Horizontal</Radio.Button>
                    <Radio.Button value={'left'}>Vertical</Radio.Button>
                </Radio.Group>
            </div>
            <div className="detail-box">
                <Tabs
                    defaultValue={'1'}
                    position={direction}
                    headerStyle={{
                        width: direction === 'top' ? '480px' : 'auto',
                        height: direction === 'left' ? '310px' : 'auto'
                    }}>
                    {
                        Array(20).fill('').map((_, index) => {
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