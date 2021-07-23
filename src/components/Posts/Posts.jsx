import React from "react";
import Post from "./Post/Post";

export default function Posts({ allPosts }) {
  return (
    <div className="posts">
      {allPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export { Posts };
