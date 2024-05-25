import AnswersList from '../AnswersList/AnswersList';
import AnswerListItem from '../AnswerListItem/AnswerListItem';
import SmallText from '../SmallText/SmallText';
import styles from './StartScreen.module.css';
import { useQuizContext } from '../../contexts/QuizContext';
import Spinner from '../Spinner/Spinner';
import { IconCategoryBGC } from '../../configs/config';

function StartScreen() {
  const { state, dispatch } = useQuizContext();
  const { quizzes, status } = state;

  function handleCategory(answer: string) {
    dispatch({ type: 'setCategory', payload: answer });
  }

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
            <AnswerListItem
              iconSrc={quiz.icon}
              iconBgc={IconCategoryBGC[quiz.title as keyof typeof IconCategoryBGC]}
              key={quiz.title}
              onAnswer={handleCategory}>
              {quiz.title}
            </AnswerListItem>
          ))}
        </AnswersList>
      )}
    </>
  );
}

export default StartScreen;
