import React, {useState} from 'react'
import HamburgerMenu from './HamburgerMenu'




const menu = [
    {name: 'All posts', url: '/'},
    {name: 'Html', url: '/'},
    {name: 'Css', url: '/'},
    {name: 'JavaScript', url: '/'},
    {name: 'React', url: '/'},
    {name: 'My Project', url: '/'},
];

const submenu = [
    {name: 'My projects', url: '/'},
    {name: 'Knowledle', url: '/'},
    {name: 'Contacts', url: '/'},
];

export default function Hamburger() {

    const [drop, setDropped] = useState(false);

    const toggleHamburger = () => {
        setDropped(!drop);
    }
    


    return (
        <div className="hamburger">
            

        <div className="menu-button-wrapper">
        <div id='hamburger-button' className="menu-button" onClick={toggleHamburger}>
            <span>Menu</span> 
            <div className="cover"></div>
        <div className="cover-two"></div>
        </div>


    </div>

    <div id='menu' className={`navbar ${drop ? 'drop' : '' }`}>
        <div className="box-mobile">
            <div className="container-1">
                
                <input type="text" id="search" placeholder="Search" />
                <span className="icon"><i className="fa fa-search"></i></span>
            </div>
          </div>

    
        <HamburgerMenu menu={menu} submenu={submenu} />

    </div>
</div>
    )
}


export { Hamburger }