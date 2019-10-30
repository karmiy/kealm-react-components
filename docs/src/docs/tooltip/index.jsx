import React, { useState, useMemo } from 'react';
import { Tooltip, Button, Row, Col } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

const places = {
    TL: 'top-start',
    Top: 'top',
    TR: 'top-end',
    BL: 'bottom-start',
    Bottom: 'bottom',
    BR: 'bottom-end',
    LT: 'left-start',
    Left: 'left',
    LB: 'left-end',
    RT: 'right-start',
    Right: 'right',
    RB: 'right-end',
}

function renderPlacement(placement) {

}

function PopoverDoc() {
    const [visible, setVisible] = useState(false);

    return (
        <div className='page-box'>
            <h1>Tooltip 文字提示</h1>
            <p>常用于展示鼠标 hover 时的提示信息。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>最简单的用法。</p>
            <div className="detail-box">
                <Tooltip />
            </div>


            {/* API */}
            {/*{useMemo(() => <ApiTable title='Popover' propsList={popoverProps} eventsList={popoverEvents} />, [])}*/}
        </div>
    )
}

export default PopoverDoc;