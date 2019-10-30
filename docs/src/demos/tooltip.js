/* 按钮尺寸 */
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

/* 主题 */
export const CodeEffect =
`    import { Popover, Button, Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
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
        </Popover>,
        mountNode
    );`

/* 位置 */
export const CodePlacement =
`    import { Popover, Button, Row, Col } from "@kealm/react-components";
    
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

