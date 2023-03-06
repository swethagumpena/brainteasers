import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import trivia from "./data/trivia";

const App = () => {
  const [cardShownId, setCardShownId] = useState(1);
  const [flipped, setFlipped] = useState(false);

  const handlePreviousClick = () => {
    setFlipped(false);
    const updatedId = ((cardShownId - 2 + trivia.length) % trivia.length) + 1;
    setCardShownId(updatedId);
  };

  const handleNextClick = () => {
    setFlipped(false);
    const updatedId = (cardShownId % trivia.length) + 1;
    setCardShownId(updatedId);
  };

  const getItem = (id) => {
    return trivia.find((item) => item.id == id);
  };

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="background-image">
      <h1 className="title">Brain twisters 🧠</h1>
      <h2>Let's see how smart you are. Time to test your knowledge!</h2>
      <h4>{`Number of cards: ${trivia.length}`}</h4>
      <Card
        question={getItem(cardShownId).question}
        answer={getItem(cardShownId).answer}
        flipped={flipped}
        handleCardClick={handleCardClick}
        difficulty={getItem(cardShownId).difficulty}
      />
      <button onClick={handlePreviousClick}>{"<"}</button>
      <button onClick={handleNextClick}>{">"}</button>
    </div>
  );
};

export default App;
