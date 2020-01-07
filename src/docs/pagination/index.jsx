import React, { useState, useMemo, useCallback } from 'react';
import { Pagination, Select } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';
import { paginationProps, paginationEvents } from 'api/pagination';
import {
    CodeBasic,
    CodeMore,
    CodeControlled,
    CodeDisabled,
    CodePageSize,
    CodeShowSizeChanger,
    CodeShowQuickJumper,
    CodeSimple,
    CodeShowTotal,
    CodeItemRender,
} from 'demos/pagination';

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
            <HighLight code={CodeBasic} />

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
            <HighLight code={CodeMore} />

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
            <HighLight code={CodeControlled} />

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
            <HighLight code={CodeDisabled} />

            {/* 自定义每页条目 */}
            <h2>自定义每页条目</h2>
            <p>可以通过 pageSize 配置每页的条目数，默认10，可选 10、20、30、40。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Select selectorStyle={{width: '150px'}} value={pageSize} onChange={onPageSizeChange}>
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
            <HighLight code={CodePageSize} />

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
            <HighLight code={CodeShowSizeChanger} />

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
            <HighLight code={CodeShowQuickJumper} />

            {/* 简单分页 */}
            <h2>简单分页</h2>
            <p>非常简洁的分页控件。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Pagination total={50} simple />
                        </div>
                        <div className="detail-box">
                            <Pagination total={50} simple disabled />
                        </div>
                    </>
                )
            }, [])}
            <HighLight code={CodeSimple} />

            {/* 显示总数 */}
            <h2>显示总数</h2>
            <p>根据 showTotal 自定义显示详情。</p>
            {useMemo(() => {
                return (
                    <>
                        <div className="detail-box">
                            <Pagination
                                total={85}
                                pageSize={20}
                                showTotal={total => `Total ${total} items`}
                            />
                        </div>
                        <div className="detail-box">
                            <Pagination
                                total={85}
                                pageSize={20}
                                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                            />
                        </div>
                    </>
                )
            }, [])}
            <HighLight code={CodeShowTotal} />

            {/* 自定义渲染项 */}
            <h2>自定义渲染项</h2>
            <p>根据配置 itemRender，自定义页码与箭头的显示效果。</p>
            {useMemo(() => {
                return (
                    <div className="detail-box">
                        <Pagination total={50} itemRender={(current, type, originalElement) => {
                            switch (type) {
                                case 'prev':
                                    return 'Previous';
                                    break;
                                case 'next':
                                    return 'Next';
                                    break;
                                case 'page':
                                    return '$' + originalElement;
                            }
                        }}
                        />
                    </div>
                )
            }, [])}
            <HighLight code={CodeItemRender} />

            {/* API */}
            <ApiTable title='Pagination' propsList={paginationProps} eventsList={paginationEvents} />
        </div>
    )
}

export default PaginationDoc;