import React from "react";

export function shuffleArray(length) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array[i] = i;
  }
  for (let i = length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function ShuffleArray({ length }) {
  const shuffledArray = shuffleArray(length);

  // Return the shuffled array or do something else with it
  return <>{shuffledArray}</>;
}

export default ShuffleArray;
