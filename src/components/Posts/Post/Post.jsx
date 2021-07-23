import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTagById } from "../../../api";

export default function Post({ post, handlePostById }) {
  const [tag, setTag] = useState("");

  useEffect(() => {
    getTagById(post.tags).then((tag) => setTag(tag.name));
  }, [post.tags]);

  return (
    <div className="post">
      <div className="post-cover"></div>

      <div>
        <span className={`tag ${tag ? tag : "загрузка"}`}>{tag}</span>
      </div>

      <div className="post-date">{post.date.substring(0, 10)} </div>

      <div className="post-header">
        {" "}
        <Link to={`/article/${post.id}`}>{post.title.rendered} </Link>{" "}
      </div>
    </div>
  );
}

export { Post };
