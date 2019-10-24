/* 基本用法 */
export const CodeBasic =
`    import { Tabs } from "@kealm/react-components";
    
    const TabPane = Tabs.TabPane;
    
    ReactDom.render(
        <Tabs defaultValue={'1'}>
            <TabPane name={'1'} label={'Tab1'}>Content of Tab Pane 1</TabPane>
            <TabPane name={'2'} label={'Tab2'}>Content of Tab Pane 2</TabPane>
            <TabPane name={'3'} label={'Tab3'}>Content of Tab Pane 3</TabPane>
        </Tabs>,
        mountNode
    );`

/* 禁用 */
export const CodeDisabled =
`    import { Tabs } from "@kealm/react-components";
    
    const TabPane = Tabs.TabPane;
    
    ReactDom.render(
        <Tabs defaultValue={'1'}>
            <TabPane name={'1'} label={'Tab1'}>Content of Tab Pane 1</TabPane>
            <TabPane name={'2'} disabled label={'Tab2'}>Content of Tab Pane 2</TabPane>
            <TabPane name={'3'} label={'Tab3'}>Content of Tab Pane 3</TabPane>
        </Tabs>,
        mountNode
    );`

/* 带图标 */
export const CodeIcon =
`    import { Tabs, Icon } from "@kealm/react-components";
    
    const TabPane = Tabs.TabPane;
    
    ReactDom.render(
        <Tabs defaultValue={'1'}>
            <TabPane name={'1'} label={<span><Icon type={'home'}></Icon> Tab1</span>}>Content of Tab Pane 1</TabPane>
            <TabPane name={'2'} label={'Tab2'}>Content of Tab Pane 2</TabPane>
            <TabPane name={'3'} label={<span><Icon type={'config'}></Icon> Tab3</span>}>Content of Tab Pane 3</TabPane>
        </Tabs>,
        mountNode
    );`

/* 选项卡样式 */
export const CodeCard =
`    import { Tabs } from "@kealm/react-components";
    
    const TabPane = Tabs.TabPane;
    
    ReactDom.render(
        <Tabs defaultValue={'1'} type={'card'}>
            <TabPane name={'1'} label={'Tab1'}>Content of Tab Pane 1</TabPane>
            <TabPane name={'2'} disabled label={'Tab2'}>Content of Tab Pane 2</TabPane>
            <TabPane name={'3'} label={'Tab3'}>Content of Tab Pane 3</TabPane>
        </Tabs>,
        mountNode
    );`

/* 卡片化 */
export const CodeBorderCard =
`    import { Tabs } from "@kealm/react-components";
    
    const TabPane = Tabs.TabPane;
    
    ReactDom.render(
        <Tabs defaultValue={'1'} type={'border-card'}>
            <TabPane name={'1'} label={'Tab1'}>Content of Tab Pane 1</TabPane>
            <TabPane name={'2'} disabled label={'Tab2'}>Content of Tab Pane 2</TabPane>
            <TabPane name={'3'} label={'Tab3'}>Content of Tab Pane 3</TabPane>
        </Tabs>,
        mountNode
    );`


/* 位置 */
export const CodePosition =
`    import { useState } from 'react';
    import { Tabs, Radio } from "@kealm/react-components";
    
    const TabPane = Tabs.TabPane;
    
    function Demo() {
        const [position, setPosition] = useState('top');
        
        return (
            <div>
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
            </div>
        )
    }`

/* 滑动 */
export const CodeScroll =
`    import { useState } from 'react';
    import { Tabs, Radio } from "@kealm/react-components";
    
    const TabPane = Tabs.TabPane;
    
    function Demo() {
        const [direction, setDirection] = useState('top');
        
        return (
            <div>
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
                                    return <TabPane key={index} name={\`\${index + 1}\`} label={\`Tab\${index + 1}\`}>Content of Tab Pane {index + 1}</TabPane>
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
                                    return <TabPane key={index} name={\`\${index + 1}\`} label={\`Tab\${index + 1}\`}>Content of Tab Pane {index + 1}</TabPane>
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
                                    return <TabPane key={index} name={\`\${index + 1}\`} label={\`Tab\${index + 1}\`}>Content of Tab Pane {index + 1}</TabPane>
                                })
                            }
                        </Tabs>
                    </div>
            </div>
        )
    }`

/* 动态增减标签页 */
export const CodeEditable =
`    import { useState, useCallback } from 'react';
    import { Tabs, Button } from "@kealm/react-components";
    
    const TabPane = Tabs.TabPane;
    
    function Demo() {
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
                    id: \`\${nextIndex}\`,
                    title: \`Tab\${nextIndex}\`,
                    name: \`\${nextIndex}\`,
                    content: \`Content of Tab Pane \${nextIndex}\`,
                }
            ]);
            setTabIndex(\`\${nextIndex}\`);
        }, [tabs]);
        
        return (
            <div>
                <div className="detail-box">
                    <Button plain icon='plus' onClick={add}>Add</Button>
                </div>
                <div className="detail-box">
                    <Tabs value={tabIndex} onChange={name => setTabIndex(name)} closable onRemove={remove}>
                        {
                            tabs.map(pane => {
                                return <TabPane key={pane.title} name={pane.name} label={pane.title}>{pane.content}</TabPane>
                            })
                        }
                    </Tabs>
                </div>
                <div className="detail-box" style={{marginTop: '45px'}}>
                    <Tabs value={tabIndex} onChange={name => setTabIndex(name)} closable onRemove={remove} type={'card'}>
                        {
                            tabs.map(pane => {
                                return <TabPane key={pane.title} name={pane.name} label={pane.title}>{pane.content}</TabPane>
                            })
                        }
                    </Tabs>
                </div>
                <div className="detail-box" style={{marginTop: '45px'}}>
                    <Tabs value={tabIndex} onChange={name => setTabIndex(name)} closable onRemove={remove} type={'border-card'}>
                        {
                            tabs.map(pane => {
                                return <TabPane key={pane.title} name={pane.name} label={pane.title}>{pane.content}</TabPane>
                            })
                        }
                    </Tabs>
                </div>
            </div>
        )
    }`