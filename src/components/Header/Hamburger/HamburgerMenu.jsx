import React from 'react'

export default function HamburgerMenu({menu, submenu}) {
    
    return (
        <>
    <div className="menu-one">
        {menu.map(menuItem => <span className="navbar-item"><a href={menuItem.url}>{menuItem.name}</a></span>)}
    </div>

    <div className="menu-two">
        {submenu.map(menuItem => <span className="navbar-item"><a href={menuItem.url}>{menuItem.name}</a></span>)}
    </div>
    </>
    )
}


export { HamburgerMenu }