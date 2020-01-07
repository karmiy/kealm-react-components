import React from 'react';
import { Row, Col } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';
import { rowProps, colProps } from 'api/grid';
import { CodeBasic, CodeGutter, CodeOffset, CodeMove, CodeFlexHoriz, CodeFlexVert, CodeFlexOrder, CodeReactive, CodeReactiveObj } from 'demos/grid';

function GridDoc() {
    return (
        <div className='page-box'>
            <h1>Grid 栅格</h1>
            <p>通过基础的 24 栅格，迅速简便地创建布局。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>基础的按钮用法。</p>
            <div className="detail-box">
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
            </div>
            <HighLight code={CodeBasic} />

            {/* 分栏间隔 */}
            <h2>分栏间隔</h2>
            <p>分栏之间存在间隔。</p>
            <div className="detail-box">
                <Row gutter={20}>
                    <Col span={6}><div className={'grid-content light'}>col-6</div></Col>
                    <Col span={6}><div className={'grid-content dark'}>col-6</div></Col>
                    <Col span={6}><div className={'grid-content light'}>col-6</div></Col>
                    <Col span={6}><div className={'grid-content dark'}>col-6</div></Col>
                </Row>
            </div>
            <HighLight code={CodeGutter} />

            {/* 分栏偏移 */}
            <h2>分栏偏移</h2>
            <p>支持偏移指定的栏数。</p>
            <div className="detail-box">
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
            </div>
            <HighLight code={CodeOffset} />

            {/* 分栏移动 */}
            <h2>分栏移动</h2>
            <p>通过使用 push 和 pull 可以很容易的使栅格向右或向左移动。</p>
            <div className="detail-box">
                <Row type={'flex'} justify={'start'}>
                    <Col span={18} push={6}><div className={'grid-content light'}>col-6</div></Col>
                    <Col span={6} pull={18}><div className={'grid-content dark'}>col-18</div></Col>
                </Row>
            </div>
            <HighLight code={CodeMove} />

            {/* Flex水平布局 */}
            <h2>Flex水平布局</h2>
            <p>通过 flex 布局来对分栏进行灵活的水平对齐。</p>
            <div className="detail-box wrap-bg">
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
            </div>
            <HighLight code={CodeFlexHoriz} />

            {/* Flex垂直布局 */}
            <h2>Flex垂直布局</h2>
            <p>flex子元素垂直对齐。</p>
            <div className="detail-box wrap-bg">
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
            </div>
            <HighLight code={CodeFlexVert} />

            {/* Flex排序 */}
            <h2>Flex排序</h2>
            <p>通过 flex 布局的 order 来改变元素的排序。</p>
            <div className="detail-box">
                <Row type={'flex'}>
                    <Col span={6} order={4}><div className={'grid-content light'}>1 col-order-4</div></Col>
                    <Col span={6} order={3}><div className={'grid-content light'}>2 col-order-3</div></Col>
                    <Col span={6} order={2}><div className={'grid-content light'}>3 col-order-2</div></Col>
                    <Col span={6} order={1}><div className={'grid-content light'}>4 col-order-1</div></Col>
                </Row>
            </div>
            <HighLight code={CodeFlexOrder} />

            {/* 响应式布局 */}
            <h2>响应式布局</h2>
            <p>参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。</p>
            <div className="detail-box">
                <Row type={'flex'}>
                    <Col xs={8} sm={6} md={4} lg={3} xl={1}><div className={'grid-content light'}>col</div></Col>
                    <Col xs={4} sm={6} md={8} lg={9} xl={11}><div className={'grid-content dark'}>col</div></Col>
                    <Col xs={4} sm={6} md={8} lg={9} xl={11}><div className={'grid-content light'}>col</div></Col>
                    <Col xs={8} sm={6} md={4} lg={3} xl={1}><div className={'grid-content dark'}>col</div></Col>
                </Row>
            </div>
            <HighLight code={CodeReactive} />

            {/* 其他属性的响应式 */}
            <h2>其他属性的响应式</h2>
            <p>span、pull、push、offset、order 属性可以通过内嵌到 xs sm md lg xl xxl 属性中来使用。</p>
            <p>其中 xs = {6} 相当于 {'xs = {{ span: 6 }}'}</p>
            <div className="detail-box">
                <Row type={'flex'}>
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}><div className={'grid-content light'}>col</div></Col>
                    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}><div className={'grid-content dark'}>col</div></Col>
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}><div className={'grid-content light'}>col</div></Col>
                </Row>
            </div>
            <HighLight code={CodeReactiveObj} />

            {/* API */}
            <ApiTable title='Row' propsList={rowProps} />
            <ApiTable title='Col' propsList={colProps} />
        </div>
    )
}

export default GridDoc;