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
  
   // Generate shuffled array
   const shuffledArray = ShuffleArray({ length: filteredBtns.length });

  const handleClick = (category) => {
    console.log(category);
    if (category === "All") {
      setFilteredBtns(questions); // These are questions from ALL categories.
    } else {
      const filteredQuestions = questions.filter(
        (btn) => btn.category === category
      );
      setFilteredBtns(filteredQuestions); // These are questions filtered by a single category.
    }
  };

  function handleFlipped() {
    setFlipped(!flipped);
    console.log(flipped);
  }

  function nextIndex() {
    // if (questionIdx < filteredBtns.length - 1) {
    console.log(shuffledArray)
    if (questionIdx < 20) {
      // Hard-wired to 20 on purpose.
      setQuestionIdx(questionIdx + 1);
    } else {
      setQuestionIdx(0);
      // This should kick off final score calculation.
    }

    setFlipped(false);
  }
  return (
    <>
      <div className="main-nav">
        <h1>NFL Trivia</h1>
        <p>Think you know the NFL? Let's find out!</p>
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

      <div className="content">
        <div className="cards-container">
          <FullCard //Child to app.jsx
            questionObject={filteredBtns[questionIdx]} //Sends filteredBtns object to child.
            handleNextQuestion={nextIndex} // Increments index number to move app to next question.
            handleFlipped={handleFlipped} // Card flip function.
            flippedState={flipped} // Shows card flipped state.
          />
        </div>
      </div>
    </>
  );
}

export default App;
