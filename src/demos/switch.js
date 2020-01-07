/* 基本用法 */
export const CodeBasic =
`    import { Switch } from "@kealm/react-components";
    
    ReactDom.render(
        <Switch defaultChecked={true}></Switch>,
        mountNode
    );`

/* 受控开关 */
export const CodeControlled =
`    import { useState, useCallback } from 'react';
    import { Switch } from "@kealm/react-components";
    
    function Demo() {
        const [checked, setChecked] = useState(false);
        
        const onChange = useCallback(c => {
            setChecked(c);
        }, []);
        
        return <Switch checked={checked} onChange={onChange} />
    }`

/* 禁用 */
export const CodeDisabled =
`    import { Switch, Row, Col } from "@kealm/react-components";
    
    ReactDom.render(
        <Row gutter={30}>
            <Col><Switch disabled></Switch></Col>
            <Col><Switch defaultChecked={true} disabled></Switch></Col>
        </Row>,
        mountNode
    );`

/* 自定义颜色 */
export const CodeCustomColor =
`    import { Switch } from "@kealm/react-components";
    
    ReactDom.render(
        <Switch defaultChecked={true} activeColor={'#13ce66'} inActiveColor={'#ff4949'}></Switch>,
        mountNode
    );`

/* 文字和图标 */
export const CodeContent =
`    import { Switch, Row, Col, Icon } from "@kealm/react-components";
    
    ReactDom.render(
        <Row gutter={30}>
            <Col>
                <Switch
                    defaultChecked={true}
                    activeContent={'开'}
                    inActiveContent={'关'}>
                </Switch>
            </Col>
            <Col>
                <Switch
                    defaultChecked={true}
                    activeContent={1}
                    inActiveContent={0}>
                </Switch>
            </Col>
            <Col>
                <Switch
                    defaultChecked={true}
                    activeContent={<Icon type={'check'}></Icon>}
                    inActiveContent={<Icon type={'close'}></Icon>}>
                </Switch>
            </Col>
        </Row>,
        mountNode
    );`

/* 加载中 */
export const CodeLoading =
`    import { Switch } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <div className="detail-box">
                <Switch defaultChecked={true} loading></Switch>
            </div>
            <div className="detail-box">
                <Switch loading></Switch>
            </div>
        </div>,
        mountNode
    );`