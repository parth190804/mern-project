import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components_home/navbar';
import Footer from '../components_home/footer';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../config';

function Personal_Quiz() {
  const navigate = useNavigate();
  const username = sessionStorage.getItem('lusername');
  const [quizCode, setQuizCode] = useState('');
  const [quizCodeExists, setQuizCodeExists] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    document.title = 'Personal Quiz';

    if (!username) {
      navigate('/login');
    }
  }, [navigate, username]);

  const handleQuizCodeSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`${BASE_URL}/api/quiz_search/personal_quiz`, {
        params: { code: quizCode }
      });

      if (response.data.message === 'Code Found') {
        setQuizCodeExists(true);

        // Fetch questions and set them in state
        try {
          const questionsResponse = await axios.get(`${BASE_URL}/api/quiz_questions/personal_quiz`, {
            params: { code: quizCode }
          });
          setQuestions(questionsResponse.data);
          console.log('Questions are generated');
        } catch (error) {
          console.error('Error fetching questions:', error);
          window.alert('No Quiz exists with that code');
          const reloadTimer = setTimeout(() => {
          window.location.reload();
        }, 1000);
          // Handle the error
        }
      }
      else {
        setQuizCodeExists(false);
      }
    } catch (error) {
      console.error('Error checking quiz code:', error);
      alert('An error occurred while checking the quiz code. Please try again.');
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleQuestionSubmit = () => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // Reset selected option
    } else {
      setQuizCompleted(true);
    }
  };

  const sendQuizCompletionData = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/api/test_score/personal_quiz`, {
        score,
        category: quizCode, // Change this to the actual quiz code value 
        username,     
      });
      console.log('Quiz completion data saved:', response.data);
    } catch (error) {
      console.error('Error saving quiz completion data:', error);
    }
  };

  // Use a useEffect hook to call sendQuizCompletionData when quizCompleted becomes true
  useEffect(() => {
    if (quizCompleted) {
      sendQuizCompletionData();
    }
  }, [quizCompleted]);



  // Use a useEffect hook to call sendQuizCompletionData when quizCompleted becomes true
  useEffect(() => {
    if (quizCompleted) {
      sendQuizCompletionData();
      // Automatically reload the page after 5 seconds
      const reloadTimer = setTimeout(() => {
        window.location.reload();
      }, 5000);

      return () => {
        // Clear the timer if the component unmounts before 5 seconds
        clearTimeout(reloadTimer);
      };
    }
  }, [quizCompleted]);

  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-md-6">
          <div style={{ color: 'white', margin: '15% 20%' }}>
            <h1>Go back to Quiz Section</h1>
            <button
              style={{ backgroundColor: 'coral', color: 'black' }}
              onClick={() => navigate('/attempt_quiz')}
            >
              Go Back to Quiz Section
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div style={{ width: '100%', color: 'white', margin: '5% 5%' }}>
            <h1>Attempt Personal Quiz</h1>
            <form onSubmit={handleQuizCodeSubmit}>
              <label style={{ fontSize: '22px' }}>Enter quiz code</label>
              <br /> <br />
              <input
                id="code"
                style={{ width: '60%' }}
                type="text"
                placeholder="Enter your code"
                name="code"
                value={quizCode}
                onChange={(e) => setQuizCode(e.target.value)}
              />
              <br />
              <button style={{ backgroundColor: 'coral', color: 'black',marginTop:'2%' }} type="submit">
                Attempt Quiz
              </button>
            </form>
            {!quizCodeExists && (
              <p style={{ color: 'red' }}>Quiz code does not exist. Please try again.</p>
            )}
          </div>
        </div>
      </div>
      {quizCodeExists && !quizCompleted && questions.length > 0 && currentQuestionIndex < questions.length && (
        <div className="row">
          <div className="quiz" style={{ height: 'fit-content' }}>
            <div key={questions[currentQuestionIndex]._id} className="question" style={{ width: '100%' }}>
              <h2>Question {currentQuestionIndex + 1}</h2>
              <p>{questions[currentQuestionIndex].text}</p>
              <ul>
                {questions[currentQuestionIndex].options.map((option, optionIndex) => (
                  <li key={optionIndex}>
                    <label>
                    <div className='row'>
                     <div className='col-sm-2'>
                      <input 
                        type="radio"
                        name="options"
                        value={option}
                        checked={option === selectedOption}
                        onChange={() => handleOptionSelect(option)}
                      />
                      </div>
                      <div className='col-md-10'>
                      {option}
                      </div>
                     </div>
                    </label>
                  </li>
                ))}
              </ul>
              <button className="button" onClick={handleQuestionSubmit}>
                Submit
              </button>
              {selectedOption && (
                <p>{selectedOption === questions[currentQuestionIndex].correctAnswer ? 'Your answer is correct' : 'Your answer is incorrect'}</p>
              )}
            </div>
          </div>
        </div>
      )}
      {quizCompleted && (
        <div>
          <h2 style={{textAlign:'center',color:'white'}}>Quiz Completed</h2>
          <p>Your Score: {score} / {questions.length}</p>
        </div>
      )}
      <div className="rules" style={{marginTop:'5%'}}>
        <h1>Rules</h1>
        <div className="rulesContent">
          <ol>
            <li>You cannot change your selected option once selected</li>
            <li>You can skip a question without answering, but it will affect your score</li>
            <li>Each question has 1 point; correct answers earn points.</li>
            <li>You cannot go back to any question</li>
            <li>You can re-attempt the quiz once completed</li>
          </ol>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Personal_Quiz;
