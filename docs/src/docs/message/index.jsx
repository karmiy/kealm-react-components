import React, { useMemo } from 'react';
import { Button, Row, Col, Icon, message } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';
import { messageMethodProps, messageMethodEvents } from 'api/message';
import { CodeGlobalConfig, CodeBasic, CodeStatus, CodeIcon, CodeDuration, CodeLoading, CodePromise, CodeUpdate, CodeDestroy } from 'demos/message';

function MessageDoc() {
    return (
        <div className='page-box'>
            <h1>Message 消息提示</h1>
            <p>全局展示操作反馈信息。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>从顶部出现，3 秒后自动消失。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Button
                            plain
                            onClick={() => message.info('This is a normal message')}
                        >Display normal message</Button>
                    </div>
                )
            }, [])}
            <HighLight code={CodeBasic} />

            {/* 不同状态 */}
            <h2>不同状态</h2>
            <p>用来显示「成功、警告、消息、错误」类的操作反馈。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Row gutter={16}>
                            <Col>
                                <Button plain onClick={() => message.success('This is a success message')}>Success</Button>
                            </Col>
                            <Col>
                                <Button plain onClick={() => message.warning('This is a warning message')}>Warning</Button>
                            </Col>
                            <Col>
                                <Button plain onClick={() => message.error('This is an error message')}>Error</Button>
                            </Col>
                            <Col>
                                <Button plain onClick={() => message.info('This is an info message')}>Info</Button>
                            </Col>
                        </Row>
                    </div>
                )
            }, [])}
            <HighLight code={CodeStatus} />

            {/* 自定义图标 */}
            <h2>自定义图标</h2>
            <p>配置 icon 搭配自定义图标。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Button plain onClick={() => {
                            message.open({
                                content: 'This is a success message',
                                icon: <Icon type={'location'} style={{color: '#1394ff'}} />
                            })
                        }}>Customized display icon</Button>
                    </div>
                )
            }, [])}
            <HighLight code={CodeIcon} />

            {/* 自定义延时 */}
            <h2>自定义延时</h2>
            <p>自定义时长 10s，默认时长为 3s。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Button
                            plain
                            onClick={() => message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10000)}
                        >Customized display duration</Button>
                    </div>
                )
            }, [])}
            <HighLight code={CodeDuration} />

            {/* 加载中 */}
            <h2>加载中</h2>
            <p>当延时设置为 0 时，不会自动关闭</p>
            <p>进行全局 loading，异步自行移除。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Button
                            plain
                            onClick={() => {
                                const close = message.loading('Action in progress...', 0);
                                setTimeout(close, 2500);
                            }}
                        >Display a loading indicator</Button>
                    </div>
                )
            }, [])}
            <HighLight code={CodeLoading} />

            {/* Promise 接口 */}
            <h2>Promise 接口</h2>
            <p>当延时设置为 0 时，不会自动关闭</p>
            <p>可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 message 将要结束时通过 then 显示新的 message。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Button
                            plain
                            onClick={() => {
                                message
                                    .loading('Action in progress..', 2500)
                                    .then(() => message.success('Loading finished', 2500))
                                    .then(() => message.info('Loading finished is finished', 2500));
                            }}
                        >Display sequential messages</Button>
                    </div>
                )
            }, [])}
            <HighLight code={CodePromise} />

            {/* 更新消息内容 */}
            <h2>更新消息内容</h2>
            <p>可以通过返回的 key 来更新内容，key 值也可以自行配置</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Button
                            plain
                            onClick={() => {
                                const fn = message.loading({ content: 'Loading...'});
                                setTimeout(() => {
                                    message.update(fn.key, {
                                        type: 'success',
                                        content: 'Loaded',
                                    });
                                }, 2500);
                            }}
                        >Open the message box</Button>
                    </div>
                )
            }, [])}
            <HighLight code={CodeUpdate} />

            {/* 销毁消息提示 */}
            <h2>销毁消息提示</h2>
            <p>可以通过 message.destroy 销毁所有的消息提示</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Button
                            plain
                            onClick={() => {
                                let count = 5;
                                function createMessage() {
                                    console.log(count);
                                    if(!count) return;
                                    count--;
                                    message.loading({
                                        content: 'Loading...',
                                        onMount: createMessage,
                                        duration: 0,
                                    });
                                }
                                createMessage();
                                setTimeout(message.destroy, 4000);
                            }}
                        >Destroy all messages after 4 seconds</Button>
                    </div>
                )
            }, [])}
            <HighLight code={CodeDestroy} />

            {/* API */}
            {/*<ApiTable title='Button' propsList={buttonProps} eventsList={buttonEvents} />*/}
            <h2>Message methods</h2>
            <p>组件提供了一些静态方法，使用方式和参数如下：</p>
            <ul>
                <li>message.success(content, duration, onClose)</li>
                <li>message.warning(content, duration, onClose)</li>
                <li>message.info(content, duration, onClose)</li>
                <li>message.error(content, duration, onClose)</li>
                <li>message.loading(content, duration, onClose)</li>
            </ul>
            <p>也可以对象的形式传递参数：</p>
            <ul>
                <li>message.success(config)</li>
                <li>message.warning(config)</li>
                <li>message.info(config)</li>
                <li>message.error(config)</li>
                <li>message.loading(config)</li>
            </ul>
            <p>这些方法调用后将返回 promise 接口：</p>
            <ul>
                <li>message[level](content, duration, onClose).then(afterClose)</li>
                <li>message[level](config).then(afterClose)</li>
            </ul>
            <p>当需要更新组件的内容或状态时，组件提供了相应的更新方法：</p>
            <ul>
                <li>message.update(config)</li>
            </ul>
            <ApiTable title='Message Method' propsList={messageMethodProps} eventsList={messageMethodEvents} />
            <h2>全局方法</h2>
            <p>还提供了全局配置和全局销毁方法：</p>
            <ul>
                <li>message.config(options)</li>
                <li>message.destroy()</li>
            </ul>
            <HighLight collapsible={false} code={CodeGlobalConfig} />
            <h2>Options</h2>
            <table>
                <thead>
                <tr>
                    <th>参数</th>
                    <th>说明</th>
                    <th>类型</th>
                    <th>可选</th>
                    <th>默认值</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>duration</td>
                        <td>默认自动关闭延时，单位秒</td>
                        <td>number</td>
                        <td>--</td>
                        <td>3000</td>
                    </tr>
                    <tr>
                        <td>getContainer</td>
                        <td>配置渲染节点的输出位置</td>
                        <td>() => HTMLElement</td>
                        <td>--</td>
                        <td>() => document.body</td>
                    </tr>
                    <tr>
                        <td>maxCount</td>
                        <td>最大显示数, 超过限制时，最早的消息会被自动关闭</td>
                        <td>number</td>
                        <td>--</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>top</td>
                        <td>消息距离顶部的位置</td>
                        <td>number</td>
                        <td>--</td>
                        <td>20</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MessageDoc;