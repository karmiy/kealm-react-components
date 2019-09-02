import React from 'react';
import { Icon } from '@kealm/react-components';
import iconGroups, { iconLength } from './icon-type';

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
                                    <li key={_index}>
                                        <Icon type={type} />
                                        <span>{type}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default IconDoc;