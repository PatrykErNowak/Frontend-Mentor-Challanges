/* eslint-disable no-case-declarations */
import { createContext, useContext, useEffect, useReducer } from 'react';
import { Action, QuizContext, State } from './types';

const initialState: State = {
  quizzes: [],
  category: null,
  status: 'loading',
  currentQuestion: 0,
  userAnswer: null,
  correctAnswers: 0,
};

function QuizReduce(state: State, action: Action): State {
  switch (action.type) {
    case 'fetchQuizzes':
      const quizzes = Array.isArray(action.payload) ? action.payload : [];
      return { ...state, quizzes, status: 'ready' };
    case 'setCategory':
      const [category] = state.quizzes.filter((quiz) => quiz.title === action.payload);
      return { ...state, status: 'active', category };
    case 'checkAnswer':
      if (typeof action.payload === 'string') {
        const points = action.payload === state.category?.questions[state.currentQuestion].answer ? state.correctAnswers + 1 : state.correctAnswers;
        return { ...state, userAnswer: action.payload, correctAnswers: points };
      }
      return { ...state };
    case 'nextQuestion':
      return { ...state, currentQuestion: state.currentQuestion + 1, userAnswer: null };
    case 'finishQuiz':
      return { ...state, userAnswer: null, status: 'finished' };
    case 'restartQuiz':
      return { ...initialState, quizzes: state.quizzes, status: 'ready' };
    default:
      throw new Error('Unknown Action type');
  }
}

const QuizContex = createContext<QuizContext | null>(null);

function QuizProvider({ children }: { children: React.ReactElement }) {
  const [state, dispatch] = useReducer(QuizReduce, initialState);

  useEffect(() => {
    async function fetchQuizzes() {
      try {
        const res = await fetch('./data/data.json');
        const { quizzes } = await res.json();

        dispatch({ type: 'fetchQuizzes', payload: quizzes });
      } catch (error) {
        throw new Error('Failed fetched quiz data');
      }
    }
    fetchQuizzes();
  }, []);

  return <QuizContex.Provider value={{ state, dispatch }}>{children}</QuizContex.Provider>;
}

function useQuizContext() {
  const context = useContext(QuizContex);
  if (!context) throw new Error('useQuizContext muse be used with QuizProvider');
  return context;
}

export { QuizProvider, useQuizContext };
