import Header from './components/Header/Header'


function App() {
  

  return (
    <body>


    {/* холдер секции нужен для изменения скролла */}
    <section id="style-1" className="main ">


        
          <Header />


        <div className="content">
            
            <div className="posts">
                
                <div className="post">
                    <div className="post-cover"></div>

                    <div >
                       <a href="!#" className="tag css">CSS</a>
                     </div>

                    <div className="post-date">August, 18 </div>
                    
                    <div className="post-header"> <a href="!#">Animation links Underlines Animation links Underlines Animation links Underlines</a></div>
                    
                </div>



                <div className="post">

                    <div className="post-cover"></div>

                    <div >
                        <a href="!#" className="tag js">JS</a>
                      </div>
                    <div className="post-date">August, 18 </div>
                    <div className="post-header"> <a href="!#">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae earum est incidunt dolor nam sit, architecto pariatur quaerat accusamus quos quo quasi aperiam minima delectus ducimus eos ad. Aut, a. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores aperiam tempore natus totam beatae laudantium at repellat! Temporibus quos aperiam praesentium facilis at eligendi, aut illum velit dolor et? Provident.</a></div>

                    
                </div>

                <div className="post">
                    <div className="post-cover"></div>
                    
                    <div >
                        <a href="!#" className="tag html">HTML</a>
                      </div>
                    <div className="post-date">August, 18 </div>
                    <div className="post-header"> <a href="/post.html">Animation links Underlines Animation links Underlines Animation links Underlines</a></div>
                    
                </div>
                
                <div className="post">
                    <div className="post-cover"></div>
                    <div >
                        <a href="!#" className="tag react">react</a>
                      </div>
                    <div className="post-date">August, 18 </div>
                    
                    
                </div>


                <div className="post">
                    <div className="post-cover"></div>
                    
                    <div >
                        <a href="!#" className="tag project">project</a>
                      </div>
                    <div className="post-date">August, 18 </div>
                    
                </div>

            </div>
        </div>

    </section>


  
</body>

  );
}

export default App;
