import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { getAllPosts } from "./api";
import ArticleLayout from "./components/Article/ArticleLayout";
import NotFound from "./pages/NotFound";
import SinglePost from "./components/Article/SinglePost";
import About from "./pages/About";
import Feedback from "./pages/Feedback";
import Skills from "./pages/Skills";
import Knowledge from './pages/Knowledge'

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((r) => setPosts(r));
  }, []);


  

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home posts={posts} />
          </Route>

          <Route path="/article/:id">
            <ArticleLayout>
              <SinglePost />
            </ArticleLayout>
          </Route>

          <Route path="/about">
            <ArticleLayout>
              <About />
            </ArticleLayout>
          </Route>

          <Route path="/skills">
            <ArticleLayout>
              <Skills />
            </ArticleLayout>
          </Route>

          <Route path="/knowledge">
            <ArticleLayout>
              <Knowledge />
            </ArticleLayout>
          </Route>

          <Route path="/Feedback">
            <ArticleLayout>
              <Feedback />
            </ArticleLayout>
          </Route>

          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
