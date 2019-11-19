import React, { useState, useMemo } from 'react';
import { Slider } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

function ButtonDoc() {
    const [size, setSize] = useState();
    const [loading, setLoading] = useState(true);

    return (
        <div className='page-box'>
            <h1>Slider 滑块</h1>
            <p>通过拖动滑块在一个固定区间内进行选择。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>在拖动滑块时，显示当前值。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Slider>
                            123
                        </Slider>
                    </div>
                )
            }, [])}

            {/* API */}
            {/*<ApiTable title='Button' propsList={buttonProps} eventsList={buttonEvents} />*/}
        </div>
    )
}

export default ButtonDoc;