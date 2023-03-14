import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import trivia from "./data/trivia";

const App = () => {
  const [cardShownId, setCardShownId] = useState(1);
  const [flipped, setFlipped] = useState(false);
  const [answer, setAnswer] = useState("");
  const [color, setColor] = useState("grey");
  const [isClickable, setClickable] = useState(false);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [highestStreak, setHighestStreak] = useState(0);

  const handlePreviousClick = () => {
    setFlipped(false);
    const updatedId = ((cardShownId - 2 + trivia.length) % trivia.length) + 1;
    setCardShownId(updatedId);
    setColor("grey");
    setAnswer("");
    setClickable(false);
  };

  const handleNextClick = () => {
    if (cardShownId == trivia.length) {
      setCurrentStreak(0);
    }
    setFlipped(false);
    const updatedId = (cardShownId % trivia.length) + 1;
    setCardShownId(updatedId);
    setColor("grey");
    setAnswer("");
    setClickable(false);
  };

  const getItem = (id) => {
    return trivia.find((item) => item.id == id);
  };

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  const handleAnswerCheck = () => {
    if (answer.toLowerCase() == getItem(cardShownId).answer.toLowerCase()) {
      setColor("green");
      const updatedCurrentStreak = currentStreak + 1;
      setCurrentStreak(updatedCurrentStreak);
      const currentHighestStreak = Math.max(
        highestStreak,
        updatedCurrentStreak
      );
      setHighestStreak(currentHighestStreak);
    } else {
      setColor("red");
    }
    setClickable(true);
  };

  return (
    <div className="background-image">
      <h1 className="title">Brain twisters 🧠</h1>
      <h2>Let's see how smart you are. Time to test your knowledge!</h2>
      <h4>{`Number of cards: ${trivia.length}`}</h4>
      <h4>{`Current streak: ${currentStreak} | HighestStreak: ${highestStreak}`}</h4>
      <div className="content">
        <button className="navigate-button" onClick={handlePreviousClick}>
          {"<"}
        </button>
        <Card
          question={getItem(cardShownId).question}
          answer={getItem(cardShownId).answer}
          flipped={flipped}
          handleCardClick={handleCardClick}
          difficulty={getItem(cardShownId).difficulty}
          isClickable={isClickable}
        />
        <button className="navigate-button" onClick={handleNextClick}>
          {">"}
        </button>
      </div>
      <div className="guess">
        <label>
          Guess the answer here: &nbsp;
          <input
            type="text"
            name="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className={`border-${color}`}
          />
        </label>
      </div>
      <input
        type="submit"
        value="Submit guess"
        onClick={handleAnswerCheck}
        className="submit"
      />
    </div>
  );
};

export default App;
