import axios from 'axios';

import {
  FETCH_QUESTION,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR,
  NEXT_QUESTION,
} from './actionTypes';

export const fetchQuiz = navigation => async dispatch => {
  dispatch({ type: FETCH_QUESTION });

  await axios
    .get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean', {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    })
    .then(response => {
      const questions = response.data.results;
      const { question, category } = questions[0];

      dispatch({
        type: FETCH_QUESTION_SUCCESS,
        payload: {
          questions,
          currQuestion: question,
          currCategory: category,
        },
      });
      navigation.navigate('Quiz');
    })
    .catch(error => {
      dispatch({
        type: FETCH_QUESTION_ERROR,
        payload: error,
      });
    });
};

export const getNextQuestion = (currIndex, answer, navigation) => async (
  dispatch,
  getState
) => {
  console.log('next');
  const { questions, score } = getState().quizReducer;

  const currQuestion = questions[currIndex];
  const { correct_answer: correctAnswer, question } = currQuestion;
  let currAnswer = { question, correctAnswer, answer };

  let currScore = answer === correctAnswer ? score + 1 : score;

  const nextIndex = currIndex + 1;
  if (nextIndex < questions.length) {
    const nextQuestion = questions[nextIndex];
    const { question: currQuestion, category: currCategory } = nextQuestion;
    dispatch({
      type: NEXT_QUESTION,
      payload: {
        currIndex: nextIndex,
        currQuestion,
        currCategory,
        currAnswer,
        score: currScore,
      },
    });
  } else {
    dispatch({
      type: NEXT_QUESTION,
      payload: {
        currIndex,
        currAnswer,
        score: currScore,
      },
    });

    navigation.navigate('Result');
  }
};
