import React from "react";
import "./Post.css";

function Image(props) {
  const postSrc = props.postSrc;
  return <img class="image" src={postSrc}></img>;
}
export { Image };
