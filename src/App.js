// import './bundle.css'


function App() {
  return (
    <body>

    <section id="style-1" className="main ">


        
            

        <div className="header">
            
            

            <div className="hamburger">
                

                    <div className="menu-button-wrapper">
                    <div id='hamburger-button' className="menu-button">
                        <span>Menu</span> 
                        <div className="cover"></div>
                    <div className="cover-two"></div>
                    </div>

                

                    
                </div>

                <div id='menu' className="navbar drop">
                    <div className="box-mobile">
                        <div className="container-1">
                            
                            <input type="text" id="search" placeholder="Search" />
                            <span className="icon"><i className="fa fa-search"></i></span>
                        </div>
                      </div>

                      <div className="menu-one">
                    <span className="navbar-item"><a href="!#">All posts</a></span>
                    <span className="navbar-item"><a href="!#">Html</a></span>
                    <span className="navbar-item"><a href="!#">Css</a></span>
                    <span className="navbar-item"><a href="!#">JavaScript</a></span>
                    <span className="navbar-item"><a href="!#">React</a></span>
                    <span className="navbar-item"><a href="!#">Project</a></span>
                </div>

<div className="menu-two">
    <span className="navbar-item"><a href="!#">My project</a></span>
    <span className="navbar-item"><a href="!#">Knowledle</a></span>
    <span className="navbar-item"><a href="!#">Contancts</a></span>

</div>


                </div>
            </div>









            <div className="logo">
                <img  src="img/header/avatar.jpg" alt="ava" />
            </div>

            <div className="title">
                <h1 className='name '>Pavel <br/> Melnik</h1>
            </div>
            





            
            <nav className="navigation-main"> 

                <div className="box">
                    <div className="container-1">
                        
                        <input type="text" id="search" placeholder="Search" />
                        <span className="icon"><i className="fa fa-search"></i></span>
                    </div>
                  </div>
                <span><a href="!#">All posts</a></span>
                <span><a href="!#">HTML</a></span>
                <span><a href="!#">CSS</a></span>
                <span><a href="!#">JavaScript</a></span>
                <span><a href="!#">React</a></span>
                <br/>
                <span><a href="!#">My Projects</a></span>
                <span><a href="!#">Knowledle</a></span>
                <span><a href="!#">contacts</a></span>
            </nav>

    
        
            
                
                
             

        </div>


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
