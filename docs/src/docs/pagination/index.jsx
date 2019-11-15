import React, { useState, useMemo, useCallback } from 'react';
import { Pagination, Select } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

const { Option } = Select;

function PaginationDoc() {
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const onChange = useCallback(n => setCurrent(n), []);

    const onPageSizeChange = useCallback(s => setPageSize(s), []);

    return (
        <div className='page-box'>
            <h1>Pagination 分页</h1>
            <p>当数据量过多时，使用分页分解数据。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>基础的分页。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Pagination defaultCurrent={1} total={50} />
                    </div>
                )
            }, [])}

            {/* 更多数据 */}
            <h2>更多数据</h2>
            <p>分页数达到10后，将会部分省略。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Pagination defaultCurrent={1} total={500} />
                    </div>
                )
            }, [])}

            {/* 受控分页 */}
            <h2>受控分页</h2>
            <p>通过 current 与 onChange 联动控制分页。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Pagination current={current} onChange={onChange} total={500} />
                    </div>
                )
            }, [current])}

            {/* 禁用 */}
            <h2>禁用</h2>
            <p>禁用分页控件。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Pagination defaultCurrent={15} total={500} disabled />
                    </div>
                )
            }, [])}

            {/* 自定义每页条目 */}
            <h2>自定义每页条目</h2>
            <p>可以通过 pageSize 配置每页的条目数，默认10，可选 10、20、30、40。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Select selectorStyle={{width: '150px'}} value={pageSize} onChange={size => setPageSize(size)}>
                                <Option value={10} label={'10 条/页'}>10 条/页</Option>
                                <Option value={20} label={'20 条/页'}>20 条/页</Option>
                                <Option value={30} label={'30 条/页'}>30 条/页</Option>
                                <Option value={40} label={'40 条/页'}>40 条/页</Option>
                            </Select>
                        </div>
                        <div className="detail-box">
                            <Pagination pageSize={pageSize} total={500} />
                        </div>
                    </>
                )
            }, [pageSize])}

            {/* 开启条目切换 */}
            <h2>开启条目切换</h2>
            <p>通过配置 showSizeChanger，可以显示下拉器，切换每页条目数。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Pagination defaultCurrent={1} total={500} showSizeChanger />
                        </div>
                        <div className="detail-box">
                            <Pagination defaultCurrent={1} total={500} showSizeChanger disabled />
                        </div>
                    </>
                )
            }, [])}

            {/* 快速跳转 */}
            <h2>快速跳转</h2>
            <p>配置 showQuickJumper 开启快速跳转输入框。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Pagination defaultCurrent={1} total={500} showQuickJumper />
                        </div>
                        <div className="detail-box">
                            <Pagination defaultCurrent={1} total={500} showQuickJumper disabled />
                        </div>
                    </>
                )
            }, [])}

            {/* 简单分页 */}
            <h2>简单分页</h2>
            <p>非常简洁的分页控件。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Pagination total={50} simple />
                    </div>
                )
            }, [current])}

            {/* API */}
            {/*<ApiTable title='Button' propsList={buttonProps} eventsList={buttonEvents} />*/}
        </div>
    )
}

export default PaginationDoc;