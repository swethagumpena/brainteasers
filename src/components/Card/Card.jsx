import React from "react";
import "./Card.css";

const Card = ({ question, answer, flipped, handleCardClick, isClickable }) => {
  return (
    <button
      className={`card ${flipped ? "flipped" : ""}`}
      disabled={!isClickable}
      onClick={handleCardClick}
    >
      {flipped ? (
        <div className="card-back">{answer}</div>
      ) : (
        <div className="card-front">{question}</div>
      )}
    </button>
  );
};

export default Card;
