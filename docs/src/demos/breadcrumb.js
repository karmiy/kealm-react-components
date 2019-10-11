/* 基本用法 */
export const CodeBasic =
`    import { Breadcrumb } from "@kealm/react-components";
    import { Link } from 'react-router-dom';
    
    ReactDom.render(
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
        </Breadcrumb>,
        mountNode
    );`

/* 带图标 */
export const CodeIcon =
`    import { Breadcrumb, Icon } from "@kealm/react-components";
    import { Link } from 'react-router-dom';
    
    ReactDom.render(
        <Breadcrumb>
            <Breadcrumb.Item to={'/'}>
                <Icon type={'home'}></Icon>
                <span>首页</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <Link to="">
                    <Icon type={'music'}></Icon>
                    <span>音乐</span>
                </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <Link to="">
                    <Icon type={'rocket'}></Icon>
                    <span>潮流</span>
                </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <span>小猪佩奇</span>
            </Breadcrumb.Item>
        </Breadcrumb>,
        mountNode
    );`

/* 分隔符 */
export const CodeSeparator =
`    import { Breadcrumb, Icon } from "@kealm/react-components";
    import { Link } from 'react-router-dom';
    
    ReactDom.render(
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
        </Breadcrumb>,
        mountNode
    );`
