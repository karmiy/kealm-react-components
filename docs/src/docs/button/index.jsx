import React, { useState, useMemo } from 'react';
import { Button } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';
import { buttonProps, buttonEvents } from 'api/button';
import { CodeBasic, CodeDisabled, CodeText, CodeIcon, CodeGroup, CodeLoading, CodeSize } from 'demos/button';

const Group = Button.Group;

function ButtonDoc() {
    const [size, setSize] = useState();
    const [loading, setLoading] = useState(true);

    return (
        <div className='page-box'>
            <h1>Button 按钮</h1>
            <p>按钮用于开始一个即时操作。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>基础的按钮用法。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Button>默认按钮</Button>
                            <Button type='primary'>基本按钮</Button>
                            <Button type='success'>成功按钮</Button>
                            <Button type='info'>信息按钮</Button>
                            <Button type='warning'>警告按钮</Button>
                            <Button type='danger'>危险按钮</Button>
                        </div>
                        <div className="detail-box">
                            <Button plain>默认按钮</Button>
                            <Button type='primary' plain>基本按钮</Button>
                            <Button type='success' plain>成功按钮</Button>
                            <Button type='info' plain>信息按钮</Button>
                            <Button type='warning' plain>警告按钮</Button>
                            <Button type='danger' plain>危险按钮</Button>
                        </div>
                        <div className="detail-box">
                            <Button round>默认按钮</Button>
                            <Button type='primary' round>基本按钮</Button>
                            <Button type='success' round>成功按钮</Button>
                            <Button type='info' round>信息按钮</Button>
                            <Button type='warning' round>警告按钮</Button>
                            <Button type='danger' round>危险按钮</Button>
                        </div>
                        <div className="detail-box">
                            <Button circle icon='star-full' />
                            <Button type='primary' circle icon='droplet' />
                            <Button type='success' circle icon='phone' />
                            <Button type='info' circle icon='alarm' />
                            <Button type='warning' circle icon='power' />
                            <Button type='danger' circle icon='heart' />
                        </div>
                        <HighLight code={CodeBasic} />
                    </>
                )
            }, [])}

            {/* 禁用按钮 */}
            <h2>禁用按钮</h2>
            <p>按钮不可用状态。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Button disabled>默认按钮</Button>
                            <Button type='primary' disabled>基本按钮</Button>
                            <Button type='success' disabled>成功按钮</Button>
                            <Button type='info' disabled>信息按钮</Button>
                            <Button type='warning' disabled>警告按钮</Button>
                            <Button type='danger' disabled>危险按钮</Button>
                        </div>
                        <div className="detail-box">
                            <Button disabled>默认按钮</Button>
                            <Button type='primary' plain disabled>基本按钮</Button>
                            <Button type='success' plain disabled>成功按钮</Button>
                            <Button type='info' plain disabled>信息按钮</Button>
                            <Button type='warning' plain disabled>警告按钮</Button>
                            <Button type='danger' plain disabled>危险按钮</Button>
                        </div>
                        <HighLight code={CodeDisabled} />
                    </>
                )
            }, [])}

            {/* 文字按钮 */}
            <h2>文字按钮</h2>
            <p>没有边框和背景色的按钮。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Button type='text'>文字按钮</Button>
                            <Button type='text' disabled>文字按钮</Button>
                        </div>
                        <HighLight code={CodeText} />
                    </>
                )
            }, [])}

            {/* 图标按钮 */}
            <h2>图标按钮</h2>
            <p>带图标的按钮。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Button icon='star-full' />
                            <Button type='primary' circle icon='droplet' />
                            <Button type='primary' plain icon='phone'>图标按钮</Button>
                            <Button round icon='alarm' iconRight={true}>图标按钮</Button>
                        </div>
                        <HighLight code={CodeIcon} />
                    </>
                )
            }, [])}

            {/* 按钮组 */}
            <h2>按钮组</h2>
            <p>以按钮组的方式出现，常用于多项类似操作。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Group>
                                <Button type='primary' icon='left'>上一页</Button>
                                <Button type='primary' icon='right'>下一页</Button>
                            </Group>
                            <Group>
                                <Button type='primary' icon='phone' />
                                <Button type='success' icon='alarm' />
                                <Button type='warning' icon='power' />
                                <Button type='danger' icon='heart' />
                            </Group>
                            <Group>
                                <Button type='primary' icon='left' circle plain />
                                <Button type='success' plain>1</Button>
                                <Button type='info' plain>2</Button>
                                <Button type='warning' plain>3</Button>
                                <Button type='danger' icon='right' circle plain />
                            </Group>
                            <Group>
                                <Button type='text'>确定</Button>
                                <Button type='text'>取消</Button>
                            </Group>
                        </div>
                        <HighLight code={CodeGroup} />
                    </>
                )
            }, [])}

            {/* 加载中 */}
            <h2>加载中</h2>
            <p>点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Button plain onClick={() => setLoading(v => !v)}>Toggle Loading</Button>
                        </div>
                        <div className="detail-box">
                            <Button type='primary' loading={loading}>加载中</Button>
                            <Button type='success' loading={loading}>加载中</Button>
                            <Button type='info' loading={loading}>加载中</Button>
                            <Button type='warning' loading={loading}>加载中</Button>
                            <Button type='danger' loading={loading}>加载中</Button>
                        </div>
                        <div className="detail-box">
                            <Button type='primary' plain loading={loading}>加载中</Button>
                            <Button type='success' plain loading={loading}>加载中</Button>
                            <Button type='info' plain loading={loading}>加载中</Button>
                            <Button type='warning' plain loading={loading}>加载中</Button>
                            <Button type='danger' plain loading={loading}>加载中</Button>
                        </div>
                        <HighLight code={CodeLoading} />
                    </>
                )
            }, [loading, setLoading])}

            {/* 按钮尺寸 */}
            <h2>按钮尺寸</h2>
            <p>Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Group>
                                <Button plain active={size === 'large'} onClick={() => setSize('large')}>Large</Button>
                                <Button plain active={!size} onClick={() => setSize(undefined)}>Default</Button>
                                <Button plain active={size === 'small'} onClick={() => setSize('small')}>Small</Button>
                            </Group>
                        </div>
                        <div className="detail-box">
                            <Button type='primary' size={size}>基本按钮</Button>
                            <Button type='success' size={size}>成功按钮</Button>
                            <Button type='warning' size={size}>警告按钮</Button>
                        </div>
                        <div className="detail-box">
                            <Button type='primary' plain round size={size}>基本按钮</Button>
                            <Button type='success' plain round size={size}>成功按钮</Button>
                            <Button type='warning' plain round size={size}>警告按钮</Button>
                        </div>
                        <HighLight code={CodeSize} />
                    </>
                )
            }, [size, setSize])}

            {/* API */}
            {useMemo(() => <ApiTable title='Button' propsList={buttonProps} eventsList={buttonEvents} />, [])}
        </div>
    )
}

export default ButtonDoc;