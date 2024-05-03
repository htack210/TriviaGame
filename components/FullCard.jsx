import { useState } from "react";
export function FullCard({
  questionObject,
  handleNextQuestion,
  handleFlipped,
  flippedState,
}) {
  return (
    <div>
      {/* Card Front */}
      {!flippedState && (
        <>
          <div className="card">
            <div className="top">
              <p>
                <b>{questionObject.category}</b>
                <br />
                {questionObject.question}
                <br />
                Question ID: {questionObject.id}
              </p>
            </div>
          </div>
        </>
      )}

      {/* Card back */}
      {flippedState && (
        <>
          <div className="card-back">
            <p>{questionObject.ans}</p>
            <button onClick={() => handleNextQuestion()}>
              Click to continue
            </button>
          </div>
        </>
      )}
      <div className="responseBtn-nav" onClick={() => handleFlipped()}>
        <button className="responseBtn">A. {questionObject.A}</button>
        <button className="responseBtn">B. {questionObject.B}</button>
        <button className="responseBtn">C. {questionObject.C}</button>
      </div>
      {flippedState === true ? (console.log('Yo, I am flipped!')) : (console.log("I am not flipped"))}
    </div>
  );
}
