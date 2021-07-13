import React from 'react'
import {Navigation} from '../../Navigation/Navigation'

export default function HamburgerMenu() {
    
    return (
        <>
    <div className="menu-one">
        {Navigation.map(menuItem => <span key={menuItem.name} className="navbar-item"><a href={menuItem.url}>{menuItem.name}</a></span>)}
    </div>

    
    </>
    )
}


export { HamburgerMenu }