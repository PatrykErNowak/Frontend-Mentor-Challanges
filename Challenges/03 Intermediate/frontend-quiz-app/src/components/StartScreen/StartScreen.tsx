import AnswersList from '../AnswersList/AnswersList';
import AnswerListItem from '../AnswerListItem/AnswerListItem';
import SmallText from '../SmallText/SmallText';
import styles from './StartScreen.module.css';
import { useQuizContext } from '../../contexts/QuizContext';
import Spinner from '../Spinner/Spinner';

function StartScreen() {
  const { state } = useQuizContext();
  const { quizzes, status } = state;
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Welcome to the <span>Frontend Quiz!</span>
        </h1>
        <SmallText>Pick a subject to get started.</SmallText>
      </header>
      {status === 'loading' && <Spinner />}
      {status === 'ready' && (
        <AnswersList>
          {quizzes.map((quiz) => (
            <AnswerListItem iconSrc={quiz.icon} key={quiz.title}>
              {quiz.title}
            </AnswerListItem>
          ))}
        </AnswersList>
      )}
    </>
  );
}

export default StartScreen;
