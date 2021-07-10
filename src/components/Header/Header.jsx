import React from 'react'
import Hamburger from './Hamburger/Hamburger'


import avatar from '../assets/img/avatar.jpg'


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

            <div className="box">
                <div className="container-1">
                    
                    <input type="text" id="search" placeholder="Search" />
                    <span className="icon"><i className="fa fa-search"></i></span>
                </div>
              </div>
            <span><a href="!#">All posts</a></span>
            <span><a href="!#">HTML</a></span>
            <span><a href="!#">CSS</a></span>
            <span><a href="!#">JavaScript</a></span>
            <span><a href="!#">React</a></span>
            <br/>
            <span><a href="!#">My Projects</a></span>
            <span><a href="!#">Knowledle</a></span>
            <span><a href="!#">contacts</a></span>
        </nav>


    
        
            
            
         

    </div>
    )
}


export { Header }