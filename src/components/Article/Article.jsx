import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ArticleMenu from './ArticleMenu/ArticleMenu';
import GoBack from './GoBack/GoBack'
import {getPostById} from "../../api";
import ArticleBody from './ArticleBody'




export default function Article({props}) {

    
    
    const [tagClass, setTagClass] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [date, setDate] = useState('');

    const {id} = useParams();

    useEffect(() => {
        getPostById(id).then((r) =>  {
            setTitle(r.title.rendered)
            setBody(r.content.rendered)
            setDate(r.date.substring(0, 10))
            
        });
    }, [])
        

        
        
      

    return (
        <section className='main-post' id='style-1'>



    <GoBack />





    <div className="post-wrapper">

        <div className="post-content">

            <div className="post-content-meta">

                    <span >
                       <a href="!#" className={`tag ${ tagClass ? tagClass : '' }`}>{tagClass}</a> 
                    </span>

                    <span className="post-date">{date}</span>

            </div>

            <article className='article'>
            <h1 className='article-header'>{title}</h1>
            <p className='article-content'><ArticleBody body={body} /></p>
            </article>

         </div>




<ArticleMenu />
        
        


        </div>
</section>

    )
}
