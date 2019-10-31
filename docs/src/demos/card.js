/* 基本用法 */
export const CodeBasic =
`    import { Card } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <div className='detail-box'>
                <Card title={'Default size card'} extra={<a href="#">More</a>}>
                    <div>Card content</div>
                    <div>Card content</div>
                    <div>Card content</div>
                </Card>
            </div>
            <div className='detail-box'>
                <Card title={'Small size card'} extra={<a href="#">More</a>} size={'small'}>
                    <div>Card content</div>
                    <div>Card content</div>
                    <div>Card content</div>
                </Card>
            </div>
        <div/>,
        mountNode
    );`


/* 无边框 */
export const CodeBordered =
`    import { Card } from "@kealm/react-components";
    
    ReactDom.render(
        <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Card title={'Card Title'} bordered={false}>
                <div>Card content</div>
                <div>Card content</div>
                <div>Card content</div>
            </Card>
        </div>,
        mountNode
    );`

/* 简洁卡片 */
export const CodeSimple =
`    import { Card } from "@kealm/react-components";
    
    ReactDom.render(
        <Card>
            <div>Card content</div>
            <div>Card content</div>
            <div>Card content</div>
        </Card>,
        mountNode
    );`

/* 带图片 */
export const CodeImg =
`    import { Card } from "@kealm/react-components";
    
    ReactDom.render(
        <Card cover={<img src={Hawk} alt="pig"></img>} shadow={'hover'}>
            <Card.Meta title={'Hawk'} desc={'This is an unusual pig'} />
        </Card>,
        mountNode
    );`

/* 卡片阴影 */
export const CodeShadow =
`    import { Card, Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <Row gutter={16}>
            <Col>
                <Card title={'Card Title'} extra={<a href="#">More</a>}>
                    <div>Card content</div>
                    <div>Card content</div>
                    <div>Card content</div>
                </Card>
            </Col>
            <Col>
                <Card shadow={'hover'} title={'Card Title'} extra={<a href="#">More</a>}>
                    <div>Card content</div>
                    <div>Card content</div>
                    <div>Card content</div>
                </Card>
            </Col>
            <Col>
                <Card shadow={'always'}  title={'Card Title'} extra={<a href="#">More</a>}>
                    <div>Card content</div>
                    <div>Card content</div>
                    <div>Card content</div>
                </Card>
            </Col>
        </Row>,
        mountNode
    );`

/* 栅格卡片 */
export const CodeRow =
`    import { Card, Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title={'Card Title'} bordered={false}>
                        <div>Card content</div>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title={'Card Title'} bordered={false}>
                        <div>Card content</div>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title={'Card Title'} bordered={false}>
                        <div>Card content</div>
                    </Card>
                </Col>
            </Row>
        </div>,
        mountNode
    );`

/* 网格型内嵌卡片 */
export const CodeGrid =
`    import { Card } from "@kealm/react-components";
    
    ReactDom.render(
        <Card title={'Card Title'} style={{width:'800px'}}>
            <Card.Grid style={{width: '25%'}}>Content</Card.Grid>
            <Card.Grid style={{width: '25%'}} hoverable={false}>Content</Card.Grid>
            <Card.Grid style={{width: '25%'}}>Content</Card.Grid>
            <Card.Grid style={{width: '25%'}}>Content</Card.Grid>
            <Card.Grid style={{width: '25%'}}>Content</Card.Grid>
            <Card.Grid style={{width: '25%'}}>Content</Card.Grid>
            <Card.Grid style={{width: '25%'}}>Content</Card.Grid>
        </Card>,
        mountNode
    );`

/* 内部卡片 */
export const CodeInner =
`    import { Card } from "@kealm/react-components";
    
    ReactDom.render(
        <Card title={'Card Title'} style={{width:'800px'}}>
            <p style={{
                    fontSize: 14,
                    color: 'rgba(0, 0, 0, 0.85)',
                    marginBottom: 16,
                    fontWeight: 500,
                }}
            >
                Group title
            </p>
            <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
                Inner Card content
            </Card>
            <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="Inner Card title"
                extra={<a href="#">More</a>}
            >
                Inner Card content
            </Card>
        </Card>,
        mountNode
    );`

/* 支持更多配置内容 */
export const CodeActions =
`    import { Card } from "@kealm/react-components";
    
    ReactDom.render(
        <Card
            cover={<img src={PeiQi} alt="pig" /></img>}
            actions={[
                <Icon type={'config'} key={'config'} ></Icon>,
                <Icon type={'edit'} key={'edit'} ></Icon>,
                <Icon type={'ellipsis'} key={'ellipsis'} ></Icon>,
            ]}
        >
            <Card.Meta
                avatar={<div className={'card-avatar'}><img src={QiaoZhi} alt="pig"></img></div>}
                title="Card title"
                desc="This is the description"
            />
        </Card>,
        mountNode
    );`