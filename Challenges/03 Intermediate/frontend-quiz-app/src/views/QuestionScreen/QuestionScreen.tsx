import SmallText from '../../components/SmallText/SmallText';
import { useQuizContext } from '../../contexts/QuizContext';
import styles from './QuestionScreen.module.css';
import AnswerList from '../../components/AnswersList/AnswersList';
import AnswerListItem from '../../components/AnswerListItem/AnswerListItem';
import { QuestionOptions } from '../../configs/config';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import { BtnState } from '../../components/AnswerListItem/types';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

function QuestionScreen() {
  const [error, setError] = useState(false);
  const [pickedOption, setPickedOption] = useState<string>('');
  const { state, dispatch } = useQuizContext();
  const { category, currentQuestion } = state;

  const numQuestions = category?.questions.length;
  const question = category?.questions[currentQuestion];
  const isAnswer = state.userAnswer !== null;
  const isLastQuestion = state.userAnswer && state.currentQuestion + 1 === numQuestions;

  function handleQuestion() {
    setError(false);
    if (!pickedOption) setError(true);
    if (pickedOption && !state.userAnswer) dispatch({ type: 'checkAnswer', payload: pickedOption });
    if (state.userAnswer) {
      setPickedOption('');
      dispatch({ type: 'nextQuestion' });
    }
    if (isLastQuestion) dispatch({ type: 'finishQuiz' });
  }

  return (
    <>
      <header className={styles.header}>
        <SmallText>{`Question ${currentQuestion + 1} of ${numQuestions}`}</SmallText>
        <h1>{question?.question}</h1>
        <div className={styles.progress}>
          <progress value={currentQuestion + 1} max={numQuestions} />
        </div>
      </header>
      <section className={styles.section}>
        <AnswerList>
          {question?.options.map((option, i) => {
            let buttonState: BtnState = 'idle';
            if (option === pickedOption) buttonState = 'active';
            if (state.userAnswer) {
              if (option === pickedOption && state.userAnswer === question.answer) buttonState = 'correctAnswer';
              if (option === pickedOption && state.userAnswer !== question.answer) buttonState = 'wrongAnswer';
              if (option !== pickedOption && option === question.answer) buttonState = 'correctOption';
            }
            return (
              <AnswerListItem
                btnState={buttonState}
                onAnswer={(answer) => setPickedOption(answer)}
                iconText={QuestionOptions.get(i)}
                key={option}
                disabled={isAnswer}>
                {option}
              </AnswerListItem>
            );
          })}
        </AnswerList>
        <Button onClick={handleQuestion}>{!state.userAnswer ? 'Send Answer' : isLastQuestion ? 'Finish Quiz' : 'Next Question'}</Button>
        {error && <ErrorMessage>Please select an answer</ErrorMessage>}
      </section>
    </>
  );
}

export default QuestionScreen;
