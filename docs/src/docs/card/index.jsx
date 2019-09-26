import React from 'react';
import { Card, Row, Col, Icon } from '@kealm/react-components';
import HuoKe from '@/assets/imgs/huoke.png';
import PeiQi from '@/assets/imgs/peiqi.png';
import QiaoZhi from '@/assets/imgs/qiaozhi.png';
import { ApiTable, HighLight } from '@/components';
import { cardProps, cardMetaProps, cardGridProps } from 'api/card';
import { CodeBasic, CodeBordered, CodeSimple, CodeImg, CodeRow, CodeGrid, CodeInner, CodeActions } from 'demos/card';


function CardDoc() {
    return (
        <div className='page-box'>
            <h1>Card 卡片</h1>
            <p>将信息聚合在卡片容器中展示。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>包含标题，内容和操作。</p>
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
            <HighLight code={CodeBasic} />

            {/* 无边框 */}
            <h2>无边框</h2>
            <p>在灰色背景上使用无边框的卡片。</p>
            <div className='detail-box'>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Card title={'Card Title'} bordered={false}>
                        <div>Card content</div>
                        <div>Card content</div>
                        <div>Card content</div>
                    </Card>
                </div>
            </div>
            <HighLight code={CodeBordered} />

            {/* 简洁卡片 */}
            <h2>简洁卡片</h2>
            <p>只包含内容区域。</p>
            <div className='detail-box'>
                <Card>
                    <div>Card content</div>
                    <div>Card content</div>
                    <div>Card content</div>
                </Card>
            </div>
            <HighLight code={CodeSimple} />

            {/* 带图片 */}
            <h2>带图片</h2>
            <p>可以利用 Card.Meta 支持更灵活的内容。</p>
            <div className='detail-box'>
                <Card cover={<img src={HuoKe} alt="pig"/>} shadow={'hover'}>
                    <Card.Meta title={'Huo Ke'} desc={'This is an unusual pig'} />
                </Card>
            </div>
            <HighLight code={CodeImg} />

            {/* 栅格卡片 */}
            <h2>栅格卡片</h2>
            <p>在系统概览页面常常和栅格进行配合。</p>
            <div className='detail-box'>
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
                </div>
            </div>
            <HighLight code={CodeRow} />

            {/* 网格型内嵌卡片 */}
            <h2>网格型内嵌卡片</h2>
            <p>一种常见的卡片内容区隔模式。</p>
            <div className='detail-box'>
                <Card title={'Card Title'} style={{width:'800px'}}>
                    <Card.Grid style={{width:'25%'}}>Content</Card.Grid>
                    <Card.Grid style={{width:'25%'}} hoverable={false}>Content</Card.Grid>
                    <Card.Grid style={{width:'25%'}}>Content</Card.Grid>
                    <Card.Grid style={{width:'25%'}}>Content</Card.Grid>
                    <Card.Grid style={{width:'25%'}}>Content</Card.Grid>
                    <Card.Grid style={{width:'25%'}}>Content</Card.Grid>
                    <Card.Grid style={{width:'25%'}}>Content</Card.Grid>
                </Card>
            </div>
            <HighLight code={CodeGrid} />

            {/* 内部卡片 */}
            <h2>内部卡片</h2>
            <p>可以放在普通卡片内部，展示多层级结构的信息。</p>
            <div className='detail-box'>
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
                </Card>
            </div>
            <HighLight code={CodeInner} />

            {/* 支持更多配置内容 */}
            <h2>支持更多配置内容</h2>
            <p>一种支持封面、头像、标题和描述信息的卡片。</p>
            <div className='detail-box'>
                <Card
                    cover={<img src={PeiQi} alt="pig"/>}
                    actions={[
                        <Icon type={'config'} key={'config'} />,
                        <Icon type={'edit'} key={'edit'} />,
                        <Icon type={'ellipsis'} key={'ellipsis'} />,
                    ]}
                >
                    <Card.Meta
                        avatar={<div className={'card-avatar'}><img src={QiaoZhi} alt="pig"/></div>}
                        title="Card title"
                        desc="This is the description"
                    />
                </Card>
            </div>
            <HighLight code={CodeActions} />

            {/* API */}
            <ApiTable title='Card' propsList={cardProps} />
            <ApiTable title='Meta' propsList={cardMetaProps} />
            <ApiTable title='Grid' propsList={cardGridProps} />
        </div>
    )
}

export default CardDoc;