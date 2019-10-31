import {
  FETCH_QUESTION,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR,
  NEXT_QUESTION,
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
    case FETCH_QUESTION: {
      return { ...state, isFetching: true };
    }
    case FETCH_QUESTION_SUCCESS: {
      const { questions, currQuestion, currCategory } = action.payload;
      return {
        ...state,
        questions,
        currQuestion,
        currCategory,
        isFetching: false,
      };
    }
    case FETCH_QUESTION_ERROR: {
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
        score,
        answers,
        currIndex,
        currQuestion,
        currCategory,
      };
    }
    default:
      return state;
  }
};

export default quizReducer;
