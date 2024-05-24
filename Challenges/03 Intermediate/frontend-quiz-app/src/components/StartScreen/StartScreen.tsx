import CategoryList from '../CategoryList/CategoryList';
import Main from '../Main/Main';
import SmallText from '../SmallText/SmallText';
import styles from './StartScreen.module.css';

function StartScreen() {
  return (
    <Main>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Welcome to the <span>Frontend Quiz!</span>
        </h1>
        <SmallText>Pick a subject to get started.</SmallText>
      </header>
      <CategoryList />
    </Main>
  );
}

export default StartScreen;
