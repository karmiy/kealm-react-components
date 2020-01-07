import React from 'react';
import { Breadcrumb, Icon } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';
import { Link } from 'react-router-dom';
import { breadcrumbProps, breadcrumbItemProps } from 'api/breadcrumb';
import { CodeBasic, CodeIcon, CodeSeparator } from 'demos/breadcrumb';

function BreadcrumbDoc() {
    return (
        <div className='page-box'>
            <h1>Breadcrumb 面包屑</h1>
            <p>显示当前页面的路径，快速返回之前的任意页面。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>适用广泛的基础用法。</p>
            <div className="detail-box">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to={'/'}>首页</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">音乐</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">潮流</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <span>小猪佩奇</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <HighLight code={CodeBasic} />

            {/* 带图标 */}
            <h2>带图标</h2>
            <p>图标放在文字前面。</p>
            <div className="detail-box">
                <Breadcrumb>
                    <Breadcrumb.Item to={'/'}>
                        <Icon type={'home'} />
                        <span>首页</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="">
                            <Icon type={'music'} />
                            <span>音乐</span>
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="">
                            <Icon type={'rocket'} />
                            <span>潮流</span>
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <span>小猪佩奇</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <HighLight code={CodeIcon} />

            {/* 分隔符 */}
            <h2>分隔符</h2>
            <p>自定义分隔符。</p>
            <div className="detail-box">
                <Breadcrumb separator={'>'}>
                    <Breadcrumb.Item>
                        <Link to={'/'}>首页</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">音乐</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">潮流</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <span>小猪佩奇</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <HighLight code={CodeSeparator} />

            {/* API */}
            <ApiTable title='Breadcrumb' propsList={breadcrumbProps} />
            <ApiTable title='BreadcrumbItem' propsList={breadcrumbItemProps} />
        </div>
    )
}

export default BreadcrumbDoc;