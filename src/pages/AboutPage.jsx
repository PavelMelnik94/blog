import React from 'react'
import Article from '../components/Article/Article'
import About from '../components/About/About'
import {header} from '../components/About/About'

export default function AboutPage() {
    return (
        <div>
            <Article articleHeader={header} articleBody={<About/>} /> 
        </div>
    )
}
