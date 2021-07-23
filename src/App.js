import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import {getAllPosts} from "./api";
import ArticleLayout from "./components/Article/ArticleLayout";
import NotFound from './pages/NotFound'
import PreloaderApp from './components/Preloaders/PreloaderApp'
import SinglePost from "./components/Article/SinglePost";
import About from "./pages/About";
import Feedback from "./pages/Feedback";
import Skills from './pages/Skills'

const storage = window.localStorage;

function App() {
  const [posts, setPosts] = useState([]);

  //разовый прелоудер
  const [showPreloaderApp, setShowPreloaderApp] = useState(false);

  
  

  useEffect(() => {

    if (!storage.getItem('loading')) {
      
      setTimeout(() => {
        storage.setItem('loading', 'true')
        setShowPreloaderApp(true)
        
      }, 2000);

     } else {
      setShowPreloaderApp(true)
     }

     
    
  }, [showPreloaderApp])


  useEffect(() => {
    getAllPosts().then((r) => setPosts(r));
  }, []);


  

  return (
    <div>
    
    {showPreloaderApp ?  

      <Router >

        <Switch >

      
         <Route exact path='/' >
         <Home posts={posts} />  
        </Route> 



            <Route path='/article/:id'  >
              <ArticleLayout >
            <SinglePost  />
            </ArticleLayout>
            </Route>
          

          <Route path='/about' >
          <ArticleLayout>
            <About />
          </ArticleLayout>
           </Route>

           <Route path='/skills' >
          <ArticleLayout>
            <Skills />
          </ArticleLayout>
           </Route>

           <Route path='/Feedback' >
          <ArticleLayout>
            <Feedback />
          </ArticleLayout>
           </Route>

           
          <Route component={ NotFound  } />
        </Switch>

      </Router>
     : <PreloaderApp />} 
    </div>
     
  );
}

export default App;


