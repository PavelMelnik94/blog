import React from 'react'

export default function ArticleBody({body}) {

    function createMarkup(html) {
        return {__html: html};
      }

    return (
        <div dangerouslySetInnerHTML={createMarkup(body)}> 
        </div>
    )
}
