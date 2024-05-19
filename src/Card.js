import React from "react";

const Card = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.image} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
};

export default Card;
