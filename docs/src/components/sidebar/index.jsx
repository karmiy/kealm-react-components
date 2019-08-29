import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <div className='sidebar'>
            <ul className="sidebar-group">
                <li>
                    <h2 className='sidebar-title'>开发指南</h2>
                </li>
                <ul className="sidebar-group">
                    <li>
                        <NavLink to={'/component/quickstart'} className='sidebar-item'>快速上手</NavLink>
                    </li>
                </ul>
                <li>
                    <h2 className='sidebar-title'>General</h2>
                </li>
                <ul className="sidebar-group">
                    <li>
                        <NavLink to={'/component/icon'} className='sidebar-item'>Icon 图标</NavLink>
                        <NavLink to={'/component/button'} className='sidebar-item'>Button 按钮</NavLink>
                    </li>
                </ul>
            </ul>
        </div>
    )
}

export default Sidebar;