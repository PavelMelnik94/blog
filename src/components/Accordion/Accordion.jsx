import React, {useState} from 'react'



export default function Accordion(props) {

    const { icon = String, title = String, content = String } = props;

    const [isOpen, setIsOpen] = useState(false)

const handleOpen = () => {
     setIsOpen(!isOpen)
     console.log(isOpen);
}


    return (
        <div>
            {/* <!-- Container --> */}
<div className="accordion">
    {/* <!-- Each accordion item --> */}
    <div className="accordion__item">
        {/* <!-- Heading --> */}
        <div className="accordion__header" onClick={handleOpen}>
            {/* <!-- The toggle icon --> */}
            <div className="accordion__toggle"   dangerouslySetInnerHTML={{ __html: icon }}/>

            {/* <!-- The title --> */}
            <div className="accordion__title">
              <h2>{title}</h2>  
            </div>
        </div>

        {/* <!-- The content --> */}
        <div className={`accordion__content${isOpen ? '--selected' : '' }`} dangerouslySetInnerHTML={{ __html: content }}/>
            
    </div>

   
</div>
        </div>
    )
}
