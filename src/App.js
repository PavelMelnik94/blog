import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import {getAllPosts} from "./api";
import Article from "./components/Article/Article";
import AboutPage from "./pages/AboutPage";
import NotFound from './pages/NotFound'
import PreloaderApp from './components/Preloaders/PreloaderApp'

const storage = window.localStorage;

function App() {
  const [posts, setPosts] = useState([]);

  //разовый прелоудер
  const [hidePreloaderApp, setShowPreloaderApp] = useState(false);

  
  

  useEffect(() => {
    if (!storage.getItem('loading')) {
      setTimeout(() => {
        storage.setItem('loading', 'true')
        setShowPreloaderApp(true)
        
      }, 2000);

     } else {
      setShowPreloaderApp(true)
     }


    


    

    // if (storage.getItem('loading') === 'true') { setShowPreloaderApp(true)}
    
  }, [hidePreloaderApp])

  useEffect(() => {
    getAllPosts().then((r) => setPosts(r));
  }, []);


 

  return (
    <>
    {hidePreloaderApp ?  <body>

      <Router>

        <Switch >

      
         <Route exact path='/' >
         <Home posts={posts}   />  
        </Route> 

          {/* <Route path='/article' component={Article} /> */}

            <Route path='/article/:id'  >
            <Article   />
            </Route>
          

          <Route path='/about' component={ AboutPage } />
          <Route component={ NotFound  } />
        </Switch>

      </Router>
    </body>  : <PreloaderApp />} 
    </>
   
  );
}

export default App;


