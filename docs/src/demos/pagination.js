/* 基本用法 */
export const CodeBasic =
`    import { Pagination } from "@kealm/react-components";
    
    ReactDom.render(
        <Pagination defaultCurrent={1} total={50}></Pagination>,
        mountNode
    );`

/* 更多数据 */
export const CodeMore =
`    import { Pagination } from "@kealm/react-components";
    
    ReactDom.render(
        <Pagination defaultCurrent={1} total={500}></Pagination>,
        mountNode
    );`

/* 受控分页 */
export const CodeControlled =
`    import { useState, useCallback } from 'react';
    import { Pagination } from "@kealm/react-components";
    
    function Demo() {
        const [current, setCurrent] = useState(1);
        const onChange = useCallback(n => setCurrent(n), []);
        
        return <Pagination current={current} onChange={onChange} total={500}></Pagination>;
    }`

/* 禁用 */
export const CodeDisabled =
`    import { Pagination } from "@kealm/react-components";
    
    ReactDom.render(
        <Pagination defaultCurrent={15} total={500} disabled></Pagination>,
        mountNode
    );`

/* 自定义每页条目 */
export const CodePageSize =
`    import { useState, useCallback } from 'react';
    import { Pagination, Select } from "@kealm/react-components";
    
    const { Option } = Select;
    
    function Demo() {
        const [pageSize, setPageSize] = useState(10);
        const onPageSizeChange = useCallback(s => setPageSize(s), []);
        
        return (
            <div>
                <div className="detail-box">
                    <Select selectorStyle={{width: '150px'}} value={pageSize} onChange={onPageSizeChange}>
                        <Option value={10} label={'10 条/页'}>10 条/页</Option>
                        <Option value={20} label={'20 条/页'}>20 条/页</Option>
                        <Option value={30} label={'30 条/页'}>30 条/页</Option>
                        <Option value={40} label={'40 条/页'}>40 条/页</Option>
                    </Select>
                </div>
                <div className="detail-box">
                    <Pagination pageSize={pageSize} total={500}></Pagination>
                </div>
            </div>
        );
    }`

/* 开启条目切换 */
export const CodeShowSizeChanger =
`    import { Pagination } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <div className="detail-box">
                <Pagination defaultCurrent={1} total={500} showSizeChanger></Pagination>
            </div>
            <div className="detail-box">
                <Pagination defaultCurrent={1} total={500} showSizeChanger disabled></Pagination>
            </div>
        </div>,
        mountNode
    );`

/* 快速跳转 */
export const CodeShowQuickJumper =
`    import { Pagination } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
            <div className="detail-box">
                <Pagination defaultCurrent={1} total={500} showQuickJumper></Pagination>
            </div>
            <div className="detail-box">
                <Pagination defaultCurrent={1} total={500} showQuickJumper disabled></Pagination>
            </div>
        </div>,
        mountNode
    );`

/* 简单分页 */
export const CodeSimple =
`    import { Pagination } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
             <div className="detail-box">
                <Pagination total={50} simple></Pagination>
            </div>
            <div className="detail-box">
                <Pagination total={50} simple disabled></Pagination>
            </div>
        </div>,
        mountNode
    );`

/* 显示总数 */
export const CodeShowTotal =
`    import { Pagination } from "@kealm/react-components";
    
    ReactDom.render(
        <div>
             <div className="detail-box">
                    <Pagination
                        total={85}
                        pageSize={20}
                        showTotal={total => \`Total \${total} items\`}
                    ></Pagination>
                </div>
                <div className="detail-box">
                    <Pagination
                        total={85}
                        pageSize={20}
                        showTotal={(total, range) => \`\${range[0]}-\${range[1]} of \${total} items\`}
                    ></Pagination>
                </div>
        </div>,
        mountNode
    );`

/* 自定义渲染项 */
export const CodeItemRender =
`    import { Pagination } from "@kealm/react-components";
    
    const itemRender = (current, type, originalElement) => {
        switch (type) {
            case 'prev':
                return 'Previous';
                break;
            case 'next':
                return 'Next';
                break;
            case 'page':
                return '$' + originalElement;
                break;
            default:
                return originalElement;
        }
    }
    
    ReactDom.render(
        <Pagination total={50} itemRender={itemRender}
        ></Pagination>,
        mountNode
    );`