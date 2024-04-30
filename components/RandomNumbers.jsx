import React from "react";

const RandomNumbers = ({ arraySize }) => {
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (arraySize - 1));
  };

  return generateRandomNumber;
};

export default RandomNumbers;
