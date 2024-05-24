import styles from './App.module.css';
import Header from './components/Header/Header';
import WrapperContainer from './components/WrapperContainer/WrapperContainer';

function App() {
  return (
    <div className={`${styles.app} ${styles.light}`}>
      <WrapperContainer>
        <Header />
      </WrapperContainer>
    </div>
  );
}

export default App;
