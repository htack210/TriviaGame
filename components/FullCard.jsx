import { useState } from "react";
export function FullCard({
  questionObject,
  handleNextQuestion,
  handleFlipped,
  flippedState,
  handleResponse,
  isCorrect,
  gameOver,
}) {
  return (
    <div className="card-all" disabled={gameOver}>
      {/* Card Front */}
      {!flippedState && (
        <>
          <div className="card">
            {console.log({ gameOver })}
            <div className="top">
              <p>
                <b>{questionObject.category}</b>
                <br />
                {questionObject.question}
                {/* <br />
                Question ID: {questionObject.id} */}
              </p>
            </div>
          </div>
        </>
      )}

      {/* Card back */}
      {flippedState && (
        <>
          <div className={isCorrect ? "card-back" : "card-back-wrong"}>
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
        <button
          className="responseBtn"
          onClick={() => handleResponse(questionObject.A, questionObject.ans)}
        >
          A. {questionObject.A}
        </button>
        <button
          className="responseBtn"
          onClick={() => handleResponse(questionObject.B, questionObject.ans)}
        >
          B. {questionObject.B}
        </button>
        <button
          className="responseBtn"
          onClick={() => handleResponse(questionObject.C, questionObject.ans)}
        >
          C. {questionObject.C}
        </button>
      </div>
    </div>
  );
}
