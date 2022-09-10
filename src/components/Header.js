import React from "react";

export default function Header(props) {
  const [highestScore, setHighestScore] = React.useState(0);
  if (props.score > highestScore) setHighestScore(props.score);
  return (
    <div className="Header">
      <div className="scoreContainer">
        <p>Current Score: {props.score}</p>
        <p>High Score: {highestScore}</p>
      </div>
      <p>
        Select only the images that you didnt select previously and try to
        achieve the highest possible score. Goodluck!
      </p>
    </div>
  );
}
