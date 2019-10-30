import React, { useState, useMemo } from 'react';
import { Tooltip, Button, Row, Col } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';
import { tooltipProps, tooltipEvents } from 'api/tooltip';
import { CodeBasic, CodeDisabled, CodeEffect, CodeMore, CodePlacement } from 'demos/tooltip';

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
        <Tooltip
            placement={places[placement]}
            content={
                <>
                    <p>I'm Peppa Pig.</p>
                    <p>This is my brother George.</p>
                </>
            }
        >
            <Button plain>{placement}</Button>
        </Tooltip>
    )
}

function TooltipDoc() {
    const [visible, setVisible] = useState(false);
    const [disabled, setDisabled] = useState(false);

    return (
        <div className='page-box'>
            <h1>Tooltip 文字提示</h1>
            <p>常用于展示鼠标 hover 时的提示信息。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>最简单的用法，可以通过 manual 配置是否手动触发。</p>
            <div className="detail-box">
                {useMemo(() => {
                    return (
                        <Tooltip content={'This is a prompt message'}>
                            <Button plain>Hover</Button>
                        </Tooltip>
                    )
                }, [])}
                {useMemo(() => {
                    return (
                        <Tooltip content={'This is a prompt message'} manual visible={visible}>
                            <Button plain onClick={() => setVisible(v => !v)}>Manual</Button>
                        </Tooltip>
                    )
                }, [visible])}
            </div>
            <HighLight code={CodeBasic} />

            {/* 禁用 */}
            <h2>禁用</h2>
            <p>通过 disabled 配置是否禁止 Tooltip 显示。</p>
            <div className="detail-box">
                {useMemo(() => {
                    return (
                        <Tooltip disabled={disabled} content={'This is a prompt message'}>
                            <Button plain onClick={() => setDisabled(d => !d)}>{disabled ? 'Open' : 'Close'} Tooltip</Button>
                        </Tooltip>
                    )
                }, [disabled])}
            </div>
            <HighLight code={CodeDisabled} />

            {/* 主题 */}
            <h2>主题</h2>
            <p>Tooltip 组件提供了两个不同的主题：dark 和 light。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Tooltip content={'Dark'}>
                            <Button plain>Dark</Button>
                        </Tooltip>
                        <Tooltip effect={'light'} content={'Light'}>
                            <Button plain>Light</Button>
                        </Tooltip>
                    </div>
                )
            }, [])}
            <HighLight code={CodeEffect} />

            {/* 更多的内容 */}
            <h2>更多的内容</h2>
            <p>展示多行文本或者是设置文本内容的格式。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Tooltip content={
                            <>
                                <p>I'm Peppa Pig.</p>
                                <p>This is my brother George.</p>
                            </>
                        }>
                            <Button plain>More Content</Button>
                        </Tooltip>
                    </div>
                )
            }, [])}
            <HighLight code={CodeMore} />

            {/* 位置 */}
            <h2>位置</h2>
            <p>拥有12个不同的方向。</p>
            {useMemo(() => {
                return (
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
                )
            }, [])}
            <HighLight code={CodePlacement} />

            {/* API */}
            {useMemo(() => <ApiTable title='Tooltip' propsList={tooltipProps} eventsList={tooltipEvents} />, [])}
        </div>
    )
}

export default TooltipDoc;