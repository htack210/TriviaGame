import React, { useState, useEffect } from "react";

export function RandomNumbers() {
  const [numbers, setNumbers] = useState([]);

  const generateRandomNumbers = () => {
    const newNumbers = [];
    for (let i = 0; i < 20; i++) {
      // Generate a random number between 0 and 59
      const randomNumber = Math.floor(Math.random() * 60);
      newNumbers.push(randomNumber);
    }
    setNumbers(newNumbers);
  };

  useEffect(() => {
    generateRandomNumbers(); // Call generateRandomNumbers when component mounts
  }, []); // Empty dependency array ensures this effect runs only once

  return numbers; // Return the generated numbers array
}

export default RandomNumbers;
