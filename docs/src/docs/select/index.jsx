import React, { useState, useMemo } from 'react';
import { Select } from '@kealm/react-components';
import { ApiTable, HighLight } from '@/components';

const { Option } = Select;

function SelectDoc() {

    return (
        <div className='page-box'>
            <h1>Select 选择器</h1>
            <p>当选项过多时，使用下拉菜单展示并选择内容。</p>

            {/* 基本用法 */}
            <h2>基本用法</h2>
            <p>适用广泛的基础单选。</p>
            <div className="detail-box">
                <Select defaultValue={'1'}>
                    <Option value={'1'}>黄金糕</Option>
                    <Option value={'2'}>双皮奶</Option>
                </Select>
            </div>

            {/* API */}
            {/*{useMemo(() => <ApiTable title='Button' propsList={buttonProps} eventsList={buttonEvents} />, [])}*/}
        </div>
    )
}

export default SelectDoc;