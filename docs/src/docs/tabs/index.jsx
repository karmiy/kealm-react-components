import React, { useState, useCallback, useMemo } from 'react';
import { Tabs, Icon, Radio, Button } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';
import { tabsProps, tabsEvents, tabPaneProps } from 'api/tabs';

const TabPane = Tabs.TabPane;

function TabsDoc() {
    const [count, setCount] = useState(20);
    const [total, setTotal] = useState(100);
    const [position, setPosition] = useState('top');
    const [direction, setDirection] = useState('top');
    const [tabIndex, setTabIndex] = useState('1');
    const [tabs, setTabs] = useState([
        {
            id: '1',
            title: 'Tab1',
            name: '1',
            content: 'Content of Tab Pane 1',
        },
        {
            id: '2',
            title: 'Tab2',
            name: '2',
            content: 'Content of Tab Pane 2',
        }
    ]);

    /*const cb = useCallback(() => {
        console.log(total, count);
    }, [total]);

    useEffect(() => {
        console.log(total, count);
    }, [count]);*/

    const remove = useCallback(targetName => {
        let activeName = tabIndex;
        if (activeName === targetName) {
            tabs.forEach((tab, index) => {
                if (tab.name === targetName) {
                    let nextTab = tabs[index + 1] || tabs[index - 1];
                    if (nextTab) {
                        activeName = nextTab.name;
                    }
                }
            });
        }

        setTabIndex(activeName);
        setTabs(tabs.filter(tab => tab.name !== targetName));
    }, [tabs, tabIndex]);

    const add = useCallback(() => {
        const len = tabs.length;
        const lastTab = len ? tabs[len - 1] : null;
        const nextIndex = lastTab ? +lastTab.id + 1 : 1;
        setTabs([
            ...tabs,
            {
                id: `${nextIndex}`,
                title: `Tab${nextIndex}`,
                name: `${nextIndex}`,
                content: `Content of Tab Pane ${nextIndex}`,
            }
        ]);
        setTabIndex(`${nextIndex}`);
    }, [tabs]);

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
                {/*<Tabs defaultValue={'12'} position={'left'} wrapStyle={{height: '200px'}}>
                    {
                        Array(count).fill('').map((_, index) => {
                            return <TabPane key={index} name={`${index + 1}`} label={`Tab${index + 1}`}>Content of Tab Pane {index + 1}</TabPane>
                        })
                    }
                </Tabs>*/}
                {useMemo(() => {
                    return (
                        <Tabs defaultValue={'1'}>
                            <TabPane name={'1'} label={'Tab1'}>Content of Tab Pane 1</TabPane>
                            <TabPane name={'2'} label={'Tab2'}>Content of Tab Pane 2</TabPane>
                            <TabPane name={'3'} label={'Tab3'}>Content of Tab Pane 3</TabPane>
                        </Tabs>
                    )
                }, [])}
            </div>

            {/* 禁用 */}
            <h2>禁用</h2>
            <p>禁用某一项。</p>
            <div className="detail-box">
                {useMemo(() => {
                    return (
                        <Tabs defaultValue={'1'}>
                            <TabPane name={'1'} label={'Tab1'}>Content of Tab Pane 1</TabPane>
                            <TabPane name={'2'} disabled label={'Tab2'}>Content of Tab Pane 2</TabPane>
                            <TabPane name={'3'} label={'Tab3'}>Content of Tab Pane 3</TabPane>
                        </Tabs>
                    )
                }, [])}
            </div>

            {/* 带图标 */}
            <h2>带图标</h2>
            <p>有图标的标签。</p>
            <div className="detail-box">
                {useMemo(() => {
                    return (
                        <Tabs defaultValue={'1'}>
                            <TabPane name={'1'} label={<span><Icon type={'home'} /> Tab1</span>}>Content of Tab Pane 1</TabPane>
                            <TabPane name={'2'} label={'Tab2'}>Content of Tab Pane 2</TabPane>
                            <TabPane name={'3'} label={<span><Icon type={'config'} /> Tab3</span>}>Content of Tab Pane 3</TabPane>
                        </Tabs>
                    )
                }, [])}
            </div>

            {/* 选项卡样式 */}
            <h2>选项卡样式</h2>
            <p>选项卡样式的标签页。</p>
            <div className="detail-box">
                {useMemo(() => {
                    return (
                        <Tabs defaultValue={'1'} type={'card'}>
                            <TabPane name={'1'} label={'Tab1'}>Content of Tab Pane 1</TabPane>
                            <TabPane name={'2'} disabled label={'Tab2'}>Content of Tab Pane 2</TabPane>
                            <TabPane name={'3'} label={'Tab3'}>Content of Tab Pane 3</TabPane>
                        </Tabs>
                    )
                }, [])}
            </div>

            {/* 卡片化 */}
            <h2>卡片化</h2>
            <p>卡片化的标签页。</p>
            <div className="detail-box">
                {useMemo(() => {
                    return (
                        <Tabs defaultValue={'1'} type={'border-card'}>
                            <TabPane name={'1'} label={'Tab1'}>Content of Tab Pane 1</TabPane>
                            <TabPane name={'2'} disabled label={'Tab2'}>Content of Tab Pane 2</TabPane>
                            <TabPane name={'3'} label={'Tab3'}>Content of Tab Pane 3</TabPane>
                        </Tabs>
                    )
                }, [])}
            </div>

            {/* 位置 */}
            <h2>位置</h2>
            <p>可以通过 position 设置标签的位置。</p>
            {useMemo(() => {
                return (
                    <>
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
                        <div className="detail-box" style={{marginTop: '45px'}}>
                            <Tabs defaultValue={'1'} position={position} type={'card'}>
                                <TabPane name={'1'} label={'Tab1'}>Content of Tab Pane 1</TabPane>
                                <TabPane name={'2'} label={'Tab2'}>Content of Tab Pane 2</TabPane>
                                <TabPane name={'3'} label={'Tab3'}>Content of Tab Pane 3</TabPane>
                            </Tabs>
                        </div>
                        <div className="detail-box" style={{marginTop: '45px'}}>
                            <Tabs defaultValue={'1'} position={position} type={'border-card'}>
                                <TabPane name={'1'} label={'Tab1'}>Content of Tab Pane 1</TabPane>
                                <TabPane name={'2'} label={'Tab2'}>Content of Tab Pane 2</TabPane>
                                <TabPane name={'3'} label={'Tab3'}>Content of Tab Pane 3</TabPane>
                            </Tabs>
                        </div>
                    </>
                )
            }, [position, setPosition])}

            {/* 滑动 */}
            <h2>滑动</h2>
            <p>可以左右、上下滑动，容纳更多标签。</p>
            {useMemo(() => {
                return (
                    <>
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
                                style={{width: direction === 'top' ? '480px' : 'auto'}}
                                wrapStyle={{height: direction === 'left' ? '310px' : 'auto'}}>
                                {
                                    Array(20).fill('').map((_, index) => {
                                        return <TabPane key={index} name={`${index + 1}`} label={`Tab${index + 1}`}>Content of Tab Pane {index + 1}</TabPane>
                                    })
                                }
                            </Tabs>
                        </div>
                        <div className="detail-box" style={{marginTop: '45px'}}>
                            <Tabs
                                defaultValue={'1'}
                                position={direction}
                                type={'card'}
                                style={{width: direction === 'top' ? '480px' : 'auto'}}
                                wrapStyle={{height: direction === 'left' ? '310px' : 'auto'}}>
                                {
                                    Array(20).fill('').map((_, index) => {
                                        return <TabPane key={index} name={`${index + 1}`} label={`Tab${index + 1}`}>Content of Tab Pane {index + 1}</TabPane>
                                    })
                                }
                            </Tabs>
                        </div>
                        <div className="detail-box" style={{marginTop: '45px'}}>
                            <Tabs
                                defaultValue={'1'}
                                position={direction}
                                type={'border-card'}
                                style={{width: direction === 'top' ? '480px' : 'auto'}}
                                wrapStyle={{height: direction === 'left' ? '310px' : 'auto'}}>
                                {
                                    Array(20).fill('').map((_, index) => {
                                        return <TabPane key={index} name={`${index + 1}`} label={`Tab${index + 1}`}>Content of Tab Pane {index + 1}</TabPane>
                                    })
                                }
                            </Tabs>
                        </div>
                    </>
                )
            }, [direction, setDirection])}

            {/* 动态增减标签页 */}
            <h2>动态增减标签页</h2>
            <p>可以通过 onRemove 让选项卡支持关闭选项。</p>
            <div className="detail-box">
                <Button plain icon='plus' onClick={add}>Add</Button>
            </div>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Tabs value={tabIndex} onChange={name => setTabIndex(name)} closable onRemove={remove}>
                                {
                                    tabs.map(pane => {
                                        return <TabPane key={pane.title} name={pane.name} label={pane.title}>{pane.content}</TabPane>
                                    })
                                }
                            </Tabs>
                        </div>
                        <div className="detail-box">
                            <Tabs value={tabIndex} onChange={name => setTabIndex(name)} closable onRemove={remove} type={'card'}>
                                {
                                    tabs.map(pane => {
                                        return <TabPane key={pane.title} name={pane.name} label={pane.title}>{pane.content}</TabPane>
                                    })
                                }
                            </Tabs>
                        </div>
                        <div className="detail-box">
                            <Tabs value={tabIndex} onChange={name => setTabIndex(name)} closable onRemove={remove} type={'border-card'}>
                                {
                                    tabs.map(pane => {
                                        return <TabPane key={pane.title} name={pane.name} label={pane.title}>{pane.content}</TabPane>
                                    })
                                }
                            </Tabs>
                        </div>
                    </>
                )
            }, [tabIndex, setTabIndex, remove, tabs])}
            {/* API */}
            {
                useMemo(() => {
                    return (
                        <>
                            <ApiTable title='Tabs' propsList={tabsProps} eventsList={tabsEvents} />
                            <ApiTable title='TabPane' propsList={tabPaneProps} />
                        </>
                    )
                }, [])
            }
        </div>
    )
}

export default TabsDoc;