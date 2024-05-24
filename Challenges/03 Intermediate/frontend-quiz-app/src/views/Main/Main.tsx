import { useQuizContext } from '../../contexts/QuizContext';
import StartScreen from '../../components/StartScreen/StartScreen';
import styles from './Main.module.css';

function Main() {
  const { state } = useQuizContext();
  const { status } = state;
  return <main className={styles.container}>{(status === 'loading' || status === 'ready') && <StartScreen />}</main>;
}

export default Main;
