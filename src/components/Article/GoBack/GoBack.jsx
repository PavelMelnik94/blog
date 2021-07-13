import React, { useState, useEffect} from 'react'
import arrow from '../../assets/icons/go-back.png'

// let arrowPostion = {

//     // left: '48%'
// }

let ArrowPosition = {
    left: '48%'
};


export default function GoBack() {
    const [position, setPosition] = useState({})



useEffect(() => {
    ArrowPosition = position;
    
}, [position])


    const goBackMove = (e) => {
         
        // e.preventDefault();
        // const newPosition = {left: String(e.pageX) + "px" } 
        // Object.assign(arrowPostion, newPosition)
        // console.log(arrowPostion)
        const newPosition = {left: e.pageX-50 + "px"};
        setPosition(newPosition)
        // console.log('current: ' + goBack.style)
    }



    return (
        <div  onMouseMove={goBackMove} className="go-back"> 
       <span   style={ArrowPosition} className='go-back-arrow'  > <a href="/" > <img src={arrow} alt="назад"/> Back </a></span>
    </div>
    )
}
