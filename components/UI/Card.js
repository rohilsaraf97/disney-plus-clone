import React from "react";

const Card = ({ thumbnail, title }) => {
  return <img className="card" src={thumbnail.url} alt={title}></img>;
};

export default Card;
