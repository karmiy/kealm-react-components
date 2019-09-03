import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import sidebarList from './sidebar-list';

function Sidebar() {
    return (
        <div className='sidebar'>
            <ul className="sidebar-group">
                {
                    sidebarList.map((sidebar, index) => {
                        return (
                            <Fragment key={index}>
                                <li>
                                    <h2 className='sidebar-title'>{sidebar.title}</h2>
                                </li>
                                <ul className="sidebar-group">
                                    <li>
                                        {sidebar.children.map((item, _index) => {
                                            return <NavLink key={_index} to={`/component/${item.link}`} className='sidebar-item'>{item.name}</NavLink>
                                        })}
                                    </li>
                                </ul>
                            </Fragment>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Sidebar;