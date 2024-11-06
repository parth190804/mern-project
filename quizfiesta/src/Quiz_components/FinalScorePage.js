

// import React from 'react';
// import TriviaSelectForm from './TriviaSelectForm';
// import './quiz.css';
// import Navbar from '../components_home/navbar';
// import axios from 'axios';



// const FinalScorePage = ({ score, onRestartQuiz, onReselection }) => {
//   const handleRestartQuiz = () => {
//     onRestartQuiz();
//   };

//   const handleReselection =() =>{
//     onReselection();
//   }

//   const saveScoreToDatabase = () => {
//     axios.post('http://localhost:5000/api/scores', { score })
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.error('Error saving the score: ', error);
//       });
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className='finalScore'>
//       <div className='finalScoreContent'>
//         <h2>Final Score</h2>
//         <p>Your final score: {score} out of 10</p>
//         <button onClick={handleRestartQuiz}>Start Over</button>
//         <button onClick={handleReselection}>Select New Category</button>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default FinalScorePage;

import React, { useEffect } from 'react';
import TriviaSelectForm from './TriviaSelectForm';
import './quiz.css';
import Navbar from '../components_home/navbar';
import axios from 'axios';
import BASE_URL from '../config';

const username = sessionStorage.getItem("lusername");

const FinalScorePage = ({ score, onRestartQuiz, onReselection, category }) => {
  const handleRestartQuiz = () => {
    saveScoreToDatabase()
    onRestartQuiz();
  };

  const handleReselection = () => {
    saveScoreToDatabase();
    onReselection();
  };

  const saveScoreToDatabase = () => {
    axios.post(`${BASE_URL}/api/test_score/FinalScorePage`, {score ,category, username})
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error saving the score: ', error);
      });
  };

  // useEffect(() => {
  //   // Call saveScoreToDatabase when the component is mounted
  //   saveScoreToDatabase();
  // }, []); // The empty dependency array ensures it runs only once when mounted

  return (
    <div>
      <Navbar />
      <div className='finalScore'>
        <div className='finalScoreContent'>
          <h2>Final Score</h2>
          <p>Your final score: {score} out of 10</p>
          <button onClick={handleRestartQuiz}>Start Over</button>
          <button onClick={handleReselection}>Select New Category</button>
        </div>
      </div>
    </div>
  );
};

export default FinalScorePage;
