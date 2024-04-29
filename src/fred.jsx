import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FullCard } from "../components/Tricks.jsx";

const categories = ["Basic", "Intermediate", "Advanced", "All"];
const dogTricks = [
  {
    title: "Sit",
    category: "Basic",
    description: "Dog sits",
  },
  {
    title: "Stay",
    category: "Basic",
    description: "Dog stays till you get it",
  },
  {
    title: "Wait",
    category: "Basic",
    description: "Dog stays till you call it",
  },
  {
    title: "Poker",
    category: "Intermediate",
    description: "Dog plays cards",
  },
  {
    title: "Homework",
    category: "Intermediate",
    description: "Dog does homework",
  },
  {
    title: "Mow",
    category: "Advanced",
    description: "Dog mows lawn",
  },
  {
    title: "Taxes",
    category: "Advanced",
    description: "Dog does taxes",
  },
];

function App() {
  const [filteredTricks, setFilteredtricks] = useState(dogTricks);

  const handleClick = (category) => {
    console.log(category);
    if (category === "All") {
      setFilteredtricks(dogTricks);
    } else {
      const newTricks = dogTricks.filter(
        (trick) => trick.category === category
      );
      setFilteredtricks(newTricks);
    }
  };

  return (
    <>
      <div className="main-nav">
        <h1>Teach Your Dog New Tricks</h1>
        <p>Everything You and Your Dog Need to Know to Impress Your Friends!</p>

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
      </div>
      <div className="content">
        <div className="cards-container">
          {filteredTricks.map((trick) => {
            return (
              <FullCard
                key={trick.title}
                title={trick.title}
                category={trick.category}
                description={trick.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
