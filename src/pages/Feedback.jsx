import React from "react";
import FeedBackForm from "../components/FeedBackForm/FeedBackForm";

export default function Feedback() {
  return (
    <div className="post-content">
      <div className="post-content-meta"></div>

      <article className="article">
        <h1 className="article-header">
          Свяжитесь со мной любым удобным для вас способом
        </h1>
        <div className="article-content">
          <FeedBackForm />
        </div>
      </article>
    </div>
  );
}

export { Feedback };
