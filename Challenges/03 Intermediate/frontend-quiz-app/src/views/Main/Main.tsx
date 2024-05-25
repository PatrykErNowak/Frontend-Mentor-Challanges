import { useQuizContext } from '../../contexts/QuizContext';
import StartScreen from '../../components/StartScreen/StartScreen';
import styles from './Main.module.css';
import QuestionScreen from '../QuestionScreen/QuestionScreen';
import FinishScreen from '../FinishScreen/FinishScreen';

function Main() {
  const { state } = useQuizContext();
  const { status } = state;
  return (
    <main className={styles.container}>
      {(status === 'loading' || status === 'ready') && <StartScreen />}
      {status === 'active' && <QuestionScreen />}
      {status === 'finished' && <FinishScreen />}
    </main>
  );
}

export default Main;
