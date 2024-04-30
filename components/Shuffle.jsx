// ShuffleArray.jsx

import React from "react";

function shuffleArray(length) {
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

  // You can return JSX here to render the shuffledArray if needed

  return null;
}

export default ShuffleArray;
