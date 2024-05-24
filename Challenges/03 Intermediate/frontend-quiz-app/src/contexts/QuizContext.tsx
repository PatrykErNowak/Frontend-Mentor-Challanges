/* eslint-disable no-case-declarations */
import { createContext, useContext, useEffect, useReducer } from 'react';
import { Quiz } from '../types/types';

interface State {
  quizzes: Quiz[];
  category: Quiz | null;
  status: 'loading' | 'ready' | 'active' | 'finished';
  currentQuestion: number;
}

type Action = {
  type: string;
  payload: string | [] | object;
};

type QuizContext = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const initialState: State = {
  quizzes: [],
  category: null,
  status: 'loading',
  currentQuestion: 0,
};

function QuizReduce(state: State, action: Action): State {
  switch (action.type) {
    case 'setCategory':
      console.log('setCategory');
      return { ...state };
    case 'fetchQuizzes':
      const quizzes = Array.isArray(action.payload) ? action.payload : [];
      return { ...state, quizzes, status: 'ready' };
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
        const res = await fetch('/data/data.json');
        const { quizzes } = await res.json();

        dispatch({ type: 'fetchQuizzes', payload: quizzes });
      } catch (error) {
        throw new Error('Failed fetched quiz data');
      }
    }
    fetchQuizzes();
  }, []);

  console.log(state);
  return <QuizContex.Provider value={{ state, dispatch }}>{children}</QuizContex.Provider>;
}

function useQuizContext() {
  const context = useContext(QuizContex);
  if (!context) throw new Error('useQuizContext muse be used with QuizProvider');
  return context;
}

export { QuizProvider, useQuizContext };
