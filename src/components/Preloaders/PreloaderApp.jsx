import React from 'react'
// import img from '../assets/img/preloader.gif'
import { WaveLoading } from 'react-loadingg';

const baseSize = {
    width: '100%',
     height: '100vh',
     backgroundColor: '#181818'
     
    }

export default function PreloaderApp() {
    return (
        <div style={baseSize}>
            {/* <img src={img} style={baseSize} alt="" /> */}
            <WaveLoading color='#F0EDED' />
        </div>
    )
}
