import "./App.css";
import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Instructions from "./components/Instructions";

function App() {
  const [character, setCharacter] = React.useState([]);
  const [count, setCount] = React.useState(1);
  const [chosen, setChosen] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    const url = fetch(`https://rickandmortyapi.com/api/character/${count}`);

    const data = url.then((res) => res.json());
    const obj = data.then((data) => {
      if (character.length < 8) {
        setCharacter((prevCharacter) => [
          ...prevCharacter,
          { img: data.image, name: data.name, id: data.id },
        ]);
      }
      setCount(Math.round(Math.random() * 20) + 1);
    });
  }, [character]);

  React.useEffect(() => {
    if (selected) setChosen((prevChosen) => [...prevChosen, selected]);
  }, [selected]);

  function handleClick(e) {
    if (chosen.some((el) => el === e.target.id)) {
      setScore(0);
      setChosen([]);
    } else {
      setScore(score + 1);
    }
    setCharacter([]);
    setSelected(e.target.id);
  }
  return (
    <div className="App">
      <Header chosen={chosen} score={score} />
      <MainContent character={character} handleClick={handleClick} />
    </div>
  );
}

export default App;
