/* 基本用法 */
export const CodeGlobalConfig =
`    message.config({
        top: 100,
        duration: 2,
        maxCount: 3,
    });`

/* 基本用法 */
export const CodeBasic =
`    import { message, Button } from "@kealm/react-components";
    
    ReactDom.render(
        <Button
            plain
            onClick={() => message.info('This is a normal message')}
        >Display normal message</Button>,
        mountNode
    );`

/* 不同状态 */
export const CodeStatus =
`    import { message, Button, Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
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
        </Row>,
        mountNode
    );`

/* 自定义图标 */
export const CodeIcon =
`    import { message, Button, Icon } from "@kealm/react-components";
    
    ReactDom.render(
        <Button plain onClick={() => {
            message.open({
                content: 'This is a success message',
                icon: <Icon type={'location'} style={{color: '#1394ff'}} />
            })
        }}>Customized display icon</Button>,
        mountNode
    );`

/* 自定义延时 */
export const CodeDuration =
`    import { message, Button } from "@kealm/react-components";
    
    ReactDom.render(
        <Button
            plain
            onClick={() => message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10000)}
        >Customized display duration</Button>,
        mountNode
    );`

/* 加载中 */
export const CodeLoading =
`    import { message, Button } from "@kealm/react-components";
    
    ReactDom.render(
        <Button
            plain
            onClick={() => {
                const close = message.loading('Action in progress...', 0);
                setTimeout(close, 2500);
            }}
        >Display a loading indicator</Button>,
        mountNode
    );`

/* Promise 接口 */
export const CodePromise =
`    import { message, Button } from "@kealm/react-components";
    
    ReactDom.render(
        <Button
            plain
            onClick={() => {
                message
                    .loading('Action in progress..', 2500)
                    .then(() => message.success('Loading finished', 2500))
                    .then(() => message.info('Loading finished is finished', 2500));
            }}
        >Display sequential messages</Button>,
        mountNode
    );`

/* 更新消息内容 */
export const CodeUpdate =
`    import { message, Button } from "@kealm/react-components";
    
    ReactDom.render(
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
        >Open the message box</Button>,
        mountNode
    );`


/* 销毁消息提示 */
export const CodeDestroy =
`    import { message, Button } from "@kealm/react-components";
    
    ReactDom.render(
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
        >Destroy all messages after 4 seconds</Button>,
        mountNode
    );`