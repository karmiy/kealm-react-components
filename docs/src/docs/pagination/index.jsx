import React, { useState, useMemo } from 'react';
import { Pagination } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

function PaginationDoc() {
    const [size, setSize] = useState();
    const [loading, setLoading] = useState(true);

    return (
        <div className='page-box'>
            <h1>Pagination 分页</h1>
            <p>当数据量过多时，使用分页分解数据。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>基础的分页。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Pagination defaultCurrent={1} total={50} />
                        </div>
                    </>
                )
            }, [])}

            {/* API */}
            {/*<ApiTable title='Button' propsList={buttonProps} eventsList={buttonEvents} />*/}
        </div>
    )
}

export default PaginationDoc;