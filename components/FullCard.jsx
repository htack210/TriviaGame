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
      <div
        className="responseBtn-nav"
        disabled={flippedState}
        onClick={() => handleFlipped()}
      >
        <button className="responseBtn" disabled={flippedState}>
          A. {questionObject.A}
        </button>
        <button className="responseBtn" disabled={flippedState}>
          B. {questionObject.B}
        </button>
        <button className="responseBtn" disabled={flippedState}>
          C. {questionObject.C}
        </button>
      </div>
    </div>
  );
}
