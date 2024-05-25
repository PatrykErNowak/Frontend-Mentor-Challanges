import Button from '../../components/Button/Button';
import HeadingH1 from '../../components/HeadingH1/HeadingH1';
import IconTitle from '../../components/IconTitle/IconTitle';
import { IconCategoryBGC } from '../../configs/config';
import { useQuizContext } from '../../contexts/QuizContext';
import styles from './FinishScreen.module.css';

function FinishScreen() {
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
      <section className={styles.section}>
        <div className={styles.scoreContainer}>
          <IconTitle iconSrc={category?.icon} iconBgc={IconCategoryBGC[category?.title as keyof typeof IconCategoryBGC]}>
            {category?.title}
          </IconTitle>
          <p className={styles.score}>{state.correctAnswers}</p>
          <p className={styles.extraInfo}>{`out of ${numQuestions}`}</p>
        </div>
        <Button onClick={handleRestartQuiz}>Play again</Button>
      </section>
    </>
  );
}

export default FinishScreen;
