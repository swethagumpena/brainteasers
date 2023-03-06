import React from "react";
import "./Card.css";

const Card = ({ question, answer, flipped, handleCardClick }) => {
  return (
    <div
      className={`card ${flipped ? "flipped" : ""}`}
      onClick={handleCardClick}
    >
      {flipped ? (
        <div className="card-back">{answer}</div>
      ) : (
        <div className="card-front">{question}</div>
      )}
    </div>
  );
};

export default Card;
