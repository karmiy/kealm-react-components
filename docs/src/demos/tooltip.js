/* 基本用法 */
export const CodeBasic =
`    import { useState } from 'react';
    import { Tooltip, Button } from "@kealm/react-components";
    
    function Demo() {
        const [visible, setVisible] = useState(false);
        
        return (
            <div>
                <Tooltip content={'This is a prompt message'}>
                    <Button plain>Hover</Button>
                </Tooltip>
                <Tooltip content={'This is a prompt message'} manual visible={visible}>
                    <Button plain onClick={() => setVisible(v => !v)}>Manual</Button>
                </Tooltip>
            </div>
        )
    }`

/* 禁用 */
export const CodeDisabled =
`    import { useState } from 'react';
    import { Tooltip, Button } from "@kealm/react-components";
    
    function Demo() {
        const [disabled, setDisabled] = useState(false);
        
        return (
            <Tooltip disabled={disabled} content={'This is a prompt message'}>
                <Button plain onClick={() => setDisabled(d => !d)}>{disabled ? 'Open' : 'Close'} Tooltip</Button>
            </Tooltip>
        )
    }`

/* 主题 */
export const CodeEffect =
`    import { Tooltip, Button } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <Tooltip content={'Dark'}>
                <Button plain>Dark</Button>
            </Tooltip>
            <Tooltip effect={'light'} content={'Light'}>
                <Button plain>Light</Button>
            </Tooltip>
        </div>,
        mountNode
    );`

/* 更多的内容 */
export const CodeMore =
`    import { Tooltip, Button } from "@kealm/react-components";
    
    ReactDom.render(
        <Tooltip content={
            <>
                <p>I'm Peppa Pig.</p>
                <p>This is my brother George.</p>
            </>
        }>
            <Button plain>More Content</Button>
        </Tooltip>,
        mountNode
    );`

/* 位置 */
export const CodePlacement =
`    import { Tooltip, Button, Row, Col } from "@kealm/react-components";
    
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
    
    ReactDom.render(
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
        </div>,
        mountNode
    );`

