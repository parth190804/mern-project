
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import categoriesData from './categories.json';
import FinalScorePage from './FinalScorePage';
import Navbar from '../components_home/navbar';
import './quiz.css';
import Footer from '../components_home/footer';
import { useNavigate } from "react-router-dom";

const decodeHtmlEntities = (html) => {
  var txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

const TriviaSelectForm = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Set the title for the Home page
    document.title = 'Quiz Section:Attempt Quizzes!! ';
  }, []);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswerCorrect(null);
    setHasAnswered(false);
    setScore(0);
    fetchQuestions();
  };

  const categoryReselect = () => {
    setSelectedCategory('');
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswerCorrect(null);
    setHasAnswered(false);
    setScore(0);
  };


  const fetchQuestions = async () => {
    try {
      const response = await axios.get(`https://opentdb.com/api.php?amount=11&category=${selectedCategory}`);
      const updatedQuestions = response.data.results.map((question) => ({
        ...question,
        options: [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5),
      }));
      setQuestions(updatedQuestions);
      setHasAnswered(false); // Reset answered state for new questions
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    console.log(category);
    setSelectedCategory(category);
    setScore(0); // Reset the score for a new quiz
    fetchQuestions();
  };

  const handleAnswerSelect = (answer) => {
    if (!hasAnswered) {
      const isCorrect = answer === questions[currentQuestionIndex].correct_answer;
      setIsAnswerCorrect(isCorrect);
      setHasAnswered(true);
      if (isCorrect) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    // Move to the next question
    if (currentQuestionIndex < 10) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null); // Reset selected answer for the next question
      setIsAnswerCorrect(null); // Reset answer correctness for the next question
      setHasAnswered(false); // Allow the user to select an answer for the next question
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  if (!currentQuestion) {
    return (
      <>
        <div>
          <Navbar />
          <div className="container">
            <div className="row">
            <div className="col-md-6">
                <div className="pageContainer">
                  <div className="categorySelect">
                    <label htmlFor="categorySelect">Select a category:</label>
                    <select id="categorySelect" onChange={handleCategoryChange} value={selectedCategory}>
                      <option value="">ID: Category</option>
                      {categoriesData.trivia_categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.id}: {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="content">
                  <h1>Attempt Personal Quiz</h1>
                  <button onClick={() => navigate('/personal_quiz')}>Go Ahead to Personal Quiz</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rules">
          <h1>Rules</h1>
          <div className='rulesContent'>
            <ol>
              <li>You cannot change your selected option once selected</li>
              <li>You can skip a question without answering but it will affect your score</li>
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

  const decodedQuestion = decodeHtmlEntities(currentQuestion.question);
  const decodedOptions = currentQuestion.options.map((option) => decodeHtmlEntities(option));
  const decodedCorrectAnswer = decodeHtmlEntities(currentQuestion.correct_answer);

  if (currentQuestionIndex === 10) {
    return <FinalScorePage score={score} category = {selectedCategory} onRestartQuiz={handleRestartQuiz} onReselection = {categoryReselect}/>;
  }

  return (
    <div>
    <Navbar />
    <div className='quiz'>
    <div className='question'>
      <h2>Question {currentQuestionIndex + 1}</h2>
      <div>{decodedQuestion}</div>
      <div>
        <p>Your current score: {score} out of 10</p>
      </div>
      {isAnswerCorrect !== null && (
        <div>
          {isAnswerCorrect ? <p>Your answer is correct!</p> : <p>Your answer is incorrect.</p>}
          <p>Correct answer: {decodedCorrectAnswer}</p>
        </div>
      )}
      <ul>
        {decodedOptions.map((option, index) => (
          <li key={index} style={{listStyleType:'none'}}>
            <div className='row'>
              <div className='col-sm-2'>
              <input style={{width:'40%'}}
                type="radio"
                value={option}
                checked={selectedAnswer === option}
                onChange={() => handleAnswerSelect(option)}
                disabled={hasAnswered}
              /></div>
              <div className='col-sm-10'>{option}</div>
            </div>
          </li>
        ))}
        {/* <li key="correct">
          <label>
            <input
              type="radio"
              value={currentQuestion.correct_answer}
              checked={selectedAnswer === currentQuestion.correct_answer}
              onChange={() => handleAnswerSelect(currentQuestion.correct_answer)}
              disabled={hasAnswered}
            />
            {decodedCorrectAnswer}
          </label>
        </li> */}
      </ul>
      <button onClick={handleNextQuestion} disabled={!hasAnswered}>
        Next Question
      </button>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default TriviaSelectForm;
