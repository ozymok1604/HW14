import React from "react";
import { Image } from "./content";
import { User } from "./user";
import "./Post.css";
import { Like } from "./Like";
import { Text } from "./text";

function Post(props) {
  const name = props.name;
  console.log(name);
  const avatarSrc = props.avatarSrc;
  const text = props.text;
  const postSrc = props.postSrc;
  return (
    <div className="App">
      <User name={name} avatarSrc={avatarSrc} />
      <Image postSrc={postSrc} />
      <Like />
      <Text text={text} />
    </div>
  );
}

export { Post };
