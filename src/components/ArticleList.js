import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  const articlesVar = posts.map((eachPost) => (
    <Article key={eachPost.id} title={eachPost.title} date={eachPost.date} />
  ));
  return <main>{articlesVar}</main>;
}

export default ArticleList;
