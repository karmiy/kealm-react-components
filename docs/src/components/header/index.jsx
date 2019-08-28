import React from 'react';

/**
 * header组件
 */
function Header() {
    return (
        <header className="header">
            <a className="logo">
                <img src={require('@/assets/imgs/logo.png')} alt="Kealm"/>
            </a>
        </header>
    )
}

export default Header;