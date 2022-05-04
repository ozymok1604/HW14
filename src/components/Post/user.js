import React from "react";
import "./Post";

function User(props) {
  const name = props.name;
  const avatarSrc = props.avatarSrc;

  return (
    <div class="user">
      <img class="avatar" src={avatarSrc}></img>
      {name}
    </div>
  );
}

export { User };
