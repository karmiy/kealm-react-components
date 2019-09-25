import React from 'react';
import { Card, Row, Col } from '@kealm/react-components';
import HuoKe from '@/assets/imgs/huoke.png';
import { ApiTable, HighLight } from '@/components';


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

            {/* 无边框 */}
            <h2>无边框</h2>
            <p>在灰色背景上使用无边框的卡片。</p>
            <div className='detail-box'>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Card title={'Card Title'} border={false}>
                        <div>Card content</div>
                        <div>Card content</div>
                        <div>Card content</div>
                    </Card>
                </div>
            </div>

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

            {/* 带图片 */}
            <h2>带图片</h2>
            <p>可以利用 Card.Meta 支持更灵活的内容。</p>
            <div className='detail-box'>
                <Card cover={<img src={HuoKe} alt="pig"/>} shadow={'hover'}>
                    <Card.Meta title={'Huo Ke'} desc={'This is an unusual pig'} />
                </Card>
            </div>

            {/* 栅格卡片 */}
            <h2>栅格卡片</h2>
            <p>在系统概览页面常常和栅格进行配合。</p>
            <div className='detail-box'>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title={'Card Title'} border={false}>
                                <div>Card content</div>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title={'Card Title'} border={false}>
                                <div>Card content</div>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title={'Card Title'} border={false}>
                                <div>Card content</div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>

            {/* API */}
            {/*{useMemo(() => <ApiTable title='Button' propsList={buttonProps} eventsList={buttonEvents} />, [])}*/}
        </div>
    )
}

export default CardDoc;