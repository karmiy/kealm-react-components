import React from 'react';
import { Header, Sidebar, RouterView } from '@/components';

function Component(props) {
    return (
        <div id='components'>
            <Header />
            <div className="component-container">
                <div className="component-sidebar scroll-bar">
                    <Sidebar />
                </div>
                <div className="component-detail scroll-bar">
                    <RouterView routes={props.routes} />
                </div>
            </div>
        </div>
    )
}

export default Component;