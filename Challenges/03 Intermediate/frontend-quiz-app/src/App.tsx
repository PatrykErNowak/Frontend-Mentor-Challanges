import styles from './App.module.css';
import Header from './components/Header/Header';
import WrapperContainer from './components/WrapperContainer/WrapperContainer';
import { QuizProvider } from './contexts/QuizContext';
import Main from './views/Main/Main';

function App() {
  return (
    <QuizProvider>
      <div className={`${styles.app} ${styles.light}`}>
        <WrapperContainer>
          <Header />
          <Main />
        </WrapperContainer>
      </div>
    </QuizProvider>
  );
}

export default App;
