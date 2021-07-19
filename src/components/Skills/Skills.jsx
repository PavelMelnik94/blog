import React from 'react'

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
            <p className='article-content'>
            


            <ul class="accordion">
  <li class="accordion-item">
    <input id="s1" class="hide" type="checkbox"/>
    <label for="s1"class="accordion-label">Софт скиллы</label>
    <ul class="accordion-child">
      <li>
        <label>
          <input type="checkbox"/> Item 1
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox"/> Item 2
        </label>
      </li>
   </ul>
  </li>
  <li class="accordion-item">
    <input id="s2" class="hide" type="checkbox" checked/>
    <label for="s2" class="accordion-label">Хард скиллы</label>
    <p class="accordion-child">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis ultrices nunc. Suspendisse a magna purus. In hac habitasse platea dictumst. Nullam sed nisl quis sem dignissim luctus. Etiam luctus mauris nulla, et efficitur massa efficitur ac.</p>
  </li>
</ul>





            </p>
            </article>

         </div>
    )
}
