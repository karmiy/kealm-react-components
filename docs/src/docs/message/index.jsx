import React, { useState, useMemo } from 'react';
import { Button, Row, Col, Icon, message } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';
import { messageMethodProps, messageMethodEvents } from 'api/message';

function MessageDoc() {
    const [size, setSize] = useState();
    const [loading, setLoading] = useState(true);

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
            <ApiTable title='Message Method' propsList={messageMethodProps} eventsList={messageMethodEvents} />
            {/*<table>
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
                        <td>content</td>
                        <td>提示内容</td>
                        <td>string / ReactNode / config</td>
                        <td>--</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>duration</td>
                        <td>自动关闭的延时，单位秒。设为 0 时不自动关闭。</td>
                        <td>number</td>
                        <td>--</td>
                        <td>3000</td>
                    </tr>
                    <tr>
                        <td>onClose</td>
                        <td>关闭时触发的回调函数</td>
                        <td>() => void</td>
                        <td>--</td>
                        <td>--</td>
                    </tr>
                </tbody>
            </table>*/}
        </div>
    )
}

export default MessageDoc;