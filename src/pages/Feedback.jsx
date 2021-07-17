import React from 'react'
import FeedBackForm from '../components/FeedBackForm/FeedBackForm'



export default function Feedback() {


    return (
        <div className="post-content">

            <div className="post-content-meta">

                    {/* <span className={`tag ${ tag ? tag : '' }`}>
                       {tag}
                    </span> */}

                    {/* <span className="post-date">10.11.21</span> */}

            </div>

            <article className='article'>
            <h1 className='article-header'>Свяжитесь со мной любым удобным для вас способом</h1>
            <p className='article-content'>
            <FeedBackForm />
            </p>
            </article>

         </div>
    )
}

export {Feedback}