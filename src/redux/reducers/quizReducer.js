import {
  FETCH_QUIZ,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_ERROR,
  NEXT_QUESTION,
  RESET_QUIZ,
} from '../actions/actionTypes';

const initialState = {
  questions: [],
  answers: [],
  score: 0,
  currIndex: 0,
  currQuestion: '',
  currCategory: '',
  isFetching: false,
  error: null,
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUIZ: {
      return { ...state, isFetching: true };
    }
    case FETCH_QUIZ_SUCCESS: {
      const { questions, currQuestion, currCategory } = action.payload;
      return {
        ...state,
        questions,
        currQuestion,
        currCategory,
        isFetching: false,
      };
    }
    case FETCH_QUIZ_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    }
    case NEXT_QUESTION: {
      const {
        score,
        currIndex,
        currQuestion,
        currCategory,
        currAnswer,
      } = action.payload;
      const answers = [...state.answers, currAnswer];
      return {
        ...state,
        answers,
        score,
        currIndex,
        currQuestion,
        currCategory,
      };
    }
    case RESET_QUIZ: {
      return initialState;
    }
    default:
      return state;
  }
};

export default quizReducer;
