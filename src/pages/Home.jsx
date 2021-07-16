import React from "react";
import Main from "../components/Main/Main";
import Header from "../components/Header/Header";
import Posts from "../components/Posts/Posts";

export default function Home(props) {
  const { posts,  } = props;

  return (
    <>
      <Main>
        <Header />

        <div className="content">
          <Posts allPosts={posts}  />
        </div>
        
      </Main>
    </>
  );
}
