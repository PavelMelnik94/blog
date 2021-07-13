import React from 'react'
import img from '../assets/img/preloader.gif'

const baseSize = {
    width: '100%',
     height: '100vh',
     
    }

export default function PreloaderApp() {
    return (
        <div >
            <img src={img} style={baseSize} alt="" />
        </div>
    )
}
