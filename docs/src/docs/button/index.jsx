import React from 'react';
import { Button } from '@kealm/react-components';

function ButtonDoc() {
    return (
        <div className='page-box'>
            <h1>Button 按钮</h1>
            <p>按钮用于开始一个即时操作。</p>
            <div className="detail-box">
                <Button>按钮组件</Button>
                <Button type='primary'>基本按钮</Button>
                <Button type='success'>成功按钮</Button>
                <Button type='info'>信息按钮</Button>
                <Button type='warning'>警告按钮</Button>
                <Button type='danger'>危险按钮</Button>
            </div>
            <div className="detail-box">
                <Button plain>按钮组件</Button>
                <Button type='primary' plain>基本按钮</Button>
                <Button type='success' plain>成功按钮</Button>
                <Button type='info' plain>信息按钮</Button>
                <Button type='warning' plain>警告按钮</Button>
                <Button type='danger' plain>危险按钮</Button>
            </div>
            <div className="detail-box">
                <Button round>按钮组件</Button>
                <Button type='primary' round>基本按钮</Button>
                <Button type='success' round>成功按钮</Button>
                <Button type='info' round>信息按钮</Button>
                <Button type='warning' round>警告按钮</Button>
                <Button type='danger' round>危险按钮</Button>
            </div>
        </div>
    )
}

export default ButtonDoc;