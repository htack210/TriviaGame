// import React, { useState, useEffect } from "react";

// export function RandomNumbers(arraySize) {
//   const [numbers, setNumbers] = useState([]);

//   const generateRandomNumbers = () => {
//     const newNumbers = [];
//     for (let i = 0; i < 20; i++) {
//       // Generate a random number between 0 and arraySize
//       const randomNumber = Math.floor(Math.random() * arraySize);
//       newNumbers.push(randomNumber);
//     }
//     setNumbers(newNumbers);
//   };

//   useEffect(() => {
//     generateRandomNumbers(); // Call generateRandomNumbers when component mounts
//   }, []); // Empty dependency array ensures this effect runs only once

//   return numbers; // Return the generated numbers array
// }

// export default RandomNumbers;

import React, { useState, useEffect } from "react";

function RandomNumbers({ length, onNumbersGenerated }) {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const generateRandomNumbers = () => {
      const newNumbers = [];
      for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * 60);
        newNumbers.push(randomNumber);
      }
      setNumbers(newNumbers);
      onNumbersGenerated(newNumbers);
    };

    generateRandomNumbers();
  }, [length, onNumbersGenerated]);

  return null; // RandomNumbers component doesn't render anything
}

export default RandomNumbers;
