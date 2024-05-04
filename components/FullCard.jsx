import { useState } from "react";
export function FullCard({
  questionObject,
  handleNextQuestion,
  handleFlipped,
  flippedState,
  handleResponse,
  currentScore,
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
        <button
          className="responseBtn"
          onClick={() => handleResponse(questionObject.A, questionObject.ans)}
          disabled={flippedState}
        >
          A. {questionObject.A}
        </button>
        <button
          className="responseBtn"
          onClick={() => handleResponse(questionObject.B, questionObject.ans)}
          disabled={flippedState}
        >
          B. {questionObject.B}
        </button>
        <button
          className="responseBtn"
          onClick={() => handleResponse(questionObject.C, questionObject.ans)}
          disabled={flippedState}
        >
          C. {questionObject.C}
        </button>
      </div>

      {/* <div className="footer-nav">
        <h1>Current Score: {currentScore} out of 20</h1>
      </div> */}
    </div>
  );
}
