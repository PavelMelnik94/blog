import React from 'react'
import SoftSkills from '../components/Skills/SoftSkills'
import HardSkills from '../components/Skills/HardSkills'

export default function Skills() {
    return (
        <div className="post-content">

            <div className="post-content-meta">

                    {/* <span className={`tag ${ tag ? tag : '' }`}>
                       {tag}
                    </span> */}

                    {/* <span className="post-date">10.11.21</span> */}

            </div>

            <article className='article'>
            <h1 className='article-header'>Навыки и умения</h1>
            <div className='article-content'>
            

                    <SoftSkills />
                    <HardSkills />
            





            </div>
            </article>

         </div>
    )
}
