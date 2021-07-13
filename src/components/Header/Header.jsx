import React from 'react'
import Hamburger from './Hamburger/Hamburger'


import avatar from '../assets/img/avatar.jpg'


import {Navigation} from '../Navigation/Navigation'


export default function Header() {
    return (
        <div className="header">
            
            

       <Hamburger />



        <div className="logo">
            <img  src={avatar} alt="ava" />
        </div>

        <div className="title">
            <h1 className='name '>Pavel <br/> Melnik</h1>
        </div>
        





        
        <nav className="navigation-main"> 

        {Navigation.map(menuItem => <span key={menuItem.name} className="navbar-item"><a href={menuItem.url}>{menuItem.name}</a></span>)}
        </nav>


    
        
            
            
         

    </div>
    )
}


export { Header }