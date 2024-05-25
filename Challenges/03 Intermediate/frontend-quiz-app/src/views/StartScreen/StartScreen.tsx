import AnswersList from '../../components/AnswersList/AnswersList';
import AnswerListItem from '../../components/AnswerListItem/AnswerListItem';
import SmallText from '../../components/SmallText/SmallText';
import styles from './StartScreen.module.css';
import { useQuizContext } from '../../contexts/QuizContext/QuizContext';
import Spinner from '../../components/Spinner/Spinner';
import { IconCategoryBGC } from '../../configs/config';
import HeadingH1 from '../../components/HeadingH1/HeadingH1';
import SectionContainer from '../../components/SectionContainer/SectionContainer';

function StartScreen() {
  const { state, dispatch } = useQuizContext();
  const { quizzes, status } = state;

  function handleCategory(answer: string) {
    dispatch({ type: 'setCategory', payload: answer });
  }

  return (
    <>
      <header className={styles.header}>
        <HeadingH1 preChildren="Welcome to the">Frontend Quiz!</HeadingH1>
        <SmallText>Pick a subject to get started.</SmallText>
      </header>
      <SectionContainer>
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
      </SectionContainer>
    </>
  );
}

export default StartScreen;
