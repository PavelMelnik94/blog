import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import BodyToHTML from './BodyToHTML'
import {getPostById, getTagById} from "../../api";

export default function SinglePost(props) {

    // const {handlePostId} = props;

    const [tag, setTag] = useState('');
    const [tagNumber, setTagNumber] = useState(0)
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [date, setDate] = useState('');

    const {id} = useParams();



    useEffect(() => {
        getPostById(id).then((r) =>  {
            setTitle(r.title.rendered)
            setBody(r.content.rendered)
            setDate(r.date.substring(0, 10))
            setTagNumber(r.tags[0])


    }, [])
})

useEffect(() => {
    getTagById(tagNumber).then( tag => {
setTag(tag.description)
    })
}, [tag, tagNumber])

return (      
    
    <div className="post-content">

            <div className="post-content-meta">

                    <span className={`tag ${ tag ? tag : '' }`}>
                       {tag}
                    </span>

                    <span className="post-date">{date}</span>

            </div>

            <article className='article'>
            <h1 className='article-header'>{title}</h1>
            <div className='article-content'><BodyToHTML body={body} /></div>
            </article>

         </div>
        
    )
}
