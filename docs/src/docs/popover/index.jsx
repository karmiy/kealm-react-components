import React, { useState, useMemo } from 'react';
import { Popover, Button, Row, Col } from '@kealm/react-components';
import { popoverProps, popoverEvents } from 'api/popover';
import { ApiTable, HighLight } from '@/components';
import { CodeBasic, CodeNest, CodePlacement } from 'demos/popover';

const places = {
    TL: 'top-start',
    Top: 'top',
    TR: 'top-end',
    BL: 'bottom-start',
    Bottom: 'bottom',
    BR: 'bottom-end',
    LT: 'left-start',
    Left: 'left',
    LB: 'left-end',
    RT: 'right-start',
    Right: 'right',
    RB: 'right-end',
}

function renderPlacement(placement) {
    return (
        <Popover
            placement={places[placement]}
            title={'Title'}
            content={'This is a simple content.'}
        >
            <Button plain>{placement}</Button>
        </Popover>
    )
}

function PopoverDoc() {
    const [visible, setVisible] = useState(false);

    return (
        <div className='page-box'>
            <h1>Popover 弹出框</h1>
            <p>点击/鼠标移入元素，弹出气泡式的卡片浮层。</p>
            <p>与 Tooltip 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>最简单的用法，4种触发方式。</p>
            <div className="detail-box">
                <Popover
                    trigger={'hover'}
                    title={'Title'}
                    content={'This is a simple content.'}
                >
                    <Button plain>Hover</Button>
                </Popover>
                <Popover
                    title={'Title'}
                    content={'This is a simple content.'}
                >
                    <Button plain>Click</Button>
                </Popover>
                <Popover
                    trigger={'focus'}
                    title={'Title'}
                    content={'This is a simple content.'}
                >
                    <Button plain>Focus</Button>
                </Popover>
                {
                    useMemo(() => {
                        return (
                            <Popover
                                visible={visible}
                                trigger={'manual'}
                                title={'Title'}
                                content={'This is a simple content.'}
                            >
                                <Button plain onClick={() => setVisible(v => !v)}>Manual</Button>
                            </Popover>
                        )
                    }, [visible])
                }
            </div>
            <HighLight code={CodeBasic} />

            {/* 嵌套操作 */}
            <h2>嵌套操作</h2>
            <p>可以在 Popover 中嵌套更多的内容。</p>
            <div className="detail-box">
                <Popover
                    trigger={'hover'}
                    content={
                        <div>
                            <Row style={{marginBottom: '15px'}}>
                                <Col><p>Are you sure to delete this record ?</p></Col>
                            </Row>
                            <Row type={'flex'} justify={'end'} gutter={8}>
                                <Col><Button>Cancel</Button></Col>
                                <Col><Button type={'primary'}>OK</Button></Col>
                            </Row>
                        </div>
                    }
                >
                    <Button plain>Delete</Button>
                </Popover>
            </div>
            <HighLight code={CodeNest} />

            {/* 位置 */}
            <h2>位置</h2>
            <p>拥有12个不同的方向。</p>
            <div className="detail-box popover-placement-demo">
                <Row type={'flex'} justify={'center'} gutter={16}>
                    <Col>{renderPlacement('TL')}</Col>
                    <Col>{renderPlacement('Top')}</Col>
                    <Col>{renderPlacement('TR')}</Col>
                </Row>
                <Row type={'flex'} justify={'space-between'}>
                    <Col>{renderPlacement('LT')}</Col>
                    <Col>{renderPlacement('RT')}</Col>
                </Row>
                <Row type={'flex'} justify={'space-between'}>
                    <Col>{renderPlacement('Left')}</Col>
                    <Col>{renderPlacement('Right')}</Col>
                </Row>
                <Row type={'flex'} justify={'space-between'}>
                    <Col>{renderPlacement('LB')}</Col>
                    <Col>{renderPlacement('RB')}</Col>
                </Row>
                <Row type={'flex'} justify={'center'} gutter={16}>
                    <Col>{renderPlacement('BL')}</Col>
                    <Col>{renderPlacement('Bottom')}</Col>
                    <Col>{renderPlacement('BR')}</Col>
                </Row>
            </div>
            <HighLight code={CodePlacement} />

            {/* API */}
            {useMemo(() => <ApiTable title='Popover' propsList={popoverProps} eventsList={popoverEvents} />, [])}
        </div>
    )
}

export default PopoverDoc;