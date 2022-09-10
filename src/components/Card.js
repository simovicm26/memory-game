import React from "react";

export default function Card(props) {
  return (
    <div onClick={props.click} className="Card">
      <img id={props.id} src={props.img} alt="rick and morty character" />
    </div>
  );
}
