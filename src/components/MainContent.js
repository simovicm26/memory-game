import React from "react";
import Card from "./Card";

export default function MainContent(props) {
  return (
    <div className="MainContent">
      {props.character.map((char, i) => (
        <Card click={props.handleClick} id={char.id} key={i} img={char.img} />
      ))}
    </div>
  );
}
