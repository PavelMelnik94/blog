import React, { useEffect, useRef}  from 'react';
import {useHistory } from 'react-router-dom';
import Typed from "typed.js";



export default function NotFound() {

    const error = useRef(null);
    const { goBack } = useHistory();

    
    useEffect(() => {
        const typed = new Typed(error.current, {
          strings: ["Страница не найдена", "Страница не найдена", ], // Strings to display
          // Speed settings, try diffrent values untill you get good results
          startDelay: 300,
          typeSpeed: 20,
          backSpeed: 100,
          backDelay: 100
        });

       
      
    
        // Destropying
        return () => {
          typed.destroy();
        };
      }, []);

    

    return (
        <div className='not-found'>
           <div> <h1 className='not-found-error'> 404 </h1></div>
           <div> <h2 className='not-found-text' ref={error} > </h2></div>
             <a href='!#' onClick={goBack} className='goback'>вернуться назад </a>
        </div>
    )
}


export {NotFound}