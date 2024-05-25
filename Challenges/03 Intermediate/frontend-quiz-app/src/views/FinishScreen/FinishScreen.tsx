import Button from '../../components/Button/Button';
import HeadingH1 from '../../components/HeadingH1/HeadingH1';
import IconTitle from '../../components/IconTitle/IconTitle';
import SectionContainer from '../../components/SectionContainer/SectionContainer';
import { IconCategoryBGC } from '../../configs/config';
import { useQuizContext } from '../../contexts/QuizContext/QuizContext';
import { useThemeContext } from '../../contexts/ThemeContext/ThemeContext';
import styles from './FinishScreen.module.css';

function FinishScreen() {
  const { theme } = useThemeContext();
  const { state, dispatch } = useQuizContext();
  const { category } = state;

  const numQuestions = state.category?.questions.length;

  function handleRestartQuiz() {
    dispatch({ type: 'restartQuiz' });
  }

  return (
    <>
      <header>
        <HeadingH1 preChildren="Quiz completed">You scored...</HeadingH1>
      </header>
      <SectionContainer>
        <div className={`${styles.scoreContainer} ${styles[theme]}`}>
          <IconTitle iconSrc={category?.icon} iconBgc={IconCategoryBGC[category?.title as keyof typeof IconCategoryBGC]}>
            {category?.title}
          </IconTitle>
          <p className={styles.score}>{state.correctAnswers}</p>
          <p className={styles.extraInfo}>{`out of ${numQuestions}`}</p>
        </div>
        <Button onClick={handleRestartQuiz}>Play again</Button>
      </SectionContainer>
    </>
  );
}

export default FinishScreen;
