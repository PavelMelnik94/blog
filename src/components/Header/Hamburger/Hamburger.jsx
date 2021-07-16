import React, {useState} from 'react'
import HamburgerMenu from './HamburgerMenu'






export default function Hamburger() {

    const [drop, setDropped] = useState(true);

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
        

    
        <HamburgerMenu  />

    </div>
</div>
    )
}


export { Hamburger }