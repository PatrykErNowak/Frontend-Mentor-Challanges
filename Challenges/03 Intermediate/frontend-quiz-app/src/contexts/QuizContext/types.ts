interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface Quiz {
  title: string;
  icon: string;
  questions: Question[];
}

interface State {
  quizzes: Quiz[];
  category: Quiz | null;
  status: 'loading' | 'ready' | 'active' | 'finished';
  currentQuestion: number;
  userAnswer: string | null;
  correctAnswers: number;
}

type Action = {
  type: string;
  payload?: string | [] | object;
};

type QuizContext = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export type { State, Action, QuizContext, Quiz, Question };
