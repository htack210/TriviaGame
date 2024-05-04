import { useState, useEffect } from "react";
import "./App.css";
import nflTriviaData from "../components/NflTrivia";
import ShuffleArray from "../components/ShuffleArray.jsx";
import { FullCard } from "../components/FullCard.jsx";
const categories = ["All", "Teams", "Players & Coaches"];
const questions = nflTriviaData;

function App() {
  const [flipped, setFlipped] = useState(false); //Not flipped at first
  const [filteredBtns, setFilteredBtns] = useState(questions);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [shuffledArray, setShuffledArray] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Initialize with default category "All" when component mounts
    handleClick("All");
  }, []);

  // console.log(shuffledArray) // Uncomment for debugging

  const handleClick = (category) => {
    let newFilteredBtns = [];
    if (category === "All") {
      newFilteredBtns = questions;
    } else {
      newFilteredBtns = questions.filter((btn) => btn.category === category);
    }
    setFilteredBtns(newFilteredBtns);
    setQuestionIdx(0); // Reset question index when category changes
    setScore(0);
    console.log("Score reset to 0!"); // + score);
    setFlipped(false); // Reset flipped state when category changes

    // Shuffle the array only when the category changes
    setShuffledArray(ShuffleArray({ length: newFilteredBtns.length }));
  };

  function handleFlipped() {
    setFlipped(!flipped);
    // console.log(flipped);
  }

  function handleResponse(response, ans) {
    if (ans.includes(response)) {
      setScore((prevScore) => prevScore + 1);
    } else {
      console.log("Incorrect!");
    }
  }

  function nextIndex() {
    if (questionIdx < 20) {
      // Hard-wired to 20 on purpose.
      console.log("question index = " + questionIdx);
      setQuestionIdx(questionIdx + 1);
    } else {
      console.log("Thanks for playing!");
      // setQuestionIdx(0);
      // This should kick off final score calculation.
    }

    setFlipped(false);
  }

  const currentQuestion =
    shuffledArray.length > 0 ? filteredBtns[shuffledArray[questionIdx]] : null;

  useEffect(() => {
    console.log("Correct! Score updated: " + score);
  }, [score]);

  return (
    <>
      <div className="main-nav">
        <h1>NFL Trivia</h1>
        <p>
          Think you know the NFL? Let's find out! <br />
          How many questions out of 20 can you get right?
        </p>
      </div>
      <div className="category-nav">
        {categories.map((cat) => {
          return (
            <button
              className="categoryButton"
              key={cat}
              onClick={() => handleClick(cat)}
            >
              {cat}
            </button>
          );
        })}
      </div>
      <div className="sub-category-nav">
        (Changing categories mid-quiz resets your score to 0!)
      </div>

      <div className="content">
        <div className="cards-container">
          <FullCard //Child to app.jsx
            questionObject={currentQuestion || filteredBtns[questionIdx]} //Sends filteredBtns object to child.
            handleNextQuestion={nextIndex} // Increments index number to move app to next question.
            handleFlipped={handleFlipped} // Card flip function.
            flippedState={flipped} // Shows card flipped state.
            handleResponse={handleResponse}
            currentScore={score}
          />
        </div>
      </div>
      <div className="footer-nav">
        <h1>Current Score: {score} out of 20</h1>
      </div>
    </>
  );
}

export default App;
