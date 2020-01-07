/* 安装 UI 库 */
export const CodeInstall =
`    npm install --save @kealm/react-components
    cnpm install --save @kealm/react-components`

/* 引入样式 */
export const CodeStyle =
`    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';
    
    // 引入 style
    import '@kealm/react-components/styles/index.css'
    
    ReactDOM.render(<App />, document.getElementById('root'));`

/* 按需引入 */
export const CodeImport =
`    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Alert, Row, Col } from '@kealm/react-components';
    
    function Demo() {
        return (
            <Row>
                <Col span={9}>
                    <div className="detail-box">
                        <Alert type={'success'} title={'Success Text'}></Alert>
                    </div>
                    <div className="detail-box">
                        <Alert type={'info'} title={'Info Text'}></Alert>
                    </div>
                    <div className="detail-box">
                        <Alert type={'warning'} title={'Warning Text'}></Alert>
                    </div>
                    <div className="detail-box">
                        <Alert type={'error'} title={'Error Text'}></Alert>
                    </div>
                </Col>
            </Row>
        )
    }`