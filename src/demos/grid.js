/* 基本用法 */
export const CodeBasic =
`    import { Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <Row>
                <Col className={'grid-content light'} span={24}>col-24</Col>
            </Row>
            <Row>
                <Col className={'grid-content light'} span={12}>col-12</Col>
                <Col className={'grid-content dark'} span={12}>col-12</Col>
            </Row>
            <Row>
                <Col className={'grid-content light'} span={8}>col-8</Col>
                <Col className={'grid-content dark'} span={8}>col-8</Col>
                <Col className={'grid-content light'} span={8}>col-8</Col>
            </Row>
            <Row>
                <Col className={'grid-content light'} span={6}>col-6</Col>
                <Col className={'grid-content dark'} span={6}>col-6</Col>
                <Col className={'grid-content light'} span={6}>col-6</Col>
                <Col className={'grid-content dark'} span={6}>col-6</Col>
            </Row>
            <Row>
                <Col className={'grid-content light'} span={4}>col-4</Col>
                <Col className={'grid-content dark'} span={4}>col-4</Col>
                <Col className={'grid-content light'} span={4}>col-4</Col>
                <Col className={'grid-content dark'} span={4}>col-4</Col>
                <Col className={'grid-content light'} span={4}>col-4</Col>
                <Col className={'grid-content dark'} span={4}>col-4</Col>
            </Row>
        </div>,
        mountNode
    );`

/* 分栏间隔 */
export const CodeGutter =
`    import { Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <Row gutter={20}>
            <Col span={6}><div className={'grid-content light'}>col-6</div></Col>
            <Col span={6}><div className={'grid-content dark'}>col-6</div></Col>
            <Col span={6}><div className={'grid-content light'}>col-6</div></Col>
            <Col span={6}><div className={'grid-content dark'}>col-6</div></Col>
        </Row>,
        mountNode
);`

/* 分栏偏移 */
export const CodeOffset =
`    import { Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <Row>
                <Col span={8}><div className={'grid-content light'}>col-8</div></Col>
                <Col span={8} offset={8}><div className={'grid-content dark'}>col-8</div></Col>
            </Row>
            <Row>
                <Col span={6} offset={6}><div className={'grid-content light'}>col-6</div></Col>
                <Col span={6} offset={6}><div className={'grid-content dark'}>col-6</div></Col>
            </Row>
            <Row>
                <Col span={12} offset={6}><div className={'grid-content light'}>col-12</div></Col>
            </Row>
        </div>,
        mountNode
    );`

/* 分栏移动 */
export const CodeMove =
`    import { Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <Row type={'flex'} justify={'start'}>
            <Col span={18} push={6}><div className={'grid-content light'}>col-6</div></Col>
            <Col span={6} pull={18}><div className={'grid-content dark'}>col-18</div></Col>
        </Row>,
        mountNode
    );`

/* Flex水平布局 */
export const CodeFlexHoriz =
`    import { Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <Row type={'flex'} justify={'start'}>
                <Col span={6}><div className={'grid-content light'}>col-6</div></Col>
                <Col span={6}><div className={'grid-content dark'}>col-6</div></Col>
                <Col span={6}><div className={'grid-content light'}>col-6</div></Col>
            </Row>
            <Row type={'flex'} justify={'center'}>
                <Col span={6}><div className={'grid-content light'}>col-6</div></Col>
                <Col span={6}><div className={'grid-content dark'}>col-6</div></Col>
                <Col span={6}><div className={'grid-content light'}>col-6</div></Col>
            </Row>
            <Row type={'flex'} justify={'end'}>
                <Col span={6}><div className={'grid-content light'}>col-6</div></Col>
                <Col span={6}><div className={'grid-content dark'}>col-6</div></Col>
                <Col span={6}><div className={'grid-content light'}>col-6</div></Col>
            </Row>
            <Row type={'flex'} justify={'space-between'}>
                <Col span={6}><div className={'grid-content light'}>col-6</div></Col>
                <Col span={6}><div className={'grid-content dark'}>col-6</div></Col>
                <Col span={6}><div className={'grid-content light'}>col-6</div></Col>
            </Row>
            <Row type={'flex'} justify={'space-around'}>
                <Col span={6}><div className={'grid-content light'}>col-6</div></Col>
                <Col span={6}><div className={'grid-content dark'}>col-6</div></Col>
                <Col span={6}><div className={'grid-content light'}>col-6</div></Col>
            </Row>
        </div>,
        mountNode
    );`

/* Flex垂直布局 */
export const CodeFlexVert =
`    import { Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <Row type={'flex'} justify={'center'} align={'top'}>
                <Col span={4}><div className={'grid-content light height-100'}>col-4</div></Col>
                <Col span={4}><div className={'grid-content dark height-50'}>col-4</div></Col>
                <Col span={4}><div className={'grid-content light height-120'}>col-4</div></Col>
                <Col span={4}><div className={'grid-content dark height-80'}>col-4</div></Col>
            </Row>
            <Row type={'flex'} justify={'space-around'} align={'middle'}>
                <Col span={4}><div className={'grid-content light height-100'}>col-4</div></Col>
                <Col span={4}><div className={'grid-content dark height-50'}>col-4</div></Col>
                <Col span={4}><div className={'grid-content light height-120'}>col-4</div></Col>
                <Col span={4}><div className={'grid-content dark height-80'}>col-4</div></Col>
            </Row>
            <Row type={'flex'} justify={'center'} align={'bottom'}>
                <Col span={4}><div className={'grid-content light height-100'}>col-4</div></Col>
                <Col span={4}><div className={'grid-content dark height-50'}>col-4</div></Col>
                <Col span={4}><div className={'grid-content light height-120'}>col-4</div></Col>
                <Col span={4}><div className={'grid-content dark height-80'}>col-4</div></Col>
            </Row>
        </div>,
        mountNode
    );`

/* Flex排序 */
export const CodeFlexOrder =
`    import { Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <Row type={'flex'}>
            <Col span={6} order={4}><div className={'grid-content light'}>1 col-order-4</div></Col>
            <Col span={6} order={3}><div className={'grid-content light'}>2 col-order-3</div></Col>
            <Col span={6} order={2}><div className={'grid-content light'}>3 col-order-2</div></Col>
            <Col span={6} order={1}><div className={'grid-content light'}>4 col-order-1</div></Col>
        </Row>,
        mountNode
    );`

/* 响应式布局 */
export const CodeReactive =
`    import { Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <Row type={'flex'}>
            <Col xs={8} sm={6} md={4} lg={3} xl={1}><div className={'grid-content light'}>col</div></Col>
            <Col xs={4} sm={6} md={8} lg={9} xl={11}><div className={'grid-content dark'}>col</div></Col>
            <Col xs={4} sm={6} md={8} lg={9} xl={11}><div className={'grid-content light'}>col</div></Col>
            <Col xs={8} sm={6} md={4} lg={3} xl={1}><div className={'grid-content dark'}>col</div></Col>
        </Row>,
        mountNode
    );`

/* 其他属性的响应式 */
export const CodeReactiveObj =
`    import { Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <Row type={'flex'}>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}><div className={'grid-content light'}>col</div></Col>
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}><div className={'grid-content dark'}>col</div></Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}><div className={'grid-content light'}>col</div></Col>
        </Row>,
        mountNode
    );`
