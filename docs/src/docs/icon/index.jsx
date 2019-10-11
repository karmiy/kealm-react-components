import React from 'react';
import { Icon } from '@kealm/react-components';
import iconGroups, { iconLength } from './icon-type';
import { HighLight } from '@/components';
import { CodeBasic } from 'demos/icon';

function IconDoc() {
    return (
        <div className='page-box'>
            <h1>Icon 图标</h1>
            <p>语义化的矢量图形 ({iconLength})。</p>
            {iconGroups.map((iconGroup, index) => {
                return (
                    <React.Fragment key={index}>
                        <h2>{iconGroup.name}</h2>
                        <ul className="icon-list">
                            {iconGroup.icons.map((type, _index) => {
                                return (
                                    <li key={_index} className="icon-item">
                                        <Icon type={type} />
                                        <span>{type}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </React.Fragment>
                )
            })}
            <h2>代码示例</h2>
            <HighLight code={CodeBasic} />
        </div>
    )
}

export default IconDoc;