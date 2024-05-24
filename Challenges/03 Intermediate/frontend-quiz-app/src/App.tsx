import styles from './App.module.css';
import Header from './components/Header/Header';
import StartScreen from './components/StartScreen/StartScreen';
import WrapperContainer from './components/WrapperContainer/WrapperContainer';

function App() {
  return (
    <div className={`${styles.app} ${styles.light}`}>
      <WrapperContainer>
        <Header />
        <StartScreen />
      </WrapperContainer>
    </div>
  );
}

export default App;
