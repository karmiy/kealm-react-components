import React, { useState, useMemo } from 'react';
import { Popover, Button } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

function PopoverDoc() {

    return (
        <div className='page-box' style={{height: '1000px'}}>
            <h1>Popover 弹出框</h1>
            <p>点击/鼠标移入元素，弹出气泡式的卡片浮层。</p>
            <p>与 Tooltip 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>最简单的用法，浮层的大小由内容区域决定。</p>
            <div className="detail-box">
                <Popover trigger={'hover'}>
                    {/*<Button
                        onFocus={() => console.log(1)}
                        onBlur={() => console.log(2)}
                    >Click</Button>*/}
                    <Button>Click</Button>
                </Popover>
            </div>

            {/* API */}
            {/*{useMemo(() => <ApiTable title='Button' propsList={buttonProps} eventsList={buttonEvents} />, [])}*/}
        </div>
    )
}

export default PopoverDoc;