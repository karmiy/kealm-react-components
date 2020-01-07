/* 基本用法 */
export const CodeBasic =
`    import { Alert, Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <Row>
            <Col span={9}>
                <div className="detail-box">
                    <Alert type={'success'} title={'Success Text'}></Alert>
                </div>
                <div className="detail-box">
                    <Alert type={'info'} title={'Info Text'}></Alert>
                </div>
                <div className="detail-box">
                    <Alert type={'warning'} title={'Warning Text'}></Alert>
                </div>
                <div className="detail-box">
                    <Alert type={'error'} title={'Error Text'}></Alert>
                </div>
            </Col>
        </Row>,
        mountNode
    );`

/* 主题 */
export const CodeEffect =
`    import { Alert, Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <Row>
            <Col span={9}>
                <div className="detail-box">
                    <Alert type={'success'} effect={'dark'} title={'Success Text'}></Alert>
                </div>
                <div className="detail-box">
                    <Alert type={'info'} effect={'dark'} title={'Info Text'}></Alert>
                </div>
                <div className="detail-box">
                    <Alert type={'warning'} effect={'dark'} title={'Warning Text'}></Alert>
                </div>
                <div className="detail-box">
                    <Alert type={'error'} effect={'dark'} title={'Error Text'}></Alert>
                </div>
            </Col>
        </Row>,
        mountNode
    );`

/* 可关闭的警告提示 */
export const CodeClosable =
`    import { Alert, Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <Row>
            <Col span={9}>
                <div className="detail-box">
                    <Alert type={'success'} title={'Success Text'} closable></Alert>
                </div>
                <div className="detail-box">
                    <Alert type={'info'} title={'Info Text'} closable></Alert>
                </div>
                <div className="detail-box">
                    <Alert type={'warning'} title={'Warning Text'} closable></Alert>
                </div>
                <div className="detail-box">
                    <Alert type={'error'} title={'Error Text'} closable></Alert>
                </div>
            </Col>
        </Row>,
        mountNode
    );`

/* 自定义关闭按钮 */
export const CodeCloseText =
`    import { Alert, Row, Col, Icon } from "@kealm/react-components";
    
    ReactDom.render(
        <Row>
            <Col span={9}>
                <div className="detail-box">
                    <Alert type={'success'} title={'Success Text'} closable closeText={<Icon type={'minus'} />}></Alert>
                </div>
                <div className="detail-box">
                    <Alert type={'info'} title={'Info Text'} closable closeText={'ok'}></Alert>
                </div>
            </Col>
        </Row>,
        mountNode
    );`

/* 带有辅助性文字介绍 */
export const CodeDesc =
`    import { Alert, Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <Row>
            <Col span={9}>
                <div className="detail-box">
                    <Alert
                        type={'success'}
                        title={'Success Text'}
                        description={'Success Description Success Description Success Description'}
                    ></Alert>
                </div>
                <div className="detail-box">
                    <Alert
                        type={'info'}
                        title={'Info Text'}
                        description={'Info Description Info Description Info Description Info Description'}
                    ></Alert>
                </div>
                <div className="detail-box">
                    <Alert
                        type={'warning'}
                        title={'Warning Text'}
                        description={'Warning Description Warning Description Warning Description Warning Description'}
                    ></Alert>
                </div>
                <div className="detail-box">
                    <Alert
                        type={'error'}
                        title={'Error Text'}
                        description={'Error Description Error Description Error Description Error Description'}
                    ></Alert>
                </div>
            </Col>
        </Row>,
        mountNode
    );`

/* 带有 icon */
export const CodeIcon =
`    import { Alert, Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <Row>
            <Col span={9}>
                <div className="detail-box">
                    <Alert
                        type={'success'}
                        title={'Success Text'}
                        showIcon
                    ></Alert>
                </div>
                <div className="detail-box">
                    <Alert
                        type={'info'}
                        title={'Info Text'}
                        showIcon
                    ></Alert>
                </div>
                <div className="detail-box">
                    <Alert
                        type={'warning'}
                        title={'Warning Text'}
                        showIcon
                    ></Alert>
                </div>
                <div className="detail-box">
                    <Alert
                        type={'error'}
                        title={'Error Text'}
                        showIcon
                    ></Alert>
                </div>
                <div className="detail-box">
                    <Alert
                        type={'success'}
                        title={'Success Text'}
                        description={'Success Description Success Description Success Description'}
                        showIcon
                    ></Alert>
                </div>
                <div className="detail-box">
                    <Alert
                        type={'info'}
                        title={'Info Text'}
                        description={'Info Description Info Description Info Description Info Description'}
                        showIcon
                    ></Alert>
                </div>
                <div className="detail-box">
                    <Alert
                        type={'warning'}
                        title={'Warning Text'}
                        description={'Warning Description Warning Description Warning Description Warning Description'}
                        showIcon
                    ></Alert>
                </div>
                <div className="detail-box">
                    <Alert
                        type={'error'}
                        title={'Error Text'}
                        description={'Error Description Error Description Error Description Error Description'}
                        showIcon
                    ></Alert>
                </div>
            </Col>
        </Row>,
        mountNode
    );`